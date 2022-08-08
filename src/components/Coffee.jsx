import React from "react";
import { useState } from "react";

function Coffee() {
  const [coffeeList, setCoffeeList] = useState();
  //   const getCoffee = (temperature) => {
  //     // fetch the coffee API
  //     fetch(`https://api.sampleapis.com/coffee/${temperature}`)
  //       .then((results) => results.json())
  //       .then((data) => setCoffeeList(data))
  //       .catch((err) => alert(err));
  //   };
  //and take theresults and dump those into setCoffeeList

  const getCoffeeSync = async (temperature) => {
    try {
      const results = await fetch(
        `https://api.sampleapis.com/coffee/${temperature}`
      );
      const data = await results.json();
      setCoffeeList(data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <button onClick={() => getCoffeeSync("hot")}>HOT</button>
      <button onClick={() => getCoffeeSync("iced")}>ICED</button>
      <section>
        <h2>Coffee List</h2>
        {!coffeeList ? (
          <p>Loading...</p>
        ) : (
          coffeeList.map((coffee) => <p key={Coffee.id}>{coffee.title}</p>)
        )}
      </section>
    </>
  );
}

export default Coffee;
