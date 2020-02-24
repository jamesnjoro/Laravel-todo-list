import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const storeData = new Vuex.Store({
    state: {
        token:localStorage.getItem('Token') || null
    },
    getters:{
        loggedIn(state){
            return state.token != null
        }
    },
    mutations: {
        retrievedToken(state,token){
            state.token = token
        },
        destroyToken(state){
            state.token = null
        }
    },
    actions: {
        
        register(context,data){
            return new Promise((resolve,reject)=>{
                axios.post('http://127.0.0.1:8000/api/register',{
                   name: data.name,
                   email: data.email,
                   password: data.password
               })
               .then(response => {
                   const token = response.data.Token;
                   localStorage.setItem('Token',token)
                   context.commit('retrievedToken', token)
                   resolve(response);
               })
               .catch(error =>{
                   console.log(error)
                   reject(error);
               })
            })
        },
       retrieveToken(context, credentials){

        return new Promise((resolve,reject)=>{
            axios.post('http://127.0.0.1:8000/api/login',{
               email: credentials.email,
               password: credentials.password
           })
           .then(response => {
               const token = response.data.Token;
               localStorage.setItem('Token',token)
               context.commit('retrievedToken', token)
               resolve(response);
           })
           .catch(error =>{
               console.log(error)
               reject(error);
           })
        })
           
       },

       destroyToken(context){
            if(context.getters.loggedIn){
               localStorage.removeItem('Token')
               context.commit('destroyToken')
              
            }
           
       }
    }
});

export default storeData;