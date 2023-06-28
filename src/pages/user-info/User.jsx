import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteUserByIdApi, fetchAllUsersApi } from "src/services/user";
import { IconX } from "@tabler/icons-react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const fetchUsers = useCallback(async () => {
    const result = await fetchAllUsersApi();
    setUsers(result.data);
  }, []);

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handeDeleteUserById = async (id) => {
    await deleteUserByIdApi(id);
  };

  const renderAllUsers = users.map((user, index) => {
    return (
      <>
        <Table.Body className="divide-y" key={index + 1}>
          <Table.Row
            onClick={() => {
              navigate(`/admin/users-management/${user.id}`);
            }}
            className=" cursor-pointer bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-400"
          >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.id}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.username}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.active ? (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  Active
                </div>
              ) : (
                <>
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                  Inactive
                </>
              )}
            </Table.Cell>
            <Table.Cell>
              <IconX
                onClick={() => {
                  handeDeleteUserById(user.id);
                }}
                className="text-white bg-red-700 hover:bg-red-500 rounded"
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    );
  });

  return (
    <>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>User Id</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        {renderAllUsers}
      </Table>
    </>
  );
}
