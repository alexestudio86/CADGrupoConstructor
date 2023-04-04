<template>
    <nav class="w3-row w3-dark-gray w3-card h-20 sticky-md-top w3-padding">
        <div class="d-flex align-items-center justify-content-between">
            <router-link class="w3-bar-item w3-button w3-white w3-wide w3-round" to="/">
                <img class="w3-image animate__animated animate__fadeInDown animate__delay-1s" src="../assets/logo_cad_transparencia.png" alt="Logo CAD Grupo Constructor" width="70" />
            </router-link>
            <div>
                <router-link v-for="(link, index) in links" class="w3-bar-item w3-button" exact-active-class="meme" :key="index" :to="link.url">
                    <i :class="link.icon" style="margin: 0 4px 0 0" />
                    {{ link.name }}
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>

    const links = [
        {
            name:   'Inicio',
            url:    '/#home',
            icon:   'fas fa-home'
        },{
            name:   'Proyectos',
            url:    '/#projects',
            icon:   'fa fa-th'
        },{
            name:   'Contacto',
            url:    'contact',
            icon:   'fa fa-envelope'
        },{
            name:   'Servicios',
            url:    'services',
            icon:   'far fa-address-card'
        },{
            name:   '¿Quienes somos?',
            url:    'who-are',
            icon:   'fas fa-user'
        }
    ]

</script>

<style scoped>
    .h-20 {
        height: 10vh;
    }
    .meme {
        background: white;
        color: black;
    }
    .d-flex{
        display: flex!important
    }
    .align-items-center{
        align-items: center!important
    }
    .justify-content-between{
        justify-content: space-between!important
    }
    .flex-fill{
        flex: 1 1 auto!important
    }
</style>