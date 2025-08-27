<script setup>
import { ref } from 'vue';

  const emit = defineEmits(['update'])

  const count = ref(0)

  function incrementar(){
    count.value ++
    emit('update', count.value)
  }

</script>



<template>
<div>
  <p>Contador: {{ count }}</p>
  <button @click="incrementar">clique aqui para adicionar</button>
</div>

</template>