<template>
  <NuxtLayout>
    <div class="main">
      <h1>Lugares</h1>
      <div class="body" v-for="place in places">
        <PlacesCard :title="place.title" />
      </div>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
interface Places {
  title: string;
}

const places: Places[] = [
  {
    title: "Santa Rosa",
  },
  {
    title: "Don matias",
  },
];
</script>
