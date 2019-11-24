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
          <td class="text-xs-center">{{ item.round }}</td>
          <td class="text-xs-center">{{ item.dci }}</td>
          <td class="text-xs-center">{{ item.opponent }}</td>
          <td class="text-xs-center">{{ item.win }}</td>
          <td class="text-xs-center">{{ item.loss }}</td>
          <td class="text-xs-center">{{ item.draw }}</td>
          <td class="text-xs-center">{{ item.outcome }}</td>
          <td class="text-xs-center">{{ item.top8 }}</td>
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
      let alpha = this.$store.state.tickSold
      let tourney = []
      for (var x in alpha) {
        for (var i = 0; i < this.$store.state.tickSold[x].length; i++) {
          if (
            this.$store.state.tickSold[x][i].id == this.$route.params.results
          ) {
            for (
              var j = 0;
              j < this.$store.state.tickSold[x][i].matches.length;
              j++
            ) {
              for (
                var gamma = 0;
                gamma < this.$store.state.tickSold[x][i].matches[j].length;
                gamma++
              ) {
                tourney.push({
                  round: this.$store.state.tickSold[x][i].matches[j][gamma]
                    .round,
                  dci: this.$store.state.tickSold[x][i].matches[j][gamma].dci,
                  opponent: this.$store.state.tickSold[x][i].matches[j][gamma]
                    .opponent,
                  win: this.$store.state.tickSold[x][i].matches[j][gamma].win,
                  loss: this.$store.state.tickSold[x][i].matches[j][gamma].loss,
                  draw: this.$store.state.tickSold[x][i].matches[j][gamma].draw,
                  outcome: this.$store.state.tickSold[x][i].matches[j][gamma]
                    .outcome,
                  top8: this.$store.state.tickSold[x][i].matches[j][gamma].top8,
                })
              }
            }
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
        text: 'Round',
        value: 'round',
      },
      {
        sortable: true,
        text: 'DCI',
        value: 'dci',
      },
      {
        sortable: true,
        text: 'Opponent',
        value: 'opponent',
      },
      {
        sortable: true,
        text: 'Win',
        value: 'win',
      },
      {
        sortable: true,
        text: 'Loss',
        value: 'loss',
      },
      {
        sortable: true,
        text: 'Draw',
        value: 'draw',
      },
      {
        sortable: true,
        text: 'Outcome',
        value: 'outcome',
      },
      {
        sortable: true,
        text: 'TOP8',
        value: 'top8',
      },
    ],
    items: [],
  }),
}
</script>