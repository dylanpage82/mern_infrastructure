require('dotenv').config()
require('./database')

const Jeopardy = require('../models/jeopardy')

const starterJeopardys = [
    {
        category: 'react',
        question:' An open-source front-end JS library used for building UIs especially for SPAs',
        answer:'What is React'
    },
    {
        category: 'react',
        question:'This provides syntactic sugar for the React.createElement()function, giving us expressiveness of JavaScript along with HTML like template syntax.',
        answer:'What is JSX'
    },
    {
        category: 'react',
        question:'An object that holds some information that may change over the lifetime of the component. ',
        answer:'What is State'
    },
    {
        category: 'react',
        question:"An in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the real DOM. It's a step that happens between the render function being called and the displaying of elements on the screen.",
        answer:'What is Virtual Dom'
    },
    {
        category: 'react',
        question:"the new reconciliation engine or reimplementation of core algorithm in React v16. The goal is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.",
        answer:'What is React Fiber'
    },
    {
        category: 'react',
        question:'A component that controls the input elements within the forms on subsequent user input',
        answer:'What are Controlled Components'
    },
    {
        category: 'react',
        question:"A way to pass data through the component tree without having to pass props down manually at every level. ",
        answer:'What is context'
    },
    {
        category: 'react',
        question:"When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.",
        answer:'What is Reconciliation'
    },
    {
        category: 'react',
        question:"When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. <></>",
        answer:'What are Fragments'
    },
    {
        category: 'react',
        question:"Components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. ",
        answer:' What are Error Boundaries'
    },
    {
        category: 'react',
        question:"A useful component for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. These checks apply for development mode only.",
        answer:'What is Strict Mode'
    },
    {
        category: 'react',
        question:"a simple technique for sharing code between components using a prop whose value is a function.",
        answer:'What is Render Props'
    },
    {
        category: 'redux',
        question:"An application design used as a replacement for a MVC pattern. It is not a framework or library ",
        answer:'What is Flux'
    },
    {
        category: 'redux',
        question:" A predictable state container for JavaScript apps based on the Flux design pattern",
        answer:'What is Redux'
    },
    {
        category: 'redux',
        question:"a library that aims to make side effects like asynchronous things like data fetching and impure things like accessing the browser cache in React/Redux applications easier and better. ",
        answer:'What is Redux-Saga'
    },
    {
        category: 'redux',
        question:"A middleware that allows you to write action creators that return a function instead of an action. This can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch()and getState()as parameters.",
        answer:'What is Redux Thunk'
    },
    {
        category: 'redux',
        question:"A live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI.",
        answer:'What is Redux DevTools'
    },
    {
        category: 'js',
        question:"A sentence or a word, it's a set of characters. For example, a person's name, a sentence, or a word",
        answer:'What is a String'
    },
    {
        category: 'js',
        question:"A numerical value. It can be an integer or a decimal",
        answer:'What is a number'
    },
    {
        category: 'js',
        question:"A true or false value. It's a value that can be either true or false, it's used in conditional statements and logical operations. ",
        answer:'What is a Boolean'
    },
    {
        category: 'js',
        question:"A collection of properties, it's a set of key-value pairs that can store any type of data. It can be used to represent anything from a single value to a complex data structure. ",
        answer:'What is a Object'
    },
    {
        category: 'js',
        question:'A variable declared in block scope that can be changed',
        answer:'What is Let'
    },
    {
        category: 'js',
        question:'A variable declare in block scope that can not be changed',
        answer:'What is Const'
    },
    {
        category: 'js',
        question:"A variable declared in function scope but ignores block scope",
        answer:'What is Var'
    },
    {
        category: 'js',
        question:"The current context of code which determines the accessibility of a variable to JavaScript",
        answer:'What is Scope'
    },
    {
        category: 'js',
        question:"It allows you to associate handlers with asynchronous action's eventual success value or failure reason",
        answer:'What is a Promise'
    },
    {
        category: 'array',
        question:'Allows you to iterate over an array, perform a certain operation on each element, and return a new array with the result of those operations.',
        answer:'What is .map'
    },
    {
        category: 'array',
        question:'It allows you to iterate over an array and return a new array with only the elements that pass a certain test.',
        answer:'What is .filter'
    },
    {
        category: 'array',
        question:"It allows you to iterate over an array, perform a certian operation on each element, and return a single value that is the result of those operations.",
        answer:'What is .reduce'
    },
    {
        category: 'array',
        question:"Removes the las element in a Array",
        answer:'What is .pop'
    },
    {
        category: 'array',
        question:"Adds a new element to an array at the end",
        answer:'What is .push'
    },
    {
        category: 'array',
        question:'Adds new items to an array',
        answer:'What is .splice'
    },
    {
        category: 'array',
        question: "Calls a callback function once for every array element",
        answer: "What is .forEach"
    },
    {
        category: 'array',
        question: 'Searches an array for an element value and returns its position',
        answer: 'What is .indexOf'
    },
    {
        category: "bigo",
        question: "This function runs in constant time relative to its input. The input array could be 1 item or 1000 items, but this function would still just require one step",
        answer: "What is 0(1)"
    },
    {
        category: "bigo",
        question: "This function goes up linearly, while the n goes up exponentially. So if it takes 1 second to cumpute 10 elements, it will take 2 seconds to compute 100 elements and so on.",
        answer: "what is O(log n)"
    },
    {
        category: 'bigo',
        question:"A algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.",
        answer: 'What is O(n)'
    },
    {
        category: 'bigo',
        question: "An Asymptotic Notation for the best case, or a floor growth rate for a given function. It provides us with an asymptotic lower bound for the growth rate of the runtime of an algorithm.",
        answer: " What is Big Omega"
    },
    {
        category: 'bigo',
        quesiton: "An Asymptotic Notation for the worst case, or ceiling of growth for a given function. It provides us with an asymptotic upper bound for the growth rate of the runtime of an algorithm.",
        answer: " What is Big O Notation or O(n)"
    },
    {
        category: 'bigo',
        question: "This function runs in quadratic time. If our array has n items our outer loops runs n times and our inner loop runs n times for each iteration of the outer loop.",
        answer: "What is O(n²)"
    }

]

Jeopardy.deleteMany({})
    .then(() => {
        Jeopardy.create(starterJeopardys)
            .then((createdJeopardys) =>{
                console.log('created Jeopardys', createdJeopardys)
            })
            .catch(err => {
                console.log(err)
            })
    })
    .catch(err =>{
        console.log(err)
    })
