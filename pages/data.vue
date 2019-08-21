<template>
  <main>
    <div class="contentGeneric">
      <section class="editorial">
          <p>Number of tournaments: {{nbtour}}</p>
          <p>Number of tournaments qualifier: {{nbtourq}} </p>
          <p>Number of Distinct DCI identifier: {{nbDCI}} </p>
          <p>Total Number of Ticket Sold for every tournament: {{nbTicket}} </p>
          <p>Total Number of Matches for every tournament: {{nbMatches}} </p>

      </section>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    nbtour() {
      return this.$store.state.nbtour['rows'][0].count
    },
    nbtourq(){
        return this.$store.state.nbtourq['rows'][0].count
    },
    nbDCI(){
      return this.$store.state.nbDCI['rows'][0].count
    },
    nbTicket(){
      let alpha = this.$store.state.tickSold
      let sum = 0
      for (var x in alpha){
        for (var i = 0; i < this.$store.state.tickSold[x].length;i++){
          sum+=this.$store.state.tickSold[x][i].players
        }
      }
      return sum
    },
    nbMatches(){
      let alpha = this.$store.state.tickSold
      let sum = 0
      for (var x in alpha){
        for (var i = 0; i < this.$store.state.tickSold[x].length;i++){
          for(var j = 0; j < this.$store.state.tickSold[x][i].matches.length;j++){
            sum+= this.$store.state.tickSold[x][i].matches[j].length
          }
        }
      }
      return sum
    }
  },
}
</script>