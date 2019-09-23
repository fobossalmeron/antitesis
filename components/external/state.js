const initialState = {
  x: 0,
  y: 0
};

let state = initialState;

let listeners = [];

export const setState = newState => {
  state = newState;
  listeners.forEach(listener => listener(state));
};

export const getState = () => state;

export const addStateChangeListener = listener => {
  listeners.push(listener);
};

export const removeAllListeners = () => {
  listeners = [];
};
