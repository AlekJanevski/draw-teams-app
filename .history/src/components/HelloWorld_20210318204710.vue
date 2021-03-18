<template>
  <div>
    <h1 class="mb-16 text-2xl">Draw teams app</h1>

    <form name="todo-form" method="post" action="" v-on:submit.prevent="addTask">
      <input name="add-todo" type="text" v-model="addTodoInput" v-bind:class="{error: hasError}"/>
      
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data() {
    return {
      users: [
        { name: 'faki' }
      ]
    }
  },

  methods: {
    addUser() {
      this.users.push({
        name: ''
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
