import { PaginationItemsPerPageProps } from "../../types/table.types";

export const PaginationItemsPerPage = ({
  classNames,
  itemsPerPage,
  setItemsPerPage,
  text,
  options,
}: PaginationItemsPerPageProps) => {
  return (
    <div className={`items-center flex flex-row gap-1 ${classNames?.div}`}>
      <p className={`text-sm dark:text-gray-400 ${classNames?.text}`}>{text}</p>
      <select
        onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
        className={`bg-gray-50 border border-gray-300
text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block
        w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
dark:focus:border-blue-500 ${classNames?.input}`}
      >
        {options.map((opt) => (
          <option selected={itemsPerPage === opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
