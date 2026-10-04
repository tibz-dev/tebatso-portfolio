import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave a Testimonial",
  description: "Worked with Tebatso? Share a quick testimonial.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestimonialSubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
