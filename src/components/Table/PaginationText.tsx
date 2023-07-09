import { PaginationTextsProps } from "../../types/table.types";

export const PaginationText = ({
  currentPage,
  pagesTotal,
  pageText,
  classNames
}: PaginationTextsProps) => {
  return (
    <p className={`flex text-sm text-gray-700 dark:text-gray-400 items-center ${classNames}`}>
      {pageText ? pageText : "Página"}
      <span className="font-semibold ml-1">
        {currentPage}
      </span>
      /
      <span className="font-semibold">
        {pagesTotal}
      </span>
    </p>
  );
};
