export interface SearchResult<T> {
  total_count: number;
  items: import("/home/star/work/fetch-speaker/src/app/core/models/http/speaker.model").SpeakerSt[];
  info: T[];
  result: T[];
}