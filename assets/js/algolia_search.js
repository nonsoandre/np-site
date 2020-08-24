

var search = instantsearch({
  appId: "{{ site.algolia.application_id }}",
  apiKey: "{{ site.algolia.search_only_api_key }}",
  indexName: "{{ site.algolia.index_name }}",
  searchParameters: {
    restrictSearchableAttributes: ["title", "content"]
  },
  searchFunction: function searchFunction(helper) {
    var searchResults = document.getElementById("#search-results");
    if (helper.state.query === "") {
      searchResults.style.display = "none";
      return;
    }
    helper.search();
    searchResults.style.display = "block"; 
  }
})

var hitTemplate = function hitTemplate(hit) {
  var url = hit.url;
  var title = hit._highlightResult.title.value;
  var content = hit._highlightResult.html.value;
  var image = hit._highlightResult.image.value;
  var category = hit._highlightResult.category.value;

  return `
        <div class="sub-article-details context-list">
          <a href="${ url }" class="article-link">
              <figure class="article-figure size-medium">
                  <div class=" visible pb-cent article-img-box">
                      <img src="{{ site.baseurl }}/{{ site.image-path }}/${ image }" srcset="" alt=" {{ title }} ">
                  </div>
              </figure>
              <div class="article-meta local">
                  <div class="article-context meta-details">
                      <span>${ category }</span>
                  </div>
                  <h3>${ title }</h3>
              </div>
          </a>
        </div>
      `
}

//Searchbbar widget
search.addWidget(
  instantsearch.widgets.searchBox({
    container: ".search-wrapper",
    poweredBy: true,
    placeholder: "Search...",
    reset: true
  })
);

//searchresultWidget
search.addWidget(
instantsearch.widgets.hits({
  container: "#search-results",
  templates: {
    empty: "<p>No results <p>",
    item: hitTemplate
  }
})
);

search.start();