<template>
  <div class="w3-row w3-white" id="projects">
    <h1 class="w3-xlarge w3-center text-uppercase w3-padding-32">Casa Metepec 717</h1>
    <div class="w3-row">
        <div v-for="(image, index) in images" class="w3-quarter w3-container w3-padding-16" :key="index">
            <img class="w3-image w3-hover-opacity" :src="image.source" :alt="image.title" style="width:100%; height:250px; object-fit:cover; cursor: pointer;">
        </div>
    </div>
  </div>
</template>

<script setup>

    const images = [
        {
            source: './src/assets/01-proyecto.jpg',
            title: 'Casa Metepec 01'
        },{
            source: './src/assets/02-proyecto.jpg',
            title: 'Casa Metepec 02'
        },{
            source: './src/assets/03-proyecto.jpg',
            title: 'Casa Metepec 03'
        },{
            source: './src/assets/04-proyecto.jpg',
            title: 'Casa Metepec 04'
        },{
            source: './src/assets/05-proyecto.jpg',
            title: 'Casa Metepec 05'
        },{
            source: './src/assets/06-proyecto.jpg',
            title: 'Casa Metepec 06'
        },{
            source: './src/assets/07-proyecto.jpg',
            title: 'Casa Metepec 07'
        },{
            source: './src/assets/08-proyecto.jpg',
            title: 'Casa Metepec 08'
        },{
            source: './src/assets/09-proyecto.jpg',
            title: 'Casa Metepec 09'
        },{
            source: './src/assets/10-proyecto.jpg',
            title: 'Casa Metepec 10'
        },{
            source: './src/assets/11-proyecto.jpg',
            title: 'Casa Metepec 11'
        },{
            source: './src/assets/12-proyecto.jpg',
            title: 'Casa Metepec 12'
        },{
            source: './src/assets/13-proyecto.jpg',
            title: 'Casa Metepec 13'
        }
    ]

</script>