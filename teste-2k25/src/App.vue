<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Exemplo01 from "./components/Exemplos/exemplo01interpolacao.vue";
import Exemplo02 from "./components/Exemplos/exemplo02.vue";
import Exemplo03 from "./components/Exemplos/exemplo03.vue";
import Exemplo04 from "./components/Exemplos/exemplo04for.vue";
import Exemplo05 from "./components/Exercicios 01/exemplo05-login.vue";
import Exemplo06 from "./components/Exercicios 01/exemplo06-idade.vue";
import Exemplo07 from "./components/Exercicios 02/exemplo07-lista-compras.vue";
import Exemplo08 from "./components/Exercicios 02/exemplo08-catalogo.vue";
import Exemplo09 from "./components/Exercicios 03/exemplo09-html-render.vue";
import Exemplo10 from "./components/Exercicios 04/exemplo10-Form.vue";
import exemplo11 from "./components/Exercicios 04/exemplo11-imc.vue";
import Exemplo12 from "./components/Exemplos/exemplo07classe.vue";
import Exemplo13 from "./components/Exercicios 05/exemplo08botoes.vue";
import Exemplo14 from "./components/Exercicios 05/exemplo09clique.vue";
import Exemplo15 from "./components/Exemplos/exemplo10teclado.vue";
import Exemplo16 from "./components/Exercicios 06/exemplo11evento.vue";
import Exemplo17 from "./components/Exemplos/exemplo12enviar.vue";
import Exemplo18 from "./components/Exercicios 07/exemplo14products.vue";
import Exemplo19 from "./components/Exemplos/exemplo15emits.vue";
import Exemplo20 from "./components/Exercicios 07/exemplo15item.vue";
import Exemplo21 from "./components/Exercicios 08/CardComponentExample.vue";
import Exemplo22 from "./components/Exercicios 08/ButtonComponentExample.vue";
import Exemplo23 from "./components/Exercicios 09/CardExample.vue";

const currentModule = ref(1);
const gridRef = ref(null);
const cursorRef = ref(null);
const trailRef = ref(null);
const isClickable = ref(false);
const isCursorVisible = ref(true);
const cursorPos = ref({ x: 0, y: 0 });
const trailPos = ref({ x: 0, y: 0 });

const updateCursorPosition = (e) => {
  cursorPos.value = { x: e.clientX, y: e.clientY };
};

const handleMouseOver = (e) => {
  const target = e.target.closest(
    'a, button, input, [role="button"], [style*="cursor: pointer"], .clickable'
  );
  isClickable.value = target && !target.classList.contains("login-button");
};

const handleMouseLeave = () => {
  isCursorVisible.value = false;
};

const handleMouseEnter = () => {
  isCursorVisible.value = true;
};

const animateCursor = () => {
  if (cursorRef.value && trailRef.value) {
    cursorRef.value.style.opacity = isCursorVisible.value ? 1 : 0;
    trailRef.value.style.opacity = isCursorVisible.value ? 0.5 : 0;
    cursorRef.value.style.left = `${cursorPos.value.x}px`;
    cursorRef.value.style.top = `${cursorPos.value.y}px`;
    trailPos.value.x += (cursorPos.value.x - trailPos.value.x) * 0.1;
    trailPos.value.y += (cursorPos.value.y - trailPos.value.y) * 0.1;
    trailRef.value.style.left = `${trailPos.value.x}px`;
    trailRef.value.style.top = `${trailPos.value.y}px`;
  }
  requestAnimationFrame(animateCursor);
};

onMounted(() => {
  window.addEventListener("mousemove", updateCursorPosition);
  window.addEventListener("mouseover", handleMouseOver);
  window.addEventListener("mouseleave", handleMouseLeave);
  window.addEventListener("mouseenter", handleMouseEnter);
  requestAnimationFrame(animateCursor);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateCursorPosition);
  window.removeEventListener("mouseover", handleMouseOver);
  window.removeEventListener("mouseleave", handleMouseLeave);
  window.removeEventListener("mouseenter", handleMouseEnter);
});

