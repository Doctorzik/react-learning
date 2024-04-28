import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


// The reason why react cannot render this object is because it was created by me,
// React dont know type, props, children to solove this, I should use the react languege. 

// Look at areactElement
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h>Custom React</h>
    </div>
  );
}
// Use react create element to method. it accepts object of element, properties/ attributes and thier children.
const areactElement = React.createElement(
  "a",
  { href: "https//google.com", target: "_blank" },
  "click to visit google"
);
// This dont work because, Look at the comment in reactElement
// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

// Now this works.
// The render method on the Createroot takes the React.creatElement then and add it to the root.
ReactDOM.createRoot(document.getElementById("root")).render(< App/>)