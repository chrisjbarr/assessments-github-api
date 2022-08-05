# GitHub Search

This repository contains some things that show off use the GitHub user search API and attempts to highlight the process I take when working on a project of any size. The live version of the `main` branch can be [seen here](https://cozy-daifuku-117f2f.netlify.app/).

## Current Build Status

[![Buidl / Test](https://github.com/chrisjbarr/github-search/actions/workflows/node.js.yml/badge.svg)](https://github.com/chrisjbarr/github-search/actions/workflows/node.js.yml)

## Approach

To help reviewers get an understanding of the approach I've taken towards implementing this GitHub Search, I'll create GitHub issues to represent the various states the project will be as it is progresses towards completion. I'll also work out of a feature branch per issue, with it's own pull request to `main`. These issues will be grouped into milestones, with each milestone having it's own publicly facing temporary preview site.

- [x] setup: create empty repository and document approach
- [x] setup: create github issues to represent a 'real-world' approach to this exercise
- [x] setup: scaffold a VueJS 3 app, set up tooling
- [x] setup: [https://vitest.dev/](Vitest) with a passing test
- [x] setup: request deployments via Netlify with passing builds only
- [x] implement: search for users and see a paginated list of results
- [x] implement: navigate through the next and previous pages of the paginated results
- [x] implement: see the total count of search results
- [x] implement: see notable information for each search result, such as the description, star/follower
      count, profile pictures, etc.
- [x] implement: select a search result and be taken to the applicable page on github.com API
- [x] implement: [tailwindcss](https://tailwindcss.com/) and make the pretties, components, composables
- [ ] stretch: [TanStack Table](https://tanstack.com/table/v8) for tabular pretties and making our lives easier for table-related things
- [ ] stretch: implement [crypress](https://go.cypress.io/) for simple e2e testing
- [ ] stretch: implement [Histoire](https://histoire.dev/) for simple states of any ui elements
- [ ] stretch: implement [Cloudflare Workers](https://workers.cloudflare.com/) or Netlify Function to act as a simple proxy between front-end and GitHub API
- [ ] stretch: swap out vue for something else.. I've never worked with Svelte, so maybe let's try that

## Time Log

| Date       | Time    | Task                                                                                                            | Description of Work                                                                                                                                                   |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 08/01/2022 | 15m     | N/A                                                                                                             | Create repository and identify tasks in readme                                                                                                                        |
| 08/02/2022 | 1h      | N/A                                                                                                             | Create GitHub issues and milestones                                                                                                                                   |
| 08/02/2022 | 1h      | [issue #1 - project/dx setup](https://github.com/chrisjbarr/github-search/issues/1)                             | Complete                                                                                                                                                              |
| 08/03/2022 | 1h      | [issue #2 - add vitest](https://github.com/chrisjbarr/github-search/issues/2)                                   | Complete                                                                                                                                                              |
| 08/04/2022 | 30m     | [issue #3 - auto deploy pull requests to netlify](https://github.com/chrisjbarr/github-search/issues/2)         | Completed auto deploying `main` and pull requests _from_ Netlify via file configuration. May need to switch to GitHub Actions to prevent deployments when tests fail. |
| 08/04/2022 | 30m     | [issue #3 - auto deploy pull requests to netlify](https://github.com/chrisjbarr/github-search/issues/2)         | Setup GitHub Action to run build and test - no luck on closer integration with Netlify to prevent failing test builds from deploying to demo previews.                |
| 08/05/2022 | 5h      | [issues 4 - 8] - GitHub Search API implementation                                                               | Not sure why I broke these out into 5 seperate issues; wound up closing them all with one pull request.                                                               |
| 08/06/2022 | 5h      | [issues 9](https://github.com/chrisjbarr/github-search/issues/9) - Implement: Tailwind, Composables, Components | This was fun                                                                                                                                                          |
|            |         |                                                                                                                 |
|            | 14h 15m |                                                                                                                 |

## Milestone Preview Deployments

| Milestone                                                                   | Link                                                                           | Description                                                                                                                                                                                                                                                               | Issues                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [First Milestone](https://github.com/chrisjbarr/github-search/milestone/1)  | [Netlify Preview](https://deploy-preview-17--cozy-daifuku-117f2f.netlify.app)  | This first deployment of our Vue project... this milestone does not incorporate GitHub Search functionality... it's just a simple way for us to prove out our initial setup is complete along with having a pull request build & release pipeline integrated with Netlify | <ul><li>[Issue 1](https://github.com/chrisjbarr/github-search/issues/1) - [Pull Request](https://github.com/chrisjbarr/github-search/pull/15) - Scaffold VueJS 3 App + Tooling</li><li>[Issue 2](https://github.com/chrisjbarr/github-search/issues/2) - [Pull Request](https://github.com/chrisjbarr/github-search/pull/16) - Setup Vitest with passing tests</li><li>[Issue 3](https://github.com/chrisjbarr/github-search/issues/3) - [Pull Request](https://github.com/chrisjbarr/github-search/pull/17) - Setup Netlify Deployment Previews for Pull Requests</li></ul> |
| [Second Milestone](https://github.com/chrisjbarr/github-search/milestone/2) | [Netlify Preview](https://deploy-preview-18--cozy-daifuku-117f2f.netlify.app/) | The second deployment has integration with the GitHub Search API - though it does not look very appealing.                                                                                                                                                                | <ul><li>Issues 4, 5, 6, 7 and 8 - [Pull Request](https://github.com/chrisjbarr/github-search/pull/18)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Third Milestone](https://github.com/chrisjbarr/github-search/milestone/3)  | [Netlify Preview](https://deploy-preview-19--cozy-daifuku-117f2f.netlify.app/) | The third deployment looks pretty sweet actually, not too shabby.                                                                                                                                                                                                         | <ul><li>[Issue 9](https://github.com/chrisjbarr/github-search/issues/9) - [Pull Request](https://github.com/chrisjbarr/github-search/pull/19)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Notes from Chris

- For [issue #3](https://github.com/chrisjbarr/github-search/issues/3) - I would have liked to integrate GitHub Actions with Netlify via webhooks and only trigger a deployment when the pull request's build, linting and tests pass. I wasn't able to find a way to do this with Netlify Preview Deployments while browsing their documentation. :( So for now, we're just running the GitHub Action to build and test (linting later?) and letting Netlify automated pull request deployments do their thing. Not ideal, but for a take home project it's good enough - and illustrates my desire to do the right thing.

- For [issues 4 - 8] - I left a good amount [of comments in the pull request](https://github.com/chrisjbarr/github-search/pull/18) but the main thing I wanted to call out here was the instructions requested showing follower/follows/star counts for each user retrieved - however the GitHub REST API response for this did not have these values. To get them I would have needed to n+3 called out to GitHub for this data (or allow the user to infer them via an explicit link-click in the UI to make a request to get the data). Had I used the GraphQL API I probably could have included this in the one and only query request, but was already down the path of REST API and didn't want to switch over.

## Known Limitations / Bugs

- There isn't any error handling around the requests to the GitHup API - sometimes things will break and a refresh of the page is required. =/
  - If there are more than 10 requests in a minute, GitHub will return a `403` "API rate limit exceeded for [your ip address]."
  - If you attempt to paginate beyond 1,000 records in the UI, GitHub will return a `422` "Only the first 1000 search results are available"
- There's probably some pagination math bugs and some other unknowns - There is not a lot of unit tests nor did I have a lot of time to really try to break the UI
