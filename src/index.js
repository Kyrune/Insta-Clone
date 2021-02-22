import React from "react";
import ReactDOM from "react-dom";
import { firebase } from "./lib/firebase";
import FirebaseContext from "./context/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <h1 className="text-red-500">Hello, World</h1>,
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
