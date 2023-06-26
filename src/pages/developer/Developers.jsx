import React, { Fragment, useCallback, useEffect, useState } from "react";
import { fetchAllDevelopersApi } from "src/services/developer";
import { Table } from "flowbite-react";

export default function Developer() {
  const [developers, setDevelopers] = useState([]);

  const fetchDeveloperList = useCallback(async () => {
    const result = await fetchAllDevelopersApi();
    console.log(result);

    setDevelopers(result.data);
  }, []);

  useEffect(() => {
    fetchDeveloperList();
  }, [fetchDeveloperList]);

  const renderAllDeveloper = developers.map((developer) => {
    return (
      <>
        <Table.Body className="divide-y " key={developer.id}>
          <Table.Row
            key={developer.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-400"
          >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {developer.id}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {developer.name}
            </Table.Cell>
            <Table.Cell className="whitespace-wrap font-medium text-gray-900 dark:text-white">
              {developer.description}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {developer.establishedDate}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    );
  });

  return (
    <>
      <Table striped className="bg-gray-700" >
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Developer Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Established Date</Table.HeadCell>
        </Table.Head>
        {renderAllDeveloper}
      </Table>
    </>
  );
}
