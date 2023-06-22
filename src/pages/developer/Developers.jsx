import React, { Fragment, useCallback, useEffect, useState } from "react";
import { fetchAllDevelopersApi } from "src/services/developer";

export default function Developer() {
  const [developers, setDevelopers] = useState([]);

  const fetchDeveloperList = useCallback(async () => {
    const result = await fetchAllDevelopersApi();
    console.log(result);

    setDevelopers(result.data);
  }, []);

  useEffect(() => {
    fetchDeveloperList();
  }, [fetchAllDevelopersApi]);

  const renderAllDeveloper = developers.map((developer) => {
    return (
        <div>
            <p>{developer.name}</p>
            <p>{developer.establishedDate}</p>
        </div>
    )
  });

  return <div>{renderAllDeveloper}</div>;
}
