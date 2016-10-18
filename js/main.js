  $(document).ready(function() {
      $('#searchText')[0].reset(); //clear any text in search box upon refresh

      $('.searchButton').click(function(e) //onclick for search button
          {
              e.preventDefault();
              var input = $(this).parent('#searchText').find('.searchInput').val().toLowerCase();
              console.log('Input is: ' + input);
              var type = $(this).parent('#searchText').find('.searchType').val();
              console.log('Selected type is ' + type);

              if (type == 'all') //if no search type is selected
              {
                  $('.album').each(function() {
                      $(this).hide();
                  });

                  $('.album').each(function() {
                      filterAll(input, $(this).find('.artistName'));
                      filterAll(input, $(this).find('.albumName'));
                      filterAll(input, $(this).find('.genre'));
                      filterAll(input, $(this).find('.label'));
                      filterAll(input, $(this).find('.release'));
                  });
              } else if (type == 'title') {
                  $('.albumName').each(function() {
                      filter(input, this);
                  });
              } else if (type == 'artist') {
                  $('.artistName').each(function() {
                      filter(input, this);
                  });
              } else if (type == 'genre') {
                  $('.genre').each(function() {
                      filter(input, this);
                  });
              } else if (type == 'label') {
                  $('.label').each(function() {
                      filter(input, this);
                  });
              } else if (type == 'release') {
                  $('.release').each(function() {
                      filter(input, this);
                  });
              }
          });

      //the following methods define the hover activities for the search bar and albums
      $('.artwork').mouseenter(function() {
          $(this).parent('.album').find('.albumInformation').stop().slideDown('medium');
      });

      $('.album').mouseleave(function() {
          $(this).find('.albumInformation').stop().slideUp('medium');
      });

      $('.searchButton').mouseenter(function() {
          $(this).css('border', '5px solid #42A6A6');
      });

      $('.searchButton').mouseleave(function() {
          $(this).css('border', '5px solid #CCFFFF');
      });

      $('.searchInput').mouseenter(function() {
          $(this).css('border', '5px solid #42A6A6');
      });

      $('.searchInput').mouseleave(function() {
          $(this).css('border', '5px solid #CCFFFF');
      });

      $('.searchType').mouseenter(function() {
          $(this).css('border', '5px solid #42A6A6');
      });

      $('.searchType').mouseleave(function() {
          $(this).css('border', '5px solid #CCFFFF');
      });

      function filter(input, element) {
          console.log($(element).text());
          var content = $(element).text().toLowerCase();
          if (input != content) {
              $(element).parent('.albumInformation').parent('.album').hide();
          } else {
              $(element).parent('.albumInformation').parent('.album').show();
          }
      }

      function filterAll(input, element) {
          console.log($(element).text());
          var content = $(element).text().toLowerCase();
          if (input == content) {
              $(element).parent('.albumInformation').parent('.album').show();
          }
      }
  });
