<template>
    <nav class="navbar navbar-light bg-light">
            <a href="#" class="navbar-brand"><h2>TODO LIST</h2></a>
            <div class="navbar-right ">
                <span class="side">Username</span>
                <span @click="logout" class="side">Logout</span>
            </div>

        </nav>
</template>
<script>
export default {
    name: 'navbar',
    methods:{
        logout(){
            this.$store.dispatch('destroyToken');
            this.$router.push({name:'login'})
        }
    }
}
</script>
<style>
       nav{
           margin:30px;
       }
       .side{
           padding:10px;
       }
    </style>