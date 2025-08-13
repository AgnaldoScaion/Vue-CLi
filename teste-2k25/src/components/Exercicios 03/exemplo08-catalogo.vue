<script setup>
import { ref } from 'vue'

const produtos = ref([
  { nome: 'Notebook', preco: 4299.99, categoria: 'Eletrônicos' },
  { nome: 'Smartphone', preco: 2399.99, categoria: 'Eletrônicos' },
  { nome: 'Camiseta', preco: 79.90, categoria: 'Vestuário' },
  { nome: 'Tênis', preco: 299.90, categoria: 'Calçados' },
  { nome: 'Livro', preco: 49.90, categoria: 'Livros' }
])

const formatarPreco = (preco) => {
  return preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
</script>

<template>
  <div class="product-catalog">
    <h3>Catálogo de Produtos</h3>
    <div class="product-grid">
      <div v-for="(produto, index) in produtos" :key="index" class="product-card">
        <div class="product-header">
          <span class="product-category">{{ produto.categoria }}</span>
        </div>
        <div class="product-body">
          <h4 class="product-name">{{ produto.nome }}</h4>
          <p class="product-price">{{ formatarPreco(produto.preco) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-catalog {
  padding: 1rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.product-card {
  background: var(--bg-tertiary);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--glow-shadow);
}

.product-header {
  background: rgba(255, 215, 0, 0.1);
  padding: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.product-category {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.product-body {
  padding: 1rem;
}

.product-name {
  margin: 0 0 0.5rem 0;
  color: var(--text-primary);
}

.product-price {
  margin: 0;
  color: var(--accent-primary);
  font-weight: bold;
  font-size: 1.1rem;
}
</style>