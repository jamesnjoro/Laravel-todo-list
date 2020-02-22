
<template>
    <div>
        <navbar/>
        <todolist/>
     </div>   
    
</template>
<script>
import navbar from './navbar';
import todolist from './todolist'
export default {
    components:{navbar,todolist}
}
</script>