const modules = {
  1: {
    title: "Módulo 1 - Exemplos Básicos",
    description: "Conceitos básicos e exemplos práticos",
    exercises: [
      { id: "1", title: "String Interpolation", component: Exemplo01 },
      { id: "2", title: "Calculator Engine", component: Exemplo02 },
      { id: "3", title: "DateTime Module", component: Exemplo03 },
      { id: "4", title: "Name", component: Exemplo04 },
      { id: "5", title: "Class Directive", component: Exemplo12 },
      { id: "8", title: "Emits Example", component: Exemplo19 },
    ],
  },
  2: {
    title: "Módulo 2 - Componentes Avançados",
    description: "Componentes e Login System",
    exercises: [
      { id: "1", title: "Login System", component: Exemplo05 },
      { id: "2", title: "Age Classifier", component: Exemplo06 },
    ],
  },
  3: {
    title: "Módulo 3 - Listas e Renderização",
    description: "Catálogo de Produtos e Listas",
    exercises: [
      { id: "1", title: "Lista de Compras", component: Exemplo07 },
      { id: "2", title: "Catálogo de Produtos", component: Exemplo08 },
    ],
  },
  4: {
    title: "Módulo 4 - Formulários e Botões",
    description: "Formulários e Botões",
    exercises: [
      { id: "1", title: "Formulário Interativo", component: Exemplo10 },
      { id: "2", title: "IMC Calculator", component: exemplo11 },
      { id: "4", title: "Eventos de Clique", component: Exemplo14 },
    ],
  },
  5: {
    title: "Módulo 5 - Product Card",
    description: "Exibição de produtos com props dinâmicas",
    exercises: [
      { id: "1", title: "Product Card Demo", component: Exemplo18 },
    ],
  },
  6: {
    title: "Módulo 6 - Item List",
    description: "Lista de itens com props dinâmicas",
    exercises: [
      { id: "1", title: "Item List Demo", component: Exemplo20 },
    ],
  },
  7: {
    title: "Módulo 7 - Slots em Componentes",
    description: "Componentes reutilizáveis com slots",
    exercises: [
      { id: "1", title: "Card Component with Named Slots", component: Exemplo21 },
      { id: "2", title: "Button Component with Default Slot", component: Exemplo22 },
      { id: "3", title: "Card Example with Props and Slots", component: Exemplo23 },
    ],
  }
};

