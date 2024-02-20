"use client"

import { useState } from "react";
import SectionUser from "./component/SectionUser";
import TableUser from "./component/TableUser";

const DashboardPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <SectionUser user={selectedUser}></SectionUser>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <TableUser onUserSelect={handleUserSelect}></TableUser>
      </div>
    </div>
  );
};

export default DashboardPage;
