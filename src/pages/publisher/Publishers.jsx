import React, { useCallback, useEffect, useState } from "react";
import { fetchAllPublishersApi } from "src/services/publisher";
import { Table } from "flowbite-react";

export default function Publishers() {
  const [publishers, setPublishers] = useState([]);

  const fetchPublisherList = useCallback(async () => {
    const result = await fetchAllPublishersApi();
    console.log(result);
    setPublishers(result.data);
  }, []);

  useEffect(() => {
    fetchPublisherList();
  }, [fetchPublisherList]);

  const renderAllPublishers = publishers.map((publisher) => {
    return (
      <>
        <Table.Body className="divide-y" key={publisher.id}>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-400">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-2/12">
              {publisher.id}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-3/12">
              {publisher.name}
            </Table.Cell>
            <Table.Cell className="whitespace-wrap font-medium text-gray-900 dark:text-white w-5/12">
              {publisher.description}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-2/12">
              {publisher.establishedDate}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    );
  });

  return (
    <>
      <Table striped className="bg-gray-700">
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Publisher Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Established Date</Table.HeadCell>
        </Table.Head>
        {renderAllPublishers}
      </Table>
    </>
  );
}
