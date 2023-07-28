/*
 * <div id="header">
 *  <div id="parent">
        <div id="child">
        <h1> Hello world from React </h1>
        <h2> Hello shubhi, start learning react! </h2>
        </div>
        <div id="child1">
        <h1> Hello world from React </h1>
        <h2> Hello shubhi, start learning react! </h2>
        </div>
    </div>

    </div>
  
 */


    const heading = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child"},
    [React.createElement("h1", {}, "Hello world from React!"), 
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