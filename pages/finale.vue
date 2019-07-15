<template>
  <main>
    <div class="contentGeneric">
      <section class="editorial">
        <h1>Finale</h1>
        <p>
          La Finale de la Paris League of Modern verra s’affronter les {{nbQualified}} meilleurs joueurs de la
          ligue dans un tournoi avec une dotation minimale de 1000 euros.
          <br />Elle aura lieu en décembre 2019, plus d’informations sur le lieu et la date très bientôt.
        </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    nbQualified() {
      return this.$store.state.nbQualified
    },
  },
}
</script>