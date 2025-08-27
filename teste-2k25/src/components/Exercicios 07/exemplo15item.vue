<script setup>
import { ref } from "vue";
import ProductItem from "./ProductItem.vue";

const products = ref([
  { name: "Notebook Gamer", price: 5999.9 },
  { name: "Mouse Sem Fio", price: 149.9 },
  { name: "Teclado Mecânico", price: 399.9 },
]);

const message = ref("");

const handleBuy = (productName) => {
  message.value = `Você comprou ${productName}`;
  console.log(message.value);
  
  // Remove a mensagem após 3 segundos
  setTimeout(() => {
    message.value = "";
  }, 3000);
};
</script>

<template>
  <div class="app-container">
    <div class="header">
      <h1 class="main-title">
        <span class="title-icon">🛒</span>
        Loja de Tecnologia
      </h1>
      <p class="subtitle">Encontre os melhores produtos para seu setup</p>
    </div>

    <div class="products-section">
      <h2 class="section-title">Produtos em Destaque</h2>
      
      <div class="products-grid">
        <ProductItem
          v-for="(product, index) in products"
          :key="index"
          :name="product.name"
          :price="product.price"
          @buy="handleBuy"
        />
      </div>
    </div>

    <Transition name="message">
      <div v-if="message" class="success-message">
        <div class="message-content">
          <svg class="message-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>{{ message }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.main-title {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.title-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.025em;
}

.products-section {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.products-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.success-message {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
}

.message-content {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.message-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

/* Animações */
.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease;
}

.message-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.8);
}

.message-leave-to {
  opacity: 0;
  transform: translateX(100%) scale(0.8);
}

.message-enter-to,
.message-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/* Responsividade */
@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}

@media (max-width: 640px) {
  .app-container {
    padding: 1rem 0.75rem;
  }
  
  .main-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .success-message {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }
  
  .message-content {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }
}

/* Animação de carregamento suave */
.products-grid {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito hover global */
* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>