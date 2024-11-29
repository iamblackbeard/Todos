const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('todos');
      if (serializedState === null) {
        return undefined; // No saved state in localStorage
      }
      console.log("state from database : ", serializedState)
      return JSON.parse(serializedState);  // Return parsed state
    } catch (err) {
      console.error("Could not load state", err);
      return undefined;
    }
  };
  
  export default loadStateFromLocalStorage;
  