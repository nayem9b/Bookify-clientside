import React, { useEffect, useState } from "react";
import axios from "axios";
const MyOrders = () => {
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/booking")
      .then((data) => setBooked(data.data));
  }, []);

  return (
    <div>
      <h2 className='text-3xl'>My Orders</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {booked.map((book, i) => (
              <tr key={book._id}>
                <th>{i + 1}</th>
                <td>{book.productName}</td>
                <td>
                  {" "}
                  {book.price} <span className='text-2xl'>৳</span>{" "}
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

export default MyOrders;
