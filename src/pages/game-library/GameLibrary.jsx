import React from 'react'

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
    <div>Game Library</div>
  )
}
