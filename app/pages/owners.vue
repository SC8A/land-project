<template>
  <NuxtLayout>
    <div class="flex flex-col gap-y-5">
      <div class="flex justify-end w-full">
        <div class="flex justify-between w-2/3">
          <h1 class="font-bold text-3xl">Propietarios iniciales</h1>
          <button
            @click="() => (openDialog = !openDialog)"
            class="bg-black w-1/5 text-white rounded-xl hover:scale-90 transition-transform duration-300"
          >
            Crear
          </button>
        </div>
      </div>
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th scope="col" class="px-6 py-3">id</th>
            <th scope="col" class="px-6 py-3">Tipo de identificacion</th>
            <th scope="col" class="px-6 py-3">Numero de documento</th>
            <th scope="col" class="px-6 py-3">Nombre completo</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(owner, index) in owners"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1 }}
            </th>
            <td class="px-6 py-4">
              {{ owner.identification_type }}
            </td>
            <td class="px-6 py-4">
              {{ owner.identification_number }}
            </td>
            <td class="px-6 py-4">
              {{ owner.name }} {{ owner.last_name }}
              {{ owner.second_last_name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <dialog class="bg-pink-400 z-10 w-1/2 h-1/2" :open="openDialog">
      <h1>Crear propiertario inicial</h1>
      <form @submit.prevent="handleSubmit" class="flex flex-col">
        <section class="flex flex-col">
          <div>
            <label for="documentType">Tipo de identificacion</label>
            <select v-model="createOwner.identification_type" id="documentType">
              <option v-for="[key, label] in IdentificationTypesArray">
                {{ label }}
              </option>
            </select>
          </div>
          <div>
            <label for="identificationNumber">Numero de identificacion</label>
            <input
              type="text"
              v-model="createOwner.identification_number"
              id="identificationNumber"
            />
          </div>
          <div>
            <label for="names">Nombres</label>
            <input type="text" v-model="createOwner.name" id="names" />
          </div>
          <div>
            <label>Primer apellido</label>
            <input type="text" v-model="createOwner.last_name" />
          </div>
          <div>
            <label>Segundo apellido</label>
            <input type="text" v-model="createOwner.second_last_name" />
          </div>
        </section>
        <menu>
          <button @click="resetForm" type="button">Resetear campos</button>
          <button type="submit">Confirm</button>
        </menu>
      </form>
    </dialog>
  </NuxtLayout>
</template>
<script setup lang="ts">
const { data: owners, refresh: refreshOwners } = await useFetch("/api/owners");
const openDialog = ref(true);
const createOwner = ref<Owners>({
  id: undefined,
  identification_type: IdentificationTypes.cedula,
  identification_number: "",
  name: "",
  last_name: "",
  second_last_name: "",
});

const IdentificationTypesArray = Object.entries(IdentificationTypes);

async function handleSubmit() {
  const response = await $fetch<ApiResponse>("/api/owners", {
    method: "POST",
    body: createOwner.value,
  });
  if (!response) return;
  resetForm();
  openDialog.value = false;
  refreshOwners();
}

function resetForm() {
  createOwner.value = {
    name: "",
    identification_number: "",
    last_name: "",
    second_last_name: "",
    identification_type: IdentificationTypes.cedula,
  };
}
</script>
