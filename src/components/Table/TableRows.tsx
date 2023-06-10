import { TableRowsProps } from "../../types/table.types";

const TableRows = ({
  columns,
  data,
  classNames,
  styledCells,
}: TableRowsProps) => {
  return data.map((d, index) => (
    <tr
      key={index}
      className={
        "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 " +
        (classNames?.tr ? classNames?.tr : "")
      }
    >
      {columns.map((column, index) => (
        <td
          key={index}
          className={"px-6 py-4 " + (classNames?.td ? classNames?.td : "")}
        >
          <div
            className={
              styledCells
                ? styledCells.find((cell) => cell.key === column.key)?.className
                : ""
            }
          >
            {
              //@ts-ignore
              d[column.key]
            }
          </div>
        </td>
      ))}
    </tr>
  ));
};

export default TableRows;
