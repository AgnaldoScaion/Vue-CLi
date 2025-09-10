<script setup>
import { ref } from 'vue';
import Card from './Card.vue';

const cardData = ref({
  titulo: 'Cartão de Produto',
  descricao: 'Um exemplo de cartão com slots nomeados.'
});
</script>

<template>
  <div class="example-container">
    <h2 class="example-title">Exemplo de Card com Props e Slots</h2>
    <p class="example-description">Este exemplo demonstra um cartão com título, descrição e slots.</p>
    
    <div class="card-demo">
      <Card :titulo="cardData.titulo" :descricao="cardData.descricao">
        <p>Conteúdo principal exibido no slot padrão.</p>
        <template #footer>
          <small>Footer personalizado - {{ new Date().toLocaleDateString() }}</small>
        </template>
      </Card>
    </div>
    
    <p class="example-note">O header usa props, o main usa slot padrão, e o footer usa slot nomeado.</p>
  </div>
</template>

<style scoped>
.example-container {
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-primary);
}

.example-title {
  font-size: var(--font-size-large);
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--accent-primary);
}

.example-description {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.card-demo {
  margin-bottom: 1.5rem;
}

.example-note {
  font-size: calc(var(--font-size-base) * 0.85);
  color: var(--text-secondary);
  font-style: italic;
}
</style>