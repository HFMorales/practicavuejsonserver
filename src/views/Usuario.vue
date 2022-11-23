<template>
  <div class="Usuario">
    <h1 class="mt-5">Registro de Usuarios </h1>
    
    <div class="mt-5">
      <form role="form">


        <div class="row mx-5">
            <div class="col-3">
                <label ><h5>Nombre</h5></label>
                <input type="text" class="form-control" name="Nombre" v-model="usuario.Nombre"/>
                
            </div>
            <div class="col-3">
                <label ><h5>Direccion</h5></label>
                <input type="text" class="form-control" name="Direccion" v-model="usuario.Direccion"/>
                
            </div>
            <div class="col-3">
                <label ><h5>Celular</h5></label>
                <input type="text" class="form-control" name="Celular" v-model="usuario.Celular"/>
                
            </div>
            <div class="col-3 align-items-end d-flex">
              <a class="btn btn-success" @click="saveUsuario" >Agregar</a>
            </div>
        </div>
        
    
    </form>
    </div>


    <div class="mt-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Direccion</th>
            <th scope="col">Celular</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datausuarios" :key="item.id">
            <th scope="row">1</th>
            <td>{{item.Nombre}}</td>
            <td>{{item.Direccion}}</td>
            <td>{{item.Celular}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default{
    name: "Usuario-page",

    data() {
		return {
			usuario: {},
      datausuarios:[]
		}
	},
	methods: {
		async getUsuario(){
      const req = await fetch("http://localhost:3000/usuarios");
      this.datausuarios = await req.json();

      // console.log(datausuarios);
    },
    async saveUsuario(e){
      console.log("agregar");
      e.preventDefault();

      const dataUsu = JSON.stringify(this.usuario);
      const req = await fetch("http://localhost:3000/usuarios",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: dataUsu
      });


      const res = await req.json();
      console.log(res);
      this.usuario={};
      this.getUsuario();

    }
	},
   mounted () {
    this.getUsuario();
  },
}


</script>


