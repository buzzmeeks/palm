<template>
  <div class="contentGeneric">
    <section class="editorial">
      <v-data-table :headers="headers" :items="tourneyData" hide-actions>
        <template slot="headerCell" slot-scope="{ header }">
          <span
            class="subheading font-weight-light text-success text--darken-3"
            v-text="header.text"
          />
        </template>
        <template slot="items" slot-scope="{ item }">
          <td class="text-xs-center">{{ item.name }}</td>
          <td class="text-xs-center">{{ item.dci }}</td>
          <td class="text-xs-center">{{ item.ppalm }}</td>
          <td class="text-xs-center">{{ item.result }}</td>
        </template>
      </v-data-table>
    </section>
  </div>
</template>




<style>
</style>

<script>
export default {
  computed: {
    tourneyData() {
      let alpha = this.$store.state.globalStandings
      let tourney = []
      let tournamentNumber = this.$route.params.results
      for(let x in alpha){
        let points = alpha[x].leagues[0].results[tournamentNumber]
        if(points !== undefined){
          if(points.top8 !== undefined){
            tourney.push({name:alpha[x].name,dci:alpha[x].dci,ppalm:points.ppalm,result:points.top8})
          }else{
            tourney.push({name:alpha[x].name,dci:alpha[x].dci,ppalm:points.ppalm,result:points.pmatch})
          }
        }
      }
      return tourney
    },
  },
  data: () => ({
    headers: [
      {
        sortable: true,
        text: 'Name',
        value: 'name',
      },
      {
        sortable: true,
        text: 'DCI',
        value: 'dci',
      },
      {
        sortable: true,
        text: 'Ppalm',
        value: 'ppalm',
      },
      {
        sortable: true,
        text: 'Result',
        value: 'result',
      },
    ],
    items: [],
  }),
}
</script>