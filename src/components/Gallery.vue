<template>
  <div class="w3-row w3-white" id="projects">
    <h1 class="w3-xxlarge w3-center text-uppercase w3-padding-64">Casa Metepec 717</h1>
    <div class="w3-row">
        <div v-for="(image, index) in images" class="w3-quarter w3-container w3-padding-16" :key="index" @click="showModal( { status:true, idx:index } )" >
            <img class="w3-image w3-hover-opacity" :src="image.source" :alt="image.title" style="width:100%; height:250px; object-fit:cover; cursor: pointer;" />
        </div>
    </div>
    <Modal v-if="modalElements.status" :images="images" :modalElements="modalElements" />
  </div>
</template>

<script setup>

    import image01 from '../assets/01-proyecto.jpg';
    import image02 from '../assets/02-proyecto.jpg';
    import image03 from '../assets/03-proyecto.jpg';
    import image04 from '../assets/04-proyecto.jpg';
    import image05 from '../assets/05-proyecto.jpg';
    import image06 from '../assets/06-proyecto.jpg';
    import image07 from '../assets/07-proyecto.jpg';
    import image08 from '../assets/08-proyecto.jpg';
    import image09 from '../assets/09-proyecto.jpg';
    import image10 from '../assets/10-proyecto.jpg';
    import image11 from '../assets/11-proyecto.jpg';
    import image12 from '../assets/12-proyecto.jpg';
    import image13 from '../assets/13-proyecto.jpg';

    import Modal from './Modal.vue';
    import { ref } from 'vue'

    const images = [
        {
            title:  'Casa Metepec 01',
            source: image01
        },{
            title:  'Casa Metepec 02',
            source: image02
        },{
            title:  'Casa Metepec 03',
            source: image03
        },{
            title:  'Casa Metepec 04',
            source: image04
        },{
            title:  'Casa Metepec 05',
            source: image05
        },{
            title:  'Casa Metepec 06',
            source: image06
        },{
            title:  'Casa Metepec 07',
            source: image07
        },{
            title:  'Casa Metepec 08',
            source: image08
        },{
            title:  'Casa Metepec 09',
            source: image09
        },{
            title:  'Casa Metepec 10',
            source: image10
        },{
            title:  'Casa Metepec 11',
            source: image11
        },{
            title:  'Casa Metepec 12',
            source: image12
        },{
            title:  'Casa Metepec 13',
            source: image13
        }
    ]

    // MODAL
    const modalElements = ref({
        status:     false,
        idx:        null
    });

    const showModal = ( evt ) => {
        modalElements.value.status  =   true,
        modalElements.value.idx     =   evt.idx
    }


</script>