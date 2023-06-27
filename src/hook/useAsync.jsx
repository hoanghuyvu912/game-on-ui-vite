import { useCallback, useContext, useEffect, useState } from "react";
import { LoadingContext } from "src/context/LoadingContext";

export const useAsync = ({ dependecies = [], service, condition = true }) => {
  const [_, setLoadingState] = useContext(LoadingContext);

  const [state, setState] = useState();

  const fetchData = async () => {
    setLoadingState({ isLoading: true });

    const response = await service();

    console.log(response);

    setLoadingState({ isLoading: false });

    // setState(result.data);
  };

  useEffect(() => {
    if (condition) {
      fetchData();
    }
  }, dependecies);

  return { state };
};
