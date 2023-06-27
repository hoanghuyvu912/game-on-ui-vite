import React, { useCallback, useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { useParams } from "react-router-dom";
import { fetchUserInfoApi } from "src/services/user";

export default function UserDetail() {
  const [user, setUser] = useState([]);

  const params = useParams();

  console.log(params.userId);

  const fetchUser = useCallback(async () => {
    const result = await fetchUserInfoApi(params.userId);
    setUser(result.data);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>User Id</Table.HeadCell>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Telephone</Table.HeadCell>
          <Table.HeadCell>Dob</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>
          <Table.HeadCell>Proofile Image</Table.HeadCell>
          <Table.HeadCell>Balance</Table.HeadCell>
          <Table.HeadCell>Registed Date</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.id}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.firstName}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.lastName}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.email}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.tel}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.dob}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.gender}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <img
                class="rounded-full w-20 h-20 object-cover"
                src={user.profileImg}
                alt="image description"
              />
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.balance}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.registeredDate}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}
