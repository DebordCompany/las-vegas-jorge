<script setup>
import tarjetaFotos from "../components/tarjetaFotos.vue";
</script>
<script>
export default {
  data() {
    return {
      info: [
        {
          imagen: "../assets/terrraza.jpg",
          subtitulo:
            "Esta es nuestra terraza, el sitio perfecto para cenar con amigos",
        },
        {
          imagen: "../assets/viernes_las_vegas.png",
          subtitulo:
            "Los viernes son sagrados, es nuestro día estrella, no olvides preguntar por los fuera de carta",
        },
        {
          imagen: "../assets/gintonic.jpg",
          subtitulo:
            "El after work es vital, ven a tomarte una copa con tus compañeros después del trabajo",
        },
      ],
    };
  },
};
</script>

<template>
  <img class="portada" src="../assets/portada_las_vegas.jpg" alt="portada" />
  <div class="head air max-width">
    <p class="head_p">Dicen que las cosas buenas vienen en frasco pequeño</p>
    <hr />
    <h1 class="head_h1">
      Somos un pequeño bar de Moratalaz. Contamos con una terraza, un salón y
      una barra donde damos de comer desde desayunos pasando por menús y
      terminando con cenas. Nuestro estilo es la comida tradicional aunque
      intentamos salirnos de la norma siempre que podemos, especialmente las
      cenas de los viernes noche.
    </h1>

    <hr />
  </div>
  <div class="galeria">
    <div class="max-width air">
      <p class="local_p">Este es nuestro local</p>
      <h2 class="">
        Nos encontramos en Madrid, concretamente en Fuente Carrantona, 43. Somos un bar de los de antes, con atención al producto y cuidado en el servicio, es verdad que no tenemos el local más bonito del mundo pero lo compensamos con el trato y la comida.

      </h2>
      <div class="container">
        <tarjetaFotos
          :imagen="info[0].imagen"
          :texto="info[0].subtitulo"
        ></tarjetaFotos>
        <tarjetaFotos
          :imagen="info[1].imagen"
          :texto="info[1].subtitulo"
        ></tarjetaFotos>
        <tarjetaFotos
          :imagen="info[2].imagen"
          :texto="info[2].subtitulo"
        ></tarjetaFotos>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portada {
}
.air {
  padding: 2em;
}
.head {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.head_p {
  font-size: 2em;
  font-weight: 900;
  text-align: right;
  line-height: 1.2em;
}
hr {
  border: 1px solid var(--black);
  margin: 1em 0;
}
.galeria {
  background-color: var(--black);
  color: white;
  display: flex;
  flex-direction: column;
}
.local_p {
  padding: 1em 0;
  font-size: 1.5em;
  font-weight: 700;
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  padding: 1.5em 0;
  color: rgb(235, 235, 235);
}
@media (min-width: 768px) {
  .portada {
    display: none;
  }
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .head_p {
    font-size: 5em;
    font-weight: bolder;
  }
  .head_h1 {
    font-size: 1.5em;

    font-weight: 500;
  }
  .local_p {
    font-size: 2em;
  }
}
</style>
