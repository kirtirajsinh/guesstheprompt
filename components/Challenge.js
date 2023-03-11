import Image from "next/image";
import React from "react";
import { useChallenge } from "./ChallengeProvider";
import ImageLoader from "./Common/ImageLoader";

const Challenge = () => {
  const { images, generatedImageDetail } = useChallenge();

  return (
    <div className="flex flex-row items-center justify-center mt-12 mb-2 space-x-4">
      {images && (
        <ImageLoader
          src={images}
          className="border-2 border-black rounded-xl"
          alt="Challenge Image"
          width={550}
          height={550}
        />
      )}
      <div className=" border-r  border-gray-600 h-[550px]"></div>
      {generatedImageDetail.image && (
        <Image
          src={generatedImageDetail.image}
          alt="Generated Image"
          width={550}
          height={550}
          className="border-2 border-black rounded-xl"
        />
      )}
    </div>
  );
};

export default Challenge;
