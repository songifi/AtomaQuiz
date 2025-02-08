"use client";
import { title } from "process";
import { useState } from "react";
import { Modal } from "./ui/modal";
import { GameSetupForm } from "./modal/GameSetupForm";
import { useGameStore } from "@/store/gameStore";
import GeniusService from "@/services/geniusService";

const steps = [
  {
    title: "Connect Wallet",
    text: "Securely link your wallet to wager tokens and unlock rewards. No wallet? We’ll guide you.",
  },
  {
    title: "Create a Unique Username",
    text: "Pick a unique username to represent yourself in quizzes and leaderboards. ",
  },
  {
    title: "Choose Mode & Compete",
    text: "Select your favorite quiz mode, challenge AI-generated questions, and climb to victory with transparent on-chain winnings!",
  },
];

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { initializeGame, selectedDifficulty, username, setQuestions } =
    useGameStore();

  const handleStartGame = async () => {
    if (!selectedDifficulty || !username) return;

    setIsLoading(true);
    setError(null);

    try {
      const geniusService = GeniusService.getInstance();
      const snippets = await geniusService.getRandomLyricSnippets("", 20);
      const filtered = snippets.filter(
        (s) => s.difficulty === selectedDifficulty
      );

      if (filtered.length === 0) {
        throw new Error("No questions available for selected difficulty");
      }

      const formatted = filtered.map((snippet) => {
        const correctOption = `${snippet.songTitle} - ${snippet.artist}`;
        const otherSongChoices = filtered
          .filter((s) => s.songTitle !== snippet.songTitle)
          .map((s) => `${s.songTitle} - ${s.artist}`);

        const additionalOptions = [];
        while (additionalOptions.length < 3 && otherSongChoices.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * otherSongChoices.length
          );
          const randomChoice = otherSongChoices.splice(randomIndex, 1)[0];
          additionalOptions.push(randomChoice);
        }

        const options = [correctOption, ...additionalOptions];
        const shuffledOptions = options.sort(() => 0.5 - Math.random());

        return {
          lyricsSnippet: snippet.lyricsSnippet,
          correctAnswer: correctOption,
          difficulty: snippet.difficulty,
          options: selectedDifficulty === "Beginner" ? shuffledOptions : [],
        };
      });

      console.log("Formatted Questions:", formatted);
      setQuestions(formatted);
      initializeGame();
    } catch (err) {
      console.error("Game initialization failed:", err);
      setError(err.message || "Failed to start game. Please try again.");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  return (
    <section
      id="howItWorks"
      className="px-4 py-12 bg-gradient-to-r from-[white] to-slate-700"
    >
      <div className="mx-auto max-w-7xl text-center border-red-500 py-[100px]">
        {/* Header Section */}
        <div className="">
          <h2
            className="pb-4 text-5xl font-semibold
           text-[#000]
           md:text-5xl lg:text-6xl"
          >
            How it works
          </h2>
          <p
            className="text-lg
           text-[#000]
            md:text-xl"
          >
            Get ready to enjoy the most enthralling quiz experience in three (3)
            simple steps!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3 my-16">
          {steps.map((step, index) => (
            <div className="space-y-4 my-10" key={index}>
              <h3
                key={index}
                className="text-2xl font-bold
                 text-[#000]
                 lg:text-3xl pb-3"
              >
                {step.title}
              </h3>
              <p
                className="mx-auto max-w-sm
               text-[#1F2937]"
              >
                {step.text}
              </p>
              <p></p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className=" flex flex-col items-center justify-center gap-4 md:flex-row ">
          <button
            className="w-full rounded-full bg-[#10B981] px-[69px] py-6 font-semibold text-[#090909] transition md:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Play Game
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Guess the song"
          >
            <GameSetupForm onStart={handleStartGame} />
          </Modal>
          <button className="w-full rounded-full border-2 border-[#10B981] hover:bg-[#10B981] px-[51px] py-6  font-semibold text-[#1F2937] hover:text-[#fff] md:w-auto">
            Connect Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
