import {
  MouseEventHandler
} from "react";

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

interface PaginationClassNames {
  div?: string;
  text?: string;
  buttons?: PaginationButtonsClassNames 
}

export interface Pagination {
  currentPage: number;
  pagesTotal: number;
  itemsPerPageProps?: PaginationItemsPerPageProps;
  onClickPrev: MouseEventHandler<HTMLButtonElement>;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
  classNames?: PaginationClassNames;
}

interface PaginationTexts {
  pageText?: string;
  prevText?: string;
  nextText?: string;
}

interface PaginationItemsPerPageClassNames {
  text?: string;
  input?: string;
  div?: string;
}

export interface PaginationItemsPerPageProps {
  itemsPerPage: number;
  text: string;
  setItemsPerPage: any;
  options: Array<number>;
  classNames?: PaginationItemsPerPageClassNames;
}

export interface PaginationTextsProps {
  currentPage: number;
  classNames?: string;
  pagesTotal: number;
  pageText?: string;
}

interface PaginationButtonsClassNames {
  div?: string;
  button?: string;
  disabledButton?: string;
}

export interface PaginationButtonsProps {
  onClickPrev: MouseEventHandler<HTMLButtonElement>;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
  hasNext: boolean;
  hasPrev: boolean;
  prevText?: string;
  nextText?: string;
  classNames?: PaginationButtonsClassNames;
}

export interface PaginationProps {
  currentPage: number;
  pagesTotal: number;
  itemsPerPageProps?: PaginationItemsPerPageProps;
  classNames?: PaginationClassNames;
  onClickPrev: MouseEventHandler<HTMLButtonElement>;
  onClickNext: MouseEventHandler<HTMLButtonElement>;
  pageText?: string;
  prevText?: string;
  nextText?: string;
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
