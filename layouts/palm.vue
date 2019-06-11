<template>
  <nav id="navMobile">
    <div id="navMobileWrapper">
      <div id="navMobileClose">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
          <img id="menuIconClose" src="design/icon_menu_close.svg">
        </a>
      </div>
      <div id="navMobileInternal">
        <div class="navMobileItem">
          <a href="events.html">
            <span class="navMobileLinkLabel">Événements</span>
          </a>
        </div>
        <div class="navMobileItem">
          <a href="ranking.html">
            <span class="navMobileLinkLabel">Classement</span>
          </a>
        </div>
        <div class="navMobileItem">
          <a href="rules.html">
            <span class="navMobileLinkLabel">Règlement</span>
          </a>
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
        <a href="index.html">
          <img id="headerLogoImg" src="design/logo_header.png">
        </a>
      </div>
      <div id="headerNav">
        <nav id="navFull">
          <span class="headerNavItem">
            <a href="events.html">Événements</a>
          </span>
          <span class="headerNavItem">
            <a href="ranking.html">Classement</a>
          </span>
          <span class="headerNavItem">
            <a href="rules.html">Règlement</a>
          </span>
          <span class="headerNavItem">
            <a href="final.html">Grande finale</a>
          </span>
        </nav>
        <nav id="navShort">
          <a href="#" onclick="openNav()">
            <img id="menuIconOpen" src="design/icon_menu_open.svg">
          </a>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <div class="contentHome">
      <section class="editorial">
        <img class="editoImage" src="assets/img/hero.jpeg">
        <p>Durant 2019, nous organisons au travers de l’association Dessine moi un Gobelin une ligue en région Parisienne : La Paris League of Modern ou PaLM. Cette ligue à pour but de perpétrer l’émulation du jeu organisé en boutique après la fin du système des PPTQs. La ligue au format Modern se jouera sur une saison d’un an, donnant lieu à un tournoi final en décembre où s’affronteront les meilleurs membres de cette ligue.</p>
      </section>
    </div>
  </main>
  <footer>
    <div id="footerWrapper">
      <div id="footerCredit">© 2019</div>
      <div id="footerNav">
        <nav>
          <div class="footerNavItem">
            <a href="mailto:parisleaguemodern@gmail.com">
              <span class="footerLinkIcon" id="footerIconMail"></span>
              <span class="footerLinkLabel">Mail</span>
            </a>
          </div>
          <div class="footerNavItem">
            <a href="https://www.facebook.com/Dessine-moi-un-Gobelin-843181532683583/">
              <span class="footerLinkIcon" id="footerIconFacebook"></span>
              <span class="footerLinkLabel">Facebook</span>
            </a>
          </div>
          <div class="footerNavItem">
            <a href="https://twitter.com/dessineG">
              <span class="footerLinkIcon" id="footerIconTwitter"></span>
              <span class="footerLinkLabel">Twitter</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style>
/*
Paris League of Modern website

Development : Adrien Baumann
Design : Valentin Socha
*/

@charset "utf-8";

/*-- GLOBAL --*/

html {
  height: 100%;
  font-variant-numeric: lining-nums;
}

body {
  background: #f8f6fb;
  height: auto;
  width: auto;
  margin: 0;
  padding: 0;
}

header {
  position: absolute;
  width: 100vw;
  background: #9987aa;
  z-index: 2;
  overflow: visible;
}

main {
  position: relative;
  z-index: 1;
  min-height: 1000px;
}

/*-- HEADER --*/

#headerWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

#headerNav {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
}

.headerNavItem {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 600;
  color: #e2d9ed;
  text-transform: uppercase;
}

.headerNavItem a,
.headerNavItem a:visited {
  color: #e2d9ed;
  text-decoration: none;
}

.headerNavItem a:hover {
  color: white;
  text-decoration: none;
}

.headerNavItem.current {
  color: white;
}

#menuIconOpen,
#menuIconClose {
  height: 25px;
  width: 25px;
}

#navMobile {
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  height: 100vh;
  width: 0;
  background: #9987aa;
  overflow-x: hidden;
  transition: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

#navMobileWrapper {
  width: 90vw;
  padding: 60px 5vw 0 5vw;
}

#navMobileClose {
  text-align: right;
}

.navMobileItem a {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
}

#navMobileInternal {
  margin-top: 30px;
}

#navMobileExternal {
  margin-top: 30px;
}

#navMobileInternal a {
  font-size: 25px;
}

#navMobileInternal .navMobileItem {
  margin-bottom: 10px;
}

#navMobileExternal a {
  font-size: 20px;
}

