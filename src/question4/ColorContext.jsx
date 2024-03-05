import { createContext, useReducer, useContext } from "react";

export const ColorContext = createContext();

const initialState = {
  favColor: "",
};

function colorReducer(state, action) {
  if (action.type === "setFav") {
    return { ...state, favColor: action.payload };
  }
  return state;
}

export const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};
