import React, { useState, useCallback } from "react";
import Footer from "./Footer";

function App() {
  const [color, setColor] = useState("#492bc4");
  const [text, setText] = useState("Copy");

  const copyColor = useCallback(()=>{
    window.navigator.clipboard.writeText(color)
    console.log(`color code ${color} copied to clipboard!`)
  },[color])

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleText = ()=>{
    setText("Copied!")
  }

  return (
    <div className="h-full">
      <h2 className="text-black font-bold text-3xl py-5 rounded-b-3xl border-2 text-center bg-[#ffffff] " style={{ borderColor: color }}>
        Color Picker
      </h2>
      <div className="flex justify-center ">
        <div
          className="h-48 w-48 border-zinc-200 border-[2px] rounded-2xl text-center text-zinc-200 font-bold mt-16 flex items-center justify-center hover:shadow-md hover:shadow-white ease-in duration-200"
          style={{ backgroundColor: color }}
        >Color Code: <br /> {color}</div>
      </div>
      
      <div className="flex justify-center">
        <label className="text-xl mt-10 font-bold text-white">👇Select a Color👇</label>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="color"
          value={color}
          onChange={handleColor}
          className="h-10 w-28 border border-white mt-5 rounded-md hover:shadow-md hover:shadow-white ease-in duration-200 "
        />
      </div>
      <div className="flex justify-center mt-10">
        <h3
          className="text-center  border-zinc-200 border-[1px] w-48 rounded-md py-3 text-white font-bold hover:shadow-md hover:shadow-white ease-in duration-200"
          style={{ backgroundColor: color }}
        >
          Picked Color: {color}
        </h3>
        <button onClick={()=>{
          copyColor();
          handleText();
        }} className=" ml-3 px-7 font-bold text-xl text-white rounded-md border-[1px] border-white bg-blue-700 hover:bg-blue-600 active:text-stone-300">{text}</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
