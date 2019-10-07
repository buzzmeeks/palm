<template>
<div class="contentGeneric">
    <section class="editorial">
    <v-data-table
      :headers="headers"
      :items="tourneyData"
      hide-actions
    >
      <template
        slot="headerCell"
        slot-scope="{ header }"
      >
        <span
          class="subheading font-weight-light text-success text--darken-3"
          v-text="header.text"
        />
      </template>
      <template
        slot="items"
        slot-scope="{ item }"
      >
        <td class="text-xs-center">{{ item.date }}</td>
        <td class="text-xs-center">{{ item.boutique }}</td>
        <td class="text-xs-center">{{ item.nbPlayers }}</td>
        <td class="text-xs-center">{{ item.type }}</td>
        <td class="text-xs-center">{{ item.results }}</td>

      </template>
    </v-data-table>
</section>
</div>
</template>




<style>
</style>

<script>
export default{
  computed:{
    tourneyData(){
      let alpha = this.$store.state.tickSold
      let tourney = []
      for (var x in alpha){
        for (var i = 0; i < this.$store.state.tickSold[x].length;i++){
          tourney.push({date:this.$store.state.tickSold[x][i].date.split('T')[0],boutique:this.$store.state.tickSold[x][i].shop,nbPlayers:this.$store.state.tickSold[x][i].players,type:this.$store.state.tickSold[x][i].type,results:'coming soon'})
        }
      }
      return tourney;
    }
    
  },
  data: () => ({
    headers: [
      {
        sortable: true,
        text: 'Date',
        value: 'date'
      },
      {
        sortable: true,
        text: 'Boutique',
        value: 'boutique'
      },
      {
        sortable: true,
        text: 'Participants',
        value: 'nbPlayers'
      },
      {
        sortable: true,
        text: 'Type',
        value: 'type',
      },
      {
        sortable: false,
        text: 'Resultats',
        value: 'results',
      }
    ],
    items: []
  })
}
</script>

<style>
</style>