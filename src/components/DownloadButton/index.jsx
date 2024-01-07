import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const DownloadButton = () => {
  return (
    <a
      href="https://firebasestorage.googleapis.com/v0/b/portafolio-react-27e84.appspot.com/o/Carlos%20Eduardo%20Chavarr%C3%ADa%20CV.pdf?alt=media&token=36056c48-dccb-4cea-9c5d-d159b4dc4095"
      download
      rel="noreferrer noopener"
      target="_blank"
    >
      <button
        className=" p-3 rounded-lg bg-slate-700 text-white mt-2 hover:bg-slate-600 active:bg-slate-200 transition-all "
        onClick={() => {}}
      >
        Curriculum Vitae
      </button>
    </a>
  );
};

export default DownloadButton;
