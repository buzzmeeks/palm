<template>
  <main>
    <div class="contentGeneric">
      <section class="editorial">
          <p>Number of tournaments: {{nbtour}}</p>
          <p> Number of tournaments qualifier: {{nbtourq}} </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    nbtour() {
      return this.$store.state.nbtour['rows'][0].count
    },
    nbtourq(){
        return this.$store.state.nbtourq['rows'][0].count
    }
  },
}
</script>