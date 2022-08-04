<script setup lang="ts">
import { searchGitHubUsers } from './core/github/search-api.js';

const usernameKeywords = ref('chrisjbarr');
const debouncedUsernameKeywords = refDebounced(usernameKeywords, 1000);

const searchRequest = ref({
  q: debouncedUsernameKeywords,
  sort: 'login',
  order: 'asc',
  perPage: 100,
  page: 1
});

const searchInitiated = ref(false);

const searchResults = ref<SearchApiResponse<GitHubUser>>();

watchEffect(async () => {
  console.log('you changed');
  searchResults.value = await searchGitHubUsers(searchRequest.value);
});

const handleSearchButtonClick = async () => {
  searchInitiated.value = true;
  searchResults.value = await searchGitHubUsers(searchRequest.value);
};

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
  console.log('next click');
  searchRequest.value.page++;
};
</script>

<template>
  <div>
    <h1>Search the Hubz</h1>
    <p>
      Use the search box below to search for some users in GitHub. As for looksies and feelzies - have no fear, a
      subsequent <a href="https://github.com/chrisjbarr/github-search/issues/9" target="_blank">GitHub issue</a> will
      make things nicer.
    </p>

    <h2>Enter in a username or partial match, and we'll search GitHub.</h2>

    <input v-model="usernameKeywords" type="text" placeholder="GitHub Search" />
    <button :disabled="usernameKeywords === ''" @click="handleSearchButtonClick">Search</button>

    <h3>And any results will show below... :)</h3>
    <p>
      Careful though, GitHub doesn't like more than 10 requests a second so don't get click-happy on the previous/next
      buttons.
    </p>

    <div v-if="searchResults && searchResults?.totalCount > 0">
      <p><em>Users found</em>: {{ searchResults.totalCount }}</p>
      <p><em>Total Pages</em>: {{ totalPages }}</p>
      <p><em>Current Page</em>: {{ searchRequest.page }}</p>

      <button @click="handlePreviousClick" v-if="isPreviousResultsAvailable">Previous</button>
      <button @click="handleNextClick" v-if="isNextResultsAvailable">Next</button>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Username</th>
            <th></th>
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
    <div v-else-if="searchInitiated && searchResults?.totalCount === 0">
      No results were found for {{ searchRequest.q }}
    </div>
  </div>
</template>

<style scoped>
#container {
  margin: 0 auto;
  width: 955px;
}
.avatar {
  height: auto;
  width: 32px;
}
.avatar-user {
  border-radius: 50%;
}
</style>
