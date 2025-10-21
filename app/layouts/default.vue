<template>
  <div class="flex flex-row h-[100vh] gap-5">
    <aside class="h-full bg-[#f0f0f0] w-[10rem] flex flex-col border-t-8">
      <div class="flex self-center">
        <NuxtLink to="/"
          ><span class="icon-[mdi--logout]"></span>Cerrar sesion</NuxtLink
        >
      </div>
      <ol
        v-for="view in views"
        class="w-full self-center items-center justify-center hover:bg-slate-400"
      >
        <ol class="flex self-center w-full">
          <NuxtLink :to="view.route">
            <span :class="view.icon" />{{ view.name }}</NuxtLink
          >
        </ol>
      </ol>
    </aside>
    <div class="border-t-8 border-r-8 w-full h-full bg-[#f0f0f0]">
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
    icon: "icon-[bx--map]",
    route: "/home",
    name: "Lugares",
  },
  {
    icon: "icon-[hugeicons--man]",
    route: "/owners",
    name: "Dueños",
  },
];
</script>
