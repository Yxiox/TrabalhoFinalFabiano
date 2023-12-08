<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const produtos = ref([]);

onMounted(() => {
  axios.get('http://localhost:8080/produtos')
    .then(response => {
      produtos.value = response.data
    })
})

</script>

<template>
  <div class="row" v-for="p in  produtos " :key="p.id">

    <div class="col-3 pb-3">
      <div class="rounded-5 text-white produto">
        <div class="p-3">
          <a tabindex="1" class="btn" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Descrição"
            data-bs-content="Descrição do item">
            <router-link :to="'/description/' + p.id">
              <img class="img-responsive w-75"
                src="https://i5.walmartimages.com/asr/91514adf-1cd0-4a89-931e-b62ea863a236.6acd4dd8fcad9642ee954a3e688da626.jpeg"
                alt="{{ p.imagem.altText }}" />
            </router-link>
          </a>
          <h3>{{ p.nome }}</h3>
          <h3>Valor: R${{ p.valor }}</h3>
          <button type="button" class="btn btn-success">Comprar</button>
        </div>
      </div>
    </div>




  </div>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  border: 1px solid transparent;
  background-color: rgb(20, 20, 20);
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.imageSize {
  width: 25em;
}

.consultar {
  display: flex;
  column-gap: 5px;
}

.carrinho {
  margin-right: 30px;
}

.vitrine {
  display: flexbox;
}


.produto {
  background-color: rgb(61, 61, 61);
  transition: box-shadow 0.3s ease;
  border: 1px solid transparent;
}

.produto:hover {
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
}

.produto img {
  border: 2px solid transparent;
  border-radius: 15px;
  margin: 15px;
}

.produtoContent {
  width: 100%;
  height: 400px;
  border-radius: 15px;
  display: flex;
  align-items: end;
  column-gap: 25px;
  margin-bottom: 15px;
  margin-left: 15px;
}

.consultarButton {
  background-color: rgb(201, 201, 201);
  color: rgb(0, 0, 0);
  width: 80px;
  text-align-last: auto;
  padding: 4px;

}
</style>
