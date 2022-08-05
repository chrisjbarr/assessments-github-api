<script setup lang="ts">
const inputDebounceInMs = inject(githubSearchInputDebounceInMsProviderKey, 600);

const keywordsInput = ref('');
const debouncedKeywordsInput = refDebounced(keywordsInput, inputDebounceInMs);
</script>

<template>
  <input
    v-model="keywordsInput"
    class="text-blue-brand-500 w-32 rounded-md border-gray-200 focus:border-brand-black-600 focus:ring focus:ring-brand-black-500 focus:ring-opacity-40 sm:w-64"
    type="text"
    placeholder="Search Users"
  />
</template>
