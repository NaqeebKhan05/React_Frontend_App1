import React from "react";
import UserDetails from "../components/common/UserDetails";

const user = {
  id: 1,
  name: "Naqeeb Khan",
  age: 24,
};

const UserPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <UserDetails user={user} />
    </div>
  );
};

export default UserPage;
