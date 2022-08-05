<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="p-1">
    <h3>{{ title }}</h3>
    <ul class="mt-2 transition-all duration-200">
      <li>
        <button
          class="mb-2 w-full rounded-lg border-gray-100 bg-gray-600 bg-opacity-25 px-2 py-1 text-left transition-all duration-200"
        >
          Search 1
        </button>
      </li>
      <li>
        <button
          class="mb-2 w-full rounded-lg border border-gray-100 bg-opacity-25 px-2 py-1 text-left transition-all duration-200 hover:bg-gray-600 hover:bg-opacity-25"
        >
          Search 2
        </button>
      </li>
      <li>
        <button
          class="mb-2 w-full rounded-lg border border-gray-100 bg-opacity-25 px-2 py-1 text-left transition-all duration-200 hover:bg-gray-600 hover:bg-opacity-25"
        >
          Search 3
        </button>
      </li>
      <li>
        <button
          class="mb-2 w-full rounded-lg border border-gray-100 bg-opacity-25 px-2 py-1 text-left transition-all duration-200 hover:bg-gray-600 hover:bg-opacity-25"
        >
          Search 4
        </button>
      </li>
      <li>
        <button
          class="mb-2 w-full rounded-lg border border-gray-100 bg-opacity-25 px-2 py-1 text-left transition-all duration-200 hover:bg-gray-600 hover:bg-opacity-25"
        >
          Search 5
        </button>
      </li>
    </ul>
  </div>
</template>
