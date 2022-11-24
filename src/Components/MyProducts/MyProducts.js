import React, { useState } from "react";
import TableRow from "./Table/TableRow/TableRow";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  fetch(`http://localhost:5000/myproducts`)
    .then((res) => res.json())
    .then((data) => setProducts(data));

  const handleAdvertise = (_id) => {
    fetch(`http://localhost:5000/myproduct/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(_id);
  };
  const handlePost = (_id) => {
    fetch(`http://localhost:5000/myproduct/${_id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className='text-3xl'>All Users</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    // onClick={() => }
                    className='btn btn-xs btn-primary'>
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-xs btn-danger'
                    onClick={() => handleAdvertise(product._id)}>
                    Advertise
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

export default MyProducts;
