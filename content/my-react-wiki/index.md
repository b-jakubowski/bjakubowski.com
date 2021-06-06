---
title: "My React Wiki"
description: "My collection of patterns, good practices, libraries and notes on React"
date: "2021-06-05"
image: "picture.jpg"
tags: ["tech-notes", "react"]
---

This wiki will be updated as soon as i learn something new worth mentioning.

**Table of content**

- [Patterns](#patterns)
  - [5 advances react patterns](#5-patterns)
  - [Higher-Order Component](#higher-order-component)
  - [Compound components](#compound-components)
- [Typescript](#typescript)
- [Refs](#refs)
- [Errors](#errors)
  - [Error boundaries class](#error-boundaries)
- [Performance](#performance)
  - [Re-rendering](#re-rendering)
  - [Code splitting](#re-rendering)
  - [DevTools](#devtools)
  - [Memoization](#memoization)
  - [Avoid Anonymous Functions](#avoid-anonymous-functions)
- [Docker with React](#docker-with-react)
- [Virtual DOM](#virtual-dom)
- [Declarative over imperative](#declarative-over-imperative)
- [Presenter and container components](#presenter-and-container-components)
- [State management](#state-management)
- [Hooks](#hooks)
  - [useMemo](#usememo)
  - [useEffect](#useeffect)
  - [useReducer](#usereducer)
- [Testing](#usereducer)
  - [Testing UI Storybook](#testing-ui-storybook)
  - [Unit testing](#unit-testing)
  - [Integration testing](#integration-testing)
  - [e2e testing](#e2e-testing)
  - [Testing playground](#testing-playground)
- [Security vulnerabilities](#security-vulnerabilities)
  - [HTTP Basic Authentication](#http-basic-authentication)
  - [API Security Concerns](#api-security-concerns)
  - [DDoS Attacks](#ddos-attacks)
  - [Does React Protect Against XSS?](#does-react-protect-against-xss)

## Patterns

### 5 advances react patterns <a name="5-patterns"></a>

Compound components, Control Props Pattern, Custom Hook Pattern, Props Getters Pattern, State reducer pattern

[https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6](https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6)

### Higher-Order Component

Components take one or more components as arguments, and return a new upgraded component. HOCs are commonly used to design components with certain shared behavior in a way that makes them connected differently than normal state-to-props pattern.

- We don’t modify or mutate components. We create new ones.
- A HOC is used to compose components for code reuse.
- A HOC is a pure function. It has no side effects, returning only a new component.

dummy HOC:

```jsx
import React from "react"
// Take in a component as argument WrappedComponent
const higherOrderComponent = WrappedComponent => {
  // And return another component
  const HOC = () => <WrappedComponent />

  return HOC
}
```

Show a loader while a component waits for data, HOC:

```jsx
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return <p>Hold on, fetching data might take some time.</p>
  }
}
export default WithLoading
```

CONDITIONALLY RENDER COMPONENTS

```jsx
export function withAuth(Component) {
  return function AuthenticatedComponent extends React.Component {
    isAuthenticated() {
      return this.props.isAuthenticated;
    }

    render() {
      const loginErrorMessage = (
        <div>
          Please <a href="/login">login</a> in order to view this part of the application.
        </div>
      );

      return (
        <div>
          { this.isAuthenticated === true ? <Component {...this.props} /> : loginErrorMessage }
        </div>
      );
    }
  };
}
```

### Compound components

[https://kentcdodds.com/blog/compound-components-with-react-hooks](https://kentcdodds.com/blog/compound-components-with-react-hooks)

## Typescript

- [react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)
- [TypeScript and React hooks](https://fettblog.eu/typescript-react/hooks/)

## Refs

A `ref` is an object that stays consistent between renders of your React component. It has a `current` property on it which can be updated to any value at any time. In the case of interacting with DOM nodes, you can pass a `ref` to a React element and React will set the current property to the DOM node that’s rendered.

So if you create an `inputRef` object via `React.useRef`, you could access the value via: `inputRef.current.value`

## Errors

### Error boundaries class

[https://reactjs.org/docs/error-boundaries.html](https://reactjs.org/docs/error-boundaries.html)

[https://github.com/bvaughn/react-error-boundary](https://github.com/bvaughn/react-error-boundary)

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

## Performance

### Re-rendering

- komponenty Reactowe fundamentalnie opierają się o kompozycję, tj. relację „zawierać”, „mieć” (w przeciwieństwie do „być” – jak w dziedziczeniu/rozszerzaniu/implementowaniu). Komponent rodzic „zawiera” mniejsze komponenty dzieci. I jeśli z jakiegokolwiek powodu ów rodzic potrzebuje się przerenderować, to przerenderowuje nie tylko swoją bezpośrednią zawartość. Inne komponenty wchodzące w jego skład, bez względu na propsy, również spróbuje przerenderować. Bo skoro komponent rodzic zawiera komponenty dzieci, to one są jego częścią.
- **Im wyżej stan, tym render będzie kosztowniejszy.** Dbając o logikę komponentów warto zadbać by małe komponenty dzieci miały swój własny stan

### Code splitting

[https://blog.kommit.co/a-gentle-introduction-to-code-splitting-with-react-395ddf44b71b](https://blog.kommit.co/a-gentle-introduction-to-code-splitting-with-react-395ddf44b71b)

### DevTools help

while you’re still in development mode, you can use the to visualize how React components mount, update, and unmount.

### Memoization

Its name, “memo” comes from memoization, which is basically a form of optimization used mainly to speed up code by storing the results of expensive function calls and returning the stored result whenever the same expensive function is called again.
React.memo() boosts the performance of a React app by avoiding re-rendering components whose props haven’t changed or when re-rendering is not needed.

WHEN TO USE `React.memo()`

- **Pure functional component** You can use `React.memo()` if your component is functional, is given the same props, and always renders the same output. You can also use `React.memo()` on non-pure-functional components with React hooks.
- **The component renders often**You can use `React.memo()` to wrap a component that renders often.
- **The component re-renders with same props**Use `React.memo()` to wrap a component that is usually provided with the same props during re-rendering.
- **Medium to high elements**Use it for a component that contains a medium to high number of UI elements to check props for equality.

More: [useMemo](#usememo)

### Immutable Data Structures

- They have no side effects.
- Immutable data objects are easy to create, test, and use.
- They help us to write logic that can be used to quickly check for updates in state, without having to check the data over and over again.
- They help to prevent temporal coupling (a type of coupling in which code depends on the order of execution).

### Avoid Anonymous Functions

Because anonymous functions aren’t assigned an identifier (via const/let/var), they aren’t persistent whenever a component inevitably gets rendered again. This causes JavaScript to allocate new memory each time this component is re-rendered, instead of allocating a single piece of memory only once,

```jsx
// Don’t do this.
class Dont extends Component {
  render() {
    return <button onClick={() => console.log("Do not do this")}>Don’t</button>
  }
}

// The better way
class Do extends Component {
  handleClick = () => {
    console.log("This is OK")
  }
  render() {
    return <button onClick={this.handleClick}>Do</button>
  }
}
```

## Docker with React

[https://www.robinwieruch.de/docker-react-development](https://www.robinwieruch.de/docker-react-development)

## Virtual DOM

Programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

## Declarative over imperative programming paradigm

Do not manipulate the DOM directly, instead declare an element in state that should be rendered given current state.
To avoid:

- Avoid Refs. Sure, sometimes they’re necessary, but if you feel yourself reaching for refs then it can often mean you’re doing something wrong. (There are some legitimate uses for refs in the React docs).
- Attempting to manipulate DOM directly
- Instead of returning functions that render a component, prefer to return functions that return the necessary information to render a component. In the first we are instructing what to do(render precisely this thing), while in the second we’re just returning some information (use this information to do something).
- Use pure functional components where possible. Because these components don’t have lifecycle methods, they require you to rely on a declarative, props-based approach. And they can also provide performance improvements.

## Presenter and container components

- It is a good approach to think of it as (State) => View. While one part of the component represents the state, the other part derives and changes the state.
- Since the representation of the view derives from the state, the view changes when the state changes.
- In presenter components, you should avoid adding any logic. Keep your components dumb and only pass properties and callbacks to them.
- Most of your components don't need to know everything. These components should most of the time be functional, stateless components.
- In container components, you prepare the data and callbacks for your presenter components. You can even pass dependencies or business logic to your presenter components.
- In Redux, a more specific name for a container component is a connected component.
- Rule of thumb 1: If your parent Container Component deals with state alone, you can evaluate your Presenter Component hierarchy below. You might notice that a subtree of your Presenter Components deals with a substate which is not used by other components.
- Rule of thumb 2: Some of your Presenter Components might get a bunch of well prepared properties or callbacks for only themselves. Start to give them a Container Component to deal with the logic and make your parent Container Component more lightweight again.

## State management

[https://medium.com/@veeralpatel/things-ive-learned-about-state-management-for-react-apps-174b8bde87fb](https://medium.com/@veeralpatel/things-ive-learned-about-state-management-for-react-apps-174b8bde87fb)

[http://jamesknelson.com/5-types-react-application-state/](http://jamesknelson.com/5-types-react-application-state/)

Types of state:

- Data + loading state: the list of todo items your frontend renders and whether the list is loading. Put into Redux/MobX/etc.
- Global UI state: whether the user is logged in, value of a global search bar. the server doesn’t store this data at all. Put into Redux/MobX/etc.
- Local UI state: whether an dropdown is expanded, for example. The rest of your frontend doesn’t care about this. Use component state
- Form state: the values of fields in a form. This is a subset of local UI state. Use a library like Formik to treat the form as a controlled component
- URL state: the route the user is on now. Read and update window.location; don’t create a second source of truth
- Page state: you have a page whose components interact with each other in a complex way, but not with components on other pages. Create a Redux/MobX store just for the page (or pass down a plain JS object with Context)

## Hooks

[https://techblog.commercetools.com/five-practical-tips-when-using-react-hooks-in-production-990a79745229](https://techblog.commercetools.com/five-practical-tips-when-using-react-hooks-in-production-990a79745229)

Instead multiple `useState` hooks , try using `useReducer`

```jsx
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return 0
    default:
      throw new Error("unexpected action")
  }
}
```

### useMemo

- **useMemo** calls a function when dependencies change, and memoizes (remembers) the **`result of the function`** between renders.
- in contrast with **useCallback** which remembers an `existing value` between renders.
- You want to use **useMemo** to save yourself from rerunning an expensive calculation to generate a new value, and you want to use useCallback to store an existing value.
- DONT USE: **useMemo until you notice parts of your app are frustratingly slow.**
- SHOULD USE: Your app often becomes unresponsive because you’re fetching a large amount of data, and having to transform it into a usable format
- SHOULD USE: You’re noticing a component’s render is frustratingly slow, and you’re passing a calculation to an unknowable number of children, such as when rendering children using Array.map()
- SHOULD USE: if you need to recalculate the value when dependencies change, useMemo is the hook for you.
- `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`

### useCallback

MOST OF THE TIME YOU SHOULD NOT BOTHER OPTIMIZING UNNECESSARY RERENDERS.

There are specific reasons both of these hooks are built-into React:

1. Referential equality
2. Computationally expensive calculations

### useEffect

Dependency in useEffect

- Nothing - the effect depends on everything
- Empty array - the effect depends on nothing
- Value in array - the effect depends on that value
- Do not do this (below) when doing async actions. async function returns Promise, and useEffect should always return cleanup function

```tsx
React.useEffect(async () => {
  const result = await doSomeAsyncThing()
})
```

### useReducer

- When it's just an independent element of state you're managing: `useState`
- When one element of your state relies on the value of another element of your state in order to update: `useReducer`
- A useReducer call, like useState, can only hold one value, but with a reducer it’s much more common for that single value to be an object containing multiple values.

## Testing

### Testing UI Storybook

[https://storybook.js.org/blog/how-to-actually-test-uis/](https://storybook.js.org/blog/how-to-actually-test-uis/)

### Unit testing

[https://felixgerschau.com/unit-testing-react-introduction/](https://felixgerschau.com/unit-testing-react-introduction/)

Unit tests test the smallest unit possible, mocking any dependencies the component may have.

For React components, this could mean checking that the component renders correctly for the specified props

### Integration testing

Integration tests test how multiple components work together. These tests give a better understanding of how the user experiences the application.

### e2e testing

End-to-end test — also called UI tests — take integration tests even further by testing the whole system from the point of view of the user.

### Testing playground

[https://testing-playground.com/](https://testing-playground.com/) - dodajesz elementy DOM i dostajesz selektor do testów. JEst również rozszerzenie do chrome

## Security vulnerabilities

[https://www.simform.com/react-security-vulnerabilities-solutions/](https://www.simform.com/react-security-vulnerabilities-solutions/)

Most popular:

- Cross-site scripting
- CSV injection
- Insecure Randomness
- Arbitrary code execution
- Zip Slip - Arbitrary file write via archive
- Resources downloaded over insecure protocol
- Malicious package

### HTTP Basic Authentication

- While building the application it is of utmost importance to check if the domain WWW header has a realm attribute. This attribute is what connects the User ID and the password.
- provide a realm attribute that authenticates different users with separate code variables to avoid mismatch in the authentication of different IDs and passwords.
- It is important to be diligent that if a client or an authorized user makes a server request, the authentication of your web app should lead to a 401 status error page

### API Security Concerns

- Some of the common React API attacks are Man In The Middle (MITM) or Cross-Site Scripting (XSS) and SQL injection (SQLi).
- Validate API call commands against its respective API schemas
- Perform timely schema validations to prevent malicious code injections and security parser attacks
- Double-check that your application is secured with SSL/TLS encryptions

### DDoS Attacks

- Typically this security vulnerability occurs either because your web app was not secure enough or it had loopholes in masking the IPs of all the application services it provides
- DDoS attacks barricade the application from interacting with the host server leading to the suspension of the targeted online services.

Some of the commonly faced DDoS React security attacks and their damages are as follows:

- **UDP flooding** – Leads to inaccessibility of host services
- **ICMP flooding** – Significant slowing down of the React application
- **SYN flooding** – Easy exploitation of the application services
- **Ping of Death (POD)** – Meaningless overflow of memory buffers
- **HTTP flooding** – Spoofing of the online services leading to the permanent shutdown of services provided by the application

Following are some of the ways in which you can tackle against DDoS attacks:

- Scrub the entire React application during development and post full development to capture all the multi-type DDoS attacks
- Install a visitor identification to block bad and malicious traffic from reaching the internal program codes
- Even simple CAPTCHAs or JS tests help in securing the web app layer

### Does React Protect Against XSS?

No matter how secure a React web application is built, there are chances for it to get exposed to Cross Site Scripting (XSS) vulnerabilities over time. XSS attacks indicate malicious code being injected into your React application.

valuable insights:

- APIs like **createElement()** help in automatic detection of injection attacks
- The power of **JSX** can be leveraged in order to secure the application via its auto-escaping functionality
- Third-party libraries like **dangerouslySetInnerHTML** can be used to set HTML directly from React instead of using innetHTML that is vulnerable to XSS

A classic XSS attack occurs when a perpetrator incorporates a malicious URL within the JS protocol of the application and into the “href” anchor tag of the HTML code.

There are two types of XSS attacks:

- **Stored XSS:** Stored XSS which are caused by the persistent injection. They cause more damage to the application
- **Reflected XSS:** In this XSS type, a malicious script is reflected in the browser of a user

how can you protect your React app project against XSS? Well, just follow these approaches:

- Employ a Web Application Firewall (WAF) to counter-attack the XSS attacks with signature-based filtering
- Conduct a contextual escaping through thorough validation of the code
- Conduct URL parsing
- Conduct Whitelist or a blacklist Validation
