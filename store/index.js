import axios from 'axios'

export const actions = {
  // This action is called by nuxt server side and is waited for render the page
  async nuxtServerInit({ commit }, context) {
    const ranking = await axios.get('http://localhost:3001/api/ranking')
    commit('setRankings', ranking.data)
  },
}

export const mutations = {
  setRankings(state, ranking) {
    state.globalStandings = ranking
  },
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
  shops_modern: [
    { name: 'Magic Bazar' },
    { name: 'Magic Corporation' },
    { name: 'Majestik' },
    { name: 'Troll 2 Jeux' },
    { name: 'Uchronies' },
  ],
  shops_limited: [
    { name: 'Magic Bazar' },
    { name: 'Majestik' },
	{ name: 'Le Repaire du Dragon' },
    { name: 'Troll 2 Jeux' },
    { name: 'Uchronies' },
  ],
  shops_pioneer: [
    { name: 'Magic Bazar' },
    { name: 'Majestik' },
	{ name: 'Le Repaire du Dragon' },
    { name: 'Troll 2 Jeux' },
    { name: 'Uchronies' },
  ],
  globalStandings: [],
})

export const getters = {
  nbQualified: state => {
    return state.shops.length * 4 + 8
  },
}
