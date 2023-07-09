import { PaginationButtonsProps } from "../../types/table.types";

export const PaginationButtons = ({
  prevText,
  nextText,
  onClickPrev,
  onClickNext,
  hasPrev,
  hasNext,
  classNames
}: PaginationButtonsProps) => {
  return (
    <div className={`inline-flex my-2 xs:mt-0 ${classNames?.div}`}>
      <button
        onClick={onClickPrev}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-l dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
          !hasPrev
            ? `bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-700 ${classNames?.disabledButton}`
            : `bg-gray-400 hover:bg-gray-500 dark:bg-gray-800 dark:hover:bg-gray-900 ${classNames?.button}`
        }`}
        disabled={!hasPrev}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {prevText ? prevText : ""}
      </button>
      <button
        onClick={onClickNext}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white border-0 border-l border-gray-700 rounded-r dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
          !hasNext
            ? `bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-700 ${classNames?.disabledButton}`
            : `bg-gray-400 hover:bg-gray-500 dark:bg-gray-800 dark:hover:bg-gray-900 ${classNames?.button}`
       }`}
        disabled={!hasNext}
      >
        {nextText ? nextText : ""}
        <svg
          aria-hidden="true"
          className="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};
