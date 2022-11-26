<template>
    <form action="" class="form ">
      <h4 class="form_h4">Reserva a traves de este formulario</h4>
      <div class="form_content">
        <label for="" class="form_label">Nombre</label>
        <input type="text" class="form_input" />
        <label for="" class="form_label">Email</label>
        <input type="email" class="form_input" />
        <label for="" class="form_label">Telefono</label>
        <input type="number" class="form_input" />
        <label for="" class="form_label">Fecha</label>
        <input type="date" class="form_input" placeholder="fecha" />
        <label for="" class="form_label">Consulta</label>
        <input type="text" class="form_input" />
        <input class="submit" type="submit">
      </div>
    </form>
</template>
<style scoped>
.form{
  background-color: var(--black);
  
  
  display: grid;
  grid-template-columns: 1fr;
  
  
}
.form_h4{
  color: white;
  padding-top: 2em;
  padding-bottom: 1.5em;
}
.form_content {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  padding: 1em;
  border-radius: .3em;
  box-shadow: 1px 1px 10px -8px black;
  font-weight: 600;
  margin-bottom: 4em;
  
  
}
.form_input {
  border: 1px solid var(--black);
  border-radius: 2px;
  width: 100%;
  padding: .2em;
  margin: 1em 0;
  
  
}
.submit{
  padding: 1em;
  background-color: tomato;
  border-radius: .3em;
  margin-top: 1em;
  color: white;
  font-weight: 600;
}
@media (min-width:400px) {
  .form{
    align-items: center;
    padding-top: 4em;
  }
  .form_content{

  }
  .form_input{
    width: 300px;
  }
}
@media (min-width:768px) {
  .form{
    align-items: center;
  }
  
  .form_input{
    min-width: 450px;
  }
}
</style>