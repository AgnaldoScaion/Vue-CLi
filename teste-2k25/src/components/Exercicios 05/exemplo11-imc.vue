<script setup>
import { ref, computed } from 'vue'

const peso = ref('')
const altura = ref('')

const imc = computed(() => {
  if (!peso.value || !altura.value) return null
  const alturaMetros = altura.value / 100
  return (peso.value / (alturaMetros * alturaMetros)).toFixed(1)
})

const classificacao = computed(() => {
  if (!imc.value) return null
  
  const imcNum = parseFloat(imc.value)
  if (imcNum < 18.5) return 'Baixo peso'
  if (imcNum < 25) return 'Peso normal'
  if (imcNum < 30) return 'Sobrepeso'
  return 'Obesidade'
})

const classificacaoCor = computed(() => {
  if (!classificacao.value) return ''
  
  switch(classificacao.value) {
    case 'Baixo peso': return 'var(--warning-color)'
    case 'Peso normal': return 'var(--success-color)'
    case 'Sobrepeso': return 'var(--caution-color)'
    case 'Obesidade': return 'var(--danger-color)'
    default: return ''
  }
})
</script>

<template>
  <div class="imc-container">
    <h2>Calculadora de IMC</h2>
    
    <div class="imc-form">
      <div class="input-group">
        <label for="peso">Peso (kg):</label>
        <input 
          id="peso" 
          type="number" 
          v-model.number="peso" 
          min="0" 
          step="0.1"
          placeholder="Ex: 70.5"
        >
      </div>
      
      <div class="input-group">
        <label for="altura">Altura (cm):</label>
        <input 
          id="altura" 
          type="number" 
          v-model.number="altura" 
          min="0" 
          step="1"
          placeholder="Ex: 175"
        >
      </div>
    </div>
    
    <div v-if="imc" class="result-section">
      <h3>Resultado</h3>
      <div class="result-box">
        <p>Seu IMC: <strong>{{ imc }}</strong></p>
        <p>Classificação: 
          <span 
            class="classification-badge"
            :style="{ backgroundColor: classificacaoCor }"
          >
            {{ classificacao }}
          </span>
        </p>
      </div>
      
      <div class="reference-table">
        <h4>Tabela de Referência:</h4>
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="{ active: classificacao === 'Baixo peso' }">
              <td>&lt; 18.5</td>
              <td>Baixo peso</td>
            </tr>
            <tr :class="{ active: classificacao === 'Peso normal' }">
              <td>18.5 - 24.9</td>
              <td>Peso normal</td>
            </tr>
            <tr :class="{ active: classificacao === 'Sobrepeso' }">
              <td>25 - 29.9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr :class="{ active: classificacao === 'Obesidade' }">
              <td>≥ 30</td>
              <td>Obesidade</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div v-else class="empty-state">
      <p>Informe seu peso e altura para calcular o IMC</p>
    </div>
  </div>
</template>

<style scoped>
.imc-container {
  padding: 1rem;
    min-height: 80px; /* ajuste conforme necessário */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imc-form {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.result-section {
  margin-top: 2rem;
    min-height: 80px; /* ajuste conforme necessário */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-box {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
  min-height: 80px; /* ajuste conforme necessário */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.classification-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: bold;
  color: white;
}

.reference-table {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

th {
  background: var(--bg-tertiary);
}

tr.active {
  background: rgba(255, 215, 0, 0.1);
}

.empty-state {
  text-align: center;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 1px dashed var(--border-color);
}

:root {
  --success-color: #4caf50;
  --warning-color: #ff9800;
  --caution-color: #ff5722;
  --danger-color: #f44336;
}
</style>