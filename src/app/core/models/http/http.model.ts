export interface SearchResult<T> {
  items: import("/home/star/work/fetch-speaker/src/app/core/models/http/speaker.model").Speaker[];
  info: T[];
  results: T[];
}