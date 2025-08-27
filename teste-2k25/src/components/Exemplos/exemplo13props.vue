<script setup>
const props = defineProps({
  nome: String,
  email: String,
  telefone: String,
  idade: Number,
  ativo: Boolean,
});
</script>

<template>
  <div class="card" v-if="nome">
    <h3>{{ nome }}</h3>
    <p v-of="email">Email: {{ email }}</p>
    <p v-of="telefone">Email: {{ telefone }}</p>
    <span v-if="idade">{{ idade }} anos</span>
    <div :class="ativo ? 'ativo' : 'inativo'">{{ ativo ? 'Ativo' : 'Inativo' }}</div>
  </div>
</template>


<style scoped>
.card{
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;

}

.ativo{
  color:green
}

.inativo{
  color:red
}



</style>