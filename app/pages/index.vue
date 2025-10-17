<template>
  <body class="flex flex-col w-full h-full justify-center">
    <div class="flex flex-col self-center">
      <div class="flex flex-col">
        <label>Usuario</label>
        <input
          type="text"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        />
      </div>
      <div class="flex flex-col">
        <label>Contraseña</label>
        <input
          type="password"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        />
      </div>
      <div class="flex flex-row pt-5 justify-center">
        <button
          class="bg-black text-white w-1/2 rounded-xl hover:scale-110 transition-transform duration-300"
        >
          <NuxtLink class="link" to="/home">Ir al home</NuxtLink>
        </button>
      </div>
    </div>
  </body>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>
