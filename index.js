let container = React.createElement(
    'div',
    {id: "parent"},
    React.createElement(
        'div',
        {id: "Child "},
        React.createElement('h1',[],"Hello React")
    )
)

let root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);