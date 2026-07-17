import { NextResponse } from "next/server";
import { getGitHubProfile } from "@/lib/github";

export const revalidate = 3600; // cache for 1 hour — avoids hammering GitHub's API on every page load

export async function GET() {
  const profile = await getGitHubProfile();

  if (!profile) {
    return NextResponse.json({ error: "Unable to load GitHub data" }, { status: 500 });
  }

  return NextResponse.json(profile);
}