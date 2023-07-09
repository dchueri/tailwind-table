import { PaginationProps } from "../../types/table.types";
import { PaginationButtons } from "./PaginationButtons";
import { PaginationItemsPerPage } from "./PaginationItemsPerPage";
import { PaginationText } from "./PaginationText";

export const Pagination = ({
  pageText,
  prevText,
  nextText,
  onClickPrev,
  onClickNext,
  currentPage,
  pagesTotal,
  itemsPerPageProps,
  classNames
}: PaginationProps) => {
  return (
    <div className={`w-full gap-1 mt-3 flex justify-end ${classNames?.div}`}>
      {itemsPerPageProps && (
        <PaginationItemsPerPage
          itemsPerPage={itemsPerPageProps.itemsPerPage}
          setItemsPerPage={itemsPerPageProps.setItemsPerPage}
          text={itemsPerPageProps.text}
          options={itemsPerPageProps.options}
          classNames={itemsPerPageProps.classNames}
        />
      )}
      <PaginationText
        pageText={pageText}
        currentPage={currentPage}
        pagesTotal={pagesTotal}
        classNames={classNames?.text}
      />
      <PaginationButtons
        prevText={prevText}
        nextText={nextText}
        hasNext={currentPage < pagesTotal}
        hasPrev={currentPage > 1}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        classNames={classNames?.buttons}
      />
    </div>
  );
};
