function customreact(reactElement, mainContainer) {
  //   let DOMelement = document.createElement(reactElement.type);
  //   DOMelement.innerHTML = reactElement.children;
  //   DOMelement.setAttribute("href", reactElement.props.href);
  //   DOMelement.setAttribute("target", reactElement.props.target);
  //   mainContainer.appendChild(DOMelement);
  let DOMelement = document.createElement(reactElement.type);
  DOMelement.innerHTML = reactElement.children;
  for (const key in reactElement.props) {
    DOMelement.setAttribute(key, reactElement.props[key]);
  }
  mainContainer.appendChild(DOMelement);
}

const reactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  children: "Click On Me To Gooo",
};

const mainContainer = document.querySelector(".root");
customreact(reactElement, mainContainer);
