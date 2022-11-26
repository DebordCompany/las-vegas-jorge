<template>
  <footer class="footer">
    <div class="max-width">
      <div class="footer_container">
        <h3 class="footer_container_h3">Las Vegas</h3>
        <a class="footer_container_tlf" href="tel:+34913014191">91 301 41 91</a>
        <div class="redes">
            <a target="_blank" href="https://www.tripadvisor.es/Restaurant_Review-g187514-d20378969-Reviews-Cafeteria_Las_Vegas-Madrid.html" class="redes_a"><img src="../assets/logotipo-de-tripadvisor.png" alt="" class="redes_a_img"></a>
            <a target="_blank" href="https://www.instagram.com/lasvegas7076/?hl=es" class="redes_a"><img src="../assets/logo_instagram.svg" alt="" class="redes_a_img"></a>
            <a target="_blank" href="https://www.facebook.com/cafeteria.lasvegas.10" class="redes_a"><img src="../assets/facebook.png" alt="" class="redes_a_img"></a>
        </div>
        <div class="politica">
            <p class="politica_p">
                Politica de privacidad
            </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--black);
  color: white;
  padding-bottom: 5em;
}
.footer_container {
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
}
.footer_container_h3 {
  font-size: 2em;
}
.footer_container_tlf {
  padding: 1em;
  border-radius: .3em;
  background-color: tomato;
  
}
.redes{
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 1em;
}
.redes_a{
    max-width: 50px;
}

</style>
