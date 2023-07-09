import { TableProps } from "../../types/table.types";
import { Pagination } from "./Pagination";
import TableHead from "./TableHead";
import TableRows from "./TableRows";

export const Table = ({
  data,
  columns,
  classNames,
  tableHeadClassNames,
  tableRowsClassNames,
  pagination,
  paginationTexts,
}: TableProps) => {
  return (
    <div className="gap-0">
      <table
        className={
          "w-full text-sm text-left text-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 " +
          (classNames?.table ? classNames?.table : "")
        }
      >
        <thead
          className={
            "text-xs uppercase " + (classNames?.thead ? classNames?.thead : "")
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

      {pagination && (
        <Pagination
          currentPage={pagination.currentPage}
          pagesTotal={pagination.pagesTotal}
          itemsPerPageProps={pagination.itemsPerPageProps}
          onClickPrev={pagination.onClickPrev}
          onClickNext={pagination.onClickNext}
          classNames={pagination.classNames}
          pageText={paginationTexts?.pageText}
          prevText={paginationTexts?.prevText}
          nextText={paginationTexts?.nextText}
        />
      )}
    </div>
  );
};
