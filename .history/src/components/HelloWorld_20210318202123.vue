<template>
  <div>
    <h1 class="mb-16 text-2xl">Draw teams app</h1>
    
    <!-- Add user wrapper starts -->
    <div class="w-1/2 pt-0 mb-3">
      <!-- Add user input starts -->
      <input type="text" placeholder="Placeholder" class="relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"/>
      <!-- Add user input ends -->

      <!-- Add user button starts -->
      <button class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none" type="button" style="transition: all .15s ease">
        Add user
      </button>
      <!-- Add button ends -->
    </div>
    <!-- Add user wrapper ends -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
