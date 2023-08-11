import { Button, Input } from "@chakra-ui/react";

export default function Filter({
  searchValue,
  setSearchValue,
  setsearchParams,
}) {
  return (
    <div>
      <div className="filter-container">
        <label>
          <Input
            type="search"
            placeholder="Search for Events"
            mt="2rem"
            mb="2rem"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </label>
        <Button
          bg="blue.300"
          m=".2rem"
          color="white"
          onClick={() => setsearchParams({})}
        >
          All
        </Button>
        <Button
          bg="green.500"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [1] })}
        >
          Sports
        </Button>
        <Button
          bg="green.500"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [2] })}
        >
          Games
        </Button>
        <Button
          bg="green.500"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [3] })}
        >
          Relax
        </Button>
        <Button
          bg="green.500"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [4] })}
        >
          Travel
        </Button>
      </div>
    </div>
  );
}
