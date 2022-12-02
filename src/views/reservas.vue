<script setup>
import formulario from "../components/formulario.vue";
import tarjetaFotos from "../components/tarjetaFotos.vue";
import tarjetaMenu from "../components/tarjetaMenu.vue";
</script>

<template>
  <div class="max-width">
    <div class="head content_center">
      <h1 class="head_h1">
        ¿Quieres celebrar un evento, un cumpleaños o simplemente tener tu sitio
        para cenar?
      </h1>
      <hr />
      <h2 class="head_h2">
        <strong>Antes de reservar </strong> mira nuestros platos por encargo y
        menús para ocasiones especiales
      </h2>
      <hr />
    </div>
    <div class="menu content_center">
      <h3 class="menu_h3">Platos especiales de encargo</h3>
      <div class="carrousel">
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
        <tarjetaFotos
          class="tarjeta_item"
          :imagen="'../src/assets/voll-damm.jpg'"
          :texto="'soy una voll-damm'"
        ></tarjetaFotos>
      </div>
      <h3 class="menu_h3">
        Puedes encargar cualquiera de estos menús prediseñados
      </h3>
      <p class="menu_p">
        Todos nuestros menús son reservables con una semana de antelación y
        previo pago del 30% en concepto de señal. Los menús son cerrados ya que
        consideramos que hay una gran variedad de opciones para elegir.
      </p>
      <div class="carrousel carrousel--menus">
        <tarjetaMenu class="tarjeta_item"
        :nombre="'Menu embajador'"
        :entrante1="'Alcachofas confitadas con crujiente de jamón y sal negra del Himalaya'"
        :entrante2="'Shitake, gulas y huevo escalfado'"
        :segundo="'Chuletón de Ávila en lardones'"
        :bebida="'Botella de Prios Roble'"
        :precio="'50,00€/comensal'"
        ></tarjetaMenu>
        <tarjetaMenu class="tarjeta_item"
        :nombre="'Menu embajador'"
        :entrante1="'Alcachofas confitadas con crujiente de jamón y sal negra del Himalaya'"
        :entrante2="'Shitake, gulas y huevo escalfado'"
        :segundo="'Chuletón de Ávila en lardones'"
        :bebida="'Botella de Prios Roble'"
        :precio="'50,00€/comensal'"
        ></tarjetaMenu>
        <tarjetaMenu class="tarjeta_item"
        :nombre="'Menu embajador'"
        :entrante1="'Alcachofas confitadas con crujiente de jamón y sal negra del Himalaya'"
        :entrante2="'Shitake, gulas y huevo escalfado'"
        :segundo="'Chuletón de Ávila en lardones'"
        :bebida="'Botella de Prios Roble'"
        :precio="'50,00€/comensal'"
        ></tarjetaMenu>
        <tarjetaMenu class="tarjeta_item"
        :nombre="'Menu embajador'"
        :entrante1="'Alcachofas confitadas con crujiente de jamón y sal negra del Himalaya'"
        :entrante2="'Shitake, gulas y huevo escalfado'"
        :segundo="'Chuletón de Ávila en lardones'"
        :bebida="'Botella de Prios Roble'"
        :precio="'50,00€/comensal'"
        ></tarjetaMenu>
        <tarjetaMenu class="tarjeta_item"
        :nombre="'Menu embajador'"
        :entrante1="'Alcachofas confitadas con crujiente de jamón y sal negra del Himalaya'"
        :entrante2="'Shitake, gulas y huevo escalfado'"
        :segundo="'Chuletón de Ávila en lardones'"
        :bebida="'Botella de Prios Roble'"
        :precio="'50,00€/comensal'"
        ></tarjetaMenu>
        <tarjetaMenu class="tarjeta_item"
        :nombre="'Menu embajador'"
        :entrante1="'Alcachofas confitadas con crujiente de jamón y sal negra del Himalaya'"
        :entrante2="'Shitake, gulas y huevo escalfado'"
        :segundo="'Chuletón de Ávila en lardones'"
        :bebida="'Botella de Prios Roble'"
        :precio="'50,00€/comensal'"
        ></tarjetaMenu>
      </div>
    </div>
    <div class="formulario">
      <formulario class="content_center"></formulario>
    </div>
    <div class="mapa content_center">
      <h4 class="mapa_h4">
        Estamos en Fuente Carrantona, 43. Al lado del parque la cuña verde,
        encuentranos en el <strong>mapa</strong>
      </h4>
      <iframe
        class="mapa_iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.998451950929!2d-3.6330296846043115!3d40.40888507936608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422585ecad0af9%3A0x2c67960c1d5f6651!2sCafeter%C3%ADa%20las%20Vegas!5e0!3m2!1ses!2ses!4v1669486568141!5m2!1ses!2ses"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<style scoped>
.content_center {
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  overflow: hidden;
}
hr {
  border-bottom: 1px solid var(--black);
}
.head {
  padding-top: 2em;
}
.head_h1 {
  font-size: 2em;
  font-weight: 900;
  padding-bottom: 1em;
  text-align: right;
  line-height: 1.2em;
}
.menu_h3 {
  padding-top: 1em;
  font-size: 1.3em;
  font-weight: 700;
}
.carrousel {
  color: black;
  overflow: scroll;
  display: flex;
  gap: 1em;
  padding: 1em 0;
}

.tarjeta_item {
  min-width: 70%;
}
.formulario {
  padding-top: 2em;
}
.mapa {
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.mapa_h4 {
}
.mapa_iframe {
  border-radius: 0.3em;
  box-shadow: 1px 1px 10px -3px var(--black);
}
@media (min-width: 768px) {
  .head_h1 {
    font-size: 4em;
  }
  .head_h2 {
    font-size: 1.5em;
  }
  .menu_h3 {
    font-size: 2em;
  }
  .carrousel {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .carrousel--menus{
    grid-template-columns: 1fr 1fr ;
}
  .tarjeta_item {
    min-width: inherit;
  }
}
</style>
