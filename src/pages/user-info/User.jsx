import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAllUsersApi } from "src/services/user";
export default function Users() {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const fetchUsers = useCallback(async () => {

        const result = await fetchAllUsersApi();
        setUsers(result.data);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);


    const renderAllUsers = users.map((user, index) => {

        return (
            <>
                <Table.Body className="divide-y" key={index + 1} onClick={() => {
                    navigate(`/admin/user/${user.id}`)
                }}>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {user.id}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {user.username}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {user.active ? (
                                <>
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                    Active
                                </>
                            ) : (
                                <>
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                                    Inactive
                                </>
                            )}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </>
        );
    });

    return (
        <>
            <Table striped >
                <Table.Head>
                    <Table.HeadCell>User Id</Table.HeadCell>
                    <Table.HeadCell>User Name</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                </Table.Head>
                {renderAllUsers}
            </Table>
        </>
    );

}