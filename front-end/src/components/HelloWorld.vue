<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <input type="text" name="keywords" />
</template>

<style scoped></style>
