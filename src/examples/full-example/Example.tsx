import { useEffect, useState } from "react";
import { Table } from "../../components";
import { Pagination } from "../../examples/full-example/Pagination";
import { IPagination } from "../../types/table.types";
import { PaginationState, UserExampleApiResponse } from "./types";

const columns = [
  { title: "ID", key: "id" },
  { title: "Nome", key: "firstName" },
  { title: "Email", key: "email" },
  { title: "Nome de usuário", key: "username" },
];

const paginationTexts = {
  pageText: "Página",
  prevText: "Anterior",
  nextText: "Próxima",
};

const Example = () => {
  const [data, setData] = useState<UserExampleApiResponse>();
  const [paginationState, setPaginationState] = useState<PaginationState>({
    itemsPerPage: 10,
    currentPage: 1,
  });
  let pagination: IPagination | undefined;

  const dataFetch = async (itemsPerPage: number, currentPage: number) => {
    return await (
      await fetch(
        `https://dummyjson.com/users?limit=${itemsPerPage}&skip=${
          (currentPage - 1) * itemsPerPage
        }`
      )
    ).json();
  };

  useEffect(() => {
    dataFetch(paginationState.itemsPerPage, paginationState.currentPage).then(
      (res) => {
        setData(res);
      }
    );
  }, [paginationState.currentPage, paginationState.itemsPerPage]);

  if (!data) return "Loading";

  const page = new Pagination(data.total, data.limit, setPaginationState);

  pagination = {
    currentPage: paginationState.currentPage,
    pagesTotal: page.pagesTotal,
    itemsPerPage: paginationState.itemsPerPage,
    onClickPrev: page.onClickPrev,
    onClickNext: page.onClickNext,
  };

  return (
    <div className="h-[100vh] flex flex-col gap-10 p-5 text-center">
      <h1 className="font-bold text-4xl">Exemplo</h1>
      <Table
        data={data.users}
        columns={columns}
        pagination={pagination}
        paginationTexts={paginationTexts}
        classNames={{
          table: "rounded-lg drop-shadow-md",
          thead: "text-gray-800",
          tbody: "bg-white",
        }}
      />
    </div>
  );
};

export default Example;
