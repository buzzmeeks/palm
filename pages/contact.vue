<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-list>
        <v-list-tile v-for="contact in contacts" :key="contact.name">
          <v-list-tile-content>
            <v-list-tile-title>{{contact.name}}</v-list-tile-title>
            <v-list-tile-sub-title>
              <a class="link" :href="contact.url">{{contact.value}}</a>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<style>
</style>

<script>
export default {
  data: () => ({
    contacts: [
      {
        name: 'Mail',
        url: 'mailto:parisleaguemodern@gmail.com',
        value: 'parisleaguemodern@gmail.com'
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/Dessine-moi-un-Gobelin-843181532683583',
        value: 'Dessine moi un Gobelin'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/DessineG',
        value: 'DessineG'
      }
    ]
  })
}
</script>

<style>
.link,
.link:hover,
.link:visited,
.link:active {
  color: #ffffff;
}
</style>