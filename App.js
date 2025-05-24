import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
    <div className="container">
        <h1 id="title">Namaste React</h1>
    </div>
);

const number = 10000;

const Heading = () => (
    <div className="heading">
        {Title()}{number}
        <Title />
        <Title></Title>
        <h2 id="head"> This is tutorial</h2>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);