<script setup>
function validaFormulario(){
  AudioListener(`Formulario enviado com sucesso!`)
  event.preventDefault()
}

</script>

<template>
<form action="https://g1.globo.com" @submit="validaFormulario">
<input type="submit" value="Enviar Formulário" />
</form>



</template>