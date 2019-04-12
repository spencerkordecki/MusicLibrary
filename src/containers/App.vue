<template>
  <div id="app">
    <div id="search-box">
      <input v-model.trim="searchTerm" type="text" placeholder="Search Titles">
    </div>
    <div id="albums">
      <album-item v-for="album in search" :key="album.title" :info="album"></album-item>
    </div>
  </div>
</template>

<script>
import mainStyling from '../styles/main.css';
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

<style scoped>
#search-box {
  float: right;
  padding-right: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
}

#search-box input {
  font-size: 1em;
  padding: 5px;
  border-radius: 5px;
  border: none;
}

#search-box button {
  border: none;
  background: #455a64;
  color: #ffffff;
  font-size: 1em;
  padding: 5px;
  border-radius: 5px;
}

#albums {
  clear: both;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>