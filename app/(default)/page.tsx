export const metadata = {
  title: "MindAI Music 3.0",
  description:
    "Decentralized AI music platform transforming the industry. Empowering AI artists, revolutionizing NFTs, and reshaping the way we experience AI generated music.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import WrappedTimeline from "@/components/timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  );
}
