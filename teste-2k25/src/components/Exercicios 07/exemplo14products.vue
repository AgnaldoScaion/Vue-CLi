<script setup>
import ProductCard from "./ProductCard.vue";

const products = [
  {
    title: "Notebook Gamer",
    price: 5999.9,
    image: "https://bestoptionnotebook.lojazap.com/_core/_uploads/16053/2024/05/214909052499fdb14e4j.webp",
    inStock: true,
  },
  {
    title: "Mouse Sem Fio",
    price: 149.9,
    image: "https://m.media-amazon.com/images/I/61bAbuINoXL.jpg",
    inStock: false,
  },
  {
    title: "Teclado Mecânico",
    price: 399.9,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S7c075904a0fe4c259a0c88e42e1267adm.jpg_720x720q75.jpg_.avif",
    inStock: true,
  },
];
</script>

<template>
  <div class="products-page">
    <!-- Header da página -->
    <div class="page-header">
      <h1 class="page-title">Nossos Produtos</h1>
      <p class="page-subtitle">Descubra nossa seleção de produtos tecnológicos</p>
    </div>

    <!-- Grid de produtos -->
    <div class="products-grid">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :title="product.title"
        :price="product.price"
        :image="product.image"
        :inStock="product.inStock"
      />
    </div>
  </div>
</template>

<style scoped>
.products-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.page-title {
  font-size: 36px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 12px 0;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 18px;
  color: #64748b;
  margin: 0;
  font-weight: 400;
  line-height: 1.6;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
}

/* Responsividade */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .products-page {
    padding: 24px 16px;
  }
  
  .page-header {
    margin-bottom: 32px;
  }
  
  .page-title {
    font-size: 28px;
  }
  
  .page-subtitle {
    font-size: 16px;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }
  
  .page-subtitle {
    font-size: 14px;
  }
  
  .products-grid {
    max-width: 100%;
  }
}

/* Animações */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-header {
  animation: fadeInUp 0.8s ease-out;
}

.products-grid {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>