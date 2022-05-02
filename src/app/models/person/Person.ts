import PersonResult from './PersonResult';

export default interface Person {
  page: number,
  results: PersonResult[],
  total_results: number,
  total_pages: number
}
