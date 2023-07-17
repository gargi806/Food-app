
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"Hello from react")
    )
    );
const root = ReactDOM.createRoot(document.getElementById("yes"));
root.render(parent);

