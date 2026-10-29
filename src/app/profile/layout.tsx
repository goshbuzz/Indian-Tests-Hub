import type { Metadata } from "next";

/** Private user settings — never index. */
export const metadata: Metadata = {
  title: { absolute: "Profile — streaks, badges, language & notification settings" },
  description: "Your local Indian Tests Hub profile: saved tests, mock history, Hindi/English toggle and device notifications.",
  robots: { index: false, follow: true },
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return children;
}
