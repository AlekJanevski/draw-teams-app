<template>
  <div>
    <h1 class="mb-16 text-3xl font-bold">Teams generator</h1>
    
    <!-- Main wrapper starts -->
    <div class="flex float-left w-full h-full">
      <!-- Add user wrapper starts -->
      <div class="float-left w-1/2 h-full mb-3 border-r px-7">
        <form name="add-user" method="post" @submit.prevent="addUser" class="flex flex-col items-start">
          <!-- Add user input starts -->
          <label for="">Enter player's name</label>
          <input 
            v-model="userInput"
            type="text" 
            class="relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
          />
          <!-- Add user button starts -->
          <button class="float-right px-4 py-2 mt-3 mb-1 mr-1 text-xs font-bold text-white uppercase rounded shadow outline-none bg-green-ash active:bg-blue-600 hover:shadow-md focus:outline-none" type="submit" style="transition: all .15s ease">
            Add player
          </button>
          <!-- Add button ends -->
        </form>
        
        <div class="float-left w-full mb-5">
          <div class="flex w-full">
            <div class="w-2/4 pr-2">
              <label class="block mt-5 text-left">How many players per team</label>
              <input 
                v-model="howManyPlayers"
                type="text" 
                class="relative w-full max-w-md px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div class="w-2/4 pl-2">
              <label class="block mt-5 text-left">How many teams</label>
              <input 
                v-model="howManyTeams"
                type="text" 
                class="relative w-full max-w-md px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <button v-if="this.drawArr.length === 0" @click="shuffle(users)" class="float-left px-4 py-2 mt-3 mb-1 mr-1 text-xs font-bold text-white uppercase rounded shadow outline-none bg-green-ash active:bg-blue-600 hover:shadow-md focus:outline-none" type="submit" style="transition: all .15s ease">
            Draw teams
          </button>
          <button v-else @click="shuffle(users)" class="float-left px-4 py-2 mt-3 mb-1 mr-1 text-xs font-bold text-white uppercase rounded shadow outline-none bg-green-ash active:bg-blue-600 hover:shadow-md focus:outline-none" type="submit" style="transition: all .15s ease">
            Draw again
          </button>
        </div>
        <!-- Add user input ends -->

        <div v-if="users.length" class="flex flex-col items-start justify-start float-left w-full">
          <h3 class="block text-xl font-bold">All players:</h3>
          <ul class="flex flex-col items-start justify-start">
            <li v-for="(user, id) in users" :key="id" class="all-players-list">
              {{ user.id }}. {{ user.name }}
            </li>
          </ul>
        </div>
      </div>
      <!-- Add user wrapper ends -->

      <!-- Teams section starts -->
      <div class="relative flex flex-col items-center justify-center float-left w-1/2">
        <h1 class="absolute top-0 block mb-2 text-xl font-bold">Drawed teams</h1>
          <div v-if="this.loading === false" class="flex flex-col items-center justify-center">
            <span>Please select how many players per team <br>
              and how many teams you want to be generated
            </span>
          </div>

          <div v-else class="flex items-center justify-center w-full justify-evenly">
            <vue-loaders name="ball-beat" color="red" scale="2"></vue-loaders>
            <ul v-for="(group, i) in articleGroups" :key="i" class="relative w-auto p-2 border rounded shadow min-w-150">
              <label class="absolute left-0 right-0 font-bold -top-6"> Team {{ i + 1 }}: </label>
              <li v-for="player in drawArr.slice(i * howManyPlayers, (i + 1) * howManyPlayers)" :key="player.id">
                {{ player.name }}
              </li>
            </ul>
            <span v-if="this.howManyTeams === null">Please select how many teams you want to draw</span>
          </div>
      </div>
      <!-- Teams section ends -->
    </div>
    <!-- Main wrapper ends -->

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
      totalPlayers: null,
      loading: false
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

      setTimeout(()=>{
        this.loading = true;
        console.log('done')
      },1000);

      this.$forceUpdate();


      return this.drawArr = array;
    },
    
    // loader() {
    //   setTimeout(function() { this.loading === true }, 3000);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-players-list {
  margin: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
