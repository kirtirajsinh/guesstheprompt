import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { app } from "utils/firebase";

export const challengeContext = createContext({});

const ChallengeProvider = ({ children }) => {
  const [images, setImages] = useState();
  const [generatedImageDetail, setGenratedImageDetail] = useState({
    image: "",
    prompt: "",
  });

  useEffect(() => {
    (async () => {
      const db = getFirestore(app);
      // Get all docs from a collection that has a field equals todays date
      let today = new Date();
      let startOfDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
      let endOfDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1
      );

      const q = query(
        collection(db, "imagesToGuess"),
        where("showOn", ">=", startOfDay),
        where("showOn", "<", endOfDay)
      );

      // get the documents
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setImages(doc.data().image);
        console.log(doc.data().image, "---- Image-----");
      });
    })();
  }, []);

  return (
    <challengeContext.Provider
      value={{
        images,
        setImages,
        generatedImageDetail,
        setGenratedImageDetail,
      }}
    >
      {children}
    </challengeContext.Provider>
  );
};

export const useChallenge = () => useContext(challengeContext);

export default ChallengeProvider;
