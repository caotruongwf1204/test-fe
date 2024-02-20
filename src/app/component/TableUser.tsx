import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function TableUser() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: "users",
    queryFn: () => axios.get("https://dummyjson.com/users"),
  });

  console.log(data, isLoading, isError, error);

  return (
    <div className="bg-white rounded shadow p-4">
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
