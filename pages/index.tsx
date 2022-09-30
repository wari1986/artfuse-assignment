import { useQuery } from "react-query";
import { useState } from "react";
import type { NextPage } from "next";
import InputForm from "../components/InputForm";

const Home: NextPage = () => {
  const [num, setNum] = useState(0);
  function genRandomNumber(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(genRandomNumber(1, 100));
  };

  const fetchEven = async () => {
    const res = await fetch(`https://api.isevenapi.xyz/api/iseven/${num}/`);
    return res.json();
  };

  const { data, status, refetch } = useQuery(
    "filteredEven",
    fetchEven
    // {
    //   enabled: false,
    // }
  );

  if (status === "loading") {
    return (
      <div className="grid place-items-center mt-80 text-4xl my-auto">
        Loading....
      </div>
    );
  }

  if (status === "error") {
    return <div className="grid place-items-center mt-80 text-4xl">Error</div>;
  }

  console.log(num);
  return (
    <>
      {/* <InputForm id={props.id} addNumber={addNumber} /> */}
      {num ? (
        <h1>
          Number {num} is {data.iseven ? "even" : "not even"}{" "}
        </h1>
      ) : (
        "generate a number"
      )}
      <button
        onClick={() => {
          handleClick()
        }}
      >
        Generate Random Number
      </button>
    </>
  );
};

export default Home;
