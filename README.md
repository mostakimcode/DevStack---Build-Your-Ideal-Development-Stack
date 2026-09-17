# DevStack - Build Your Ideal Development Stack

A responsive React + TypeScript web app where you can browse modern web
development technologies and build your own personal "tech stack" by adding and
removing items from a live sidebar.

## Technologies Used
- React.js + TypeScript
- Tailwind CSS, DaisyUI
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)

## Features
1. Browse 15 technologies across 7 categories in a fully responsive card grid.

2. Build a personal stack and add technologies to a live sidebar, with
   duplicate prevention, single-item removal, and a one-click Remove All.

3. Polished UI details: a shared orange-pink-violet gradient theme, sticky
   navbar with a mobile hamburger menu, and toast notifications for every
   stack action.


## React Questions

**What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside
JavaScript/TypeScript files. React uses it because it makes describing what
the UI should look like much easier to read and write than calling
`React.createElement()` by hand for every element.

**What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component
receiving them can't change them. State is data a component manages
*internally*, using `useState`, and it can change over time (usually in
response to user actions), which triggers a re-render.

**What does the useState hook do, and where did you use it in this project?**
`useState` lets a component hold a value that can change and re-renders the
component whenever that value is updated. I used it for the mobile menu
open/close toggle in `Nav.tsx`, and for the `technologies` list, the
`isLoading` flag in `App.tsx`, and the `stack` array in
`TechnologiesSection.tsx`.

**What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after a component renders — things like
fetching data, which shouldn't happen during the render itself. I used it in
`App.tsx` with an empty dependency array (`[]`) so the `fetch("/technologies.json")`
call only runs once, right after the component first mounts, instead of on
every re-render.

**Why does every item in a .map() list need a unique key prop?**
React uses the `key` to keep track of which rendered element corresponds to
which array item across re-renders, so it can efficiently update, reorder, or
remove just the right DOM nodes instead of re-rendering the whole list. I used
each technology's unique `id` as the key.

**What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition,
instead of always rendering the same thing. In `YourStack.tsx`, I check
`stack.length === 0` — if true, I show the "Your stack is empty." message;
otherwise, I render the list of selected items.

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props — for example,
`TechnologiesSection` passes `technologies` and `stack` down into `TechGrid`.
To send something back up, the parent passes a *function* down as a prop
(e.g. `onAdd`), and the child calls that function with the relevant data
(e.g. `onAdd(tech)`) — the actual state update still happens in the parent.