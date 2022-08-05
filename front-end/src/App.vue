<script setup lang="ts">
import { searchGitHubUsers } from './core/github/github-client.js';
import { githubSearchInputDebounceInMsProviderKey } from './core/provider-keys/app.js';

const inputDebouceInMs = 800;

/**
 * I couldn't come up with a better way to debounce an entire object, and now I'm questioning all my life's
 * decisions that led up to this moment.
 */
const keywordsInput = ref('');
const pageInput = ref(1);
const debouncedKeywordsInput = refDebounced(keywordsInput, inputDebouceInMs);
const debouncedPageInput = refDebounced(pageInput, inputDebouceInMs);

const searchRequest = ref({
  q: debouncedKeywordsInput,
  perPage: 100,
  page: debouncedPageInput
});

const searchResults = ref<SearchApiResponse<GitHubUser>>();

watchEffect(async () => {
  if (searchRequest.value.q !== '') {
    searchResults.value = await searchGitHubUsers(searchRequest.value);
  }
});

const isPreviousResultsAvailable = computed(() => {
  return searchRequest.value.page > 1;
});

const isNextResultsAvailable = computed(() => {
  return searchRequest.value.page < totalPages.value;
});

const totalPages = computed(() => {
  if (searchResults.value !== null) {
    return Math.ceil(searchResults.value!.totalCount / searchRequest.value.perPage);
  }

  return 0;
});

const handlePreviousClick = () => {
  searchRequest.value.page--;
};

const handleNextClick = () => {
  searchRequest.value.page++;
};

provide(githubSearchInputDebounceInMsProviderKey, inputDebouceInMs);
</script>

<template>
  <div class="flex h-screen">
    <LayoutSidebar />
    <div class="flex flex-1 flex-col overflow-hidden">
      <LayoutHeader />
      <main class="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100">
        <div class="mx-auto p-4">
          <GitHubSearchResults />
        </div>
      </main>
    </div>
  </div>

  <!-- <div id="container">
    <h1>Search the Hubz</h1>
    <p>
      Use the search box below to search for some users in GitHub. As for looksies and feelzies - have no fear, a
      subsequent <a href="https://github.com/chrisjbarr/github-search/issues/9" target="_blank">GitHub issue</a> will
      make things nicer.
    </p>

    <h2>Enter in a username or partial match, and we'll search GitHub.</h2>

    <input v-model="keywordsInput" type="text" placeholder="GitHub Search" /> <br />
    <small>There's a debounce on this for {{ inputDebouceInMs }} MS.</small>

    <h3>And any results will show below... :)</h3>
    <p>
      Careful though, GitHub doesn't like more than 10 requests a second so don't get click-happy on the previous/next
      buttons. (I also didn't guard against this though if this was a real project I would.)
    </p>

    <div v-if="searchResults && searchResults?.totalCount > 0">
      <p>
        <em>Displaying</em>: {{ searchRequest.perPage }} of {{ searchResults.totalCount }} users. Display per page:
        <select v-model="searchRequest.perPage">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </p>
      <p>
        <em>Page:</em> {{ searchRequest.page }} of {{ totalPages }} - Jump to page:
        <input type="number" v-model="pageInput" /> - Careful, I didn't add validation to this input.
      </p>

      <div>
        <button @click="handlePreviousClick" v-if="isPreviousResultsAvailable" id="previous-button">Previous</button>
        <button @click="handleNextClick" v-if="isNextResultsAvailable" id="next-button">Next</button>
      </div>

      <table border="1" cellpadding="3" cellspacing="2" width="100%">
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in searchResults?.items" :key="user.nodeId">
            <td><img :src="user.avatarUrl" class="avatar avatar-user" /></td>
            <td>{{ user.id }}</td>
            <td>
              <a :href="user.htmlUrl" target="_blank">{{ user.login }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="searchResults?.totalCount === 0">No results were found for {{ searchRequest.q }}</div>
  </div> -->
</template>
