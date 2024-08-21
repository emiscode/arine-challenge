# Arine Challenge

## 1: console.log() in javascript event loop

The event loop is a fundamental concept in JavaScript that explains how the language handles asynchronous operations. Understanding it involves knowing about:

- Call Stack: Where synchronous code is executed.

- Callback Queue: Where callbacks from asynchronous operations (like setTimeout) wait to be executed.

- Microtask Queue: Used for promises and MutationObserver callbacks. Microtasks have higher priority than tasks in the Callback Queue.
  You might be asked to explain the behavior of console.log() in an asynchronous scenario. For example, in code like this:

```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

### The expected output would be:

```text
Start
End
Promise
Timeout
```

### Explanation:

Synchronous code is executed first: Start, then End.
The promise callback (Promise.resolve().then) is a microtask, so it runs before the setTimeout, which is a macro task.

## 2: create a list button component in react that receives an array of strings and renders a button for each string

- Check out the solution within this project (app/arine)

- Run the App

```bash
npm run dev
```

## 3: import a file on react and filter the duplicated entries by its values, for instance "en" is duplicated here

- Check out the solution within this project (app/node)

- Run the code with node (tsx)

```bash
tsx app/node/index.ts
```

```json
{
"supportedLanguages": {
"English": "en",
"Portuguese": "pt",
"Spanish": "es",
"english": "en"
}
```

## 4: why use keys in react, it it related to performance?

In React, keys help identify which items have changed, been added, or been removed. Keys should be given to elements inside the array to give those elements a stable identity.

- Why Use Keys?: React uses keys to optimize the process of reconciling (comparing the current virtual DOM with the previous one) by identifying which elements need updates. Without keys, React might unnecessarily re-render all components, which would hurt performance.

- Related to Performance?: Yes, keys improve performance. They allow React to skip re-rendering components that have not changed. Without proper keys, React may have to re-render entire lists even if only one item changes.
