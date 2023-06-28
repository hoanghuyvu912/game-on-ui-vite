import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import { fetchAllReceiptDetailsApi } from "src/services/receiptdetail";

export default function ReceiptDetail() {
  const [receiptDetails, setReceiptDetails] = useState([]);

  const params = useParams();

  const fetchReceiptDetails = useCallback(async () => {
    const result = await fetchAllReceiptDetailsApi(params.receiptId);
    setReceiptDetails(result.data);
  }, []);

  useEffect(() => {
    fetchReceiptDetails();
  }, [fetchReceiptDetails]);

  const renderAllReceiptDetail = receiptDetails.map((rd) => {
    return (
      <>
        <Table.Body className="divide-y" key={rd.id}>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {rd.receiptId}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {rd.receiptDetailsId}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {rd.gameName}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {rd.gamePrice}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    );
  });

  return (
    <>
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Receipt Id</Table.HeadCell>
          <Table.HeadCell>Receipt Detail Id</Table.HeadCell>
          <Table.HeadCell>Game</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
        </Table.Head>
        {renderAllReceiptDetail}
      </Table>
    </>
  );
}
