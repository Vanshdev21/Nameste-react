import React from "react";
import { createRoot } from "react-dom/client";

// React Element ==> Object ==> HTML Element

// const heading = React.createElement("h1",{id: "heading"},"Hellooo Vansh")

// JSX
// React ELement
const jsxHeading = <h1>Hello World - VK</h1>;

// React Component
//1. Class based component - OLD
//2. Functional based component - NEW => Just a normal js function

const Heading = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktPU5elnGJYdqJqIwX6UdNGpT63ziwOUF45F-Wa3E0mA85wy68utTksAU&s=10"
        height="100"
        width="100"
      />
      {jsxHeading}
      <p>Age: 18</p>
    </div>
  );
};

const root = createRoot(document.querySelector("#root"));

root.render(<Heading />);
