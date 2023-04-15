<template>
    <div class="w3-row">
        <h1 class="w3-xxlarge w3-center text-uppercase w3-padding-64">Acerca de</h1>
        <div class="w3-row w3-padding-large w3-center">
            <div class="w3-quarter" v-for="(feature, index) in features" :key="index">
                <i :class="feature.icon + 'w3-margin-bottom w3-jumbo'" ></i>
                <h2 class="w3-large">{{ feature.title }}</h2>
                <p>{{ feature.description }}</p>
            </div>
        </div>
        <div class="w3-row w3-center w3-dark-grey w3-padding-64">
            <div class="w3-quarter" v-for="(highlight, index) in highlights" :key="index">
                <span class="w3-xxlarge">{{ highlight.quantity }}+</span>
                <p class="w3-medium" style="margin: 0;">{{ highlight.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

    const features = [
        {
            icon: 'fas fa-water ',
            title: 'Riego de liga',
            description: '',
        },{
            icon: 'fas fa-car ',
            title: 'Pavimentación',
            description: 'Carretera Asfáltica'
        },{
            icon: 'fas fa-truck-moving ',
            title: 'Fletes',
            description: 'Maquinaria y cama baja'
        },{
            icon: 'fas fa-map-signs ',
            title: 'Terracerías',
            description: ''
        }
    ]

    const highlights = [
        {
            quantity: 14,
            description: 'Socios comerciales'
        },{
            quantity: 55,
            description: 'Proyectos Realizados'
        },{
            quantity: 89,
            description: 'Clientes felices'
        },{
            quantity: 150,
            description: 'Conferencias'
        }
    ]

</script>