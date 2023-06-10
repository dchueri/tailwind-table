import { TableProps } from "../../types/table.types";
import TableHead from "./TableHead";
import TableRows from "./TableRows";

const Table = ({
  data,
  columns,
  classNames,
  tableHeadClassNames,
  tableRowsClassNames,
}: TableProps) => {
  return (
    <table
      className={
        "w-full text-sm text-left text-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 " +
        (classNames?.table ? classNames?.table : "")
      }
    >
      <thead
        className={
          "text-xs text-gray-700 uppercase " +
          (classNames?.thead ? classNames?.thead : "")
        }
      >
        <TableHead columns={columns} classNames={tableHeadClassNames} />
      </thead>
      <tbody className={classNames?.tbody ? classNames?.tbody : ""}>
        <TableRows
          data={data}
          columns={columns}
          classNames={tableRowsClassNames}
        />
      </tbody>
    </table>
  );
};

export default Table;
