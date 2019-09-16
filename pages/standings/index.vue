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
                <a href="javascript:void(0)" v-on:click="switchToShop()">par boutique</a>
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
            <div id="rankShopList">
              <div class="rankShopItem">
                <a href="#">Le Repaire du Dragon</a>
              </div>
              <div class="rankShopItem">
                <a href="#">Magic Bazar</a>
              </div>
              <div class="rankShopItem">
                <a href="#">MagicCorporation</a>
              </div>
              <div class="rankShopItem">
                <a href="#">Majestik</a>
              </div>
              <div class="rankShopItem">
                <a href="#">Parkage</a>
              </div>
              <div class="rankShopItem">
                <a href="#">Troll 2 Jeux</a>
              </div>
              <div class="rankShopItem">
                <a href="#">Uchronies</a>
              </div>
              <div class="rankShopItem">
                <a href="#">La Waaagh Taverne</a>
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
  },
}
</script>

<style>

</style>