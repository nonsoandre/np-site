(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        // appendString += '<li><img src=" '+ item.baseurl + item.imagepath + '/' + item.image +'"  /><a href="' + item.url + '"><h3>' + item.title + '</h3></a>' + item.author;

        appendString += `<div class="sub-article-details context-list">
        <a href="${ item.url }" class="article-link">
            <figure class="article-figure size-medium">
                <div class=" visible pb-cent article-img-box">
                    <img src="${ item.imagepath}/${ item.image }" srcset="" alt=" {{ latest.image-alt }} ">
                </div>
            </figure>
            <div class="article-meta local">
                <div class="article-context meta-details">
                    <span>${ item.category }</span>
                </div>
                <h3>${ item.title }</h3>
                
                <div class="article-info">
                    <div class="author">By {{ latest.author }}</div>
                    <div class="cat">
                        <span class="date">${ item.date }</span>
                    </div> 
                </div>

            </div>
        </a>
    </div>`
        // appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
      this.field('image');
      this.field('imagepath');
      this.field('baseurl');
      this.field('date');

    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content,
        'image': window.store[key].image,
        'imagepath': window.store[key].imagepath,
        'baseurl': window.store[key].baseurl,
        'date': window.store[key].date,
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
