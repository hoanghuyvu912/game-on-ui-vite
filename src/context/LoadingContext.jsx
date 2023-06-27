import { createContext, useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

const DEFAULT_VALUES = {
  isLoading: false,
};

const LoadingContext = createContext(DEFAULT_VALUES);

const LoadingProvider = (props) => {
  const [state, setState] = useState(DEFAULT_VALUES);

  useEffect(() => {
    if (state.isLoading) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [state.isLoading]);

  return (
    <LoadingContext.Provider value={[state, setState]}>
      {state.isLoading && (
        <div className="absolute w-screen h-screen bg-gray-700 opacity-70 left-0 top-0 flex items-center justify-center z-10">
          <Spinner
            className="
        fill-blue-700 w-24 h-24 z-20"
          />
        </div>
      )}
      {props.children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
