<template>
    <div class="container">
        <todo-input @newTodo='addTodo'></todo-input>
        <todo-item 
            :items='items'
            @delete="removeTodo"
            @completed="toggleDone">
        </todo-item>
    </div>
</template>

<script>
    /**
     * Tips:
     * - En mounted pueden obtener el listado del backend de todos y dentro de la promesa de axios asirnarlo
     *   al arreglo que debe tener una estructura similar a los datos de ejemplo.
     * - En addTodo, removeTodo y toggleTodo deben hacer los cambios pertinentes para que las modificaciones,
     *   addiciones o elimicaiones tomen efecto en el backend asi como la base de datos.
     */
    export default {
        data () {
            return {
                items: [],
            }
        },
        mounted () {
            axios.get('/api/todos').then(response => {
                this.items=response.data;
            });
        },
        methods: {
            addTodo (todo) {
                this.items.push(todo);
            },
            removeTodo (index) {
                this.items.splice(index, 1);
            },
            toggleDone (index, todo) {
                this.items.splice(index, 1, todo);
            }
        }
    }
</script>
