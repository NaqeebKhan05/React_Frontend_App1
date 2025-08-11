import React from "react";
import Userdetails from "./components/common/UserDetails";

const users = {
  id: 1,
  name: "Azee",
  age: 22,
};

function App() {
  return (
    <div>
      <Userdetails user={users} />
    </div>
  );
}

export default App;
