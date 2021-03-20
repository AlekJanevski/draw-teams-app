<template>
  <div>
    <h1 class="mb-16 text-2xl">Draw teams app</h1>
    
    <!-- Add user wrapper starts -->
    <div class="float-left w-1/2 h-full mb-3 border-r p-7">
      <form name="add-user" method="post" @submit.prevent="addUser" class="flex flex-col items-start">
        <!-- Add user input starts -->
        <label for="">Enter players</label>
        <input 
          v-model="userInput"
          type="text" 
          class="relative w-full max-w-md px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
        />

        <label for="" class="mt-5">How many players per team</label>
        <input 
          v-model="howManyPlayers"
          type="text" 
          class="relative w-full max-w-md px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
        />

        <label for="" class="mt-5">How many teams</label>
        <input 
          v-model="howManyTeams"
          type="text" 
          class="relative w-full max-w-md px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
        />
        <!-- Add user input ends -->

        <!-- Add user button starts -->
        <button class="float-right px-4 py-2 mt-3 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none" type="submit" style="transition: all .15s ease">
          Add player
        </button>
        <!-- Add button ends -->
      </form>

      <div v-if="users.length" class="flex flex-col items-start justify-start w-full">
        <h3 class="block text-xl">All Players:</h3>
        <ul class="flex flex-col items-start justify-start">
          <li v-for="(user, id) in users" :key="id" class="m-0">
            {{ user.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- Add user wrapper ends -->

    <!-- Teams section starts -->
    <div v-if="this.drawArr.length === 0" class="flex flex-col items-center justify-center float-left w-1/2">
      <span class="block mb-2 text-xl">Drawed teams</span>
      <span>please press the button to draw teams</span>
      <button @click="shuffle(users)" class="float-right px-4 py-2 mt-6 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none" type="submit" style="transition: all .15s ease">
        Draw teams
      </button>
    </div>
    <div v-else class="flex flex-col items-center justify-center float-left w-1/2">
      <ul v-for="(group, i) in articleGroups" :key="i">
        <label class="font-bold"> Team {{ i + 1 }}: </label>
        <li v-for="player in drawArr.slice(i * howManyPlayers, (i + 1) * howManyPlayers)" :key="player.id">
          {{ player.name }}
        </li>
      </ul>
      <span v-if="this.howManyTeams === null">Please select how many teams you want to draw</span>
      <button @click="shuffle(users)" class="float-right px-4 py-2 mt-6 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none" type="submit" style="transition: all .15s ease">
        Draw again
      </button>
    </div>
    <!-- Teams section ends -->

    <span v-if="this.totalPlayers > this.drawArr.length"> WAAAAA </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data() {
    return {
      users: [
        { id: 1, name: 'John Wick' },
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Steve O' },
        { id: 4, name: 'Johhny Knoxville' },
        { id: 5, name: 'Randy B' },
        { id: 6, name: 'Small G' }
      ],
      userInput: '',
      drawTeam: false,
      drawArr: [],
      howManyPlayers: null,
      howManyTeams: null,
      totalPlayers: null
    }
  },

  computed: {
    articleGroups () {
      return Array.from(Array(Math.floor(this.howManyTeams)).keys())
    }
  },

  methods: {
    addUser() {
      this.users.push({
        id:this.users.length+1, 
        name: this.userInput
    });
      
      this.userInput = '';
    },

    shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      this.totalPlayers = this.howManyPlayers * this.howManyTeams

      this.$forceUpdate();

      return this.drawArr = array;
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
