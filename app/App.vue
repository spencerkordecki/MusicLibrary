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
    import AlbumData from './data/albums.json';

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
        background-color: #00E6E6;
    }

    #albums {
        clear: both;
        overflow: hidden;
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
    }
</style>