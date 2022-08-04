interface SearchApiResponse<T> {
  totalCount: number;
  incompleteResults: boolean;
  items: Array<T>;
}
