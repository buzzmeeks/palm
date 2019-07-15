<template>
  <main>
    <div class="contentHome">
      <section class="editorial">
        <h1>Bienvenue sur PaLM</h1>
        <p>
          Durant 2019, nous organisons au travers de l’association
          <strong>Dessine moi un Gobelin</strong>
          une ligue en région Parisienne : La Paris League of Modern ou PaLM.
          <br />Cette ligue à pour but de perpétrer l’émulation du jeu organisé en boutique après la fin du système des PPTQs.
          La ligue
          <strong>au format Modern</strong>
          se jouera sur une saison d’un an,
          donnant lieu à un tournoi final en décembre où s’affronteront les meilleurs membres de cette ligue.
          Vous aurez l’occasion de participer à cette ligue de de manière régulière dans les boutiques partenaires :
        </p>
        <ul>
          <li v-for="(shop, index) in shops" :key="index">{{shop.name}}</li>
        </ul>
        <p>
          Jouer en boutique ,sur les tournois réguliers, ou durant les PaLM Qualifiers organisés-
          vous permettra de vous disputer des qualifications au travers de deux classements :
          Un classement local, propre à chaque boutique ; et un classement général.
          Un nombre de point sera attribué à chaque joueur en fonction du nombre de joueurs ayant
          participé à l'événement, le nombre de rondes, et le score final du joueur.
          Un bonus sera appliqué aux PaLM Qualifiers.
        </p>
        <p>
          Seul les 12 meilleures performances au cours de l’année seront prises en compte pour chaque
          classement, local et général. Une nouvelle performance supérieure à une ancienne viendra la
          remplacer dans le compte final des points.
          À l’issue de la saison, un minimum de {{nbQualified}} joueurs seront qualifiés pour la finale:
        </p>
        <ul>
          <li>
            <strong>{{shops.length * 3}} joueurs</strong> (3 par boutiques), qualifiés directement lors des PaLM Qualifiers organisés par les boutiques partenaires
          </li>
          <li>
            <strong>{{shops.length}} joueurs</strong> (1 par boutique), les mieux classés dans chaque boutique au classement local
          </li>
          <li>
            <strong>8 joueurs</strong>, les mieux classés au classement général
          </li>
        </ul>
        <p>
          La finale est assurée avec une dotation minimale de 1000 euros.
          Chaque joueur qualifié supplémentaire (en plus des {{nbQualified}} initiaux) verra une augmentation de
          la dotation minimale de la finale en conséquence
          Si un joueur est classé selon plusieurs critères, il recevra un bye lors de la finale.
          De plus, son invitation sera reportée au suivant dans le classement.
          Notez qu’un joueur ne peut recevoir un bye que s’il se qualifie sur plusieurs critères avant le dit report d’invitation.
        </p>
      </section>
    </div>
  </main>
</template>


<script>
export default {
  computed: {
    shops() {
      return this.$store.state.shops
    },
    nbQualified() {
      return this.$store.state.nbQualified
    },
  },
}
</script>

<style>

</style>