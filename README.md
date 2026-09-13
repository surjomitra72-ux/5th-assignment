# 🚀 DevStack

DevStack is a modern and responsive web application that helps developers explore popular technologies and build their own personalized technology stack.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite
- React Icons

## ✨ Features

### 1. 🔍 Explore Technologies

Users can explore popular development technologies with their name, category, description, difficulty level, rating, and badge.

### 2. ➕ Build Your Own Stack

Users can add their favorite technologies to their personal stack and create a customized technology stack.

### 3. 🗑️ Manage Your Stack

Users can remove individual technologies from their stack or remove all selected technologies at once. Duplicate technologies cannot be added.

## 📱 Responsive Design

DevStack is responsive and works on:

- 📱 Mobile
- 💻 Tablet
- 🖥️ Desktop

## 🚀 Run Locally

Clone the repository:

https://github.com/surjomitra72-ux/5th-assignment



## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.  
It makes React UI code easier to read and write.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.  
**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and update component data.  
In this project, I used it to store and manage the selected technologies in **Your Stack**.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders.  
I used it to fetch and load the technology data from the JSON file when the page loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.  
It allows React to update the correct item efficiently when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show an empty stack message when no technology has been selected:


{selectedCards.length === 0 ? (
  <p>Your Stack is empty.</p>
) : (
  <div>
    {selectedCards.map((card) => (
      // cards
    ))}
  </div>
)}