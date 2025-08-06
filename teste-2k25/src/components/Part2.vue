<script setup>
// Importe os novos componentes para a Parte 2
import Exemplo02condicional from '../components/exemplo02condicional.vue';
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
            <h1 class="main-title">Agnaldo<span class="accent">Scaion</span></h1>
            <p class="subtitle">Component Showcase Platform - Part 2</p>
          </div>
        </div>
        <div class="credits-button">
          <a href="https://agnaldoscaion.netlify.app" target="_blank" class="github-button">Meu GitHub</a>
        </div>
        <div class="status-indicator">
          <div class="status-dot"></div>
          <span>Active</span>
        </div>
      </div>
    </header>

    <main class="components-grid">
      <div class="component-card" data-index="04">
        <div class="card-header">
          <div class="card-number">04</div>
          <h2>New Feature 1</h2>
          <div class="card-status"></div>
        </div>
        <div class="card-content">
          <Exemplo02condicional/>
        </div>
      </div>

      <div class="component-card" data-index="05">
        <div class="card-header">
          <div class="card-number">05</div>
          <h2>New Feature 2</h2>
          <div class="card-status"></div>
        </div>
        <div class="card-content">
          <Exemplo05 />
        </div>
      </div>

      <div class="component-card" data-index="06">
        <div class="card-header">
          <div class="card-number">06</div>
          <h2>New Feature 3</h2>
          <div class="card-status"></div>
        </div>
        <div class="card-content">
          <Exemplo06 />
        </div>
      </div>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-left">
          <p>VueTech Platform v2.2.0</p>
        </div>
        <div class="footer-right">
          <div class="tech-metrics">
            <span class="metric">Performance: 98%</span>
            <span class="metric">Uptime: 99.9%</span>
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
  font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
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
  background-image:
    linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px),
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
  margin-bottom: 3rem;
  position: relative;
}

.app-header::before {
  content: '';
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
  content: '';
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

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  box-shadow: 0 0 10px var(--accent-primary);
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
}

.component-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.component-card::before {
  content: '';
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

.app-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  margin-top: 3rem;
  position: relative;
}

.app-footer::before {
  content: '';
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
  font-family: 'SF Mono', monospace;
}

.tech-metrics {
  display: flex;
  gap: 1.5rem;
}

.metric {
  color: var(--text-muted);
  font-size: 0.75rem;
  font-family: 'SF Mono', monospace;
  position: relative;
}

.metric::before {
  content: '●';
  color: var(--accent-primary);
  margin-right: 0.5rem;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .app-header {
    padding: 1.5rem 1rem;
  }

  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
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
}

.credits-button {
  margin-left: auto;
  margin-right: 1rem;
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
</style>
