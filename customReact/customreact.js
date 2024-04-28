function customRender(reactElement, container) {
  /*
    const domElement =  document.createElement(reactElement.type)

   domElement.innerHtml = reactElement.childdren
   domElement.setAttribute('href', reactElement.props.href)
   domElement.setAttribute('target', reactElement.props.target)
   container.appendChild(domElement)

   */
  // To create a custom react function. How react works under the hood.
  // Takes an object that contains html elements,
  // children, and their properties,
  const domElement = document.createElement(reactElement.type);
  // then create a new element of the type pcontained in the object,

  domElement.innerHTML = reactElement.children;
  // Pass the children as the inner html from the object to the created object

  // Then loops through the propertis or atrributes contained in the object partaining to the
  // element created
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  // Then adds the new element to the container that it supposed to be added to, passed as an argument.
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

// The element of the root,

const mainContainer = document.getElementById("root");

// This function takes an object, that contains an element type, children, properties/ attributes,
// Then adds it the element passed in as a parameter.
customRender(reactElement, mainContainer);
