<script setup lang="ts">
const inputDebounceInMs = inject(githubSearchInputDebounceInMsProviderKey, 600);

const keywordsInput = ref('');
const debouncedKeywordsInput = refDebounced(keywordsInput, inputDebounceInMs);
</script>

<template>
  <input
    v-model="keywordsInput"
    class="rounded-lg w-full"
    type="text"
    placeholder="Search Users"
  />
</template>
