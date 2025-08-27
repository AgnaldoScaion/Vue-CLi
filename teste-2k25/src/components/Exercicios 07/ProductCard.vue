<template>
  <div class="product-card">
    <!-- Imagem -->
    <div class="image-container">
      <img 
        :src="image" 
        :alt="title" 
        class="product-image"
      />
    </div>

    <!-- Conteúdo -->
    <div class="card-content">
      <!-- Título -->
      <h2 class="product-title">
        {{ title }}
      </h2>

      <!-- Preço -->
      <p class="product-price">
        R$ {{ price.toFixed(2) }}
      </p>

      <!-- Estoque -->
      <span :class="stockClass">
        {{ stockText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    inStock: { type: Boolean, default: true }
  },
  computed: {
    stockClass() {
      return [
        'stock-badge',
        this.inStock ? 'stock-available' : 'stock-unavailable'
      ];
    },
    stockText() {
      return this.inStock ? 'Em estoque' : 'Fora de estoque';
    }
  }
}
</script>

<style scoped>
.product-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  max-width: 320px;
  margin: 0 auto;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.image-container {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: #f8f9fa;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
  margin: 0;
  min-height: 50px;
  display: flex;
  align-items: center;
}

.product-price {
  font-size: 24px;
  font-weight: 700;
  color: #16a34a;
  margin: 0;
  letter-spacing: -0.5px;
}

.stock-badge {
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
}

.stock-available {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.stock-unavailable {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

/* Responsividade */
@media (max-width: 768px) {
  .product-card {
    max-width: 100%;
  }
  
  .image-container {
    height: 200px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .product-title {
    font-size: 16px;
    min-height: 40px;
  }
  
  .product-price {
    font-size: 20px;
  }
}
</style>