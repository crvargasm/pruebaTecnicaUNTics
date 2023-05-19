<template>
    <div>
        <video class="videoBackground" autoplay loop muted>
            <source :src="videoPath" type="video/webm">
        </video>
    </div>
</template>

<script>
export default {
    name: 'VideoHome',
    data() {
        return {
            videoPath: 'videoplayback.webm' // Ruta del archivo de video en la carpeta 'static'
        }
    }
}
</script>

<style>
.videoBackground {
    position: fixed;
    object-fit: cover;
    opacity: 0.7;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>