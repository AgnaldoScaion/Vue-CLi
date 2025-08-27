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
  // 4: {
  //   title: "Módulo 4 - HTML Dinâmico",
  //   description: "Renderização de HTML e Componentes Dinâmicos",
  //   exercises: [{ id: "1", title: "HTML Render", component: Exemplo09 }],
  // },
  5: {
    title: "Módulo 5 - Formulários e Botões",
    description: "Formulários e Botões",
    exercises: [
      { id: "1", title: "Formulário Interativo", component: Exemplo10 },
      { id: "2", title: "IMC Calculator", component: exemplo11 },
      { id: "3", title: "Botões Dinâmicos", component: Exemplo13 },
      { id: "4", title: "Eventos de Clique", component: Exemplo14 },
    ],
  },
  // 6: {
  //   title: "Módulo 6 - Eventos Personalizados",
  //   description: "Eventos de Teclado e Clique",
  //   exercises: [
  //     { id: "2", title: "Custom Event Handling", component: Exemplo16 },
  //   ],
  // },
  7: {
    title: "Módulo 7 - Product Card",
    description: "Exibição de produtos com props dinâmicas",
    exercises: [
      { id: "1", title: "Product Card Demo", component: Exemplo18 },
      { id: "2", title: "Product Item List", component: Exemplo20 },
    ],
  },
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
    <div ref="cursorRef" class="custom-cursor" :class="{ clickable: isClickable }"></div>
    <div ref="trailRef" class="cursor-trail" :class="{ clickable: isClickable }"></div>

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
          <a href="https://agnaldoscaion.netlify.app" target="_blank" class="github-button">Meu Portfólio</a>
        </div>
      </div>
    </header>

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
          <p class="module-description">
            {{ modules[currentModule].description }}
          </p>
        </div>
      </div>
    </nav>

    <main class="components-grid" ref="gridRef">
      <TransitionGroup name="tech-grid" tag="div" class="components-grid-inner">
        <div
          v-if="modules[currentModule].exercises.length > 0"
          v-for="exercise in modules[currentModule].exercises"
          :key="`${currentModule}-${exercise.id}`"
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
        <div v-else class="empty-module" :key="`empty-${currentModule}`">
          <div class="empty-icon">
            <div class="construction-icon">🚧</div>
          </div>
          <h3>Módulo em Desenvolvimento</h3>
          <p>
            Os exercícios do {{ modules[currentModule].title }} serão adicionados em breve.
          </p>
          <div class="coming-soon">
            <span class="pulse-dot"></span>
            Em breve...
          </div>
        </div>
      </TransitionGroup>
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

