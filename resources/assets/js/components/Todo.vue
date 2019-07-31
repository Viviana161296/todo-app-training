<template>
    <div class="container">
        <todo-input></todo-input>
        <todo-item></todo-item>
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
        computed: {
            items() {
                return this.$store.state.items;
            } 
        },  
        mounted () {
            axios.get('/api/todos').then(response => {
                this.$store.state.items=response.data;
            });
        }
    }
</script>
