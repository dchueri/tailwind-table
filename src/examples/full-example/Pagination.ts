import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { PaginationState } from "./types";

export class Pagination {
  readonly pagesTotal: number;
  readonly itemsPerPage: number;
  readonly onClickPrev: MouseEventHandler<HTMLButtonElement>;
  readonly onClickNext: MouseEventHandler<HTMLButtonElement>;

  constructor(
    itemsTotal: number,
    itemsPerPage: number,
    setPaginationState: Dispatch<SetStateAction<PaginationState>>
  ) {
    this.pagesTotal = itemsTotal / itemsPerPage;
    this.itemsPerPage = itemsPerPage;
    this.onClickPrev = () =>
      setPaginationState((prevValue) => ({
        ...prevValue,
        currentPage:
          prevValue.currentPage > 1
            ? prevValue.currentPage - 1
            : prevValue.currentPage,
      }));
    this.onClickNext = () =>
      setPaginationState((prevValue) => ({
        ...prevValue,
        currentPage:
          prevValue.currentPage < this.pagesTotal
            ? prevValue.currentPage + 1
            : prevValue.currentPage,
      }));
  }

  getCurrentPage(
    startItem: number,
    itemsPerPage: number,
    pagesTotal: number
  ): number {
    const calculatedPage =
      Math.ceil((startItem - itemsPerPage + 1) / itemsPerPage) + 1;

    if (calculatedPage < 1) {
      return 1;
    }
    if (calculatedPage > pagesTotal) {
      return pagesTotal;
    }
    return calculatedPage;
  }
}
