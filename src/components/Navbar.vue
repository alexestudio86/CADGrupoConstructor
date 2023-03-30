<template>
    <nav class="w3-row w3-dark-gray w3-card h-20 sticky-md-top">
        <div class="w3-bar w3-container w3-padding-small">
            <router-link class="w3-bar-item w3-button w3-white w3-wide w3-round" to="/">
                <img class="w3-image animate__animated animate__fadeInDown animate__delay-1s" src="../assets/logo_cad_transparencia.png" alt="Logo CAD Grupo Constructor" width="70" />
            </router-link>
            <div class="w3-right">
                Soy un link
            </div>
        </div>
    </nav>
</template>

<script>

    export default {
        name:   'Navbar'
    }

    const links = [
        {
            name:   '1',
            url:    '1'
        },{
            name:   '2',
            url:    '2'
        },{
            name:   '3',
            url:    '3'
        },{
            name:   '4',
            url:    '4'
        },{
            name:   '5',
            url:    '5'
        }
    ]

</script>

<style scoped>
    .h-20 {
        height: 10vh;
    }
</style>