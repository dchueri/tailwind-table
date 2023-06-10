import { TableHeadProps } from "../../types/table.types";

const TableHead = ({ columns, classNames }: TableHeadProps) => {
  return (
    <tr className={classNames?.tr}>
      {columns.map((column, index) => (
        <th
          key={index}
          scope="col"
          className={"px-6 py-3 " + (classNames?.th ? classNames?.th : "")}
        >
          <div className={column.className}>{column.title}</div>
        </th>
      ))}
    </tr>
  );
};

export default TableHead;
