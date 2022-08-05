<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
});

const activeClass = 'bg-gray-600 bg-opacity-25 text-white border-gray-100';
const inactiveClass = 'border-gray-900 text-gray-400 hover:bg-gray-600 hover:bg-opacity-25 hover:text-white';
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <ul class="mt-2">
      <li><button class="mb-2 w-full border-gray-100 bg-gray-600 bg-opacity-25">Search 1</button></li>
      <li>
        <button
          class="mb-2 w-full border-gray-700 text-gray-400 hover:bg-gray-300 hover:bg-opacity-25 hover:text-brand-black-500"
        >
          Search 2
        </button>
      </li>
      <li>
        <button
          class="mb-2 w-full border-gray-700 text-gray-400 hover:bg-gray-300 hover:bg-opacity-25 hover:text-brand-black-500"
        >
          Search 3
        </button>
      </li>
      <li>
        <button
          class="mb-2 w-full border-gray-700 text-gray-400 hover:bg-gray-300 hover:bg-opacity-25 hover:text-brand-black-500"
        >
          Search 4
        </button>
      </li>
      <li>
        <button
          class="mb-2 w-full border-gray-700 text-gray-400 hover:bg-gray-300 hover:bg-opacity-25 hover:text-brand-black-500"
        >
          Search 5
        </button>
      </li>
    </ul>
  </div>
</template>
