import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { generateImage, getImage } from "../src/pages/api/challenge";
import { useChallenge } from "./ChallengeProvider";
import useDevice from "./Common/useDevice";
import { FiSend } from "react-icons/fi";

const GeneratImage = () => {
  const [intervalId, setIntervalId] = useState(null);
  const [queued, setQueued] = useState(false);
  const [imageId, setImageId] = useState(null);
  const { generatedImageDetail, setGenratedImageDetail } = useChallenge();
  const [loading, setLoading] = useState(false);
  const promptRef = useRef();
  const [focused, setFocused] = useState(false);

  const { isMobile } = useDevice();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (promptRef.current.value.trim() === "") return;
    // call api to generate image
    const queueConfirmation = await generateImage(
      promptRef.current.value,
      "asymmetric, watermarks",
      50,
      512,
      512,
      1,
      20,
      4523184
    );
    setImageId(queueConfirmation.id);
    setQueued(true);
    console.log(queueConfirmation, "queueConfirmation");
  };

  useEffect(() => {
    // This function will be called every second until result is found
    const checkImageGenerated = async () => {
      console.log("Checking result...");
      // Some logic to get the result
      let res = await getImage(imageId); // For example, a random condition
      console.log(res, "res");
      if (res.state === "finished") {
        // If result is found, set it and clear the interval
        console.log("Result found: ", res);
        clearInterval(intervalId);
        setQueued(false);
        setGenratedImageDetail({
          prompt: promptRef.current.value,
          image: res.images[0].uri,
        });
      }
    };

    // Set up an interval to call checkResult every second
    if (!queued) return;
    let id = setInterval(checkImageGenerated, 2000);
    setIntervalId(id);

    // Clean up the interval when component unmounts
    return () => clearInterval(id);
  }, [queued]);
  return (
    <div className="flex flex-row items-center w-full rounded-xl border-2 border-p-border">
      <div className="flex-1  relative mr-2">
        <textarea
          type="text"
          ref={promptRef}
          className={`flex flex-row items-center w-full no-scrollbar outline-none text-base sm:text-[18px] py-2 px-4 rounded-xl bg-s-bg font-medium ${
            loading ? "text-s-text" : "text-p-text"
          }`}
          placeholder="Guess the Prompt"
          onInput={(e) => {
            if (e.target.value.trim() === "") {
              setFocused(false);
            }
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          disabled={loading}
          rows={1}
          style={{ resize: "none" }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
      <div className="self-end p-2 flex flex-row space-x-1">
        {!loading && (
          <FiSend
            onClick={handleSubmit}
            className="w-5 h-5 sm:w-6 sm:h-6 text-p-text cursor-pointer"
          />
        )}
        {loading && (
          <img
            src="/loading.svg"
            alt="loading"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        )}
      </div>
    </div>
  );
};

export default GeneratImage;
