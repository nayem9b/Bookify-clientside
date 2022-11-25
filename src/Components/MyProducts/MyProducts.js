import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import TableRow from "./Table/TableRow/TableRow";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickedProduct] = useState();
  const [click, setClick] = useState(1);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/myproducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAdvertise = (_id) => {
    fetch(`http://localhost:5000/myproduct/${_id}`)
      .then((res) => res.json())
      .then((data) => setClickedProduct(data));
    const {
      name,
      condition,
      mobileNumber,
      originalPrice,
      place,
      description,
      price,
    } = clickedProduct;
    const advertise = {
      name: name,
      mobileNumber: mobileNumber,
      place: place,
      description: description,
      originalPrice: originalPrice,
      condition: condition,
      email: user.email,
    };
    console.log(clickedProduct);
    console.log(name, mobileNumber, place, price);

    fetch(`http://localhost:5000/myproduct/new`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertise),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myproducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("Product deleted");
      });
  };

  return (
    <div>
      <h2 className='text-3xl'>All Products</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>
                  {" "}
                  {product.price} <span className='text-2xl'>৳</span>{" "}
                </td>
                <td>
                  <button
                    className='btn btn-error btn-xs'
                    onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleAdvertise(product._id);
                      setClick(0);
                    }}
                    className='btn btn-xs btn-danger'>
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
