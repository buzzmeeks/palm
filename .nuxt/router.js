import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1118745a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _ae12dd60 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _0adcfc19 = () => interopDefault(import('../pages/points.vue' /* webpackChunkName: "pages/points" */))
const _209e9da0 = () => interopDefault(import('../pages/results.vue' /* webpackChunkName: "pages/results" */))
const _f0315342 = () => interopDefault(import('../pages/settlement.vue' /* webpackChunkName: "pages/settlement" */))
const _120c5ee8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/contact",
      component: _1118745a,
      name: "contact"
    }, {
      path: "/faq",
      component: _ae12dd60,
      name: "faq"
    }, {
      path: "/points",
      component: _0adcfc19,
      name: "points"
    }, {
      path: "/results",
      component: _209e9da0,
      name: "results"
    }, {
      path: "/settlement",
      component: _f0315342,
      name: "settlement"
    }, {
      path: "/",
      component: _120c5ee8,
      name: "index"
    }],

    fallback: false
  })
}
