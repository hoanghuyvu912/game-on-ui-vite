import React, { Fragment, useCallback, useEffect, useState } from "react";
import { fetchAllReceiptsApi } from "src/services/receipt";
import { Table } from "flowbite-react";
import ReceiptDetail from "../receipt-detail/ReceiptDetail";
import { useNavigate } from "react-router-dom";

export default function Receipt() {
  const navigate = useNavigate();

  const [receipts, setReceipt] = useState([]);

  const fetchReceiptList = useCallback(async () => {
    const result = await fetchAllReceiptsApi();
    console.log(result);

    setReceipt(result.data);
  }, []);

  useEffect(() => {
    fetchReceiptList();
  }, [fetchReceiptList]);

  const renderAllReceipt = receipts.map((receipt) => {
    return (
      <>
        <Table.Body className="divide-y" key={receipt.id}>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-400"  onClick={() => {
              navigate(`/admin/receipts-management/${receipt.id}`);
            }}>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {receipt.id}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white" >
              {receipt.userId}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {receipt.userName}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {receipt.receiptDate}
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
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>User Id</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Receipt Date</Table.HeadCell>
        </Table.Head>
        {renderAllReceipt}
      </Table>
    </>
  );
}
