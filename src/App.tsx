import { Table } from "./components/Table";
import { getData, pagination } from "./data";

function App() {
  const data = getData();
  const columns = [
    { title: "Nome", key: "name" },
    { title: "Email", key: "email" },
    { title: "Status", key: "status" },
  ];

  const paginationTexts = {
    pageText: "Page",
    prevText: "Prev",
    nextText: "Next",
  };

  

  return (
    <div className="h-[100vh] flex flex-col gap-10 p-5 text-center">
      <h1 className="font-bold text-4xl">Exemplo</h1>
      <Table
        data={data}
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
}

export default App;