const switchModule = (moduleNumber) => {
  currentModule.value = moduleNumber;
  if (gridRef.value) {
    gridRef.value.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <div class="app-container">
    <div class="background-grid"></div>
    
    <!-- Cursor customizado mais sutil -->
    <div ref="cursorRef" class="custom-cursor" :class="{ clickable: isClickable }"></div>
    <div ref="trailRef" class="cursor-trail" :class="{ clickable: isClickable }"></div>

    <!-- Header mais limpo -->
    <header class="app-header">
      <div class="header-content">
        <div class="logo-section">
          <div class="tech-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm4.64-1.96l3.54 3.54c.78.78 2.05.78 2.83 0l7.07-7.07c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L12 9.34 6.75 4.1c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l2.72 2.72z"/>
            </svg>
          </div>
          <div class="title-section">
            <h1 class="main-title">Agnaldo<span class="accent">Scaion</span></h1>
            <p class="subtitle">Vue.js Learning Platform</p>
          </div>
        </div>
        <div class="header-actions">
          <a href="https://4gn.netlify.app" target="_blank" class="portfolio-btn">
            Meu Portfólio
          </a>
        </div>
      </div>
    </header>

    <!-- Navegação simplificada -->
    <nav class="module-navigation">
      <div class="nav-content">
        <div class="module-tabs">
          <button
            v-for="(module, key) in modules"
            :key="key"
            @click="switchModule(key)"
            :class="['module-tab', { active: currentModule === key }]"
          >
            <span class="tab-number">{{ key }}</span>
            <span class="tab-title">Módulo {{ key }}</span>
          </button>
        </div>
        <div class="module-info">
          <h2 class="module-title">{{ modules[currentModule].title }}</h2>
          <p class="module-description">{{ modules[currentModule].description }}</p>
        </div>
      </div>
    </nav>

    <!-- Grid de componentes redesenhado -->
    <main class="components-grid" ref="gridRef">
      <TransitionGroup name="fade-slide" tag="div" class="grid-container">
        <div
          v-if="modules[currentModule].exercises.length > 0"
          v-for="exercise in modules[currentModule].exercises"
          :key="`${currentModule}-${exercise.id}`"
          class="component-card"
        >
          <div class="card-header">
            <div class="card-badge">{{ currentModule }}.{{ exercise.id }}</div>
            <h3 class="card-title">{{ exercise.title }}</h3>
          </div>
          <div class="card-content">
            <component :is="exercise.component" />
          </div>
        </div>
        
        <div v-else class="empty-module" :key="`empty-${currentModule}`">
          <div class="empty-content">
            <div class="empty-icon">🚧</div>
            <h3>Em Desenvolvimento</h3>
            <p>Os exercícios do {{ modules[currentModule].title }} serão adicionados em breve.</p>
          </div>
        </div>
      </TransitionGroup>
    </main>

    <!-- Footer simplificado -->
    <footer class="app-footer">
      <div class="footer-content">
        <p>Vue Learning Platform v2.0 • Módulo {{ currentModule }} • {{ modules[currentModule].exercises.length }} Exercícios</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* ===== VARIÁVEIS DE DESIGN ===== */
:root {
  /* Cores principais */
  --accent-primary: #ffd700; /* Dourado como destaque */
  --accent-secondary: #d4af37; /* Tom mais escuro de dourado */
  --accent-tertiary: #f0e68c; /* Tom mais claro de dourado */
  
  /* Background */
  --bg-primary: #0a0a0b; /* Fundo preto escuro */
  --bg-secondary: #111114; /* Cinza escuro para contraste */
  --bg-tertiary: #1a1a1e; /* Cinza mais escuro para detalhes */
  --bg-card: #141417; /* Fundo dos cartões */
  
  /* Texto */
  --text-primary: #e2e8f0; /* Branco acinzentado */
  --text-secondary: #94a3b8; /* Cinza claro */
  --text-muted: #64748b; /* Cinza mais escuro */
  
  /* Bordas e sombras */
  --border-color: #334155; /* Cinza escuro para bordas */
  --border-glow: rgba(255, 215, 0, 0.3); /* Brilho dourado sutil */
  --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); /* Sombra dos cartões */
  --glow-shadow: 0 0 20px rgba(255, 215, 0, 0.1); /* Brilho dourado */
  
  /* Layout */
  --radius: 12px;
  --radius-sm: 8px;
  --spacing-base: 1rem;
  --spacing-large: 2rem;
  --container-width: 1200px;
}

/* ===== RESET E BASE ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  cursor: none;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  font-size: 16px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* ===== CURSOR PERSONALIZADO (MAIS SUTIL) ===== */
.custom-cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  background: #000000;
  border: 2px solid var(--accent-primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0.8;
  box-shadow: 0 0 8px var(--accent-primary);
}

.custom-cursor.clickable {
  transform: scale(1.5);
  opacity: 1;
}

.cursor-trail {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #000000;
  border: 1px solid var(--accent-primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.4;
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 0 6px var(--accent-primary);
}

.cursor-trail.clickable {
  transform: scale(1.2);
  opacity: 0.6;
}

/* Ocultar cursor padrão */
a, button, input, [role="button"], [style*="cursor: pointer"], .clickable {
  cursor: none !important;
}

/* ===== BACKGROUND GRID (MAIS SUTIL) ===== */
.background-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

/* ===== LAYOUT PRINCIPAL ===== */
.app-container {
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

/* ===== HEADER LIMPO ===== */
.app-header {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 2rem 0;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tech-icon {
  width: 48px;
  height: 48px;
  background: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--glow-shadow);
}

.tech-icon svg {
  width: 24px;
  height: 24px;
}

.main-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
}

.accent {
  color: var(--accent-primary);
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.25rem;
}

.portfolio-btn {
  padding: 0.75rem 1.5rem;
  background: var(--accent-primary);
  color: var(--bg-primary);
  text-decoration: none;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  box-shadow: var(--card-shadow);
}

.portfolio-btn:hover {
  background: var(--accent-secondary);
  transform: translateY(-1px);
  box-shadow: var(--glow-shadow), var(--card-shadow);
}

/* ===== NAVEGAÇÃO SIMPLIFICADA ===== */
.module-navigation {
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
  padding: 2rem 0;
}

.nav-content {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 2rem;
}

.module-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.module-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.module-tab:hover {
  border-color: var(--border-glow);
  color: var(--text-primary);
}

.module-tab.active {
  background: rgba(255, 215, 0, 0.1);
  border-color: var(--accent-primary);
  color: var(--text-primary);
}

.tab-number {
  font-weight: 700;
  font-size: 0.75rem;
  width: 20px;
  height: 20px;
  background: rgba(255, 215, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
}

.module-tab.active .tab-number {
  background: rgba(255, 215, 0, 0.3);
}

.module-tab:not(.active) .tab-number {
  background: var(--accent-tertiary);
  color: var(--bg-primary);
}

.module-info {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
}

.module-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.module-description {
  color: var(--text-secondary);
  font-size: 1rem;
}

/* ===== GRID DE COMPONENTES LIMPO ===== */
.components-grid {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 3rem 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.component-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
  transition: all 0.2s ease;
  box-shadow: var(--card-shadow);
}

.component-card:hover {
  border-color: var(--border-glow);
  box-shadow: var(--glow-shadow), var(--card-shadow);
  transform: translateY(-2px);
}

.card-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-badge {
  background: var(--accent-primary);
  color: var(--bg-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
}

.card-content {
  padding: 2rem;
  min-height: 300px;
}

/* ===== MÓDULO VAZIO ===== */
.empty-module {
  grid-column: 1 / -1;
  background: var(--bg-card);
  border: 2px dashed var(--border-color);
  border-radius: var(--radius);
  padding: 3rem;
  text-align: center;
}

.empty-content {
  max-width: 400px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-module h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.empty-module p {
  color: var(--text-secondary);
  font-size: 1rem;
}

/* ===== FOOTER COM ESQUEMA DOURADO ===== */
.app-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  margin-top: 3rem;
  position: relative;
}

.app-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-primary);
}

.footer-content {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.footer-content p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
}

/* ===== ANIMAÇÕES SUAVES ===== */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .module-tabs {
    flex-direction: column;
    gap: 0.5rem;
  }

  .module-tab {
    width: 100%;
    justify-content: flex-start;
  }

  .grid-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .components-grid {
    padding: 2rem 1rem;
  }

  .nav-content {
    padding: 0 1rem;
  }

  .header-content {
    padding: 0 1rem;
  }
}

@media (pointer: coarse) {
  .custom-cursor,
  .cursor-trail {
    display: none !important;
  }
  
  * {
    cursor: auto !important;
  }
}

@media (max-width: 480px) {
  .card-content {
    padding: 1.5rem;
  }
  
  .module-info {
    padding: 1rem;
  }
  
  .app-header {
    padding: 1rem 0;
  }
  
  .module-navigation {
    padding: 1.5rem 0;
  }
}
</style>