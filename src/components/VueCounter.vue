<template>
  <div class="p-4 border-2 border-green-500 rounded-lg text-center">
    <h2 class="text-xl font-bold">Counter Vue</h2>
    <p class="text-2xl my-2">{{ count }}</p>
    <button 
      class="bg-green-600 text-white px-4 py-2 rounded"
      @click="count++"
    >
      Tambah Angka
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>