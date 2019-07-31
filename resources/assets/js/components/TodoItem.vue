<template>
    <div>
        <table class="table is-bordered">
            <tr v-for="(todo, index) in items" :key="index">
                <td class="is-fullwidth" style="cursor: pointer" :class="{ 'is-done': todo.done }" @click="toggleDone(index, todo)">
                    {{ todo.text }}
                </td>
                <td class="is-narrow">
                    <a class="button is-danger is-small" @click="removeTodo(todo, index)">Eliminar</a>
                </td>
            </tr>
        </table>
    </div>
</template>


<script>
   
    export default {  
        computed: {
            items() {
                return this.$store.getters.getItems;
            } 
        },
        mounted () {
            console.log('Component mounted.') 
        },
        methods: {
           removeTodo (todo, index) {
                this.$store.commit({
                    type: 'DELETE_TODO',
                    index: index,
                    todo: todo
                });
            },
           toggleDone (index, todo) {
                this.$store.commit({
                    type: 'UPDATE_TODO',
                    index: index,
                    todo: todo
                });
            }
        }
    }
</script>


<style>
    .is-done {
        text-decoration: line-through;
    }
</style>