html {
  scroll-behavior: smooth;
  cursor: none;
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

/* Cursor Personalizado */
.custom-cursor {
  position: fixed;
  width: 16px;
  height: 16px;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    background 0.2s ease, border-color 0.2s ease, opacity 0.3s ease-out;
  box-shadow: 0 0 8px var(--accent-primary);
}

.custom-cursor.clickable {
  background: #ffffff;
  border: 2px solid #000000;
}

.cursor-trail {
  position: fixed;
  width: 12px;
  height: 12px;
  background: #000000;
  border: 1px solid #ffffff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.5;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    background 0.2s ease, border-color 0.2s ease, opacity 0.4s ease-out;
  box-shadow: 0 0 6px var(--accent-primary);
}

.cursor-trail.clickable {
  background: #ffffff;
  border: 1px solid #000000;
}

/* Ocultar cursor padrão */
a,
button:not(.login-button),
input,
[role="button"],
[style*="cursor: pointer"],
.clickable {
  cursor: none;
}

.component-card [style*="cursor: pointer"],
.component-card .clickable,
.component-card a,
.component-card button:not(.login-button),
.component-card input,
.component-card [role="button"] {
  cursor: none;
}

/* Efeito ao passar por elementos interativos */
a:hover ~ .custom-cursor,
button:not(.login-button):hover ~ .custom-cursor,
input:hover ~ .custom-cursor,
[role="button"]:hover ~ .custom-cursor,
[style*="cursor: pointer"]:hover ~ .custom-cursor,
.clickable:hover ~ .custom-cursor {
  transform: scale(1.5);
}

a:hover ~ .cursor-trail,
button:not(.login-button):hover ~ .cursor-trail,
input:hover ~ .cursor-trail,
[role="button"]:hover ~ .cursor-trail,
[style*="cursor: pointer"]:hover ~ .cursor-trail,
.clickable:hover ~ .cursor-trail {
  transform: scale(1.3);
  opacity: 0.3;
}

/* Background Grid */
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

/* Layout Principal */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

/* Header */
.app-header {
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border-bottom: 1px solid var(--border-color);
  padding: 3rem 2rem;
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
  max-width: 1400px;
  margin: 0 auto;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.tech-icon {
  width: 60px;
  height: 60px;
  background: var(--accent-primary);
  border-radius: 15px;
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
  border-radius: 13px;
}

.icon-inner {
  width: 24px;
  height: 24px;
  background: var(--accent-primary);
  border-radius: 6px;
  position: relative;
  z-index: 1;
}

.title-section h1 {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.accent {
  color: var(--accent-primary);
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
}

.github-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--accent-primary);
  color: var(--bg-primary);
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.github-button:hover {
  background: rgba(255, 215, 0, 0.8);
  transform: translateY(-2px);
}

/* Navegação */
.module-navigation {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 2.5rem 2rem;
  margin-bottom: 3rem;
}

.nav-content {
  max-width: 1400px;
  margin: 0 auto;
}

.module-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.module-tab {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-secondary);
  cursor: none;
  transition: all 0.3s ease;
  font-family: inherit;
  font-size: 0.95rem;
  min-height: 60px;
}

.module-tab:hover {
  border-color: var(--border-glow);
  background: rgba(255, 215, 0, 0.05);
  transform: translateY(-2px);
}

.module-tab.active {
  background: rgba(255, 215, 0, 0.1);
  border-color: var(--accent-primary);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.tab-number {
  font-weight: 700;
  color: var(--accent-primary);
  font-size: 1rem;
  min-width: 20px;
}

.tab-title {
  font-weight: 500;
  white-space: nowrap;
}

.module-info {
  border-left: 3px solid var(--accent-primary);
  padding-left: 2rem;
  background: rgba(255, 215, 0, 0.02);
  padding: 1.5rem 2rem;
  border-radius: 12px;
}

.module-title {
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.module-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

/* Grid de Componentes */
.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  padding: 0 3rem;
  max-width: 1400px;
  margin: 0 auto;
  flex: 1;
  min-height: 400px;
}

.components-grid-inner {
  display: contents;
}

.component-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  min-height: 550px;
  cursor: none;
}

.component-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.component-card:hover {
  transform: translateY(-10px);
  border-color: var(--border-glow);
  box-shadow: var(--card-shadow), var(--glow-shadow);
}

.component-card:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-tertiary);
  min-height: 80px;
}

.card-number {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-primary);
  background: rgba(255, 215, 0, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.card-header h2 {
  color: var(--text-primary);
  font-size: 1.3rem;
  font-weight: 600;
  flex: 1;
}

.card-status {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-primary);
}

.card-content {
  padding: 2.5rem;
  min-height: 400px;
}

/* Módulo Vazio */
.empty-module {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem;
  text-align: center;
  background: var(--bg-secondary);
  border: 2px dashed var(--border-color);
  border-radius: 20px;
  min-height: 500px;
}

.empty-icon {
  margin-bottom: 2rem;
}

.construction-icon {
  font-size: 5rem;
  opacity: 0.7;
}

.empty-module h3 {
  color: var(--text-primary);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.empty-module p {
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.coming-soon {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 1rem;
}

.pulse-dot {
  width: 10px;
  height: 10px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

/* Footer */
.app-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  margin-top: 4rem;
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
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.footer-left p {
  color: var(--text-secondary);
  font-size: 1rem;
  font-family: "SF Mono", monospace;
}

.tech-metrics {
  display: flex;
  gap: 2rem;
}

.metric {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-family: "SF Mono", monospace;
  position: relative;
}

.metric::before {
  content: "●";
  color: var(--accent-primary);
  margin-right: 0.75rem;
}

/* Animações */
.tech-grid-enter-active,
.tech-grid-leave-active {
  transition: all 0.4s ease;
}

.tech-grid-enter-from,
.tech-grid-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  filter: blur(2px);
}

.tech-grid-enter-to,
.tech-grid-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.tech-grid-enter-active::before,
.tech-grid-leave-active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-primary),
    transparent
  );
  animation: glitch-line 0.4s ease;
}

@keyframes glitch-line {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

/* Responsividade */
@media (max-width: 1200px) {
  .components-grid {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2.5rem;
    padding: 0 2rem;
  }

  .header-content {
    max-width: 100%;
  }

  .nav-content {
    max-width: 100%;
  }

  .footer-content {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
    gap: 2rem;
  }

  .app-header,
  .module-navigation {
    padding: 2rem 1.5rem;
  }

  .header-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .title-section h1 {
    font-size: 2.5rem;
  }

  .module-tabs {
    flex-direction: column;
    gap: 1rem;
  }

  .module-tab {
    width: 100%;
    justify-content: flex-start;
  }

  .module-info {
    padding-left: 1.5rem;
  }

  .component-card {
    min-height: auto;
  }

  .card-content {
    padding: 1.5rem;
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
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .tech-metrics {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
