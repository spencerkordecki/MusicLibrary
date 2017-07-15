<template>
    <div class="album">
        <div class="artwork">
            <img src="http://via.placeholder.com/300x300" class="album-art">
        </div>
        <div class="album-information">
            <h2 class="artist-name">{{ info.artist }}</h2>
            <h3 class="album-name">{{ info.title }}</h3>
            <h5 class="genre">{{ info.genre }}</h5>
            <h5 class="label">{{ info.label }}</h5>
            <h5 class="release">{{ info.release }}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'album',
        props: {
            info: {
                type: Object,
                required: true
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
        opacity: 1;
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

    .album h2, .album h3, .album h5 {
        color: white;
    }

    .album h3, .album h5 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: .5em;
    }

    .album h2 {
        word-break: normal;
        line-height: 1em;
        height: 2em;
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