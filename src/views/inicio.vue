<script setup>
import triptico from "../components/triptico.vue";
</script>

<template>
  <img class="portada" src="../assets/portada_las_vegas.jpg" alt="portada" />
  <div class="local">
  <div class="max-width">
  
    
      <p class="local_p">Poco espacio gran servicio</p>
      <h1 class="">
        Estamos en Fuente Carrantona, 43.Un pequeño sitio que encierra un gran
        sabor. Damos desayunos, comidas y cenas para que elijas la hora del día
        que tú quieras.
      </h1>
      <triptico></triptico>
    </div>
  </div>
</template>

<style scoped>
.portada {
  padding: 10em 0;
}

.local{
    background-color: var(--black);
    color: white;
    text-align: center;
    padding: 2em;
    display: flex;
    flex-direction: column;

}
.local_p{
    padding: 1em 0;
    font-size: 1.5em;
    font-weight: 700;
}
</style>
