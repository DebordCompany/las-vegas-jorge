<template>
  <div class="container">
    <div class="container_item">
      <img class="container_item_img" :src="fotos[0].imagen" alt="" />
      <h3>{{ fotos[0].subtitulo }}</h3>
    </div>
    <div class="container_item">
      <img class="container_item_img" :src="fotos[1].imagen" alt="" />
      <h3>{{ fotos[1].subtitulo }}</h3>
    </div>
    <div class="container_item">
      <img class="container_item_img" :src="fotos[2].imagen" alt="" />
      <h3>{{ fotos[2].subtitulo }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fotos: [
        {
          imagen: "../src/assets/terrraza.jpg",
          subtitulo:
            "Esta es nuestra terraza, el sitio perfecto para cenar con amigos",
        },
        {
          imagen: "../src/assets/viernes_las_vegas.png",
          subtitulo:
            "Los viernes son sagrados, es nuestro día estrella, no olvides preguntar por los fuera de carta",
        },
        {
          imagen: "../src/assets/gintonic.jpg",
          subtitulo:
            "El after work es vital, ven a tomarte una copa con tus compañeros despues del trabajo",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  padding: 1.5em 0;
}
.container_item h3{
  font-weight: 400;
}
.container_item_img {
  margin: 1em 0;
  aspect-ratio: 1/1;
  box-shadow: 1px 1px 10px -3px var(--black);
}
@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
