<template>
  <div class="product-card">
    <div class="product-info">
      <h2 class="product-name">{{ name }}</h2>
      <p class="product-price">R$ {{ price.toFixed(2) }}</p>
    </div>
    <button
      @click="buyProduct"
      class="buy-button"
    >
      <span class="button-text">Comprar</span>
      <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 5M7 13v6a1 1 0 001 1h9a1 1 0 001-1v-6m-10 0h10"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  methods: {
    buyProduct() {
      this.$emit("buy", this.name);
    },
  },
};
</script>

<style scoped>
.product-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #d97706);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.product-card:hover::before {
  transform: scaleX(1);
}

.product-info {
  flex: 1;
}

.product-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #059669;
  text-shadow: 0 1px 2px rgba(5, 150, 105, 0.1);
}

.buy-button {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.3);
}

.buy-button:hover {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  transform: translateY(-1px);
  box-shadow: 0 6px 8px -1px rgba(245, 158, 11, 0.4);
}

.buy-button:active {
  transform: translateY(0);
}

.button-text {
  font-size: 0.875rem;
}

.button-icon {
  width: 1rem;
  height: 1rem;
}

/* Responsividade */
@media (max-width: 640px) {
  .product-card {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .product-info {
    flex: none;
  }
  
  .buy-button {
    width: 100%;
    justify-content: center;
  }
}
</style>