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
            itemText() {
                return this.$store.getters.getItemText;
            }
        },
        mounted () {
           console.log('Component mounted.')
        },
        methods: {
            addTodo () {
                this.$store.dispatch('addTodo', this.itemText);
            }
        }
    }
</script>