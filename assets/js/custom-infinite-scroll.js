$(".loadMore").click(loadMorePosts);

function loadMorePosts() {
  var _this = this;
  var $blogContainer = $("#article-container");
  var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
  var totalPages = parseInt($blogContainer.attr("data-totalPages"));
  var siteurl = $blogContainer.attr("data-pageurl")

  $(this).addClass("loading");
  
  $.get(siteurl + "/page" + nextPage, function (data) {
    var htmlData = $.parseHTML(data);
    var $articles = $(htmlData).find("article");

    $blogContainer.attr("data-page", nextPage).append($articles);

    if ($blogContainer.attr("data-totalPages") == nextPage) {
      $(".loadMore").remove();
    }

    $(_this).removeClass("loading");
  });  
}
