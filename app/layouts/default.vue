<template>
  <div class="flex flex-row h-[100vh] gap-5">
    <aside class="h-full bg-[#f0f0f0] w-[10rem]">
      <ol v-for="view in views">
        <lo>
          <NuxtLink :to="view.route"
            >{{ view.icon }} <span>{{ view.name }}</span></NuxtLink
          >
        </lo>
      </ol>
    </aside>
    <div class="body">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
interface ViewsPanel {
  icon: string;
  route: string;
  name: string;
}

const views: ViewsPanel[] = [
  {
    icon: "",
    route: "/home",
    name: "Lugares",
  },
  {
    icon: "",
    route: "/buyers",
    name: "Compradores",
  },
];
</script>
