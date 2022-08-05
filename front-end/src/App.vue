<script setup lang="ts"></script>

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
</template>
