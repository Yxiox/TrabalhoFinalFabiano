<script setup>



</script>

<template>
  <!--Navbar-->
  <div class="nav">

    <div class="home">
      <button>
        <router-link to="/">
          <img src="https://www.nicepng.com/png/full/115-1153942_home-logo-png.png" height="30" width="30" />
        </router-link>
      </button>
    </div>

    <div class="consultar">
      <input type="text" class="consultarInput">
      <button type="button" class="consultarButton">Consultar</button>
    </div>

    <div class="carrinho">
      <button>
        <router-link to="/cart">
          <img src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg" height="30"
            width="35" />
        </router-link>
      </button>
    </div>
  </div>

  <router-view></router-view>
</template>

<style>
.nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  justify-content: space-between;
  background-color: rgb(20, 20, 20);
}

.consultarButton {
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.carrinho {
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 5px;
}

.home {
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>