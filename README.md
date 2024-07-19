# To-Do App using React

This is a simple To-Do application built with React. It allows users to add, complete, and delete tasks. 

## Features

- **Add Tasks:** Users can add tasks using an input text box and an "+" button.
- **Display Tasks:** Added tasks are displayed in a list.
- **Complete Tasks:** Tasks can be marked as completed using a checkbox.
- **Delete Tasks:** Users can delete tasks from the list.

 
## Usage

1. Use the input text box to add tasks. Click the "+" button to add the task to the list.
2. Use the checkbox to mark tasks as completed.
3. Use the "delete" button to remove tasks from the list.

## Code Structure

- **App.js:** The main component that holds the state and renders the task input, task list, and handles the logic for adding, completing, and deleting tasks.
- **InputContainer:** It  renders an input field for entering tasks and a button to add the task to the list. It takes `inputVal` for the current input value, `writeTodo` for updating the input value, and `addTodo` for adding the task.
-**TodoContainer:** It renders a list of `Todo` items passed in via the `todos` prop. It maps over the `todos` array and renders each `Todo` component, passing the `todo` data, `index`, and `delTodo` function for deleting tasks.
-**Todo:** It displays an individual task with a checkbox for marking it as complete and a button for deleting it using the `delTodo` function with the task's index.

