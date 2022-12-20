export interface SearchResult<T> {
  info: {
    page: number;
    seed: string;
    results: number;
    version: string;
  };
  results: T[];
}