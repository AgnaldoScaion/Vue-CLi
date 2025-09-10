<script setup>
import { ref } from 'vue';
import CardComponent from './CardComponent.vue';

const cardData = ref({
  header: 'Detalhes do Produto',
  content: 'Este é um exemplo de conteúdo dinâmico no corpo do cartão.',
  footer: 'Atualizado em: 10/09/2025'
});
</script>

<template>
  <div class="example-container">
    <h2 class="example-title">Exemplo de Slots Nomeados - Cartão</h2>
    <p class="example-description">Este exemplo mostra um cartão com slots nomeados para header, conteúdo e footer.</p>
    
    <div class="card-demo">
      <CardComponent>
        <template #header>
          <h3>{{ cardData.header }}</h3>
        </template>
        <p>{{ cardData.content }}</p>
        <template #footer>
          <small>{{ cardData.footer }}</small>
        </template>
      </CardComponent>
    </div>
    
    <p class="example-note">Os slots podem ser personalizados pelo componente pai. Sem slots, usa os valores padrão.</p>
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