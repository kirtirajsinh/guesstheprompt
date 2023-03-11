import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { doc, getFirestore, setDoc, Timestamp } from "firebase/firestore";
import { app } from "../../../utils/firebase";
import WithSuperAdminAuth from "components/WithSuperAdminAuth";

const Createchallenge = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [showOn, setShowOn] = useState(new Date());

  const postOnFireBase = async (e) => {
    e.preventDefault();
    const { prompt, image, showOn } = e.target.elements;
    console.log(prompt.value, image.value, showOn.value);
    const db = getFirestore(app);

    try {
      const result = await setDoc(doc(db, "imagesToGuess", uuidv4()), {
        prompt: prompt.value,
        image: image.value,
        showOn: Timestamp.fromDate(new Date(showOn.value)),
      });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form onSubmit={postOnFireBase}>
        <label htmlFor="prompt">Prompt</label>
        <input
          type="text"
          name="prompt"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="showOn">Show On</label>
        <input
          type="date"
          name="showOn"
          id="showOn"
          value={showOn}
          onChange={(e) => setShowOn(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WithSuperAdminAuth(Createchallenge);