#navMobileExternal .navMobileItem {
  margin-bottom: 15px;
}

#navMobileIconMail,
#navMobileIconFacebook,
#navMobileIconTwitter {
  display: inline-block;
  background-image: url('icon_links.svg');
  background-repeat: no-repeat;
  margin-right: 10px;
}

/*-- FOOTER --*/

footer {
  width: 100vw;
  margin-top: 50px;
  background: white;
}

#footerWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #9987aa;
}

#footerIconMail,
#footerIconFacebook,
#footerIconTwitter {
  display: inline-block;
  background-image: url('icon_links.svg');
  background-repeat: no-repeat;
  margin-right: 5px;
}

#footerNav nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.footerNavItem a {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 20px;
}

.footerNavItem a,
.footerNavItem a:visited {
  color: #9987aa;
  text-decoration: none;
}

.footerNavItem a:hover {
  color: #635475;
  text-decoration: none;
}

/*-- CONTENT --*/

p {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #9987aa;
}

.text h2 {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: #9987aa;
}

.text ul {
  list-style-image: url('icon_list.svg');
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #9987aa;
}

/*-- RANKING --*/

#rank {
  display: flex;
}

#rank h2 {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: #9987aa;
}

#rankNav {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

.rankSwitch {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #9987aa;
}

.rankSwitch:hover {
  background: #e2d9ed;
  cursor: pointer;
}

.rankSwitch.current {
  background: #9987aa;
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: white;
}

#rankNav a {
  color: #9987aa;
  text-decoration: none;
}

#rankGlobalList {
  overflow-y: scroll;
}

.rankGlobalItem {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
}

.rankGlobalPlayer,
.rankGlobalPoints {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
}

.rankPosition {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: #9383a1;
}

.rankName {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: black;
}

.rankGlobalDCI {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: grey;
  font-size: 15px;
}

.rankGlobalPoints {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  text-decoration: none;
  background: #9383a1;
  color: white;
}

.rankGlobalPointsNumber {
  font-weight: 600;
}

.rankGlobalPointsTxt {
  font-weight: 400;
  text-align: center;
}

#rankShop {
  display: none;
}

#rankShopList {
  background: white;
}

.rankShopItem {
  background: white;
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #9383a1;
}

.rankShopItem:hover {
  background: #e2d9ed;
}

.rankShopItem a {
  display: block;
}

.rankShopItem a,
.rankShopItem a:visited {
  color: #9383a1;
  text-decoration: none;
}

#qualifList {
  overflow-y: scroll;
}

.qualifItem {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: white;
}

.qualifPhoto,
.qualifInfo {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.qualifPhotoImg {
  display: block;
  background: grey;
  margin: 0 20px;
}

.qualifPosition {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: #9383a1;
}

.qualifName {
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: black;
}

/*-- RESPONSIVE --*/

@media all and (max-width: 800px) {
  header {
    height: 110px;
  }

  #headerWrapper {
    width: 90vw;
    margin: 15px 5vw 0 5vw;
  }

  #headerLogo {
    height: 110px;
    width: 110px;
  }

  #navFull {
    display: none;
  }

  #headerLogoImg {
    height: 110px;
    width: 110px;
  }

  .headerNavItem {
    margin-left: 25px;
  }

  #navMobileIconMail,
  #navMobileIconFacebook,
  #navMobileIconTwitter {
    background-size: 75px 50px;
    width: 25px;
    height: 25px;
  }

  #navMobileIconMail {
    background-position: 0 -25px;
  }

  #navMobileIconFacebook {
    background-position: -25px -25px;
  }

  #navMobileIconTwitter {
    background-position: -50px -25px;
  }

  footer {
    height: 100px;
    padding-top: 15px;
  }

  #footerWrapper {
    justify-content: center;
    width: 90vw;
    margin: 0 auto;
    font-size: 17px;
  }

  #footerNav {
    display: none;
  }

  main {
    width: 90vw;
    margin: 0 5vw;
  }

  .contentHome {
    padding-top: 110px;
  }

  .contentGeneric {
    padding-top: 140px;
  }

  .editoImage {
    width: 90vw;
  }

  .editorial p {
    font-size: 18px;
  }

  .text p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .text h2 {
    font-size: 25px;
    margin: 30px 0 20px 0;
  }

  .text ul li {
    font-size: 16px;
  }

  #rank {
    flex-direction: column-reverse;
  }

  #rankWrapper,
  #qualifWrapper {
    width: 80vw;
  }

  #rankGlobalList {
    height: 435px;
    width: 80vw;
  }

  .rankGlobalItem {
    height: 75px;
    margin-bottom: 15px;
  }

  .rankSwitch {
    padding: 10px;
  }

  .rankPosition,
  .rankName {
    font-size: 22px;
  }

  .rankGlobalDCI {
    font-size: 17px;
  }

  .rankGlobalPointsNumber {
    font-size: 32px;
  }

  .rankGlobalPointsTxt {
    font-size: 15px;
  }

  #rankShopList {
    width: 80vw;
  }

  .rankShopItem a {
    font-size: 20px;
    padding: 18px 0 18px 18px;
  }

  #rank h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  #qualifList {
    height: 400px;
    width: 80vw;
    margin-bottom: 60px;
  }

  .qualifItem {
    height: 85px;
    margin-bottom: 15px;
  }

  .qualifPosition {
    font-size: 17px;
  }

  .qualifName {
    font-size: 22px;
  }

  .qualifPhotoImg {
    border-radius: 60px;
    height: 60px;
    width: 60px;
  }
}

