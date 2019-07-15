<template>
<div>
    <nav id="navMobile">
    <div id="navMobileWrapper">
      <div id="navMobileClose">
        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">
          <img id="menuIconClose" src="~/assets/design/icon_menu_close.svg">
        </a>
      </div>
      <div id="navMobileInternal">
        <div class="navMobileItem">
          <a href="events.html">
            <span class="navMobileLinkLabel">Événements</span>
          </a>
        </div>
        <div class="navMobileItem">
          <router-link to="/standings">
            <span class="navMobileLinkLabel">Classement</span>
          </router-link>
        </div>
        <div class="navMobileItem">
          <router-link to="/settlement">
            <span class="navMobileLinkLabel">Règlement</span>
          </router-link>
        </div>
        <div class="navMobileItem">
          <a href="final.html">
            <span class="navMobileLinkLabel">Grande finale</span>
          </a>
        </div>
      </div>
      <div id="navMobileExternal">
        <div class="navMobileItem">
          <a href="mailto:parisleaguemodern@gmail.com">
            <span class="navMobileLinkIcon" id="navMobileIconMail"></span>
            <span class="navMobileLinkLabel">Mail</span>
          </a>
        </div>
        <div class="navMobileItem">
          <a href="https://www.facebook.com/Dessine-moi-un-Gobelin-843181532683583/">
            <span class="navMobileLinkIcon" id="navMobileIconFacebook"></span>
            <span class="navMobileLinkLabel">Facebook</span>
          </a>
        </div>
        <div class="navMobileItem">
          <a href="https://twitter.com/dessineG">
            <span class="navMobileLinkIcon" id="navMobileIconTwitter"></span>
            <span class="navMobileLinkLabel">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <header>
    <div id="headerWrapper">
      <div id="headerLogo">
        <router-link to="/">
          <img id="headerLogoImg" src="~/assets/design/logo_header.png">
        </router-link>
      </div>
      <div id="headerNav">
        <nav id="navFull">
          <span class="headerNavItem">
            <a href="events.html">Événements</a>
          </span>
          <span class="headerNavItem">
            <router-link to="/standings">
              Classement
            </router-link>
          </span>
          <span class="headerNavItem">
            <router-link to="/settlement">Règlement</router-link>
          </span>
          <span class="headerNavItem">
            <router-link to="/finale">Grande finale</router-link>
          </span>
        </nav>
        <nav id="navShort">
          <a href="#" v-on:click="openNav()">
            <img id="menuIconOpen" src="~/assets/design/icon_menu_open.svg">
          </a>
        </nav>
      </div>
    </div>
  </header>
  </div>
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
          title: 'Classement',
          to: '/standings'
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
          title: 'Finale',
          to: '/finale'
        },
        {
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  },
  methods:{
    openNav: function(){
        document.getElementById('navMobile').style.width = '100vw'
    },
    closeNav : function(){
        document.getElementById('navMobile').style.width = '0'
    }
  }
}
</script>

