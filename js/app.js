var vue = new Vue({
    el: '#albums',
    data: {
        albums: ''
    },
    created: function() {
        this.fetchAlbums();
    },
    methods: {
        fetchAlbums: function() {
            var self = this;
            $.get('albums.json', function(data) {
                self.albums = data;
            });
        }
    }
});
