<template>
  <div>
    <!-- Heading -->
    <h1 class="mb-16 text-3xl font-bold">Teams generator</h1>
    <!-- Main wrapper starts -->
    <div class="flex float-left w-full h-full">
      <!-- Add player name wrapper starts -->
      <div class="float-left w-1/2 h-full mb-3 border-r px-7">
        <form 
          method="post"
          @submit.prevent="addPlayer" 
          name="add-player-name" 
          class="flex flex-col items-start"
        >
          <!-- Add player name input starts -->
          <label for="">Enter player's name</label>
          <input 
            v-model="playerNameInput"
            type="text" 
            class="relative w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
          />
          <!-- Add player name input ends -->

          <!-- Add player name button starts -->
          <button class="float-right px-4 py-2 mt-3 mb-1 mr-1 text-xs font-bold text-white uppercase rounded shadow outline-none bg-green-ash active:bg-blue-600 hover:shadow-md focus:outline-none" type="submit" style="transition: all .15s ease">
            Add player
          </button>
          <!-- Add player name button ends -->
        </form>
        <!-- Add player name input ends -->
        
        <!-- Team specs section starts -->
        <div class="float-left w-full mb-5">
          <!-- Inputs wrapper starts -->
          <div class="flex w-full">
            <!-- Players per team section starts -->
            <div class="w-2/4 pr-2">
              <label class="block mt-5 text-left">How many players per team</label>
              <input 
                v-model="howManyPlayers"
                type="text" 
                class="relative w-full max-w-md px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <!-- Players per team section ends -->
            
            <!-- Teams section starts -->
            <div class="w-2/4 pl-2">
              <label class="block mt-5 text-left">How many teams</label>
              <input 
                v-model="howManyTeams"
                type="text" 
                class="relative w-full max-w-md px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded outline-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <!-- Teams section ends -->
          </div>
          <!-- Inputs wrapper ends -->

          <!-- Draw buttons starts -->
          <button 
            v-if="this.drawArr.length === 0" 
            @click="shuffle(players)"
            type="submit"
            class="float-left px-4 py-2 mt-3 mb-1 mr-1 text-xs font-bold text-white uppercase rounded shadow outline-none bg-green-ash active:bg-blue-600 hover:shadow-md focus:outline-none"
            style="transition: all .15s ease"
          > Draw teams 
          </button>
          <button 
            v-else 
            @click="shuffle(players)" 
            class="float-left px-4 py-2 mt-3 mb-1 mr-1 text-xs font-bold text-white uppercase rounded shadow outline-none bg-green-ash active:bg-blue-600 hover:shadow-md focus:outline-none"
            type="submit"
            style="transition: all .15s ease"
          > Draw again
          </button>
          <!-- Draw buttons ends -->
        </div>
        <!-- Team specs section ends -->

        <!-- All players list starts -->
        <div v-if="players.length" class="flex flex-col items-start justify-start float-left w-full">
          <h3 class="block text-xl font-bold">All players:</h3>
          <ul class="flex flex-col items-start justify-start">
            <li v-for="(player, id) in players" :key="id" class="all-players-list">
              {{ player.id }}. {{ player.name }}
            </li>
          </ul>
        </div>
        <!-- All players list ends -->
      </div>
      <!-- Add user wrapper ends -->

      <!-- Drawed teams section starts -->
      <div class="relative flex flex-col items-center justify-center float-left w-1/2 overflow-hidden">
        <!-- Heading -->
        <h1 class="absolute top-0 block mb-2 text-xl font-bold">Drawed teams</h1>
        <!-- No drawed teams section starts -->
        <div v-if="this.drawArr.length === 0" class="flex flex-col items-center justify-center">
          <span>Please select how many players per team <br>
            and how many teams you want to be generated
          </span>
        </div>  
        <!-- No drawed teams section ends -->

        <!-- Drawed teams list starts -->
        <div v-else class="relative flex items-center justify-center w-full justify-evenly">
          <vue-loaders-ball-pulse v-if="this.loading === true" color="#9fdbad" scale="2" class="absolute z-10 w-full h-full" style="background: white;"></vue-loaders-ball-pulse>
          <ul v-for="(group, i) in articleGroups" :key="i" class="relative w-auto p-2 border rounded shadow min-w-150">
            <label class="absolute left-0 right-0 font-bold -top-6"> Team {{ i + 1 }}: </label>
            <li v-for="player in drawArr.slice(i * howManyPlayers, (i + 1) * howManyPlayers)" :key="player.id">
              {{ player.name }}
            </li>
          </ul>
          <span v-if="this.howManyTeams === null">Please select how many teams you want to draw</span>
        </div>
        <!-- Drawed teams list ends -->
      </div>
      <!-- Teams section ends -->
    </div>
    <!-- Main wrapper ends -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data() {
    return {
      players: [
        { id: 1, name: 'Adams Baker' },
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Clark Davis' },
        { id: 4, name: 'Irwin Jones' },
        { id: 5, name: 'Valdo White' },
        { id: 6, name: 'Frank Evans' }
      ],
      playerNameInput: '',
      drawTeam: false,
      drawArr: [],
      howManyPlayers: null,
      howManyTeams: null,
      totalPlayers: null,
      loading: false
    }
  },

  computed: {
    // Returns the value for how many teams should be set
    articleGroups () {
      return Array.from(Array(Math.floor(this.howManyTeams)).keys())
    }
  },

  methods: {
    // Handle adding the player
    addPlayer() {
      this.players.push({
        id:this.players.length+1, 
        name: this.playerNameInput
    })
      this.playerNameInput = ''
    },

    // Handle the shuffle players method
    shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
      // Set the total players value
      this.totalPlayers = this.howManyPlayers * this.howManyTeams

      // Activate the loader
      this.loading = true

      // Deactivate the loader
      setTimeout(()=>{
        this.loading = false
      },1000)

      // Rerender the component
      this.$forceUpdate()

      // Return the value in the drawArr
      return this.drawArr = array
    }
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
