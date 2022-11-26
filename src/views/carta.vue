<script setup>
    import galeria from "../components/galeria.vue"
</script>


<template>
  <div class="max-width">
    <div class="carta content_center">
      <h1 class="carta_h1">Esta es nuestra carta</h1>
      <div class="carta_recomendaciones">
        <p class="carta_recomendaciones_p">Algunas recomendaciones antes de leer la carta</p>
        <ul class="carta_recomendaciones_ul">
            <li class="carta_recomendaciones_li">- El indice de <strong>alergenos</strong> esta al final</li>
            <li class="carta_recomendaciones_li">- Sí es <strong>viernes</strong> no dudes en preguntar si hay algo fuera de la carta</li>
            <li class="carta_recomendaciones_li">- Los <strong>platos de autor</strong> son <strong>nuestra especialidad</strong></li>
            <li class="carta_recomendaciones_li">- No te cortes en <strong>probar cosas nuevas</strong> , si no lo haces no sabras si te gustan</li>
        </ul>
      </div>
      <h2 class="carta_h2">Una seleccion de los platos mas pedidos</h2>
      <galeria class="galeria_component"></galeria>
      
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
.carta_h1{
    padding: 2em 0;
    font-size: 1.3em;
    font-weight: 600;
}
.carta_h2{
    font-weight: 600;
    font-size: 1.5em;
    margin-top: 2em;
}
.carta_recomendaciones_p{
    padding: 1em 0;
    font-weight: 600;
}
.carta_recomendaciones_ul{
    padding: 1em;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border: 1px solid var(--black);
    border-radius:.3em ;
}

</style>
