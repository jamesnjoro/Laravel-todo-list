import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const baseUrl = 'http://127.0.0.1:8000/api/';

const storeData = new Vuex.Store({
    state: {
        token:localStorage.getItem('Token') || null,

        Todos: null,
    },
    getters:{
        loggedIn(state){
            return state.token != null
        },
        getTodos(state){
            return state.Todos
        },
    },
    mutations: {
        retrievedTodos(state,Todos){
            state.Todos = Todos
        },

        retrievedToken(state,token){
            state.token = token
        },
        destroyToken(state){
            state.token = null
        }
    },
    actions: {
        editDesTodo(context,data){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return new Promise((resolve,reject)=>{
                axios.put(baseUrl + 'todo/' + data.id,{
                    description: data.description
                })
                .then(response =>{
                    console.log(response.data)
                    resolve(response)
                })
                .catch(error =>{
                    console.log(error)
                    reject(error);
                })
            })
        },
        editDTodo(context,data){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return new Promise((resolve,reject)=>{
                switch(data.completed){
                    case 1:
                        var comp = 0;
                        break;
                    case 0:
                        var comp = 1;
                        break;
                    case true:
                        var comp = 0;
                        break;
                    case false:
                        var comp = 1
                        break;
                }
                

                axios.put(baseUrl + 'todo/' + data.id,{
                    completed: comp
                })
                .then(response =>{
                    console.log(response.data)
                    resolve(response)
                })
                .catch(error =>{
                    console.log(error)
                    reject(error);
                })
            })
        },
        deleTodo(context,data){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return new Promise((resolve,reject)=>{
                axios.delete(baseUrl + 'todo/' + data.id,{
                })
                .then(response =>{
                    console.log(response.data)
                    resolve(response)
                })
                .catch(error =>{
                    console.log(error)
                    reject(error);
                })
            })
        },
        addTodo(context,data){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return new Promise((resolve,reject)=>{
                axios.post(baseUrl + 'todo',{
                    description:data.description
                })
                .then(response =>{
                    console.log(response.data)
                    resolve(response)
                })
                .catch(error =>{
                    console.log(error)
                    reject(error);
                })
            })
        },

        retrieveTodos(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return new Promise((resolve,reject)=>{
                axios.get(baseUrl + 'todo')
                .then(response =>{
                    context.commit('retrievedTodos', response.data)
                    console.log(response.data)
                    resolve(response)
                })
                .catch(error =>{
                    console.log(error)
                    reject(error);
                })
            })
        },
        register(context,data){
            return new Promise((resolve,reject)=>{
                axios.post(baseUrl + 'register',{
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
            axios.post(baseUrl + 'login',{
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