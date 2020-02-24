<template>
<div>

    <div class="heading">  
            <h3>
                <span>
                    <span id="headingP">|</span>
                    My Tasks
                </span>
            </h3>
        </div>
        <div class="card shadow p-3 mb-5 bg-white rounded mn">
                <div class="card-header ">
                    <div class="Htwo"><h4>Todos</h4></div>
                </div>
                <div class="card-body"> 
                    <table class="table">
                        <tbody>
                            <tr v-for="todo in todos" :key="todo.id">
                                <td><input class="form-check-input" @click="editDTodo(todo)" type="checkbox" value="" id="completed" v-model="todo.completed"></td>
                                <td><input type="text" @keyup.enter="editDesTodo(todo)" class="form-control-plaintext" v-bind:class="{completed:todo.completed}" v-model="todo.description"></td>
                                <td colspan="2"><span class="icon"><i @click="deleteTodo(todo)" id="edit" class="far fa-trash-alt"></i></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <form action="" @submit.prevent="newTD">
                    <div class="form-group row">
                            <label for="newTodo" class=" col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 col-form-label"><span id="add"><i @click="newTD" class="fas fa-plus"></i></span></label>
                            <div class="col-9 col-sm-9 col-md-11  col-lg-9 col-xl-9 ">
                                <input type="text" class="form-control" id="newTodo" v-model="newTodo" >
                            </div>
                    </div>
                   
                </form>
            </div>
    </div>

</template>
<script>
export default {
    name: "todolist",
    data(){
        return{
            newTodo:'',
            todos:[],
            todo:{
                description:'',
                id:'',
                completed:''
            },
            id:'',
           

        }
    },
    created(){
        this.getTodos()
       
        
        
    },
    methods:{
        

        editDesTodo(todo){
            this.$store.dispatch('editDesTodo',{
                description:todo.description,
                id:todo.id
            })
            .then(response =>{
                this.getTodos()
            })
             .catch(error =>{
                console.log(error)
            })
        },
        getTodos(){
            this.$store.dispatch('retrieveTodos')
        .then(response=>{
            this.todos = response.data;
        })
        .catch(error =>{
            console.log(error)
        })
        },

        newTD(){
            this.$store.dispatch('addTodo',{
                description:this.newTodo,
            })
            .then(response =>{
                this.getTodos()
            })
            .catch(error =>{
                console.log(error)
            })

            this.newTodo = ''
        }, 

        deleteTodo(todo){
            this.$store.dispatch('deleTodo',{
                id:todo.id,
            })
            .then(response =>{
                this.getTodos()
            })
             .catch(error =>{
                console.log(error)
            })
        },
        editDTodo(todo){
            this.$store.dispatch('editDTodo',{
                completed:todo.completed,
                id:todo.id
            })
            .then(response =>{
                this.getTodos()
            })
             .catch(error =>{
                console.log(error)
            })
        }
    }

}
</script>
    <style>
        .heading{
            margin-top: 30px ;
        }
        #headingP{
            margin: 5px;
            color: red;
            font-size: 50px;
        }
        #count{
            font-size: 15px;
        }
        .icon{
            margin: 10px;
        }
        #add{
            padding-left: 30px;
            cursor: pointer;
        }
        #edit{
            cursor: pointer;
        }
         .completed{
            color: rgb(164, 226, 164);
            text-decoration: line-through;
        }
        


        /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
   
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .mn{
      width: 80%;
      margin: auto;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .mn{
      width: 80%;
      margin: auto;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .mn{
      width: 80%;
      margin: auto;
  }
}
        
    </style>