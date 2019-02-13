<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'PaLM',
      drawer: false,
      items: [
        {
          title: 'Accueil',
          to: '/'
        },
        {
          title: 'Réglement',
          to: '/settlement'
        },
        {
          title: 'Calcul des points',
          to: '/points'
        },
        {
          title: 'FAQ',
          to: '/faq'
        },
        {
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>
