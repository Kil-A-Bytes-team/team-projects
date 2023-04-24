import { nanoid } from "nanoid";

export const InputGroup = ({
  label = "",
  type = "text",
  placeholder = "",
  required = false,
  value = "",
  onChange = (e) => {},
}) => {
  const id = nanoid();
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        defaultValue={value}
        type={type}
        id={id}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
