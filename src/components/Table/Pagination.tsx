import { PaginationProps } from "../../types/table.types";
import { PaginationButtons } from "./PaginationButtons";
import { PaginationText } from "./PaginationText";

export const Pagination = ({
  pageText,
  prevText,
  nextText,
  onClickPrev,
  onClickNext,
  currentPage,
  pagesTotal,
}: PaginationProps) => {
  return (
    <div className="w-full gap-1 mt-3 flex justify-end">
      <PaginationText
        pageText={pageText}
        currentPage={currentPage}
        pagesTotal={pagesTotal}
      />
      <PaginationButtons
        prevText={prevText}
        nextText={nextText}
        hasNext={currentPage < pagesTotal}
        hasPrev={currentPage > 1}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </div>
  );
};
