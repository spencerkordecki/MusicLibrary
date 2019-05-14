<template>
  <div class="album" tabindex="0">
    <div class="album__artwork">
      <img :src="info.art" :alt="info.title + 'Album Art'" class="album__art">
    </div>
    <div class="album__information">
      <p class="album__title">{{ info.title }}</p>
      <p class="album__artist">{{ info.artist }}</p>
      <p class="album__genre">{{ info.genre }}</p>
      <p class="album__label">{{ info.label }}</p>
      <p class="album__release">{{ info.release }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumItem',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.album {
  min-width: 0;
  max-width: 300px; /* resolution of image */
  flex: 1 1 100%;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
  text-align: center;
  outline: none;
  &:hover,
  &:focus {
    .album__information {
      opacity: 1;
    }
  }
  &:focus {
    .album__information {
      border: 4px dashed #fff;
    }
  }
  .album__artwork {
    .album__art {
      display: block;
      max-width: 100%;
      border-radius: 5px;
    }
  }
  .album__information {
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: hsla(50, 0%, 0%, 0.7);
    transition: 0.3s opacity ease-out;
    position: absolute;
    top: 1em;
    bottom: 1em;
    left: 1em;
    right: 1em;
    padding: 0.5em;
    border-radius: 5px;
    color: white;
    font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva,
      Arial, sans-serif;
    .album__title {
      word-break: normal;
      font-size: 1.2em;
      font-weight: bold;
    }
    .album__artist {
      font-size: 1em;
    }
    .album__genre,
    .album__label,
    .album__release {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 2px;
      font-size: 0.9em;
    }
  }
}

@media (min-width: 600px) {
  .album {
    flex: 1 1 50%;
  }
}

@media (min-width: 900px) {
  .album {
    flex: 1 1 33.3%;
  }
}

@media (min-width: 1200px) {
  .album {
    flex: 1 1 25%;
  }
}

@media (min-width: 1800px) {
  .album {
    flex: 1 1 20%;
  }
}
</style>