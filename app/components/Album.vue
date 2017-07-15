<template>
    <div class="album">
        <div class="artwork">
            <img :src="getArt(info.art)" class="album-art">
        </div>
        <div class="album-information">
            <h3 class="album-title">{{ info.title }}</h3>
            <h4 class="album-artist">{{ info.artist }}</h4>
            <h5 class="album-genre">{{ info.genre }}</h5>
            <h5 class="album-label">{{ info.label }}</h5>
            <h5 class="album-release">{{ info.release }}</h5>
        </div>
    </div>
</template>

<script>
    import image from '../assets/albumart/silentalarm.jpg';

    export default {
        name: 'album',
        props: {
            info: {
                type: Object,
                required: true
            }
        },
        methods: {
            getArt(album) {
                var images = require.context('../assets/albumart/', false, /\.jpg/);
                return images('./' + album);
            }
        }
    }
</script>

<style>
    .album {
        min-width: 0;
        max-width: 300px; /* resolution of image */ 
        flex: 1 1 20%;
        box-sizing: border-box;
        padding: 1em;
        position: relative;
        text-align: center;
    }

    .album-information:hover {
        opacity: 1;
    }

    .album-information {
        background: hsla(50, 0%, 0%, 0.7);
        opacity: 0;
        transition: .3s opacity ease-out;
        position: absolute;
        top: 1em;
        bottom: 1em;
        left: 1em;
        right: 1em;
        padding: .5em;
        border-radius: 5px;
    }

    .artwork img {
        display: block;
        max-width: 100%;
        border-radius: 5px;
    }

    .album-information {
        color: white;
        font-family: "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif;
    }

    .album h4, .album h5 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: .5em;
    }

    .album h3 {
        word-break: normal;
        line-height: 1em;
        height: 3em;
    }

    @media (max-width: 480px) {
        .album {
            flex: 1 1 100%;
        }
    }

    @media (max-width: 650px) and (min-width: 481px) { 
        .album {
            flex: 1 1 50%;
        }
    }

    @media (max-width: 1050px) and (min-width: 651px) { 
        .album {
            flex: 1 1 33.3%;
        }   
    }
</style>