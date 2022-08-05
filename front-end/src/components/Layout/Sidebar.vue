<script setup lang="ts"></script>

<template>
  <div class="flex">
    <div class="z-30 w-64 transition duration-300 lg:static">
      <div class="flex h-14 border-b border-b-brand-black-900 p-2 align-middle text-2xl">
        <h1>GitHub API Search</h1>
      </div>

      <div class="p-2">
        <GitHubSearchHistory title="Recent Searches" />
      </div>
    </div>
  </div>
</template>
