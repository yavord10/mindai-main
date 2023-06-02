"use client";

import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./confetti";

import "./styles.css";

const Timeline = ({ setObserver, callback }: any) => {
  const [message1, setMessage1] = useState(false);
  const [message2, setMessage2] = useState(false);
  const [message3, setMessage3] = useState(false);
  const [message4, setMessage4] = useState(false);

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  const someCallback = () => {
    setMessage1(true);
    callback();
  };

  const someCallback2 = () => {
    setMessage2(true);
  };

  const someCallback3 = () => {
    setMessage3(true);
  };

  const someCallback4 = () => {
    setMessage4(true);
    fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        {message1 && (
          <div className="message-right md:pl-4 lg:pl-12 xl:pl-16">
            <div className="font-architects-daughter text-l text-purple-600 mb-2">
              Phase One:
            </div>
            <h3 className="h3 mb-3 text-emerald-400">"Harmony Initiation"</h3>
            <p className="text-l text-gray-400 mb-4">
              Private Sale: Conduct private sale to secure initial funding for
              the project.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Coinmarketcap Listing: Get listed on Coinmarketcap to increase
              project visibility.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Airdrop Campaign: Implement an airdrop campaign to distribute
              tokens and generate interest.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Marketing: Launch comprehensive marketing campaigns to raise
              awareness about MindAI.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Community Growth: Focus on building a strong and engaged community
              through social media and community management efforts.
            </p>
          </div>
        )}
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        {message2 && (
          <div className="message-left md:pl-4 lg:pl-12 xl:pl-16">
            <div className="font-architects-daughter text-l text-purple-600 mb-2">
              Phase Two:
            </div>
            <h3 className="h3 mb-3 text-emerald-400">"Rhythm Expansion"</h3>
            <p className="text-l text-gray-400 mb-4">
              Public Sale on Uniswap: Conduct a public sale on Uniswap to allow
              wider participation in the project.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Coingecko Listing: Get listed on Coingecko for broader exposure
              and accessibility.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Mass Marketing: Intensify marketing efforts to reach a larger
              audience and attract more users.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Community Partnerships: Collaborate with other music-related
              projects and influencers to expand the project's reach.
            </p>
            <p className="text-l text-gray-400 mb-4">
              AMAs and interactive Twitter Spaces discussions to engage with the
              community.
            </p>
          </div>
        )}
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        {message3 && (
          <div className="message-right md:pl-4 lg:pl-12 xl:pl-16">
            <div className="font-architects-daughter text-l text-purple-600 mb-2">
              Phase Three:
            </div>
            <h3 className="h3 mb-3 text-emerald-400">"Melody Activation"</h3>
            <p className="text-l text-gray-400 mb-4">
              Staking App Goes Live: Launch the staking app, enabling token
              holders to stake their tokens and earn rewards.
            </p>
            <p className="text-l text-gray-400 mb-4">
              NFT Minting App Goes Live: Introduce the NFT minting app, allowing
              creators to publish their music NFTs on the platform.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Stage 1 CEX Listings: Secure listings on select centralized
              exchanges to increase liquidity and accessibility.
            </p>
          </div>
        )}
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          4
        </div>
        {message4 && (
          <div className="message-left md:pl-4 lg:pl-12 xl:pl-16">
            <div className="font-architects-daughter text-l text-purple-600 mb-2">
              Phase Four:
            </div>
            <h3 className="h3 mb-3 text-emerald-400">"Sonic Revolution"</h3>
            <p className="text-l text-gray-400 mb-4">
              Main Admin 'Creator' App Goes Live: Launch the main admin creator
              app, providing users access to powerful AI music tools, enabling
              them to generate AI music and turn it into NFTs.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Mobile 'Listener' App Goes Live: Release the mobile app, allowing
              listeners to discover and enjoy AI-generated music, while
              generating royalties for creators.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Stage 2 CEX Listings: Expand listings on additional centralized
              exchanges to broaden the project's market presence.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Big Industry Partnerships: Forge partnerships with prominent
              players in the music industry to foster innovation and
              collaboration.
            </p>
            <p className="text-l text-gray-400 mb-4">
              Community Events and More: Organize community-driven events,
              competitions, and initiatives to foster engagement, growth, and
              excitement within the MindAI community.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const WrappedTimeline = () => {
  const onCallback = () => console.log("awesome");
  return (
    <div
      className="py-12 md:py-20 border-t border-gray-800"
      style={{ paddingBottom: "40rem" }}
    >
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
          The road to Music Revolution
        </div>
        <h1 className="h2 mb-4">MindAI Music Roadmap</h1>
        <p className="text-l text-gray-400">
          Seamless applications, powerful utility, ambitious roadmap
        </p>
      </div>
      <TimelineObserver
        initialColor="white"
        fillColor="#5D5DFF"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
    </div>
  );
};

export default WrappedTimeline;
