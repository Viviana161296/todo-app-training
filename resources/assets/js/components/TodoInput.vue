<template>
        <div class="box">
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input class="input" type="text" placeholder="Nuevo recordatorio" v-model="$store.state.todoItemText">
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
        computed: {
            items() {
                return this.$store.state.items;
            },
            todoItemText () {
                return this.$store.state.todoItemText;
            } 
        },
        mounted () {
           console.log('Component mounted.')
        },
        methods: {
            addTodo () {
                let text = this.$store.state.todoItemText.trim()
                if (text !== '') {
                    axios.post('/api/todos', {text}).then(response => {
                        const todo=(response.data);
                        this.$store.state.items.push(todo);
                        this.$store.state.todoItemText = '';
                    });
                }
            }
        }
    }
</script>