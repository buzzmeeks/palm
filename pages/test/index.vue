<template>
  <main>
    <div class="contentGeneric">
      <section id="rank">
        <div id="rankWrapper">
          <h2>Classement</h2>

          <!-- RANKING GLOBAL -->
          <div id="rankGlobal">
            <div id="rankNav">
              <div class="rankSwitch current">général</div>
              <div class="rankSwitch">
                <a href="javascript:void(0)" v-on:click="switchToShop()">par Boutique</a>
              </div>
            </div>
            <div id="rankGlobalList">
              <div
                class="rankGlobalItem standing"
                v-for="(standing, index) in standings"
                :key="standing.dci"
              >
                <!-- START ENTRY -->
                <div class="rankGlobalPlayer">
                  <div>
                    <div class="rankGlobalName">
                      <span class="rankPosition">{{index + 1}}</span>
                      <span class="rankName">{{ standing.name }}</span>
                    </div>
                    <div class="rankGlobalDCI">{{ standing.dci }}</div>
                  </div>
                </div>
                <div class="rankGlobalPoints">
                  <div>
                    <div class="rankGlobalPointsNumber">{{standing.points}}</div>
                    <div class="rankGlobalPointsTxt">points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RANKING BY SHOP -->
          <div id="rankShop">
            <div id="rankNav">
              <div class="rankSwitch">
                <a href="javascript:void(0)" v-on:click="switchToGlobal()">général</a>
              </div>
              <div class="rankSwitch current">par boutique</div>
            </div>
            <v-container fluid>
              <v-select :items="items" item-value="src" label="Select a shop" @change="test"></v-select>
            </v-container>

            <div id="rankGlobalList">
              <div
                class="rankGlobalItem standing"
                v-for="(standing, index) in shopDisplay"
                :key="standing.dci"
              >
                <!-- START ENTRY -->
                <div class="rankGlobalPlayer">
                  <div>
                    <div class="rankGlobalName">
                      <span class="rankPosition">{{index + 1}}</span>
                      <span class="rankName">{{ standing.name }}</span>
                    </div>
                    <div class="rankGlobalDCI">{{ standing.dci }}</div>
                  </div>
                </div>
                <div class="rankGlobalPoints">
                  <div>
                    <div class="rankGlobalPointsNumber">{{standing.points}}</div>
                    <div class="rankGlobalPointsTxt">points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    items: [
      'Le Repaire du Dragon',
      'Magic Bazar',
      'MagicCorporation',
      'Majestik',
      'Parkage',
      'Troll 2 Jeux',
      'Uchronies',
      'La Waaagh Taverne',
    ],
    isDisplay: false,
    shopDisplay: [],
  }),
  computed: {
    standings() {
      return this.$store.state.globalStandings
    },
  },
  methods: {
    switchToShop: function() {
      document.getElementById('rankShop').style.display = 'block'
      document.getElementById('rankGlobal').style.display = 'none'
    },
    switchToGlobal: function() {
      document.getElementById('rankShop').style.display = 'none'
      document.getElementById('rankGlobal').style.display = 'block'
    },
    displayranktest: function() {
      console.log(this.isDisplay)
      this.isDisplay = !this.isDisplay
      console.log(this.isDisplay)
    },
    test: function(shopName) {
      let gamma = []
      if (shopName == 'Le Repaire du Dragon') {
        gamma = this.filteringShops('dra')
      } else if (shopName == 'Magic Bazar') {
        gamma = this.filteringShops('mba')
      }else if (shopName == 'MagicCorporation') {
        gamma = this.filteringShops('mco')
      }else if (shopName == 'Majestik') {
        gamma = this.filteringShops('maj')
      }else if (shopName == 'Parkage') {
        gamma = this.filteringShops('par')
      }else if (shopName == 'Troll 2 Jeux') {
        gamma = this.filteringShops('t2j')
      }else if (shopName == 'Uchronies') {
        gamma = this.filteringShops('uch')
      } else if (shopName == 'La Waaagh Taverne') {
        gamma = this.filteringShops('lwt')
      } 
      gamma.sort((a, b) => (a.points < b.points ? 1 : -1))
      let alpha = []
      for (let index = 0; index < gamma.length; index++) {
        if (gamma[index].points !== 0) {
          alpha.push(gamma[index])
        }
      }
      this.shopDisplay = alpha
    },
    filteringShops: function(abbr) {
      let gamma = []
      for (var x in this.$store.state.globalStandings) {
        let lpoints = [0,0,0,0,0,0,0,0,0,0,0,0]
        for (var y in this.$store.state.globalStandings[x].leagues[0].results) {
          if (y.includes(abbr)) {
            lpoints.push(this.$store.state.globalStandings[x].leagues[0].results[y].ppalm
          }
		lpoints.sort()
		ppoints = lpoints[0]+lpoints[1]+lpoints[2]+lpoints[3]+lpoints[4]+lpoints[5]+lpoints[6]+lpoints[7]+lpoints[8]+lpoints[9]+lpoints[10]+lpoints[11]+lpoints[12]
        }
        gamma.push({
          dci: this.$store.state.globalStandings[x].dci,
          name: this.$store.state.globalStandings[x].name,
          points: ppoints,
        })
      }
      return gamma
    },
  },
}
</script>

<style>
</style>