@media all and (min-width: 800px) and (max-width: 1200px) {
  header {
    height: 110px;
  }

  #headerWrapper {
    width: 750px;
    margin: 15px auto 0 auto;
  }

  #headerLogo {
    height: 110px;
    width: 110px;
  }

  #headerNav {
    height: 95px;
    font-size: 15px;
  }

  #navShort {
    display: none;
  }

  #headerLogoImg {
    height: 110px;
    width: 110px;
  }

  .headerNavItem {
    margin-left: 25px;
  }

  footer {
    height: 100px;
    padding-top: 15px;
  }

  #footerWrapper {
    justify-content: space-between;
    width: 750px;
    margin: 0 auto;
    font-size: 17px;
  }

  #footerIconMail,
  #footerIconFacebook,
  #footerIconTwitter {
    background-size: 60px 40px;
    width: 20px;
    height: 20px;
  }

  #footerIconMail {
    background-position: 0 0;
  }

  #footerIconFacebook {
    background-position: -20px 0;
  }

  #footerIconTwitter {
    background-position: -40px 0;
  }

  main {
    width: 750px;
    margin: 0 auto;
  }

  .contentHome {
    padding-top: 110px;
  }

  .contentGeneric {
    padding-top: 140px;
  }

  .editoImage {
    width: 750px;
  }

  .editorial p {
    font-size: 20px;
  }

  .text p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .text h2 {
    font-size: 27px;
    margin: 30px 0 20px 0;
  }

  .text ul li {
    font-size: 18px;
  }

  #rank {
    flex-direction: row;
    justify-content: space-between;
  }

  #rankWrapper,
  #qualifWrapper {
    width: 360px;
  }

  .rankSwitch {
    padding: 10px;
    font-size: 18px;
  }

  #rankGlobalList {
    height: 550px;
    width: 360px;
  }

  .rankGlobalItem {
    height: 70px;
    margin-bottom: 10px;
  }

  .rankPosition,
  .rankName {
    font-size: 18px;
  }

  .rankGlobalDCI {
    font-size: 15px;
  }

  .rankGlobalPointsNumber {
    font-size: 28px;
  }

  .rankGlobalPointsTxt {
    font-size: 13px;
  }

  #rankShopList {
    width: 360px;
  }

  .rankShopItem a {
    font-size: 20px;
    padding: 18px 0 18px 18px;
  }

  #rank h2 {
    font-size: 27px;
    margin-bottom: 20px;
  }

  #qualifList {
    height: 620px;
    width: 360px;
    margin-bottom: 0;
  }

  .qualifItem {
    height: 70px;
    margin-bottom: 10px;
  }

  .qualifPosition {
    font-size: 15px;
  }

  .qualifName {
    font-size: 18px;
  }

  .qualifPhotoImg {
    border-radius: 45px;
    height: 45px;
    width: 45px;
  }
}

