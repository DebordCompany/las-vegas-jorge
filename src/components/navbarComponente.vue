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
  padding: 1.5em;
  border-radius: 1em;
  box-shadow: 1px 1px 10px -6px black;
  background-color: tomato;
  bottom: 2em;
  right: 2em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-end;
  gap: 3em;
}
.nav_icono {
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav_enlaces {
  display: none;
  color: white;
  font-size: 2em;
  text-align: right;
}
.activo {
  display: flex;
  flex-direction: column;
  gap: .5em;
}
.activo_nav {
  border-radius: 1em;
  
}
</style>
>
