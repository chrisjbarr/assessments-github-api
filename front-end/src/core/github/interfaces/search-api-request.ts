/**
 * Represents the shape of a request to the GitHub Search Rest API
 * Learn more: https://docs.github.com/en/rest/search
 */
interface SearchApiRequest {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub.
   * To learn more: https://docs.github.com/en/rest/search#constructing-a-search-query
   */
  q: string;

  /**
   * The number of results per page (max 100).
   * Default: 100
   */
  perPage: number;

  /**
   * Page number of the results to fetch.
   * Default 1
   */
  page: number;
}
