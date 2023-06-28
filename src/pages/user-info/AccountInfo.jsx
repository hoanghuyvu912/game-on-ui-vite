import { Table } from "flowbite-react";
import React, { useState, useEffect, useCallback, Fragment } from "react";
import {
  depositAmountIntoAccount,
  fetchAccountInfoApi,
} from "src/services/user";
import { Modal, Label, TextInput } from "flowbite-react";

export default function AccountInfo() {
  const [accountInfo, setAccountInfo] = useState();

  const [depositAmount, setDepositAmount] = useState(0);

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const fetchUserInfo = useCallback(async () => {
    const result = await fetchAccountInfoApi();

    setAccountInfo(result.data);
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleDepositAmountChange = (event) => {
    setDepositAmount(event.target.value);
  };

  console.log(depositAmount);

  return (
    <div className="flex items-start w-4/5 md:w-2/3 lg:w-2/5 m-auto mt-5 justify-center border-solid border-2 border-white py-5 rounded-2xl">
      <>
        <Modal
          dismissible
          show={props.openModal === "dismissible"}
          onClose={() => props.setOpenModal(undefined)}
        >
          <Modal.Header>Enter the amount you want to deposit</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="" />
                </div>
                <TextInput
                  id="small"
                  sizing="sm"
                  type="number"
                  value={depositAmount}
                  onChange={handleDepositAmountChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={async () => {
                await depositAmountIntoAccount(depositAmount);
                props.setOpenModal(undefined);
              }}
              className="px-4 py-1 rounded bg-white text-blue-700 font-bold text-2xl"
            >
              Proceed
            </button>
            <button
              color="gray"
              onClick={() => props.setOpenModal(undefined)}
              className="px-4 py-1 rounded bg-white text-blue-700 font-bold text-2xl"
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </>
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
            <h2 className="text-2xl font-bold mb-6">Account Information</h2>
            <p className="mb-6">
              <strong>Name:</strong> {accountInfo.firstName}{" "}
              {accountInfo.lastName}
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
              <strong>Balance:</strong> ${accountInfo.balance}
            </p>
            <button
              onClick={() => props.setOpenModal("dismissible")}
              className="px-4 py-1 rounded bg-white text-blue-700 font-bold text-2xl"
            >
              Deposit
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
}
