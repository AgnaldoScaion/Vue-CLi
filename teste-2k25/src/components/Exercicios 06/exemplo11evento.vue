<script setup>
import { ref, computed } from 'vue'

const searchTerm = ref('')
const lastSearchKey = ref('')
const products = ref([
  { id: 1, name: 'Notebook Dell', price: '2500,00' },
  { id: 2, name: 'Mouse Logitech', price: '85,00' },
  { id: 3, name: 'Teclado Mecânico', price: '250,00' },
  { id: 4, name: 'Monitor Samsung', price: '800,00' },
  { id: 5, name: 'Webcam HD', price: '150,00' },
  { id: 6, name: 'Fone Bluetooth', price: '120,00' }
])

const email = ref('')
const lastEmailChar = ref('')

const tweetText = ref('')
const lastTweetKey = ref('')

const editorText = ref('')
const editorStatus = ref('Digitando...')
const lastEditorAction = ref('')
const editorHistory = ref([])

const numberValue = ref('')
const lastNumberKeypress = ref('')
const lastNumberKeydown = ref('')

// Busca de produtos
const filteredProducts = computed(() => {
  if (!searchTerm.value) return []
  return products.value.filter(product =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const handleSearchKeydown = (event) => {
  lastSearchKey.value = event.key
}

// Validação de email
const isEmailValid = computed(() => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email.value)
})

const handleEmailKeypress = (event) => {
  lastEmailChar.value = event.key
}

// Twitter/Post
const wordCount = computed(() => {
  return tweetText.value.trim() ? tweetText.value.trim().split(/\s+/).length : 0
})

const handleTweetKeydown = (event) => {
  lastTweetKey.value = event.key
}

const getCharCountClass = () => {
  const count = tweetText.value.length
  if (count > 250) return 'danger'
  if (count > 200) return 'warning'
  return 'normal'
}

// Editor com atalhos
const handleEditorKeydown = (event) => {
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault()
    editorStatus.value = 'Salvo ✅'
    lastEditorAction.value = 'Ctrl+S - Salvar'
    setTimeout(() => {
      editorStatus.value = 'Digitando...'
    }, 2000)
    return
  }

  if (event.ctrlKey && event.key === 'z') {
    event.preventDefault()
    if (editorHistory.value.length > 0) {
      editorText.value = editorHistory.value.pop()
      lastEditorAction.value = 'Ctrl+Z - Desfazer'
      editorStatus.value = 'Desfeito'
    }
    return
  }

  if (event.ctrlKey && event.key === 'a') {
    lastEditorAction.value = 'Ctrl+A - Selecionar tudo'
    return
  }

  if (event.key.length === 1 || event.key === 'Backspace') {
    if (editorHistory.value.length > 10) {
      editorHistory.value.shift()
    }
    editorHistory.value.push(editorText.value)
  }

  editorStatus.value = 'Digitando...'
}

// Campo numérico
const handleNumberKeypress = (event) => {
  lastNumberKeypress.value = event.key
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault()
    lastNumberKeypress.value = `${event.key} (BLOQUEADO)`
  }
}

const handleNumberKeydown = (event) => {
  lastNumberKeydown.value = event.key
}

