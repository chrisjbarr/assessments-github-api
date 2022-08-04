<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <input type="text" name="keywords" placeholder="Search GitHub" />
  <button>Search</button>
</template>

<style scoped></style>
