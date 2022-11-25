<template>
  
    
    
    <div class="container">
      <div class="container_item">
        <img class="container_item_img" src="../assets/terrraza.jpg" alt="" />
        <h3>Nuestra terraza</h3>
      </div>
      <div class="container_item">
        <img
          class="container_item_img"
          src="../assets/viernes las vegas.png.jpg"
          alt=""
        />
        <h3>Los viernes son sagrados</h3>
      </div>
      <div class="container_item">
        <img class="container_item_img" src="../assets/gintonic.jpg" alt="" />
        <h3>Y la copita de después</h3>
      </div>
    </div>
  
</template>
<style scoped>

.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  padding: 2em 0;

}
.container_item{
    border-radius: 100px;
}

.container_item_img {
  padding: 2em 0;
  aspect-ratio: 1/1;
  
}

@media (min-width: 480px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
 
}
@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
}
</style>
