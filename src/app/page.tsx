"use client"

import { useState } from "react";
import SectionUser from "./component/SectionUser";
import TableUser from "./component/TableUser";

const DashboardPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user:any) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full p-4">
        <SectionUser user={selectedUser}></SectionUser>
      </div>
      <div className="w-full p-4">
        <TableUser onUserSelect={handleUserSelect}></TableUser>
      </div>
    </div>
  );
};

export default DashboardPage;
