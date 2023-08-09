import React, { useRef, useState } from "react";

const EventsExample = () => {
  const [value, setValue] = useState<string>("")
  const [drag, setDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)


  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
 
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
    setValue("")
  }
  

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
    console.log("dragover")
  };
  
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
    console.log("ondragleave")

  };
  
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drop");
    setDrag(false);
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый"/>
      <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
      <button onClick={clickHandler}>Click me</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      >
        1
      </div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: drag ? "blue" : "red",
          marginTop: 15,
        }}
      >
        2
      </div>
    </div>
  );
};

export default EventsExample;
