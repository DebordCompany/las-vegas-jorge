<script>
export default {
  props:["nombre", "entrante1", "entrante2", "segundo", "bebida", "precio" ]
}
</script>

<template>
    <div class="container">
        
            <h3 class="container_h3">{{nombre}}</h3>
            <hr>
            
        <ul class="container_ul">
            <p class="container_p">Entrantes</p>
            <li class="container_ul_li">{{entrante1}}</li>
            <li class="container_ul_li">{{entrante2}}</li>
            <p class="container_p">Segundos</p>
            <li class="container_ul_li">{{segundo}}</li>
            <p class="container_p">Bebida</p>
            <li class="container_ul_li">{{bebida}}</li>
        </ul>
       
        <hr>
        <h3 class="container_precio">{{precio}}</h3>
        
        

    </div>
</template>
<style scoped>

.container{
    border: 3px solid rgb(156, 156, 156);
    border-radius: .3em;
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    
}
.container_h3{
    font-size: 1.5em;
    font-weight: 700;
}
.container_p{
    font-weight: 600;
}
.container_precio{
    font-weight: 700;
}
.container_ul{
    
}
.container_ul_li{
padding: .5em 0;
padding-left:.5em ;
}
hr{
    border: 1px solid rgb(156, 156, 156);
}
</style>