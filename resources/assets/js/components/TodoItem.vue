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
        props:['items'],
        mounted () {
            console.log('Component mounted.') 
        },
        methods: {
           removeTodo (todo, index) {
                axios.delete(`/api/todos/${todo.id}`).then(() => {
                    this.$emit('delete', index);
                });
            },
           toggleDone (index, todo) {
                axios.put(`/api/todos/${todo.id}`, {done: !todo.done}).then(response => {
                    const todo=(response.data);
                    this.$emit('completed', index, todo);
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