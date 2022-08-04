import { getGithubClient } from './github-client';

const client = getGithubClient();
const baseApiUrl: URL = new URL('https://api.github.com');

export const searchGitHubUsers = async (searchRequest: SearchApiRequest): Promise<SearchApiResponse<GitHubUser>> => {
  const searchParams = (Object.keys(searchRequest) as Array<keyof typeof searchRequest>)
    .map((k) => `${k}=${searchRequest[k]}`)
    .join('&');

  const searchUsersUrl = new URL(`/search/users?${searchParams}`, baseApiUrl);
  return (await client.get<SearchApiResponse<GitHubUser>>(searchUsersUrl.toString())).data;
};
