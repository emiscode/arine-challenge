"use client";

import { useEffect } from "react";
import supportedLanguages from "../data/supportedLanguages.json";
import filterDuplicateLanguages from "../helpers/filterDuplicatedLanguages";

interface ButtonListProps {
  labels: string[];
  handleOnClick: (label: string) => void;
}

function ButtonList({ labels, handleOnClick }: ButtonListProps) {
  return (
    <div className="flex flex-col p-4 items-center">
      {labels.map((label) => (
        <button
          key={label}
          className="p-2 m-2 bg-blue-500 text-white"
          onClick={() => handleOnClick(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ArinePage() {
  const labels = ["Button 1", "Button 2", "Button 3"];

  const handleOnClick = (label: string) => {
    console.log("clicked on: ", label);
  };

  useEffect(() => {
    console.log("supportedLanguages: ", supportedLanguages);
    console.log("filtered: ", filterDuplicateLanguages(supportedLanguages));
  }, []);

  return (
    <div className="flex flex-col p-4 items-center">
      <h1>Arine</h1>
      <ButtonList labels={labels} handleOnClick={handleOnClick} />
    </div>
  );
}

export default ArinePage;
