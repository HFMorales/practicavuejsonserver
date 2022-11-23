<template>
  <div class="Usuario">
    <h1 class="mt-5">Registro Consumo de agua </h1>
    
    <div class="mt-5">
      <form role="form">


        <div class="row mx-5">

            <div class="col-3">
              <label> Usuario</label>
              <select type="text" class="form-control" v-model="consumo.Usuario">
                <option :value="du.Nombre" v-for="du in datausuarios" v-bind:key="du.id">
                  {{ du.Nombre }}
                </option>
              </select>
            </div>


            <div class="col-2">
                <label ><h5>Cantidad m3</h5></label>
                <input type="text" class="form-control" name="Cantidad" v-model="consumo.Cantidad"/>
                
            </div>
            <div class="col-2">
                <label ><h5>Fecha</h5></label>
                <input type="date" class="form-control" name="Fecha" v-model="consumo.Fecha"/>
                
            </div>
            <div class="col-2">
                <label ><h5>Total</h5></label>
                <input type="number" class="form-control" name="Total" v-model="consumo.Total"/>
                
            </div>
            <div class="col-3 align-items-end d-flex">
              <a class="btn btn-success" @click="saveConsumo" >Agregar</a>
            </div>
        </div>
        
    
    </form>
    </div>


    <div class="mt-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Usuario</th>
            <th scope="col">Cantidad m3</th>
            <th scope="col">Fecha</th>
            <th scope="col">Total (Bs)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dc in dataconsumo" :key="dc.id">
            <th scope="row">1</th>
            <td>{{dc.Usuario}}</td>
            <td>{{dc.Cantidad}}</td>
            <td>{{dc.Fecha}}</td>
            <td>{{dc.Total}}</td>
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
			consumo: {},
      dataconsumo:[],
      datausuarios:[]
		}
	},
	methods: {

    async getUsuario(){
      const req = await fetch("http://localhost:3000/usuarios");
      this.datausuarios = await req.json();
    },

		async getConsumo(){
      const req = await fetch("http://localhost:3000/consumo");
      this.dataconsumo = await req.json();

    },
    async saveConsumo(e){
      console.log("agregar");
      e.preventDefault();

      const dataCon = JSON.stringify(this.consumo);
      const req = await fetch("http://localhost:3000/consumo",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: dataCon
      });


      const res = await req.json();
      console.log(res);
      this.consumo={};
      this.getConsumo();

    }
	},
   mounted () {
    this.getConsumo();
    this.getUsuario();
  },
}


</script>


