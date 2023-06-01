'use client';
import React, { useState } from 'react';

const InputText = () => {
  const [text, setText] = useState<string>("");

  return (
    <div className="flex flex-col">
      <div className="relative flex items-center mt-2 flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">

        <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative  bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl">
          <input
            type="text"
            placeholder="赤い？大きい？, 答えを教えて, ヒントを教えて"
            className="focus:outline-none focus:ring-0 focus:border-gray-300"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />

          <SendButton disabled={!Boolean(text)} />
        </div>

      </div>
    </div >
  );
};

const SendButton = ({ disabled = false }: { disabled: boolean }) => {
  return (
    <button className="absolute p-2 rounded-md bottom-[6px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 text-white transition-colors disabled:opacity-40 enabled:bg-green-400" disabled={disabled} >
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4" strokeWidth="2">
          <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor">
          </path>
        </svg>
      </span>
    </button>
  )
}


export { InputText }