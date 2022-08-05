<script setup lang="ts">
const { searchResults, searchRequest, pageInput, totalPages, lowerBoundRecordNumber, upperBoundRecordNumber } =
  useGitHubSearch();

function viewProfileInGitHub(url: string) {
  window.open(url, '_blank');
}
</script>

<template>
  <div v-if="searchResults && searchResults?.totalCount > 0" class="-my-2 overflow-x-auto py-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <select v-model="searchRequest.perPage" class="h-12 rounded-lg">
          <option value="10">10 results per page</option>
          <option value="25">25 results per page</option>
          <option value="50">50 results per page</option>
          <option value="100">100 results per page</option>
        </select>
      </div>
      <div class="flex">Page {{ searchRequest.page }} of {{ totalPages }}</div>
      <div class="flex items-center align-middle">
        <button
          :disabled="searchRequest.page <= 1"
          class="inline-flex h-12 items-center rounded-lg rounded-r-none border border-brand-black-200 bg-brand-black-200 px-4 text-center text-white transition-colors hover:bg-brand-black-300"
          @click="searchRequest.page--"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Previous
        </button>
        <input v-model="pageInput" type="number" class="b-brand-black-200 inline-flex h-12 w-20 items-center border" />
        <button
          :disabled="searchRequest.page >= totalPages"
          class="inline-flex h-12 items-center rounded-lg rounded-l-none border border-brand-black-200 bg-brand-black-200 px-4 text-center text-white transition-colors hover:bg-brand-black-300"
          @click="searchRequest.page++"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>

    <div class="my-4 rounded-lg py-2 shadow">
      <table class="w-full">
        <thead>
          <tr>
            <th
              class="w-full whitespace-nowrap border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500"
            >
              Details
            </th>
          </tr>
        </thead>

        <tbody class="bg-white">
          <tr
            v-for="user in searchResults.items"
            :key="user.nodeId"
            class="cursor-pointer transition-all duration-200 hover:bg-gray-100"
            @click="viewProfileInGitHub(user.htmlUrl)"
          >
            <td class="border-b border-gray-200 px-6 py-4 align-top">
              <div class="flex items-center">
                <div class="h-12 w-12 flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    :src="user.avatarUrl"
                    :alt="`Avatar for GitHub user: ${user.login}`"
                  />
                </div>

                <div class="ml-4">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ user.login }}
                  </div>
                  <div class="text-sm leading-5 text-gray-400">GitHub Id: {{ user.id }}</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colspan="2" class="pt-2 pl-2 text-sm">
              Displaying {{ lowerBoundRecordNumber }} to {{ upperBoundRecordNumber }} of
              {{ searchResults.totalCount }} results.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div v-else-if="searchResults && searchResults.totalCount === 0">No results were found for {{ searchRequest.q }}</div>
  <div v-else>User the input box above to search for a GitHub user.</div>
</template>
