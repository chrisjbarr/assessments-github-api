<script setup lang="ts">
const inputDebounceInMs = inject(githubSearchInputDebounceInMsProviderKey, 600);

const pageInput = ref(1);
const debouncedPageInput = refDebounced(pageInput, inputDebounceInMs);
</script>

<template>
  <div class="-my-2 overflow-x-auto py-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div>Displaying 2 of 2 results.</div>
        <select class="h-12">
          <option value="10">10 results per page</option>
          <option value="25">25 results per page</option>
          <option value="50">50 results per page</option>
          <option value="100">100 results per page</option>
        </select>
      </div>
      <div class="flex">Page 1 of 1</div>
      <div class="flex items-center align-middle">
        <button
          class="inline-flex h-12 items-center rounded rounded-r-none border border-brand-black-200 bg-brand-black-200 px-4 text-center text-white transition-colors hover:bg-brand-black-300"
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
          class="inline-flex h-12 items-center rounded rounded-l-none border border-brand-black-200 bg-brand-black-200 px-4 text-center text-white transition-colors hover:bg-brand-black-300"
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

    <table class="my-4 rounded-lg py-2 shadow">
      <thead>
        <tr>
          <th
            class="whitespace-nowrap border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500"
          >
            Profile Details
          </th>
          <th
            class="w-full border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase leading-4 tracking-wider text-gray-500"
          >
            Profile Links
          </th>
        </tr>
      </thead>

      <tbody class="bg-white">
        <tr>
          <td class="border-b border-gray-200 px-6 py-4 align-top">
            <div class="flex items-center">
              <div></div>
            </div>
          </td>

          <td class="whitespace-nowrap border-b border-gray-200 px-6 py-4 align-top uppercase">Test</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
