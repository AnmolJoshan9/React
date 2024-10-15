const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 Tag"),
    React.createElement("h2", {}, "I'm an h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 Tag"),
    React.createElement("h2", {}, "I'm an h2 Tag"),
  ]),
]);

// ReactElement(object) => HTML(Browser Understands)

// const heading = React.createElement(
//   "h1",
//   { id: "Heading", xyz: "abc" },
//   "Hello World from React!"
// );

// JSX

console.log(parent);   //It will return object
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

// root.render(heading);
root.render(parent);