@media all and (min-width: 1200px) and (max-width: 1500px) {
  header {
    height: 150px;
  }

  #headerWrapper {
    width: 1000px;
    margin: 20px auto 0 auto;
  }

  #headerLogo {
    height: 150px;
    width: 150px;
  }

  #headerNav {
    height: 130px;
    font-size: 20px;
  }

  #navShort {
    display: none;
  }

  #headerLogoImg {
    height: 150px;
    width: 150px;
  }

  .headerNavItem {
    margin-left: 25px;
  }

  footer {
    height: 100px;
    padding-top: 15px;
  }

  #footerWrapper {
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;
    font-size: 19px;
  }

  #footerIconMail,
  #footerIconFacebook,
  #footerIconTwitter {
    background-size: 60px 40px;
    width: 20px;
    height: 20px;
  }

  #footerIconMail {
    background-position: 0 0;
  }

  #footerIconFacebook {
    background-position: -20px 0;
  }

  #footerIconTwitter {
    background-position: -40px 0;
  }

  main {
    width: 1000px;
    margin: 0 auto;
  }

  .contentHome {
    padding-top: 150px;
  }

  .contentGeneric {
    padding-top: 180px;
  }

  .editoImage {
    width: 1000px;
  }

  .editorial p {
    font-size: 22px;
  }

  .text p {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .text h2 {
    font-size: 28px;
    margin: 30px 0 20px 0;
  }

  .text ul li {
    font-size: 20px;
  }

  #rank {
    flex-direction: row;
    justify-content: space-between;
  }

  #rankWrapper,
  #qualifWrapper {
    width: 482px;
  }

  .rankSwitch {
    padding: 10px;
    font-size: 20px;
  }

  .rankGlobalDCI {
    font-size: 15px;
  }

  #rankGlobalList {
    height: 615px;
    width: 482px;
  }

  .rankGlobalItem {
    height: 75px;
    margin-bottom: 15px;
  }

  .rankPosition,
  .rankName {
    font-size: 20px;
  }

  .rankGlobalPointsNumber {
    font-size: 32px;
  }

  .rankGlobalPointsTxt {
    font-size: 13px;
  }

  #rankShopList {
    width: 482px;
  }

  .rankShopItem a {
    font-size: 22px;
    padding: 20px 0 20px 20px;
  }

  #rank h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  #qualifList {
    height: 690px;
    width: 482px;
    margin-bottom: 0;
  }

  .qualifPosition {
    font-size: 15px;
  }

  .qualifName {
    font-size: 20px;
  }

  .qualifPhotoImg {
    border-radius: 50px;
    height: 50px;
    width: 50px;
  }

  .qualifItem {
    height: 80px;
    margin-bottom: 15px;
  }
}

@media all and (min-width: 1500px) {
  header {
    height: 180px;
  }

  #headerWrapper {
    width: 1200px;
    margin: 25px auto 0 auto;
  }

  #headerLogo {
    height: 180px;
    width: 180px;
  }

  #headerNav {
    height: 155px;
    font-size: 24px;
  }

  #navShort {
    display: none;
  }

  #headerLogoImg {
    height: 180px;
    width: 180px;
  }

  .headerNavItem {
    margin-left: 25px;
  }

  footer {
    height: 100px;
    padding-top: 21px;
  }

  #footerWrapper {
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    font-size: 17px;
  }

  #footerIconMail,
  #footerIconFacebook,
  #footerIconTwitter {
    background-size: 66px 44px;
    width: 22px;
    height: 22px;
  }

  #footerIconMail {
    background-position: 0 0;
  }

  #footerIconFacebook {
    background-position: -22px 0;
  }

  #footerIconTwitter {
    background-position: -44px 0;
  }

  main {
    width: 1200px;
    margin: 0 auto;
  }

  .contentHome {
    padding-top: 180px;
  }

  .contentGeneric {
    padding-top: 210px;
  }

  .editoImage {
    width: 1200px;
  }

  .editorial p {
    font-size: 25px;
  }

  .text p {
    font-size: 23px;
    margin-bottom: 10px;
  }

  .text h2 {
    font-size: 30px;
    margin: 30px 0 20px 0;
  }

  .text ul li {
    font-size: 23px;
  }

  #rank {
    flex-direction: row;
    justify-content: space-between;
  }

  #rankWrapper,
  #qualifWrapper {
    width: 580px;
  }

  .rankSwitch {
    padding: 12px;
    font-size: 22px;
  }

  .rankGlobalItem {
    height: 80px;
    margin-bottom: 20px;
  }

  .rankPosition,
  .rankName {
    font-size: 22px;
  }

  .rankGlobalDCI {
    font-size: 17px;
  }

  .rankGlobalPointsNumber {
    font-size: 35px;
  }

  .rankGlobalPointsTxt {
    font-size: 16px;
  }

  #rankGlobalList {
    height: 680px;
    width: 580px;
  }

  #rankShopList {
    width: 580px;
  }

  .rankShopItem a {
    font-size: 24px;
    padding: 22px 0 22px 22px;
  }

  #rank h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  #qualifList {
    height: 760px;
    width: 580px;
    margin-bottom: 0;
  }

  .qualifPosition {
    font-size: 15px;
  }

  .qualifName {
    font-size: 22px;
  }

  .qualifPhotoImg {
    border-radius: 60px;
    height: 60px;
    width: 60px;
  }

  .qualifItem {
    height: 90px;
    margin-bottom: 20px;
  }
}
</style>