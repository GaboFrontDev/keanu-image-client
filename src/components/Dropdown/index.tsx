import { useState } from "react";

interface DropdownProps {
  values: string[];
  onSelect: (val: string) => void;
  selected?: string
}

export default function Dropdown(props: DropdownProps) {
  const { values, onSelect, selected = "" } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <p className="w-5/6">
        Selected: {selected}
        </p>
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {open && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {values.map((val) => (
              <li
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  onSelect(val);
                }}
              >
                {val}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
