import axios from 'axios'

export const actions = {
  // This action is called by nuxt server side and is waited for render the page
  async nuxtServerInit({ commit }, context) {
    const ranking = await axios.get('http://localhost:3001/api/ranking')
    const nbTournaments = await axios.get(
      'http://localhost:3001/api/numberOfTournaments',
    )
    const nbTournamentsQ = await axios.get(
      'http://localhost:3001/api/numberOfQualifierTournaments',
    )
    commit('setRankings', ranking.data)
    commit('setNbTour', nbTournaments.data)
    commit('setNbTourQ', nbTournamentsQ.data)
  },
}

export const mutations = {
  setRankings(state, ranking) {
    state.globalStandings = ranking
  },
  setNbTour(state, nbTournaments) {
    state.nbtour = nbTournaments
  },
  setNbTourQ(state, nbTournamentsQ) {
    state.nbtourq = nbTournamentsQ
  }
}

export const state = () => ({
  shops: [
    { name: 'Le Repaire du Dragon' },
    { name: 'Magic Bazar' },
    { name: 'MagicCorporation' },
    { name: 'Majestik' },
    { name: 'Parkage' },
    { name: 'Troll 2 Jeux' },
    { name: 'Uchronies' },
    { name: 'La Waaagh Taverne' },
  ],
  globalStandings: [],
  nbtour: 0,
  nbtourq: 0,
})

export const getters = {
  nbQualified: state => {
    return state.shops.length * 4 + 8
  },
}
