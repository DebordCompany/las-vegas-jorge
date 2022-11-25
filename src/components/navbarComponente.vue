<template>
  <nav class="nav">
    <div class="nav_icono" id="boton">
      <img src="../assets/menu.svg" alt="" />
    </div>
    
    <div class="nav_enlaces" id="menu">
      <RouterLink id="enlace" to="/">Inicio</RouterLink>
      <RouterLink id="enlace" to="/galeria">Galería</RouterLink>
      <RouterLink id="enlace" to="/carta">Carta</RouterLink>
    </div>
  </nav>
</template>
<style scoped>
.nav {
  position: fixed;
  padding: 1rem;
  border-radius: .3em;
  box-shadow: 1px 1px 10px -6px black;
  background-color: tomato;
  bottom: 1.5em;
  right: 1.5em;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 0em;
  transition: gap 1s ease-in-out;
}
.nav_icono {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav_icono img {
  width: 30px;
}

.nav_enlaces {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0px;
  hyphens: none;
  overflow: hidden;
  color: white;
  gap: 0;
  transition: all .5s ease-in;
}

.activo {
  width: 100%;
  gap: 1em;
}
.activo_nav {
  gap: 3em;
}
</style>
>
