"use client";

import app from "./config";

import { getFirestore, setDoc, doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default function FancyForm() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);

  // update the resulting answer on finish
  onSnapshot(doc(db, "text_documents", "1"), (doc) => {
    if (doc.data().status && doc.data().status.state === "COMPLETED") {
      setSummary(doc.data().summary);
      setLoading(false);
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      setStart(true);

      console.log("clicked");

      //initalize data
      const form = e.target;
      const data = new FormData(form);
      // const formJson = Object.fromEntries(data.entries()); //get the json form of the input

      // console.log(formJson);
      await setDoc(doc(db, "text_documents", "1"), {
        text: data.get("text"),
      });
    }
  }

  return (
    <div className="text-center">
      <div className="p-8">
        <h2 className="text-xl underline">USER INPUT: </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <textarea
            name="text"
            rows="6"
            cols="80"
            className="block p-2.5 w-full text-sm text-gray-900 border border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="submit"
            className={`btn bg-gray-900 text-white cursor-pointer ${
              loading ? "disabled" : ""
            }`}
          />
        </form>
      </div>

      <div className="pt-4">
        <h2 className="text-xl underline">RESULTING OUTPUT: </h2>

        <div className="max-w-lg m-auto">
          {start ? (
            loading ? (
              <LoadingComponent />
            ) : (
              summary
            )
          ) : (
            <p>Submit a paragraph to summarize!</p>
          )}
        </div>
      </div>
    </div>
  );
}

function LoadingComponent() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length >= 3 ? "" : dots + "."));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Loading{dots}</p>
    </div>
  );
}
