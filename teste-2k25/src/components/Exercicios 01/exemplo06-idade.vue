<script setup>
import { ref } from 'vue'

const idade = ref(20)
</script>

<template>
  <div class="exercise-container">
    <div class="age-control">
      <label for="idade">Idade:</label>
      <input 
        id="idade" 
        type="number" 
        v-model.number="idade" 
        min="0" 
        max="120"
        class="age-input"
      >
    </div>
    
    <div class="classification-result">
      <p v-if="idade <= 12" class="classification child">Criança (0-12)</p>
      <p v-else-if="idade <= 17" class="classification teen">Adolescente (13-17)</p>
      <p v-else-if="idade <= 59" class="classification adult">Adulto (18-59)</p>
      <p v-else class="classification elderly">Idoso (60+)</p>
    </div>
  </div>
</template>

<style scoped>
.exercise-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.age-control {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.age-input {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  width: 80px;
}

.classification-result {
  text-align: center;
}

.classification {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  margin: 0 auto;
  max-width: 200px;
}

.child {
  background-color: rgba(255, 152, 0, 0.2);
  color: #ff9800;
  border: 1px solid #ff9800;
}

.teen {
  background-color: rgba(156, 39, 176, 0.2);
  color: #9c27b0;
  border: 1px solid #9c27b0;
}

.adult {
  background-color: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  border: 1px solid #4caf50;
}

.elderly {
  background-color: rgba(233, 30, 99, 0.2);
  color: #e91e63;
  border: 1px solid #e91e63;
}
</style>