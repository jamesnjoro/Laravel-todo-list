<template>
    <div>
       <div class="card shadow p-3 mb-5 bg-white rounded mn">
            <div class="card-header">
                    <div class="d-flex justify-content-start">
                            <span id="hd"> REGISTER USER </span>
                    </div>
            </div>
            <div class="card-body">
                <form action="" @submit.prevent="register">
                        <div class="col-auto">
                                <label class="sr-only" for="username">Username</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-user"></i></div>
                                </div>
                                <input type="text" class="form-control" id="username" placeholder="Username" v-model="username">
                            </div>
                        </div>
                        <div class="col-auto">
                                <label class="sr-only" for="email">Email</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-envelope"></i></div>
                                </div>
                                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
                            </div>
                        </div>
                        <div class="col-auto">
                                <label class="sr-only" for="password">Password</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-lock"></i></div>
                                </div>
                                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                            </div>
                        </div>
                        <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2 d-flex sb">Register</button>
                                <span id="reg" @click="redirect()"> or login</span>
                        </div>
                </form>
                    
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name: "register",
    data(){
        return{
            username:"",
            email:"",
            password:""
        }
    },
    methods:{
        redirect(){
            this.$router.push({name: 'login'})
        },
        register(){
            this.$store.dispatch('register',{
                name:this.username,
                email:this.email,
                password:this.password
            })
            .then(response =>{
                this.$router.push({name: 'home'})
            })
        }
    }
}
</script>
    <style scoped>

        .mn{
            margin-top: 15%;
            margin-left: auto;
            margin-right: auto;
        }
        .sb{
            margin-top: 40px;
        }
        #reg{
            cursor: pointer;
        }
        #reg:hover{
            color: blue;
            text-decoration: underline
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
      width: 60%;
     
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .mn{
      width: 60%;
     
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .mn{
      width: 60%;
  }
}
    </style>