import type { Metadata } from "next";

/** Gamified app screen with no standalone content value — never index. */
export const metadata: Metadata = {
  title: { absolute: "Leaderboard — Indian Tests Hub points board" },
  description: "Community points board for signed-in Indian Tests Hub users.",
  robots: { index: false, follow: true },
};

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
