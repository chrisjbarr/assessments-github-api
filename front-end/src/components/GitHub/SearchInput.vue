<script setup lang="ts">
const { keywordsInput } = useGitHubSearch();
</script>

<template>
  <input v-model="keywordsInput" class="w-full rounded-lg" type="text" placeholder="Search Users" />
</template>
