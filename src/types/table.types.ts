import { MouseEventHandler } from "react";

interface Column {
  title: string;
  key: string;
  className?: string;
}

interface Row {
  title: string;
  key: string;
  className?: string;
}

interface StyledCell {
  key: string;
  className: string;
}

interface TableClassNames {
  table?: string;
  thead?: string;
  tbody?: string;
}

interface TableRowsClassNames {
  tr?: string;
  td?: string;
}

interface TableHeadClassNames {
  tr?: string;
  th?: string;
}

interface Pagination {
  currentPage: number;
  pagesTotal: number;
  itemsPerPage: number;
  onClickPrev: MouseEventHandler<HTMLButtonElement>;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
}

interface PaginationTexts {
  pageText?: string;
  prevText?: string;
  nextText?: string;
}

export interface PaginationTextsProps {
  currentPage: number;
  pagesTotal: number;
  pageText?: string;
}

export interface PaginationButtonsProps {
  onClickPrev: MouseEventHandler<HTMLButtonElement>;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
  hasNext: boolean;
  hasPrev: boolean;
  prevText?: string;
  nextText?: string;
}

export interface PaginationProps {
  currentPage: number;
  pagesTotal: number;
  onClickPrev: MouseEventHandler<HTMLButtonElement>;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
  pageText?: string;
  prevText?: string;
  nextText?: string;
}

export interface IPagination {
  currentPage: number;
  pagesTotal: number;
  itemsPerPage: number;
  onClickPrev: MouseEventHandler<HTMLButtonElement>;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
}

export interface TableHeadProps {
  columns: Array<Column>;
  classNames?: TableHeadClassNames;
}

export interface TableRowsProps {
  columns: Array<Column>;
  data: Array<Object>;
  classNames?: TableRowsClassNames;
  styledCells?: Array<StyledCell>;
}

export interface TableProps {
  columns: Array<Column>;
  data: Array<Object>;
  classNames?: TableClassNames;
  tableHeadClassNames?: TableHeadClassNames;
  tableRowsClassNames?: TableRowsClassNames;
  pagination?: Pagination | null;
  paginationTexts?: PaginationTexts;
}
