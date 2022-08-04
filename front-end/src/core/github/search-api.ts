import { createSearchParams, getGitHubClient } from './github-client';

const client = getGitHubClient();
const baseApiUrl: URL = new URL('https://api.github.com');

/**
 * Invokes a request to the GitHub API to search for users
 *
 * @param searchRequest The request settings to be used for for the user search
 * @returns A SearchApiResponse of type GitHubUser
 */
export const searchGitHubUsers = async (searchRequest: SearchApiRequest): Promise<SearchApiResponse<GitHubUser>> => {
  const searchParams = createSearchParams(searchRequest);
  const searchUsersUrl = new URL(`/search/users?${searchParams}`, baseApiUrl);
  return (await client.get<SearchApiResponse<GitHubUser>>(searchUsersUrl.toString())).data;
};
