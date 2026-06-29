import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr.DM",
  description: "Dr.DM Project Report",
};

export default function DrDMLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
