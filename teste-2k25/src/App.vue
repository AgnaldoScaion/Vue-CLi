<script setup>
import { ref } from 'vue'
import Exemplo01 from "./components/Exercicios 01/exemplo01interpolacao.vue";
import Exemplo02 from "./components/Exercicios 01/exemplo02.vue";
import Exemplo03 from "./components/Exercicios 01/exemplo03.vue";
import Exemplo04 from "./components/Exercicios 01/exemplo04for.vue";
import Exemplo05 from "./components/Exercicios 02/exemplo05-login.vue";
import Exemplo06 from "./components/Exercicios 02/exemplo06-idade.vue";
import Exemplo07 from "./components/Exercicios 03/exemplo07-lista-compras.vue";
import Exemplo08 from "./components/Exercicios 03/exemplo08-catalogo.vue";
import Exemplo09 from "./components/Exercicios 04/exemplo09-html-render.vue";

const currentModule = ref(1)

const modules = {
  1: {
    title: "Módulo 1 - Fundamentos",
    description: "Conceitos básicos e exemplos práticos",
    exercises: [
      { id: "1", title: "String Interpolation", component: Exemplo01 },
      { id: "2", title: "Calculator Engine", component: Exemplo02 },
      { id: "3", title: "DateTime Module", component: Exemplo03 },
      { id: "4", title: "Name", component: Exemplo04 }
    ]
  },
  2: {
    title: "Módulo 2 - Componentes Avançados",
    description: "Componentes e Login System",
    exercises: [
      { id: "1", title: "Login System", component: Exemplo05 },
      { id: "2", title: "Age Classifier", component: Exemplo06 }]
  },
  3: {
    title: "Módulo 3 - Listas e Renderização",
    description: "Catalogo de Produtos e Listas",
    exercises: [
      { id: "01", title: "Lista de Compras", component: Exemplo07 },
      { id: "02", title: "Catálogo de Produtos", component: Exemplo08 }
    ]
  },
  4: {
    title: "Módulo 4 - HTML Dinâmico",
    description: "Renderização de HTML e Componentes Dinâmicos",
    exercises: [
      { id: "01", title: "HTML Render", component: Exemplo09 }
    ]
  }
}

const switchModule = (moduleNumber) => {
  currentModule.value = moduleNumber
}
</script>

<template>
  <div class="app-container">
    <div class="background-grid"></div>

    <header class="app-header">
      <div class="header-content">
        <div class="logo-section">
          <div class="tech-icon">
            <div class="icon-inner"></div>
          </div>
          <div class="title-section">
            <h1 class="main-title">
              Agnaldo<span class="accent">Scaion</span>
            </h1>
            <p class="subtitle">Vue.js Showcase</p>
          </div>
        </div>
        <div class="credits-button">
          <a
            href="https://agnaldoscaion.netlify.app"
            target="_blank"
            class="github-button"
          >Meu Portfólio</a>
        </div>
      </div>
    </header>

    <!-- Module Navigation -->
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
            <span class="tab-title">{{ module.title }}</span>
          </button>
        </div>
        <div class="module-info">
          <h2 class="module-title">{{ modules[currentModule].title }}</h2>
          <p class="module-description">{{ modules[currentModule].description }}</p>
        </div>
      </div>
    </nav>

    <main class="components-grid">
      <!-- Show exercises if they exist -->
      <div 
        v-if="modules[currentModule].exercises.length > 0"
        v-for="exercise in modules[currentModule].exercises" 
        :key="exercise.id"
        class="component-card"
      >
        <div class="card-header">
          <div class="card-number">{{ currentModule }}.{{ exercise.id }}</div>
          <h2>{{ exercise.title }}</h2>
          <div class="card-status"></div>
        </div>
        <div class="card-content">
          <component :is="exercise.component" />
        </div>
      </div>

      <!-- Show placeholder for empty modules -->
      <div v-else class="empty-module">
        <div class="empty-icon">
          <div class="construction-icon">🚧</div>
        </div>
        <h3>Módulo em Desenvolvimento</h3>
        <p>Os exercícios do {{ modules[currentModule].title }} serão adicionados em breve.</p>
        <div class="coming-soon">
          <span class="pulse-dot"></span>
          Em breve...
        </div>
      </div>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-left">
          <p>VueTech Platform v2.1.0 | Módulo {{ currentModule }} Ativo</p>
        </div>
        <div class="footer-right">
          <div class="tech-metrics">
            <span class="metric">Módulos: {{ Object.keys(modules).length }}</span>
            <span class="metric">Exercícios: {{ modules[currentModule].exercises.length }}</span>
            <span class="metric">Performance: 98%</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --bg-primary: #0a0a0b;
  --bg-secondary: #111114;
  --bg-tertiary: #1a1a1e;
  --accent-primary: #ffd700;
  --accent-secondary: #ffd700;
  --accent-tertiary: #ffd700;
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --border-color: #334155;
  --border-glow: rgba(255, 215, 0, 0.3);
  --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  --glow-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "SF Mono", "Monaco", "Cascadia Code", "Roboto Mono", monospace;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

