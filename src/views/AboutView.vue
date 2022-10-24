<script>
import BackHomepageComp from '../components/BackHomepageComp.vue'
export default { components: { BackHomepageComp } }
</script>

<template>
  <div class="about">
    <div class="header">
      <h1>Impressum</h1>
      <img src="../assets/bilder/information-header.png" class="largeimg">
      <p class="aufgabenstellung">Diese Lernplattform basiert auf das Lehrmittel: <i>Band Algorithmen - 3 Entwurf und Analyse von Algorithmen</i>.</p>
      <p class="aufgabenstellung "> Diese Plattform ist als open-source Projekt von Alexandre Reol [<a href="mailto:alexandre@reol.ch">alexandre@reol.ch</a>] als Teil der Bachelorarbeit an der ETH Zürich entwickelt worden. Source code: <a href="https://github.com/alexandrereol/bachelor-thesis">github.com/alexandrereol/bachelor-thesis</a></p>
    </div>
    <div>
      Home icon by
      <a href="https://www.freepik.com" title="Freepik">Freepik</a>
      and
      <a href="https://www.flaticon.com/authors/vignesh-oviyan" title="Vignesh Oviyan" >Vignesh Oviyan</a>
      , respectively from
      <a href="https://www.flaticon.com/">www.flaticon.com</a>
    </div>
    <div>
      Help and check icon by
      <a href="https://freeicons.io/profile/726" >Free Preloaders</a>
      and
      <a href="https://freeicons.io/profile/714">Raj Dev</a>
      respectively on
      <a href="https://freeicons.io">freeicons.io</a>
    </div>
    <div>
      Info, go back, refresh and skip icon by
      <a href="https://freeicons.io/profile/3">icon king1</a>
      , on
      <a href="https://freeicons.io">freeicons.io</a>
    </div>
    <br>
    <br>
    <br>
    <BackHomepageComp />
    <div id="links">
      <div>
        <a href="https://ethz.ch/">
          <img src="../assets/logos/ethz-logo.svg" draggable="false" style="height: 40px; left: 50%;">
        </a>
      </div>
      <div>
        <a href="https://abz.inf.ethz.ch/">
          <img src="../assets/logos/logo_abz_weiss.png" draggable="false" style="height: 60px;">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.largeimg {
  height: 200px;
}

.back_to_homepage {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 20px;
  padding: 10px;
  border: rgb(83, 81, 81);
}
.back_to_homepage:hover {
  background-color: rgb(83, 81, 81);
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
#links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
