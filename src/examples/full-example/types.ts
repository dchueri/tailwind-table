export interface User {
  id: number;
  fistName: string;
  lastName: string;
  age: number;
  birthDate: string;
  status: string;
}

export interface UserExampleApiResponse {
  users: Array<User>;
  total: number;
  skip: number;
  limit: number;
}

export interface PaginationState {
  itemsPerPage: number;
  currentPage: number;
}
