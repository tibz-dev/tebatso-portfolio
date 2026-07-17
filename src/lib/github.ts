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

export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  if (!USERNAME) return null;

  try {
    const { data: user } = await octokit.rest.users.getByUsername({ username: USERNAME });

    const { data: repoData } = await octokit.rest.repos.listForUser({
      username: USERNAME,
      sort: "updated",
      per_page: 100,
    });

    const repos: RepoSummary[] = repoData
      .filter((r) => !r.fork)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        url: r.html_url,
        stars: r.stargazers_count ?? 0,
        forks: r.forks_count ?? 0,
        language: r.language ?? null,
        updatedAt: r.updated_at ?? new Date().toISOString(),
      }))
      .sort((a, b) => b.stars - a.stars);

    const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);

    // Contribution calendar requires GraphQL — not available via REST
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const graphqlResponse: any = await octokit.graphql(
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

    const calendar = graphqlResponse.user.contributionsCollection.contributionCalendar;
    const contributionDays: ContributionDay[] = calendar.weeks.flatMap((w: any) =>
      w.contributionDays.map((d: any) => ({ date: d.date, count: d.contributionCount }))
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