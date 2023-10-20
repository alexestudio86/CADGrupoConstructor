<template>
    <header class="w3-row w3-white w3-display-container header" id="home">
        <video class="headerVideo" autoplay="true" loop="true" muted="true">
            <source src="../assets/skyscrapers-55933.mp4" type="video/mp4">
        </video>
        <div class="w3-display-middle w-100">
            <div class="d-md-flex justify-content-around">
                <div class="animate__animated animate__fadeInDown">
                    <div class="w3-padding w3-text-white w3-black w3-opacity">
                        <h3 class="w3-xlarge text-uppercase font-weight-bold">CAD Grupo Constructor</h3>
                        <h1 class="w3-small">Nos ajustamos a su presupuesto</h1>
                    </div>
                </div>
                <img class="w3-image animate__animated animate__fadeInDown animate__delay-1s" src="../assets/logo_cad_transparencia.png" alt="CAD Grupo Constructor" width="300px" height="auto" />
            </div>
        </div>
    </header>
</template>

<style scoped>
  .header {
    width:      100%;
    height:     90vh;
  }
  .headerVideo {
    width:      100%;
    height:     100%;
    object-fit: cover;
  }
</style>