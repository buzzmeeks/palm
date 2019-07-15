<template>
  <v-app>
    <!--<v-navigation-drawer v-model="drawer" fixed app>
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
    </v-toolbar>-->
    <toolbar></toolbar>
    <nuxt />
    <!--<v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer>-->
    <appfooter></appfooter>
  </v-app>
</template>

<script>
import toolbar from './toolbar'
import appfooter from './appfooter'
export default {
  name: 'default',
  components: {
    toolbar,
    appfooter,
  },
  data() {
    return {
      title: 'PaLM',
      drawer: false,
      items: [
        {
          title: 'Accueil',
          to: '/',
        },
        {
          title: 'Classement',
          to: '/standings',
        },
        {
          title: 'Réglement',
          to: '/settlement',
        },
        {
          title: 'Calcul des points',
          to: '/points',
        },
        {
          title: 'Finale',
          to: '/finale',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ],
    }
  },
}
</script>
