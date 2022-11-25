import React, { useEffect, useState } from "react";
import axios from "axios";

const Wishlist = () => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/wishlist")
      .then((data) => setWish(data.data));
  }, []);

  return (
    <div>
      <h2 className='text-3xl'>My Wishlist</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {wish.map((wish, i) => (
              <tr key={wish._id}>
                <th>{i + 1}</th>
                <td>{wish.name}</td>
                <td>
                  {" "}
                  {wish.price} <span className='text-2xl'>৳</span>{" "}
                </td>
                <td>
                  <button className='btn btn-xs btn-danger'>Purchase</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
