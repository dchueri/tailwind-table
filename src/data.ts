export const getData = () => [
  {
    name: "Sofia Oliveira",
    email: "sofia.oliveira@example.com",
    status: "Ativo",
    role: "Admin",
  },
  {
    name: "João Santos",
    email: "joao.santos@example.com",
    status: "Suspenso",
    role: "Usuário",
  },
  {
    name: "Alice Pereira",
    email: "alice.pereira@example.com",
    status: "Ativo",
    role: "Admin",
  },
  {
    name: "Pedro Almeida",
    email: "pedro.almeida@example.com",
    status: "Ativo",
    role: "Admin",
  },
  {
    name: "Isabella Silva",
    email: "isabella.silva@example.com",
    status: "Suspenso",
    role: "Usuário",
  },
  {
    name: "Miguel Costa",
    email: "miguel.costa@example.com",
    status: "Ativo",
    role: "Admin",
  },
  {
    name: "Laura Rodrigues",
    email: "laura.rodrigues@example.com",
    status: "Suspenso",
    role: "Usuário",
  },
];

export const pagination = {
  currentPage: 1,
  pagesTotal: 10,
  itemsPerPage: 3,
  hasNext: true,
  hasPrev: false,
  onClickPrev: () => console.log('Prev'),
  onClickNext: () => console.log('Next')
};
