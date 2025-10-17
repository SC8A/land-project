<template>
  <div>
    <h1>{{ props.title }}</h1>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>
<style scoped>
div {
  border: 1px solid #999999;
  border-radius: 3px;
  background: #f0f0f0;
  border-radius: 5px;
}
</style>
