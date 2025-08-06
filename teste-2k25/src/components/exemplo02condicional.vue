<script setup>
let exibir = false; 

let media = 8

</script>


<template>

<h1 v-if="exibir"> Testando a diretiva V-IF</h1>
<p v-if="media >=7">Aprovado</p>
<p v-if="media < 7">Reprovado</p>
</template>