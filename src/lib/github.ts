import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const USERNAME = process.env.GITHUB_USERNAME ?? "";

export type RepoSummary = {
  id: number;
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
  updatedAt: string;
};

export type ContributionDay = {
  date: string;
  count: number;
};

export type GitHubProfile = {
  username: string;
  avatarUrl: string;
  bio: string | null;
  followers: number;
  publicRepos: number;
  repos: RepoSummary[];
  totalStars: number;
  contributionDays: ContributionDay[];
  totalContributions: number;
};

type GraphQLContributionDay = {
  date: string;
  contributionCount: number;
};

type GraphQLContributionWeek = {
  contributionDays: GraphQLContributionDay[];
};

type GraphQLContributionResponse = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: GraphQLContributionWeek[];
      };
    };
  };
};

export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  if (!USERNAME) return null;

  try {
    const { data: user } = await octokit.rest.users.getByUsername({
      username: USERNAME,
    });

    const { data: repoData } = await octokit.rest.repos.listForUser({
      username: USERNAME,
      sort: "updated",
      per_page: 100,
    });

    const repos: RepoSummary[] = repoData
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count ?? 0,
        forks: repo.forks_count ?? 0,
        language: repo.language ?? null,
        updatedAt: repo.updated_at ?? new Date().toISOString(),
      }))
      .sort((a, b) => b.stars - a.stars);

    const totalStars = repos.reduce((sum, repo) => sum + repo.stars, 0);

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const graphqlResponse =
      await octokit.graphql<GraphQLContributionResponse>(
        `
          query ($username: String!, $from: DateTime!) {
            user(login: $username) {
              contributionsCollection(from: $from) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `,
        { username: USERNAME, from: oneYearAgo.toISOString() }
      );

    const calendar =
      graphqlResponse.user.contributionsCollection.contributionCalendar;

    const contributionDays: ContributionDay[] = calendar.weeks.flatMap(
      (week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
        }))
    );

    return {
      username: USERNAME,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      followers: user.followers,
      publicRepos: user.public_repos,
      repos: repos.slice(0, 6),
      totalStars,
      contributionDays,
      totalContributions: calendar.totalContributions,
    };
  } catch (err) {
    console.error("GitHub fetch failed:", err);
    return null;
  }
}
