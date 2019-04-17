<template>
  <div id="app">
    <div class="search">
      <input
        class="search__input"
        v-model.trim="searchTerm"
        type="text"
        placeholder="Search Titles"
      >
    </div>
    <div class="albums">
      <album-item v-for="album in search" :key="album.title" :info="album"></album-item>
    </div>
  </div>
</template>

<script>
import AlbumItem from '../components/AlbumItem.vue';
import AlbumData from '../data/albums.json';

export default {
  name: 'app',
  data() {
    return {
      albumData: AlbumData,
      searchTerm: ''
    };
  },
  components: {
    AlbumItem
  },
  computed: {
    search() {
      return this.albumData.filter(album => {
        return album.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    }
  }
};
</script>

<style lang="scss">
@import '../styles/main.scss';

.search {
  float: right;
  padding: 1em;
  .search__input {
    font-size: 1em;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
}

.albums {
  clear: both;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>