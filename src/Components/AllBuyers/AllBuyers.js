import React from "react";
import { useQuery } from "@tanstack/react-query";

const AllBuyers = () => {
  const {
    data: allbuyers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/buyers`);
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("User deleted");
      });
  };
  console.log(allbuyers);
  return (
    <div>
      <h2 className='text-3xl'>All Buyers</h2>
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
            {allbuyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>

                <td>
                  <button
                    className='btn btn-error btn-sm'
                    onClick={() => handleDelete(buyer._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
