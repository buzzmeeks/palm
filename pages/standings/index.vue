<template>
  <v-layout column>
    <v-flex xs12 sm8 md6 grow>
      <h1>Classement général</h1>
      <v-list two-line>
        <v-list-tile v-for="(standing, index) in standings" :key="standing.dci" class="standing">
          <div class="rank">{{index + 1}}</div>
          <v-list-tile-content>
            <v-list-tile-title>{{ standing.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ standing.dci }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <div class="points">{{standing.points}}pts</div>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    standings() {
      return this.$store.state.globalStandings
    }
  }
}
</script>

<style class="scss">
.points {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rank {
  font-size: 16px;
  font-weight: bold;
  margin-right: 2em;
}
</style>