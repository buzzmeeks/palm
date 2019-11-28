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
      let tourneytop8 = []
      let tourneyNotTop8 = []
      let tournamentNumber = this.$route.params.results
      for(let x in alpha){
        let points = alpha[x].leagues[0].results[tournamentNumber]
        if(points !== undefined){
          let dci = "*".repeat(alpha[x].dci.length-4) + alpha[x].dci.substring(alpha[x].dci.length-4,alpha[x].dci.length)
          if(points.top8 !== undefined){
            let resultop8 = ""
            if (points.top8==1) {
              resultop8 = "1er"
            }else if (points.top8==2) {
              resultop8 = "2ème"
            }else if(points.top8=="3 - 4"){
              resultop8 = "3 - 4ème"
            }else if (points.top8 == "5 - 8"){
              resultop8 = "5 - 8ème"
            }
            tourneytop8.push({name:alpha[x].name,dci:dci,ppalm:points.ppalm,result:resultop8})
          }else{
            tourneyNotTop8.push({name:alpha[x].name,dci:dci,ppalm:points.ppalm,result:points.pmatch})
          }
        }
      }
      tourneytop8.sort((a,b) => (a.result > b.result ? 1 : -1))
      tourneyNotTop8.sort((a,b) => (a.result < b.result ? 1 : -1))
      for(let x in tourneytop8){
        tourney.push(tourneytop8[x])
      }
      for (let x in tourneyNotTop8){
        tourney.push(tourneyNotTop8[x])
      }
      console.log(tourney)
      return tourney
    },
  },
  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'Name',
        value: 'name',
        align: 'center'
      },
      {
        sortable: false,
        text: 'DCI',
        value: 'dci',
        align: 'center'

      },
      {
        sortable: false,
        text: 'Ppalm',
        value: 'ppalm',
        align: 'center'
      },
      {
        sortable: false,
        text: 'Result',
        value: 'result',
        align: 'center'
      },
    ],
    items: [],
  }),
}
</script>