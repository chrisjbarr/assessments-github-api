import applyCaseMiddleware from 'axios-case-converter';

const baseApiUrl: URL = new URL('https://api.github.com');

/**
 * Creates an Axios client that reformats all GitHub response JSON keys from snake case to camel case.
 *
 * I realize this is an extra post processing step in translating GitHub responses, however I felt the added benefit
 * dx of using camelCase throughout the codebase to reference the response keys outweighed this overhead.
 */
const client = applyCaseMiddleware(axios.create());

/**
 * Creates a GitHub API specific search params for the given object, translating it's keys and values
 * to querystring k=v
 *
 * GitHub's API is all snake cased. So we need to translate anything we send to them into this format -
 * The client we've created above leverages a library that does not do this for query string parameters,
 * therefore we have to do this ourselves.
 *
 * @param searchRequest Any object
 * @returns a snake case key value pair in querystring format
 */
export const createSearchParams = (searchRequest: any) => {
  return Object.keys(searchRequest)
    .map((key) => `${camelToSnakeCase(key)}=${searchRequest[key]}`)
    .join('&');
};

/**
 * Converts a camel_cased string to snake_case -
 *
 * I *definitely* took this from https://stackoverflow.com/questions/54246477/how-to-convert-camelcase-to-snake-case-in-javascript
 *
 * @param instance The string instance that should be snake cased
 * @returns a snake cased version of the string
 */
export const camelToSnakeCase = (instance: string) =>
  instance.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

/**
 * Invokes a request to the GitHub API to search for users
 *
 * @param searchRequest The request settings to be used for for the user search
 * @returns A SearchApiResponse of type GitHubUser
 */
export const searchGitHubUsers = async (searchRequest: SearchApiRequest): Promise<SearchApiResponse<GitHubUser>> => {
  const searchParams = createSearchParams(searchRequest);
  const searchUsersUrl = new URL(`/search/users?${searchParams}`, baseApiUrl);

  /**
   * In an ideal world we're catching errors here as well as validating http response codes
   * - but this isn't an ideal world. :)
   */
  return (await client.get<SearchApiResponse<GitHubUser>>(searchUsersUrl.toString())).data;
};
