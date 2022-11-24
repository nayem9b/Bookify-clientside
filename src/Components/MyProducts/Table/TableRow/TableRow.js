import React from "react";

const TableRow = ({ product }) => {
  const { _id, name, price } = product;
  const handlePost = () => {};
  return (
    <div>
      <tbody class='divide-y divide-gray-200'>
        <tr>
          <td class='sticky inset-y-0 left-0 bg-white px-4 py-2'>
            <label class='sr-only' for='Row1'>
              Row 1
            </label>

            <input
              class='h-5 w-5 rounded border-gray-200'
              type='checkbox'
              id='Row1'
            />
          </td>
          <td class='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
            {name}
          </td>
          <td class='whitespace-nowrap px-4 py-2 text-gray-700'>{price}</td>
          <td class='whitespace-nowrap px-4 py-2 text-gray-700'></td>
          <td class='whitespace-nowrap px-4 py-2 text-gray-700'>$783.23</td>
          <td class='whitespace-nowrap px-4 py-2'>
            <button className='btn' onClick={() => handlePost(_id)}>
              Normal
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default TableRow;
