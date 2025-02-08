"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBitcoin,
  FaBrain,
  FaMedal,
  FaMusic,
  FaQuestion,
} from "react-icons/fa6";
import { useGameStore } from "../store/gameStore";
import GameSection from "../components/game/GameSection";
import { Modal } from "./ui/modal";
import { GameSetupForm } from "./modal/GameSetupForm";
import { IoTrophyOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

export default function HeroSection({ GameSection }) {
  const { setGameStatus } = useGameStore();
  const [showGame, setShowGame] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleStartGame = () => {
    console.log("Starting game...");
    setIsModalOpen(false);
  };

  const handlePlayNow = () => {
    setGameStatus("playing");
    setShowGame(true);
  };

  if (showGame) {
    return <GameSection />;
  }

  return (
    <div>
      <section
        className="bg-cover bg-blend-darken bg-no-repeat min-h-screen flex items-center "
        style={{
          // backgroundImage: "url('/img/hero-background.svg')"
          backgroundImage: "url('/img/jigsaw3.jpg')",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-[1]">
              <h1 className="lg:mt-16 text-[40px] md:text-5xl lg:text-6xl xl:text-7xl text-[#1F2937] font-semibold tracking-tight text-pretty ">
                <span className=" mx-4">
                  Play
                  <FaQuestionCircle className="inline text-[0.7em] ml-3" />
                </span>
                <span className=" mx-4">
                  Win
                  <FaMedal className="inline text-[0.7em] ml-3" />
                </span>
                <span className=" mx-4">
                  Earn
                  <FaBitcoin className="inline text-[0.7em] ml-3" />
                </span>
              </h1>
              <p className="mt-8 pt-8 text-lg md:text-xl lg:text-2xl font-medium text-gray-700 m:text-white sm:text-2xl/8">
                Test your knowledge, and conquer the quiz battlefield! Choose
                your game mode, face off against challengers, and claim your
                rewards with AI-generated trivia powered by the Sui blockchain.
                Let the ultimate quiz competition begin!
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col md:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto text-sm sm:text-xl font-bold text-[#1F2937] px-6 py-3 text-center border-4 border-[#10B981] rounded-3xl  hover:bg-[#10B981] hover:text-[#fff] transition-colors duration-300"
                >
                  Play Now
                </button>

                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Ready to test your trivia mastery"
                >
                  <GameSetupForm onStart={handleStartGame} />
                </Modal>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("howItWorks");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full sm:w-auto text-sm sm:text-lg font-extrabold text-[#1F2937] px-6 py-3 text-center rounded-3xl border-2 border-[#1F2937] hover:bg-[#1F2937] hover:text-[#fff] transition-colors duration-300"
                >
                  How to Play
                </button>
              </div>
            </div>
            <div className="absolute top-48 left-[50%] -translate-x-[50%] lg:relative lg:top-0 lg:left-0 lg:translate-x-0 mt-14 sm:mt-24 lg:mt-20 lg:shrink-0 lg:grow">
              <FaBrain className="text-[220px] md:text-[250px] lg:text-[300px] xl:text-[350px] text-[#10B981] animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
