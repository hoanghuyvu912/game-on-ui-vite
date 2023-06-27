import React, { Fragment, useCallback, useEffect, useState } from "react";
import { fetchGameLibraryApi } from "src/services/game";
import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GameLibrary() {
  const [gameLibrary, setGameLibrary] = useState([]);

  const navigate = useNavigate();

  const fetchGameLibrary = useCallback(async () => {
    const result = await fetchGameLibraryApi();
    console.log(result);

    setGameLibrary(result.data);
  }, []);

  console.log(gameLibrary);

  const userInfo = useSelector((state) => state.authentication.userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  useEffect(() => {
    fetchGameLibrary();
  }, [fetchGameLibrary]);

  const renderGameLibrary = gameLibrary.map((game, index) => {
    return (
      <Table.Row>
        <Table.Cell className="whitespace-nowrap font-medium ">
          {game.gameName}
        </Table.Cell>
        <Table.Cell>{game.gamePrice}</Table.Cell>
        <Table.Cell>{game.receiptDate}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <Fragment>
      <div>Game Library</div>
      <Table striped className="bg-gray-700">
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Developer Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Established Date</Table.HeadCell>
        </Table.Head>

        {renderGameLibrary}
      </Table>
    </Fragment>
  );
}