const formatCurrency = (value) => {
  if (!value) return '0,00'
  const number = parseFloat(value) || 0
  return number.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
</script>

<template>
  <div class="container">
    <!-- Exemplo 1: Busca em tempo real -->
    <h2>Busca de Produtos</h2>
    <input
      type="text"
      placeholder="Digite para buscar produtos..."
      v-model="searchTerm"
      @keydown="handleSearchKeydown"
      class="input"
    />
    <p class="output">Buscando por: <span class="key">{{ searchTerm || 'Nada digitado' }}</span></p>
    <p class="output">Última tecla: <span class="key">{{ lastSearchKey }}</span></p>
    <div class="search-results">
      <div v-for="product in filteredProducts" :key="product.id" class="product-item">
        {{ product.name }} - R$ {{ product.price }}
      </div>
    </div>

    <!-- Exemplo 2: Validação de formulário em tempo real -->
    <h2>📝 Cadastro de Email</h2>
    <input
      type="email"
      placeholder="Digite seu email..."
      v-model="email"
      @keypress="handleEmailKeypress"
      class="input"
      :class="{ 'valid': isEmailValid, 'invalid': email && !isEmailValid }"
    />
    <p class="output">Email digitado: <span class="key">{{ email }}</span></p>
    <p class="output">Último caractere: <span class="key">{{ lastEmailChar }}</span></p>
    <div class="validation-status">
      <span v-if="!email" class="status neutral">Digite um email</span>
      <span v-else-if="isEmailValid" class="status valid">✅ Email válido</span>
      <span v-else class="status invalid">❌ Email inválido</span>
    </div>

    <!-- Exemplo 3: Contador de caracteres -->
    <h2>💬 Post no Twitter/X</h2>
    <textarea
      placeholder="O que está acontecendo?"
      v-model="tweetText"
      @keydown="handleTweetKeydown"
      class="textarea"
      maxlength="280"
    ></textarea>
    <div class="tweet-info">
      <p class="output">Caracteres: <span class="key" :class="getCharCountClass()">{{ tweetText.length }}/280</span></p>
      <p class="output">Última tecla: <span class="key">{{ lastTweetKey }}</span></p>
      <p class="output">Palavras: <span class="key">{{ wordCount }}</span></p>
    </div>

    <!-- Exemplo 4: Atalhos do teclado -->
    <h2>⌨️ Editor de Texto com Atalhos</h2>
    <textarea
      placeholder="Digite seu texto aqui... (Ctrl+S para salvar, Ctrl+Z para desfazer)"
      v-model="editorText"
      @keydown="handleEditorKeydown"
      class="textarea"
    ></textarea>
    <div class="editor-status">
      <p class="output">Status: <span class="key status-text">{{ editorStatus }}</span></p>
      <p class="output">Última ação: <span class="key">{{ lastEditorAction }}</span></p>
      <div class="shortcuts">
        <small>Atalhos: Ctrl+S (Salvar) | Ctrl+Z (Desfazer) | Ctrl+A (Selecionar tudo)</small>
      </div>
    </div>

    <!-- Exemplo 5: Filtro de números -->
    <h2>💰 Campo de Valor (Apenas números)</h2>
    <input
      type="text"
      placeholder="Digite apenas números..."
      v-model="numberValue"
      @keypress="handleNumberKeypress"
      @keydown="handleNumberKeydown"
      class="input"
    />
    <p class="output">Valor: <span class="key">R$ {{ formatCurrency(numberValue) }}</span></p>
    <p class="output">Última tecla (keypress): <span class="key">{{ lastNumberKeypress }}</span></p>
    <p class="output">Última tecla (keydown): <span class="key">{{ lastNumberKeydown }}</span></p>
    <div class="number-info">
      <small>Apenas números são permitidos. Outras teclas são bloqueadas no keypress.</small>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: var(--card-shadow), var(--glow-shadow);
  font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
  position: relative;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.container::before {
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

.container:hover::before {
  opacity: 1;
}

h2 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin: 30px 0 15px 0;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 8px;
  font-weight: 600;
}

.input, .textarea {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 12px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  transition: border-color 0.3s ease, transform 0.3s ease;
  font-family: inherit;
  cursor: none;
}

.input:focus, .textarea:focus {
  border-color: var(--accent-primary);
  outline: none;
  transform: scale(1.02);
}

.input.valid {
  border-color: #00c853;
}

.input.invalid {
  border-color: #ff5252;
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

.output {
  font-size: 1rem;
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.key {
  font-weight: 600;
  background: var(--bg-tertiary);
  padding: 4px 8px;
  border-radius: 4px;
  color: var(--text-primary);
  border: 1px solid var(--border-glow);
  transition: background 0.3s ease;
}

.key:hover {
  background: rgba(255, 215, 0, 0.1);
}

/* Componentes específicos */
.search-results {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  margin-top: 10px;
  background: var(--bg-tertiary);
}

.product-item {
  padding: 8px 12px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-primary);
  transition: background 0.2s ease, transform 0.2s ease;
  cursor: none;
}

.product-item:hover {
  background: rgba(255, 215, 0, 0.1);
  transform: translateX(4px);
}

.product-item:last-child {
  border-bottom: none;
}

.validation-status {
  margin-top: 8px;
}

.status {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.status.neutral {
  background: var(--bg-tertiary);
  color: var(--text-muted);
}

.status.valid {
  background: rgba(0, 200, 83, 0.1);
  color: #00c853;
}

.status.invalid {
  background: rgba(255, 0, 0, 0.1);
  color: #ff5252;
}

.tweet-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.key.normal { color: #00c853; }
.key.warning { color: #ffd700; }
.key.danger { color: #ff5252; }

.editor-status {
  background: var(--bg-tertiary);
  padding: 12px;
  border-radius: 6px;
  margin-top: 8px;
  border: 1px solid var(--border-color);
}

.shortcuts {
  margin-top: 8px;
  color: var(--text-muted);
}

.key.status-text {
  background: rgba(255, 215, 0, 0.1);
  color: var(--accent-primary);
}

.number-info {
  margin-top: 8px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .container {
    margin: 20px;
    padding: 16px;
  }

  h2 {
    font-size: 1.2rem;
  }

  .input, .textarea {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .container {
    margin: 10px;
    padding: 12px;
  }

  h2 {
    font-size: 1.1rem;
  }
}
</style>