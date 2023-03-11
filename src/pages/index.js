import { useEffect, useState } from "react";
import Head from "next/head";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { app } from "../../utils/firebase";
import GeneratImage from "components/GeneratImage";
import { getImage } from "./api/challenge";
import { useChallenge } from "components/ChallengeProvider";
import Image from "next/image";
import Challenge from "components/Challenge";
import "@mui/material/styles";

export default function Home({}) {
  // const [images, setImages] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const db = getFirestore(app);
  //     // Get all docs from a collection that has a field equals todays date
  //     let today = new Date();
  //     let startOfDay = new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate()
  //     );
  //     let endOfDay = new Date(
  //       today.getFullYear(),
  //       today.getMonth(),
  //       today.getDate() + 1
  //     );

  //     const q = query(
  //       collection(db, "imagesToGuess"),
  //       where("showOn", ">=", startOfDay),
  //       where("showOn", "<", endOfDay)
  //     );

  //     // const q = query(
  //     //   collection(db, "imagesToGuess"),
  //     //   where("prompt", "==", "today")
  //     // );

  //     // get the documents
  //     const querySnapshot = await getDocs(q);
  //     console.log(querySnapshot);
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data());
  //       console.log(doc.data().image, "---- Image-----");
  //     });
  //   })();
  // }, []);

  return (
    <div>
      <Head>
        <title>Guess the Prompt</title>
      </Head>

      <main>
        <Challenge />

        <GeneratImage />
      </main>
    </div>
  );
}
