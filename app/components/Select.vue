<template>
  <select>
    <option v-for="type in props.values">{{ type.name }}</option>
  </select>
</template>
<script setup lang="ts">
interface Values {
  id: number;
  name: string;
}

const props = defineProps<{
  values: Values[];
}>();
</script>
