export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("LOAD ERR", err);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("ERROR from local storage save state", err);
  }
};

export const resetState = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log("ERROR from local storage save state", err);
  }
};
