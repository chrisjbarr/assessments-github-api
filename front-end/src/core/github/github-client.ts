import applyCaseMiddleware from 'axios-case-converter';

export const getGithubClient = () => applyCaseMiddleware(axios.create());
