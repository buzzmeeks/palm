<template>
<div class="contentGeneric">
    <section class="editorial">

    <material-card
    color="green"
    title="Simple Table"
    text="Here is a subtitle for this table"
  >
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
    >
      <template
        slot="headerCell"
        slot-scope="{ header }"
      >
        <span
          class="subheading font-weight-light text-success text--darken-3"
          v-text="header.text"
        />
      </template>
      <template
        slot="items"
        slot-scope="{ item }"
      >
        <td class="text-xs-center">{{ item.date }}</td>
        <td class="text-xs-center">{{ item.boutique }}</td>
        <td class="text-xs-center">{{ item.nbPlayers }}</td>
        <td class="text-xs-center">{{ item.type }}</td>
        <td class="text-xs-center">{{ item.results }}</td>

      </template>
    </v-data-table>
  </material-card>
</section>
</div>
</template>




<style>
</style>

<script>
export default{
  data: () => ({
    headers: [
      {
        sortable: true,
        text: 'Date',
        value: 'date'
      },
      {
        sortable: true,
        text: 'Boutique',
        value: 'boutique'
      },
      {
        sortable: true,
        text: 'Participants',
        value: 'nbPlayers'
      },
      {
        sortable: true,
        text: 'Type',
        value: 'type',
      },
      {
        sortable: false,
        text: 'Resultats',
        value: 'results',
      }
    ],
    items: [
      {
        date: 'test',
        boutique: 'test',
        nbPlayers: 'test',
        type: 'test',
        results: 'test'
      }
    ]
  })
}
</script>

<style>
</style>