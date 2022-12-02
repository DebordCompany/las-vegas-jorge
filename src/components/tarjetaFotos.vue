<template>
  <div class="container_item">
      <img class="container_item_img" :src="imagen" alt="" />
      <h3 class="container_item_h3">{{texto}}</h3>
    </div>
</template>
<script>
export default {
  props:["imagen", "texto"]
}
</script>
<style scoped>

.container_item_h3{
  font-weight: 400;
  
  
}
.container_item_img {
  margin: 1em 0;
  aspect-ratio: 1/1;
  box-shadow: 1px 1px 10px -3px var(--black);
  border-radius:.3em ;
}


</style>
