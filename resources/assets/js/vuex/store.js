import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        items: [],
        todoItemText: ''
      },
      
      getters: {
        getItems(state){
            return state.items;
        },
        getItemText(state){
            return state.todoItemText;
        },
    },

    mutations: {
        GET_TODO(state){
            axios.get('/api/todos').then(response => {
                state.items=response.data;
            });
        },
        ADD_TODO(state, itemText){
            let text = itemText.trim();
            if (text !== '') {
                axios.post('/api/todos', {text}).then(response => {
                    const todo=(response.data);
                    state.items.push(todo);
                    state.todoItemText = ''
                });
            }
        },
        DELETE_TODO(state, payload){
            axios.delete(`/api/todos/${payload.todo.id}`).then(() => {
                state.items.splice(payload.index, 1);
            });
        },
        UPDATE_TODO(state, payload){
            axios.put(`/api/todos/${payload.todo.id}`, {done: !payload.todo.done}).then(response => {
                const todo=(response.data);
                state.items.splice(payload.index, 1, todo);  
            });
        }
    },

    actions: {
        getTodo(context){
            context.commit('GET_TODO');
        },
        addTodo(context, itemText){
            context.commit('ADD_TODO', itemText);
        },
        deleteTodo(context, payload){
            context.commit('DELETE_TODO', payload);
        },
        updateTodo(context, payload){
            context.commit('UPDATE_TODO', payload);
        }
    }    
});
