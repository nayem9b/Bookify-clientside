import React from "react";
import { useQuery } from "@tanstack/react-query";

const AllSeller = () => {
  const {
    data: allsellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/sellers`);
      const data = await res.json();
      return data;
    },
  });

  console.log(allsellers);
  return (
    <div>
      <h2 className='text-3xl'>All Sellers</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allsellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>

                <td>
                  <button className='btn btn-error btn-sm'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
