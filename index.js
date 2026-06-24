import React from "react";
import {createRoot} from 'react-dom/client';

let container = React.createElement(
    'div',
    {id: "parent"},
    React.createElement(
        'div',
        {id: "Child "},
        React.createElement('h1',[],"Hello React")
    )
)

let root = createRoot(document.querySelector("#root"));

root.render(container);