// import logo from "./logo.svg";
import "./App.css";
// import firebaseapp from "./config";
// import { getFirestore, setDoc, doc, onSnapshot } from "firebase/firestore";
// import { useState, useEffect } from "react";
import FancyForm from "./FancyForm";

function App() {
  return (
    <div className="z-10 w-full items-center font-mono flex flex-col">
      <h1 className="text-2xl pb-3">AI TEXT SUMMARIZER</h1>
      <p className="max-w-lg text-center text-sm">
        Copy in any text within the User Input box, and then click submit. A
        summary will automatically be generated. <br />
        Created using the Google PaLM API, hosted using Firebase.
      </p>

      <FancyForm />

      {/* <FancyOut /> */}
    </div>
  );
}

export default App;
