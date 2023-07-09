import { useEffect, useState } from "react";
import { Table } from "../../components";
import { Pagination as PaginationClass } from "../../examples/full-example/Pagination";
import {
  Pagination,
  PaginationItemsPerPageProps,
} from "../../types/table.types";
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
  let pagination: Pagination | undefined;

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

  if (!data) return <p>Loading...</p>;

  const page = new PaginationClass(data.total, data.limit, setPaginationState);

  const itemsPerPageProps: PaginationItemsPerPageProps = {
    itemsPerPage: paginationState.itemsPerPage,
    setItemsPerPage: page.setItemsPerPage,
    text: "Usuários por página",
    options: [5, 10, 20, 50],
  };
  pagination = {
    currentPage: paginationState.currentPage,
    pagesTotal: page.pagesTotal,
    itemsPerPageProps: itemsPerPageProps,
    onClickPrev: page.onClickPrev,
    onClickNext: page.onClickNext,
  };

  return (
    <div className="h-[100vh] flex flex-col gap-10 p-5 text-center dark:bg-black">
      <h1 className="font-bold text-4xl dark:text-white">Exemplo</h1>
      <Table
        data={data.users}
        columns={columns}
        pagination={pagination}
        paginationTexts={paginationTexts}
        classNames={{
          table: "rounded-lg drop-shadow-md",
          thead: "text-gray-800 dark:text-gray-100",
          tbody: "bg-white dark:text-gray-300",
        }}
      />
    </div>
  );
};

export default Example;
