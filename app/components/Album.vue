<template>
    <div class="album">
        <div class="artwork">
            <img src="http://via.placeholder.com/300x300" class="album-art">
        </div>
        <div class="album-information">
            <h1 class="artist-name">{{ info.artist }}</h1>
            <h2 class="album-name">{{ info.title }}</h2>
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
        flex: 1 1 20%;
        flex-wrap: wrap;
    }

    .artwork img {
        display: block;
        max-width: 100%;
    }

    .album h1, .album h2, .album h5 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>