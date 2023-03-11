import Image from "next/image";
import React, { useState } from "react";

const ImageLoader = ({ loaderClassName = "", src, ...props }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <div
          className={`${
            loaderClassName ? loaderClassName : props.className
          } bg-gray-300 animate-pulse`}
        />
      )}
      <Image {...props} src={src} onLoad={() => setLoading(false)} />
    </>
  );
};

export default ImageLoader;
