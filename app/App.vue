<template>
    <div id="app">
        <div id="searchBox">
            <input 
                v-model.trim="searchTerm" 
                type="text"
                placeholder="Search Titles"></input>
        </div>
        <div id="albums">
            <album
                v-for="album in search"
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
                albumData: AlbumData,
                searchTerm: ''
            }
        },
        components: {
            Album
        },
        computed: {
            search: function() {
                return this.albumData.filter((album) => {
                    return album.title.toLowerCase().includes(this.searchTerm.toLowerCase());
                });
            }
        }
    }   
</script>

<style>
    #searchBox {
        float: right;
        padding-right: 1em;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    #searchBox input {
        font-size: 1em;
        padding: 5px;
        border-radius: 5px;
        border: none;
    }

    #searchBox button {
        border: none;
        background: #455A64;
        color: #ffffff;
        font-size: 1em;
        padding: 5px;
        border-radius: 5px;
    }

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