"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

interface User {
  id: number;
  firstName: string;
  email: string;
  company: {
    name: string;
    department: string;
  };
}

interface TableUserProps {
  onUserSelect: (user: User) => void;
}

export default function TableUser({ onUserSelect }: TableUserProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page: number = parseInt(searchParams.get("page") || "1", 10);
  const limit: number = parseInt(searchParams.get("limit") || "10", 10);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", { page, limit }],
    queryFn: () =>
      axios.get("https://dummyjson.com/users", {
        params: { skip: (page - 1) * limit, limit },
      }),
    placeholderData: keepPreviousData,
  });

  const handlePageClick = (selected: any) => {
    const selectedPage = selected.selected + 1;
    router.push(`/?page=${selectedPage}`);
  };

  const totalPage = Math.ceil((data?.data.total || 0) / limit);
  console.log(totalPage);

  console.log(data?.data.users);
  const dataUsers = data?.data.users;

  return (
    <>
      <div className="bg-white rounded shadow p-4 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody className="">
            {isLoading ? (
              <div>Loading user data ...</div>
            ) : isError ? (
              <div>Fail to load user data: {error.message}</div>
            ) : (
              dataUsers.map((user: any) => (
                <tr
                  className="tr-user cursor-pointer border-t border-gray-300"
                  key={user.id}
                  onClick={() => onUserSelect(user)}
                >
                  <td className="text-center p-3">{user.firstName}</td>
                  <td className="text-center p-3">{user.email}</td>
                  <td className="text-center p-3">{user.company.name}</td>
                  <td className="text-center p-3">{user.company.department}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <div className="w-full flex items-center justify-center">
        <ReactPaginate
          className="flex items-center justify-center gap-2"
          breakLabel="..."
          nextLabel={<BsChevronDoubleRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPage}
          previousLabel={<BsChevronDoubleLeft />}
          renderOnZeroPageCount={null}
          forcePage={page - 1}
          pageClassName="paginate-item flex items-center justify-center border border-gray-300 cursor-pointer w-10 h-10"
        />
      </div>
    </>
  );
}
