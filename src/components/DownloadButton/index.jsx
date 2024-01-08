import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const DownloadButton = ({ downloadURL, buttonTitle }) => {
  return (
    <a href={downloadURL} download rel="noreferrer noopener" target="_blank">
      <button
        className=" p-3 rounded-lg bg-slate-700 text-white mt-2 hover:bg-slate-600 active:bg-slate-200 transition-all "
        onClick={() => {}}
      >
        {buttonTitle}
      </button>
    </a>
  );
};

export default DownloadButton;
