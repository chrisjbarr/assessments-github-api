# GitHub Search

This repository contains some things that show off use the GitHub user search API and attempts to highlight the process I take when working on a project of any size.

## Approach

To help reviewers get an understanding of the approach I've taken towards implementing this GitHub Search, I'll create GitHub issues to represent the various states the project will be as it is progresses towards completion. I'll also work out of a feature branch per issue, with it's own pull request to `main`. These issues will be grouped into milestones, with each milestone having it's own publicly facing temporary preview site.

- [x] setup: create empty repository and document approach
- [x] setup: create github issues to represent a 'real-world' approach to this exercise
- [x] setup: scaffold a VueJS 3 app, set up tooling
- [x] setup: [https://vitest.dev/](Vitest) with a passing test
- [ ] setup: request deployments via Netlify with passing builds only
- [ ] implement: search for users and see a paginated list of results
- [ ] implement: navigate through the next and previous pages of the paginated results
- [ ] implement: see the total count of search results
- [ ] implement: see notable information for each search result, such as the description, star/follower
      count, profile pictures, etc.
- [ ] implement: select a search result and be taken to the applicable page on github.com API
- [ ] implement: [tailwindcss](https://tailwindcss.com/) and make the pretties
- [ ] implement: [TanStack Table](https://tanstack.com/table/v8) for tabular pretties and making our lives easier for table-related things
- [ ] stretch: implement [crypress](https://go.cypress.io/) for simple e2e testing
- [ ] stretch: implement [Histoire](https://histoire.dev/) for simple states of any ui elements
- [ ] stretch: implement [Cloudflare Workers](https://workers.cloudflare.com/) or Netlify Function to act as a simple proxy between front-end and GitHub API
- [ ] stretch: swap out vue for something else.. I've never worked with Svelte, so maybe let's try that

## Time Log

| Date       | Time   | Task | Description of Work                            |
| ---------- | ------ |---|  ---------------------------------------------- |
| 08/01/2022 | 15m    | N/A | Create repository and identify tasks in readme |
| 08/02/2022 | 1h     | N/A | Create GitHub issues and milestones            |
| 08/02/2022 | 1h     | [issue #1 - project/dx setup](https://github.com/chrisjbarr/github-search/issues/1)| Complete |
| 08/03/2022 | 1h     | [issue #2 - add vitest](https://github.com/chrisjbarr/github-search/issues/2) | Complete |
| 08/04/2022 | 30m    | [issue #3 - auto deploy pull requests to netlify](https://github.com/chrisjbarr/github-search/issues/2)| Completed auto deploying `main` and pull requests _from_ Netlify via file configuration. May need to switch to GitHub Actions to prevent deployments when tests fail.|
| ---        | ---    | ---                                            |
|            | 3h 45m |                                                |
