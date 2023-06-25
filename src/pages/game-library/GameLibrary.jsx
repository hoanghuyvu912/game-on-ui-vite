import React, { useState, useEffect, useCallback } from "react";
import { fetchGameLibraryApi } from "src/services/game";
import { Table } from "flowbite-react";
'use client';
export default function GameLibrary() {
  const [gameLibrary, setGameLibrary] = useState([]);

  const fetchGameLibrary = useCallback(async () => {
    const result = await fetchGameLibraryApi();
    console.log(result);

    setGameLibrary(result.data);
  }, []);

  console.log(gameLibrary);

  useEffect(() => {
    fetchGameLibrary();
  }, [fetchGameLibrary]);

  const renderGameLibrary = gameLibrary.map((game, index) => {
    return (
      <Table.Row >
        <Table.Cell className="whitespace-nowrap font-medium ">
          {game.gameName}
        </Table.Cell>
        <Table.Cell>
          {game.gamePrice}
        </Table.Cell>
        <Table.Cell>
          {game.receiptDate}
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
        <Table hoverable >
          <Table.Head>
            <Table.HeadCell>
              Game
            </Table.HeadCell>
            <Table.HeadCell>
              Price
            </Table.HeadCell>
            <Table.HeadCell>
              Date
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {renderGameLibrary}
          </Table.Body>
        </Table>
    </>
  )
}
