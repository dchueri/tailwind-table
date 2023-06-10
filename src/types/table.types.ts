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
}
