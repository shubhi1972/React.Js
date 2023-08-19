import React from "react";
import ReactDOM from "react-dom/client";

    const heading = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child"},
    [React.createElement("h1", {}, "Hello India  from React!"), 
    React.createElement("h2", {}, "Hello shubhi, start learning react!") ]
    ),
    React.createElement("div", {id: "child1"},
    [React.createElement("h1", {}, "Hello world from React!"), 
    React.createElement("h2", {}, "Hello shubhi, start learning react!") ]
    )]
    
    );  

    console.log(heading);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);