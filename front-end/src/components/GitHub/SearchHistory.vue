<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
});

const { searchHistory, searchRequest } = useGitHubSearch();

const activeClass =
  'mb-2 w-full rounded-lg border-gray-100 bg-gray-600 bg-opacity-25 px-2 py-1 text-left transition-all duration-200';
const inactiveClass =
  'mb-2 w-full rounded-lg border border-gray-100 bg-opacity-25 px-2 py-1 text-left transition-all duration-200 hover:bg-gray-600 hover:bg-opacity-25';
</script>

<template>
  <div class="p-1">
    <h3>{{ title }}</h3>
    <ul class="mt-2 transition-all duration-200">
      <li v-for="keywords in searchHistory" :key="keywords">
        <button
          :class="[keywords === searchRequest.q ? activeClass : inactiveClass]"
          @click="searchRequest.q = keywords"
        >
          {{ keywords }}
        </button>
      </li>
    </ul>
  </div>
</template>
