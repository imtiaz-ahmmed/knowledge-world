import React from 'react';
import './Log.css';

const Log = () => {
    return (
        <div className='blog-section'>
            <div className="blog">
                <h2>Props vs state</h2>
                <p>In React, both props and state are used to manage data in a component.

                    Props are short for "properties," and they are passed down from a parent component to a child component. Props are immutable, meaning they cannot be changed within the component that receives them. A child component can use props to display information or to execute functions passed down from the parent component.

                    State, on the other hand, is a component's internal data that can change over time. State can be updated within the component using a setState method. When state changes, React will re-render the component, which allows the updated state to be displayed.

                    In general, props are used to pass down data and functions to child components, while state is used to manage data that changes within a component. It's important to note that while props are immutable, state should also be treated as immutable as much as possible. Directly modifying state can cause bugs and unexpected behavior in a React application.</p>
            </div>
            <div className="blog">
                <h2>How does useState work?</h2>
                <p>In React, useState is a hook that allows a functional component to manage state.It works like :

                    Call the useState hook within a functional component, passing in an initial state value.

                    useState returns an array with two values: the current state value and a function that can be used to update the state.

                    When the state is updated using the update function, React will re-render the component with the new state value.

                    Can access the current state value in component code to display or use in some other way.

                    useState can be called multiple times within a single component to manage multiple pieces of state.

                    Using useState is an easy and powerful way to manage state in a functional component without needing to convert it to a class component or use other libraries. By calling useState within the component,can keep all state management code in one place and avoid many common issues that arise when managing state manually.</p>
            </div>
            <div className="blog">
                <h2>Purpose of useEffect other than fetching data.</h2>
                <p>The useEffect hook in React is primarily used to manage side effects that happen within a component, such as manipulating the DOM or interacting with external APIs. Here are some common use cases for useEffect other than fetching data:

                    Updating the document title based on the component's state or props.
                    Subscribing to and unsubscribing from events or timers.
                    Animating elements based on state changes.
                    Manipulating the DOM, such as adding or removing classes or styles.
                    Cleaning up resources or state when the component unmounts.</p>
            </div>
            <div className="blog">
                <h2>How Does React work?</h2>
                <p>React is a JavaScript library that allows you to build user interfaces by breaking them down into smaller, reusable components. Here's how React works at a high level:

                    Can create components that define how a part of the user interface should look and behave. Components can be as simple as a button or as complex as an entire application.

                    Can define the state and props of each component, which determine how it behaves and what data it displays.

                    When a component's state or props change, React will re-render the component with the new data.

                    React uses a virtual DOM to efficiently update only the parts of the page that need to be changed, rather than re-rendering the entire page.

                    React provides a way to handle user events, such as clicks or keyboard input, and update the state of the components accordingly.

                    Can use React with other libraries and frameworks to create more complex applications, such as Redux for managing application state or React Router for handling client-side routing.

                    React's main advantage is that it allows to build large, complex applications with a modular architecture that's easy to understand and maintain. By breaking down user interface into smaller, reusable components, can create a flexible and scalable codebase that's easier to work with over time.</p>
            </div>


        </div>
    );
};

export default Log;