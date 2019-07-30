<template>
        <div class="box">
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input class="input" type="text" placeholder="Nuevo recordatorio" v-model="todoItemText">
            </p>
            <p class="control">
                <a class="button is-info" @click="addTodo">
                    Agregar
                </a>
            </p>
        </div>
    </div>
</template>


<script>


    export default {
        data () {
            return {
                todoItemText: ''
            }
        },
        mounted () {
           console.log('Component mounted.')
        },
        methods: {
            addTodo () {
                let text = this.todoItemText.trim()
                if (text !== '') {
                    axios.post('/api/todos', {text}).then(response => {
                        const todo=(response.data);
                        this.$emit('newTodo', todo);
                        this.todoItemText = ''
                    });
                }
            }
        }
    }
</script>