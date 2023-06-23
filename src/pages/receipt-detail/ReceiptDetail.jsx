import React, { Fragment, useCallback, useEffect, useState } from "react";
import { fetchAllReceiptsApi } from "src/services/receipt";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

export default function ReceiptDetail() {
    const dispatch = useDispatch();
  
    const [receiptDetails, setReceiptDetails] = useState([]);
  
    const params = useParams();
  
    const fetchReceiptDetails = useCallback(async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/receipt-details/${params.receiptId}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setReceiptDetails(data);
      } catch (error) {}
    }, []);
  
    useEffect(() => {
      fetchReceiptDetails();
    }, [fetchReceiptDetails]);

    const renderAllReceiptDetail = receiptDetails.map((rd) => {
        return (
          <>
            <Table.Body className="divide-y" key={receipt.id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {rd.receiptId}
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
            </Table.Head>
            {renderAllReceiptDetail}
          </Table>
        </>
      );

}