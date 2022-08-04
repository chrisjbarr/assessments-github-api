import applyCaseMiddleware from 'axios-case-converter';

/**
 * Creates an Axios client that reformats all GitHub response JSON keys from snake case to camel case.
 *
 * I realize this is an extra post processing step in translating GitHub responses, however I felt the added benefit
 * dx of using camelCase throughout the codebase to reference the response keys outweighed this overhead.
 *
 * @returns An Axios client.
 */
export const getGithubClient = () => applyCaseMiddleware(axios.create());

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
const camelToSnakeCase = (instance: string) => instance.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
