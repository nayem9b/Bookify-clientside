import React from "react";
import TableRow from "../TableRow/TableRow";

const Tableheader = () => {
  return (
    <div>
      <thead class='bg-gray-100'>
        <tr>
          <th class='sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left'>
            <label class='sr-only' for='SelectAll'>
              Select All
            </label>

            <input
              class='h-5 w-5 rounded border-gray-200'
              type='checkbox'
              id='SelectAll'
            />
          </th>
          <th class='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
            <div class='flex items-center gap-2'>
              ID
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-4 w-4 text-gray-700'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
          </th>
          <th class='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
            <div class='flex items-center gap-2'>
              Name
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-4 w-4 text-gray-700'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
          </th>
          <th class='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
            <div class='flex items-center gap-2'>
              Email
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-4 w-4 text-gray-700'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
          </th>
          <th class='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
            <div class='flex items-center gap-2'>
              Amount
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-4 w-4 text-gray-700'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
          </th>
          <th class='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
            Status
          </th>
        </tr>
      </thead>
      <TableRow></TableRow>
    </div>
  );
};

export default Tableheader;
