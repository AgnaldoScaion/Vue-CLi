<script setup>
let nomes = ['Agnaldo', 'Maria', 'João', 'Ana', 'Pedro']

</script>

<template>
  
<ul>
  <li v-for="(nome, index) in nomes"> {{ index + 1 }}  {{ nome }}</li>    
</ul>


</template>