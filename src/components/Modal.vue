<template>
    <div ref="modal" class="w3-modal w3-black w3-show" style="z-index: 2;">
        <button @click="$event => handleCloseModal( modalElements )" class="w3-large w3-white w3-button w3-display-topright" title="Cerrar">x</button>
        <figure class="w3-display-middle w-100 w3-content">
            <img class="modal-image" :src="images[modalElements.idx].source" :alt="images[modalElements.idx].title" />
            <button v-if="modalElements.idx > 0" class="w3-button w3-gray w3-display-left" @click="$event => handlePrevImage( images, modalElements )">❮</button>
            <button v-if="modalElements.idx < images.length-1" class="w3-button w3-gray w3-display-right" @click="$event => handleNextImage( images, modalElements )">❯</button>
            <figcaption class="w3-black w3-opacity w3-large w3-padding-small w3-display-bottommiddle w-100 w3-center">{{ allProps.images[modalElements.idx].title }}</figcaption>
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

    const handleCloseModal = ( modalElements ) => {
        modalElements.status = false
    };

    const handlePrevImage = ( images, modalElements ) => {
        if( modalElements.idx > 0 ){
            modalElements.idx--;
        }
    };

    const handleNextImage = ( images, modalElements ) => {
        if( modalElements.idx < images.length-1 ){
            modalElements.idx++;
        }
    };


</script>

<style>

    .modal-image {
        width:      100%;
        max-height: 80vh;
        object-fit: contain;
    }

</style>