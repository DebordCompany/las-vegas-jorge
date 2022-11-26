<template>
  <div class="galeria">
    <div class="galeria_container">
      
      <img src="../assets/oreja_1.jpg" alt="" class="galeria_container_media" />
      <h3 class="galeria_container_h3">Oreja a la pekinesa</h3>
      <p class="galeria_container_p">Oreja de cerdo enharinada y frita con salsa Hoisin</p>
    </div>
    <div class="galeria_container">
      <img
        src="../assets/chof_de_chipiron.jpg"
        alt=""
        class="galeria_container_media"
      />
      <h3 class="galeria_container_h3">
        Chof de chipirones
      </h3>
      <p class="galeria_container_p">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="galeria_container">
      
      <img
        src="../assets/alcachofas.jpg"
        alt=""
        class="galeria_container_media"
      />
      <h3 class="galeria_container_h3">Soy un titulo</h3>
      <p class="galeria_container_p">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="galeria_container">
      
      <img
        src="../assets/alcachofas.jpg"
        alt=""
        class="galeria_container_media"
      />
      <h3 class="galeria_container_h3">Soy un titulo</h3>
      <p class="galeria_container_p">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="galeria_container">
      
      <video
        src="../assets/video_costron.MP4"
        muted
        controls
        autoplay
        loop
        class="galeria_container_media"
      ></video>
      <h3 class="galeria_container_h3">Soy un titulo</h3>
      <p class="galeria_container_p">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="galeria_container">
      
      <img
        src="../assets/alcachofas.jpg"
        alt=""
        class="galeria_container_media"
      />
      <h3 class="galeria_container_h3">Soy un titulo</h3>
      <p class="galeria_container_p">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</template>
<style scoped>
.galeria {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  padding: 1em 0;
}
.galeria_container_h3 {
  padding-bottom: 0.3em;
  font-weight: 600;
}
.galeria_container_media {
  aspect-ratio: 1/1;
  border-radius: 0.3em;
  box-shadow: 1px 1px 10px -7px var(--black);
  margin-top: 1em;
}
@media (min-width:600px) {
    .galeria{
        grid-template-columns: 1fr 1fr ;
    }
}
@media (min-width:1024px) {
    .galeria{
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
