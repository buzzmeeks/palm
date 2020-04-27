<template>
  <v-layout column justify-center align-center class="homepage">
    <v-flex xs12 sm8 md6>
      <h1>Bienvenue sur le site de la Paris League of Magic</h1>
      <p>
        Depuis 2019, nous organisons au travers de l’association <strong>Dessine moi un Gobelin</strong> la Paris League of Magic, une série de tournois se déroulant dans les boutiques de Paris et de France pour encourager le jeu Compétitif.

        <br>Cette ligue se joue toutes les semaines, dans les boutiques partenaires: chaque tournoi fait gagner des points PaLM à ses participants; à la fin d'une saison, les joueurs les mieux classés sont invités à la finale pour se disputer le titre de Champion de la PaLM dans trois formats: Modern, Limité, et Pioneer. Les boutiques peuvent aussi organiser des Qualifiers, dont le vainqueur est directement invité à la finale.

		En 2020, nous organisons trois ligues en parallèle:
		Une ligue <strong>Modern</strong>, de Janvier 2020 à Décembre 2020, avec:
      </p>
      <ul>
        <li v-for="(shop, index) in shops_modern" :key="index">{{shop.name}}</li>
      </ul>
      <p>
		Une ligue <strong>Limitée</strong>, de Janvier 2020 à Décembre 2020, avec:
      </p>
      <ul>
        <li v-for="(shop, index) in shops_limited" :key="index">{{shop.name}}</li>
      </ul>
      <p>
	  Une ligue <strong>Pioneer</strong>, de Janvier 2020 à Mars 2020, avec:
      </p>
      <ul>
        <li v-for="(shop, index) in shops_pioneer" :key="index">{{shop.name}}</li>
      </ul>

    </v-flex>
  </v-layout>
</template>


<script>
export default {
  computed: {
    shops() {
      return this.$store.state.shops
    },
    nbQualified() {
      return this.$store.state.nbQualified
    }
  }
}
</script>

<style>
.homepage ul {
  margin-bottom: 1em;
}
</style>