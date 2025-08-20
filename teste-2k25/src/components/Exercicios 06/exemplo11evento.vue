<template>
  <div class="container">
    <!-- Exemplo 1: Busca em tempo real -->
    <h2>Busca de Produtos</h2>
    <input
      type="text"
      placeholder="Digite para buscar produtos..."
      @keydown="handleSearchKeydown"
      v-model="searchTerm"
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
      @keypress="handleEmailKeypress"
      v-model="email"
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
      @keydown="handleTweetKeydown"
      v-model="tweetText"
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
      @keydown="handleEditorKeydown"
      v-model="editorText"
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
      @keypress="handleNumberKeypress"
      @keydown="handleNumberKeydown"
      v-model="numberValue"
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

<script>
export default {
  data() {
    return {
      // Busca de produtos
      searchTerm: '',
      lastSearchKey: '',
      products: [
        { id: 1, name: 'Notebook Dell', price: '2500,00' },
        { id: 2, name: 'Mouse Logitech', price: '85,00' },
        { id: 3, name: 'Teclado Mecânico', price: '250,00' },
        { id: 4, name: 'Monitor Samsung', price: '800,00' },
        { id: 5, name: 'Webcam HD', price: '150,00' },
        { id: 6, name: 'Fone Bluetooth', price: '120,00' }
      ],

      // Validação de email
      email: '',
      lastEmailChar: '',

      // Twitter/Post
      tweetText: '',
      lastTweetKey: '',

      // Editor com atalhos
      editorText: '',
      editorStatus: 'Digitando...',
      lastEditorAction: '',
      editorHistory: [],

      // Campo numérico
      numberValue: '',
      lastNumberKeypress: '',
      lastNumberKeydown: ''
    }
  },
  computed: {
    filteredProducts() {
      if (!this.searchTerm) return []
      
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    },

    isEmailValid() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailPattern.test(this.email)
    },

    wordCount() {
      return this.tweetText.trim() ? this.tweetText.trim().split(/\s+/).length : 0
    }
  },
  methods: {
    // Busca de produtos
    handleSearchKeydown(event) {
      this.lastSearchKey = event.key
    },

    // Validação de email
    handleEmailKeypress(event) {
      this.lastEmailChar = event.key
    },

    // Twitter/Post
    handleTweetKeydown(event) {
      this.lastTweetKey = event.key
    },

    getCharCountClass() {
      const count = this.tweetText.length
      if (count > 250) return 'danger'
      if (count > 200) return 'warning'
      return 'normal'
    },

    // Editor com atalhos
    handleEditorKeydown(event) {
      // Salvar com Ctrl+S
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault()
        this.editorStatus = 'Salvo ✅'
        this.lastEditorAction = 'Ctrl+S - Salvar'
        
        setTimeout(() => {
          this.editorStatus = 'Digitando...'
        }, 2000)
        return
      }

      // Desfazer com Ctrl+Z
      if (event.ctrlKey && event.key === 'z') {
        event.preventDefault()
        if (this.editorHistory.length > 0) {
          this.editorText = this.editorHistory.pop()
          this.lastEditorAction = 'Ctrl+Z - Desfazer'
          this.editorStatus = 'Desfeito'
        }
        return
      }

      // Selecionar tudo com Ctrl+A
      if (event.ctrlKey && event.key === 'a') {
        this.lastEditorAction = 'Ctrl+A - Selecionar tudo'
        return
      }

      // Salvar no histórico para desfazer (apenas para teclas de texto)
      if (event.key.length === 1 || event.key === 'Backspace') {
        if (this.editorHistory.length > 10) {
          this.editorHistory.shift() // Remove o mais antigo
        }
        this.editorHistory.push(this.editorText)
      }

      this.editorStatus = 'Digitando...'
    },

    // Campo numérico
    handleNumberKeypress(event) {
      this.lastNumberKeypress = event.key
      
      // Permite apenas números
      const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      
      if (!allowedKeys.includes(event.key)) {
        event.preventDefault() // Bloqueia a tecla
        this.lastNumberKeypress = `${event.key} (BLOQUEADO)`
      }
    },

    handleNumberKeydown(event) {
      this.lastNumberKeydown = event.key
    },

    formatCurrency(value) {
      if (!value) return '0,00'
      
      // Converte para número e formata como moeda
      const number = parseFloat(value) || 0
      return number.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h2 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin: 30px 0 15px 0;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 8px;
}

.input, .textarea {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.input:focus, .textarea:focus {
  border-color: #3498db;
  outline: none;
}

.input.valid {
  border-color: #27ae60;
}

.input.invalid {
  border-color: #e74c3c;
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

.output {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #555;
}

.key {
  font-weight: 600;
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 4px;
  color: #2c3e50;
  border: 1px solid #dee2e6;
}

/* Componentes específicos */
.search-results {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 10px;
}

.product-item {
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s;
}

.product-item:hover {
  background-color: #f8f9fa;
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
  background: #f8f9fa;
  color: #6c757d;
}

.status.valid {
  background: #d4edda;
  color: #155724;
}

.status.invalid {
  background: #f8d7da;
  color: #721c24;
}

.tweet-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.key.normal { color: #28a745; }
.key.warning { color: #ffc107; }
.key.danger { color: #dc3545; }

.editor-status {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  margin-top: 8px;
}

.shortcuts {
  margin-top: 8px;
  color: #6c757d;
}

.key.status-text {
  background: #e3f2fd;
  color: #1565c0;
}

.number-info {
  margin-top: 8px;
  color: #6c757d;
}
</style>