<template>
    <div ref="modal" class="w3-modal w3-black w3-show" style="z-index: 2;">
        <span @click="handleCloseModal" class="w3-large w3-white w3-button w3-display-topright" title="Cerrar">x</span>
        <figure class="w3-display-middle w-100 w3-content">
            <img class="modal-image" :src="images[modalElements.idx].source" :alt="images[modalElements.idx].title" />
            <button class="w3-button w3-gray w3-display-left" @click="$event => handlePrevImage( modalElements )">❮</button>
            <button class="w3-button w3-gray w3-display-right" @click="$event => handleNextImage( modalElements )">❯</button>
            <figcaption class="w3-black w3-opacity w3-large w3-padding-small w3-display-bottommiddle w-100 w3-center">{{ allProps.images[modalElements.idx].source }} - {{ modalElements.idx }}</figcaption>
        </figure>
    </div>
</template>


<script setup>

    const allProps = defineProps(
        {
            modalElements:  Object,
            images:         Array
        }
    );

    const handleCloseModal = ( ) => {
        console.log('Closed')
    };

    const handlePrevImage = ( evt ) => {
        evt.idx--
    };

    const handleNextImage = ( evt ) => {
        console.log( images )
        if ( evt.idx < images.length ) {
            console.log( 'Si pasa' )
        } else {
            console.log( 'No pasa' )
        }
        //evt.idx++
    };


</script>

<style>

    .modal-image {
        width:      100%;
        max-height: 80vh;
        object-fit: contain;
    }

</style>