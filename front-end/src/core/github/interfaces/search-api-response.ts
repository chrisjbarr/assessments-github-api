/**
 * Represents the shape of a GitHub Search API Response.
 */
interface SearchApiResponse<T> {
  /**
   * The total count of results found for the search request.
   */
  totalCount: number;

  /**
   * True if the API request exceeded the time limit, else false.
   */
  incompleteResults: boolean;

  /**
   * An array of search results in the given type.
   */
  items: Array<T>;
}
