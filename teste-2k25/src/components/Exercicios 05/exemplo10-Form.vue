<script setup>
import { ref } from 'vue'

const formData = ref({
  nome: '',
  email: '',
  idade: '',
  bio: ''
})
</script>

<template>
  <div class="form-container">
    <h2>Formulário de Cadastro</h2>
    
    <form @submit.prevent class="registration-form">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input 
          id="nome" 
          type="text" 
          v-model="formData.nome" 
          placeholder="Digite seu nome"
        >
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          id="email" 
          type="email" 
          v-model="formData.email" 
          placeholder="Digite seu email"
        >
      </div>
      
      <div class="form-group">
        <label for="idade">Idade:</label>
        <input 
          id="idade" 
          type="number" 
          v-model.number="formData.idade" 
          min="0"
          placeholder="Digite sua idade"
        >
      </div>
      
      <div class="form-group">
        <label for="bio">Biografia:</label>
        <textarea 
          id="bio" 
          v-model="formData.bio" 
          placeholder="Fale um pouco sobre você"
          rows="4"
        ></textarea>
      </div>
    </form>
    
    <div class="preview-section">
      <h3>Pré-visualização dos Dados</h3>
      <div class="preview-box">
        <p><strong>Nome:</strong> {{ formData.nome || 'Não informado' }}</p>
        <p><strong>Email:</strong> {{ formData.email || 'Não informado' }}</p>
        <p><strong>Idade:</strong> {{ formData.idade || 'Não informada' }}</p>
        <p><strong>Biografia:</strong></p>
        <p class="bio-preview">{{ formData.bio || 'Nenhuma biografia fornecida' }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  padding: 1rem;
}

.registration-form {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  color: var(--text-primary);
}

input, textarea {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

textarea {
  resize: vertical;
}

.preview-section {
  margin-top: 2rem;
}

.preview-box {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.bio-preview {
  white-space: pre-line;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: var(--bg-tertiary);
  border-radius: 4px;
}
</style>