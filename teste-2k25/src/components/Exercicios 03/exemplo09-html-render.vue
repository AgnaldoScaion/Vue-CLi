<script setup>
import { ref } from 'vue'


const textoSimples = '<strong>Texto em negrito</strong> e <em>Texto em itálico</em>'
const textoComScript = '<script>alert("XSS!")<\/script> <strong>Texto perigoso</strong>'
</script>

<template>
  <div class="comparison-container">
    <h2>Comparação: Template Syntax vs v-html</h2>
    
    <div class="comparison-grid">
      <!-- Método 1: Template Syntax (interpolação padrão) -->
      <div class="method-card">
        <h3>Template Syntax ({{ }})</h3>
        <div class="example-area">
          <h4>Código:</h4>
          <pre>&lt;p&gt;{{ textoSimples }}&lt;/p&gt;</pre>
          
          <h4>Resultado:</h4>
          <div class="result-box">
            <p>{{ textoSimples }}</p>
          </div>
          
          <h4>Com conteúdo perigoso:</h4>
          <div class="result-box">
            <p>{{ textoComScript }}</p>
          </div>
        </div>
        
        <div class="method-details">
          <h4>Características:</h4>
          <ul>
            <li>Segurança contra XSS por padrão</li>
            <li>Exibe o HTML como texto puro</li>
            <li>Não interpreta tags HTML</li>
            <li>Recomendado para conteúdo não confiável</li>
          </ul>
        </div>
      </div>
      
      <!-- Método 2: v-html -->
      <div class="method-card">
        <h3>Diretiva v-html</h3>
        <div class="example-area">
          <h4>Código:</h4>
          <pre>&lt;p v-html="textoSimples"&gt;&lt;/p&gt;</pre>
          
          <h4>Resultado:</h4>
          <div class="result-box">
            <p v-html="textoSimples"></p>
          </div>
          
          <h4>Com conteúdo perigoso:</h4>
          <div class="result-box warning-box">
            <p v-html="textoComScript"></p>
            <div class="warning-message">⚠️ Script executado!</div>
          </div>
        </div>
        
        <div class="method-details">
          <h4>Características:</h4>
          <ul>
            <li>Interpreta e renderiza HTML</li>
            <li>Permite formatação rica</li>
            <li>Vulnerável a XSS se usado com conteúdo não confiável</li>
            <li>Requer sanitização para conteúdo externo</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="conclusion">
      <h3>Quando usar cada um?</h3>
      <p><strong>Use Template Syntax ({{ }})</strong> para:</p>
      <ul>
        <li>Conteúdo de texto simples</li>
        <li>Dados de usuários ou fontes não confiáveis</li>
        <li>Quando não precisa renderizar HTML</li>
      </ul>
      
      <p><strong>Use v-html</strong> para:</p>
      <ul>
        <li>Conteúdo HTML confiável (gerado por você)</li>
        <li>Quando precisa renderizar formatação HTML</li>
        <li>Após sanitização adequada de conteúdo externo</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.comparison-container {
  padding: 1rem;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.method-card {
  background: var(--bg-secondary);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
}

.example-area {
  margin: 1rem 0;
}

.result-box {
  min-height: 60px;
  padding: 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  margin: 0.5rem 0;
}

.warning-box {
  border: 2px solid #ff5252;
  position: relative;
}

.warning-message {
  position: absolute;
  top: 0;
  right: 0;
  background: #ff5252;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

pre {
  background: var(--bg-tertiary);
  padding: 0.75rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: monospace;
}

.method-details ul {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.conclusion {
  background: rgba(255, 215, 0, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--accent-primary);
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}
</style>