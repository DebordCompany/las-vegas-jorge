<script setup>
import triptico from "../components/triptico.vue";
import formulario from "../components/formulario.vue"
</script>
<script>
export default {
  data() {
    return {
      fotos: [
        { imagen: "../src/assets/oreja_1.jpg", subtitulo: "Nuestra terraza" },
        {
          imagen: "../src/assets/viernes_las_vegas.png",
          subtitulo: "Los viernes son sagrados",
        },
        {
          imagen: "../src/assets/gintonic.jpg",
          subtitulo: "Y la copita de después",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="max-width">
    <div class="head content_center">
      <h1 class="head_h1">
        ¿Quieres celebrar un evento, un cumpleaños o simplemente tener tu sitio
        para cenar?
      </h1>
      <hr>
      <h2 class="head_h2">
        Aquí podras contactar con nosotros y reservar tu mesa o acordar un menu
        especial
      </h2>
      <hr>
    </div>
    <div class="menu content_center">
      <h3 class="menu_h3 ">Algunos de nuestros platos por encargo</h3>

    <triptico></triptico>
    <p class="menu_p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea debitis, quas ullam illo quo facere quibusdam sed dolores adipisci nobis non rerum quia nihil id repellat ipsum, maiores tempore obcaecati dolore eum. Expedita, veritatis.
    </p>
    </div>
    <div class="formulario">
      <formulario class="content_center"></formulario>
    </div>
    <div class="mapa content_center">
      <h4 class="mapa_h4">Estamos en Fuente Carrantona, 43. Al lado del parque la cuña verde, encuentranos en el <strong>mapa</strong></h4>
      <iframe class="mapa_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.998451950929!2d-3.6330296846043115!3d40.40888507936608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422585ecad0af9%3A0x2c67960c1d5f6651!2sCafeter%C3%ADa%20las%20Vegas!5e0!3m2!1ses!2ses!4v1669486568141!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    

    
  </div>
</template>
<style scoped>
.content_center {
  padding: 0 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
}
hr{
  border-bottom: 1px solid var(--black);
}
.head {
  padding-top: 2em;
}
.head_h1 {
  font-size: 1.5em;
  font-weight: 700;
  padding-bottom: 1em;
}
.menu_h3 {
  padding-top: 1em;
  font-size: 1.3em;
}
.formulario{
  padding-top: 2em;
  
}
.mapa{
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;

}
.mapa_h4{
  
}
.mapa_iframe{
  border-radius: .3em;
  box-shadow: 1px 1px 10px -3px var(--black);
}


</style>
