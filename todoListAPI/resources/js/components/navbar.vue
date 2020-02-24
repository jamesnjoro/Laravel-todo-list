<template>
    <nav class="navbar navbar-light bg-light">
            <a href="#" class="navbar-brand"><h2>TODO LIST</h2></a>
            <div class="navbar-right ">
                <button type="button" @click="logout" class="btn btn-secondary side">Logout</button>
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