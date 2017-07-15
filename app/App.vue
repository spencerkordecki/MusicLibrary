<template>
    <div id="app">
        <div id="search"></div>
        <div id="albums">
            <album
                v-for="album in albumData"
                :key="album.title"
                :info="album">
            </album>
        </div>
    </div>
</template>

<script>
    import Album from './components/Album.vue';
    import AlbumData from './assets/albums.json';

    export default {
        name: 'app',
        data: function() {
            return {
                albumData: AlbumData
            };
        },
        components: {
            Album
        }
    }   
</script>

<style>
    body {
        background-color: #d5e1df;
    }

    #albums {
        clear: both;
        overflow: hidden;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
</style>