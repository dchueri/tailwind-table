import { PaginationTextsProps } from "../../types/table.types";

export const PaginationText = ({
  currentPage,
  pagesTotal,
  pageText,
}: PaginationTextsProps) => {
  return (
    <p className="flex text-sm text-gray-700 dark:text-gray-400 items-center">
      {pageText ? pageText : "Página"}
      <span className="font-semibold text-gray-900 dark:text-white ml-1">
        {currentPage}
      </span>
      /
      <span className="font-semibold text-gray-900 dark:text-white">
        {pagesTotal}
      </span>
    </p>
  );
};
