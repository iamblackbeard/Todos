const saveStateToLocalStorage = (state) => {
    try {
      // localStorage.setItem("todos", JSON.stringify(todoList));
      const serializedState = JSON.stringify(state);
      console.log("serializedState : ", serializedState)
      console.log("State : ", state)
      localStorage.setItem('todos', serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
  };
  
  const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);  // Proceed to the next middleware or reducer
    console.log("Action : ", action)
    console.log("Result : next(action)", result)
    saveStateToLocalStorage(store.getState()); // Save only the 'todos' slice
    return result;
  };
  
  export default localStorageMiddleware;
  