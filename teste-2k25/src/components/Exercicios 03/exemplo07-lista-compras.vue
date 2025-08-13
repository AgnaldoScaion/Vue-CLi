<script setup>
const compras = ref(['Pão', 'Leite', 'Ovos', 'Frutas'])
</script>

<template>
  <div class="shopping-list">
    <h3>Lista de Compras</h3>
    <ol class="numbered-list">
      <li v-for="(item, index) in compras" :key="index" class="list-item">
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<style scoped>
.shopping-list {
  padding: 1rem;
}

.numbered-list {
  list-style-type: none;
  counter-reset: item-counter;
  padding: 0;
  margin: 1rem 0;
}

.list-item {
  counter-increment: item-counter;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
}

.list-item::before {
  content: counter(item-counter) ". ";
  color: var(--accent-primary);
  font-weight: bold;
  margin-right: 0.5rem;
}
</style>