.background-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(255, 215, 0, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.app-header {
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border-bottom: 1px solid var(--border-color);
  padding: 2rem;
  position: relative;
}

.app-header::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-primary);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tech-icon {
  width: 50px;
  height: 50px;
  background: var(--accent-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: var(--glow-shadow);
}

.tech-icon::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: var(--bg-secondary);
  border-radius: 10px;
}

.icon-inner {
  width: 20px;
  height: 20px;
  background: var(--accent-primary);
  border-radius: 4px;
  position: relative;
  z-index: 1;
}

.title-section h1 {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.accent {
  color: var(--accent-primary);
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.25rem;
}

.github-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.github-button:hover {
  background: rgba(255, 215, 0, 0.8);
}

/* Module Navigation Styles */
.module-navigation {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
}

.module-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.module-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  font-size: 0.9rem;
}

.module-tab:hover {
  border-color: var(--border-glow);
  background: rgba(255, 215, 0, 0.05);
}

.module-tab.active {
  background: rgba(255, 215, 0, 0.1);
  border-color: var(--accent-primary);
  color: var(--text-primary);
}

.tab-number {
  font-weight: 700;
  color: var(--accent-primary);
  font-size: 0.8rem;
}

.tab-title {
  font-weight: 500;
}

.module-info {
  border-left: 2px solid var(--accent-primary);
  padding-left: 1rem;
}

.module-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.module-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  min-height: 400px;
}

.component-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  height: fit-content;
}

.component-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.component-card:hover {
  transform: translateY(-8px);
  border-color: var(--border-glow);
  box-shadow: var(--card-shadow), var(--glow-shadow);
}

.component-card:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-tertiary);
}

.card-number {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-primary);
  background: rgba(255, 215, 0, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.card-header h2 {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  flex: 1;
}

.card-status {
  width: 6px;
  height: 6px;
  background: var(--accent-primary);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--accent-primary);
}

.card-content {
  padding: 1.5rem;
}

/* Empty Module Styles */
.empty-module {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background: var(--bg-secondary);
  border: 2px dashed var(--border-color);
  border-radius: 16px;
  min-height: 400px;
}

.empty-icon {
  margin-bottom: 1.5rem;
}

.construction-icon {
  font-size: 4rem;
  opacity: 0.7;
}

.empty-module h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.empty-module p {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.coming-soon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-left p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-family: "SF Mono", monospace;
}

.tech-metrics {
  display: flex;
  gap: 1.5rem;
}

.metric {
  color: var(--text-muted);
  font-size: 0.75rem;
  font-family: "SF Mono", monospace;
  position: relative;
}

.metric::before {
  content: "●";
  color: var(--accent-primary);
  margin-right: 0.5rem;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .app-header, .module-navigation {
    padding: 1.5rem 1rem;
  }

  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .module-tabs {
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .tech-metrics {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .title-section h1 {
    font-size: 2rem;
  }

  .component-card {
    margin: 0 0.5rem;
  }

  .module-title {
    font-size: 1.2rem;
  }
}
</style>