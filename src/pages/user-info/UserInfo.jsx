import { Table } from 'flowbite-react';
import React, { useState, useEffect, useCallback, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchAccountInfoApi } from 'src/services/user';
export default function UserInfo() {
  const [accountInfo, setAccountInfo] = useState();

  const fetchUserInfo = useCallback(async () => {
    const result = await fetchAccountInfoApi();

    setAccountInfo(result.data);
  }, []);

  console.log(typeof accountInfo);

  
  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const renderAccountInfo = () => {
    if (!accountInfo) {
      return null;
    }
  
    return (
      <Table.Row>
        <Table.Cell className="whitespace-nowrap font-medium">
          {accountInfo.firstName}
        </Table.Cell>
        <Table.Cell>{accountInfo.lastName}</Table.Cell>
        <Table.Cell>{accountInfo.username}</Table.Cell>
      </Table.Row>
    );
  };
  
  return (
    <div className="flex items-center">
      {accountInfo && (
        <Fragment>
          <div className="mr-8">
            <img
              src={accountInfo.profileImg}
              alt="User Image"
              className="w-40 h-40 rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">User Information</h2>
            <p className="mb-6">
              <strong>Name:</strong> {accountInfo.firstName}{accountInfo.lastName}
            </p>
            <p className="mb-6">
              <strong>Username:</strong> {accountInfo.username}
            </p>
            <p className="mb-6">
              <strong>Email:</strong> {accountInfo.email}
            </p>
            <p className="mb-6">
              <strong>Phone:</strong> {accountInfo.tel}
            </p>
            <p className="mb-6">
              <strong>Address:</strong> {accountInfo.address}
            </p>
            <p className="mb-6">
              <strong>Birthday:</strong> {accountInfo.dob}
            </p>
            <p className="mb-6">
              <strong>Gender:</strong> {accountInfo.gender}
            </p>
            <p className="mb-6">
              <strong>Balance:</strong> {accountInfo.balance}
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
}
