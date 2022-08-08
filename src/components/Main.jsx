import React from "react";
import StudentCard from "./StudentCard";

const student = {
  name: "Khali Gopaul",
  age: 37,
  id: "r64j83",
  term: "sw22",
};

function Main({ name }) {
  return (
    <main>
      <h1>Hello {name || "Guest"}</h1>
      {name && <StudentCard student={student} />}
    </main>
  );
}

export default Main;
