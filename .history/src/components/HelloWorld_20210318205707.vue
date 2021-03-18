<template>
  <div>
    <h1 class="mb-16 text-2xl">Draw teams app</h1>

      <form name="todo-form" method="post" action="" v-on:submit.prevent="addTask">

    </form>
    
    <!-- Add user wrapper starts -->
    <form name="add-user" method="post" @submit.prevent="addUser" class="w-1/2 h-full mb-3 border-r p-7">
      <!-- Add user input starts -->
      <input 
        v-model="userInput"
        type="text" 
        placeholder="Placeholder"
        class="relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
      />
      <!-- Add user input ends -->

      <!-- Add user button starts -->
      <button class="float-right px-4 py-2 mt-3 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none" type="submit" style="transition: all .15s ease">
        Add user
      </button>
      <!-- Add button ends -->
    </form>

    <div v-if="users.length">
      <h3>Users</h3>
      <ul>
        <li v-for="(user, id) in users" :key="id">
          {{ user.name }}
        </li>
      </ul>
    </div>
    <!-- Add user wrapper ends -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data() {
    return {
      users: [
        { name: 'John Wick' },
        { name: 'John Doe' },
        { name: 'Steve O' }
      ],
      userInput: ''
    }
  },

  methods: {
    addUser() {
        this.users.push({
        id:this.users.length+1, 
        title: this.userInput
      });
      
      this.addTodoInput = '';
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
