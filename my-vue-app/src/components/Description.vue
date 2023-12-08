<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';


const props = defineProps({
  id: String
});

var produto = ref({})


onMounted(() => {
  axios.get('http://localhost:8080/produtos/id?Id=' + props.id)
    .then(response => {
      produto.value = response.data
    })
})


</script>

<template>
  <div class="container bg-white rounded-3">
    <h1 class="text-start p-5">{{ produto.nome }}</h1>
    <img class="img-fluid w-25" src="{{ produto.imagem.url }}" alt="">
    <hr>
    <h2>Descrição</h2>
    <h3>{{ produto.descricao }}</h3>
    <hr>
    <div class="d-flex p-2 justify-content-end ">
      <button class="btn btn-primary m-2">Comprar</button>
      <router-link to="/">

        <button class=" btn btn-danger m-2 ">Voltar</button>
      </router-link>
    </div>

  </div>
</template>

<style scoped></style>