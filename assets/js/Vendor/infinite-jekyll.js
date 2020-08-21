$(function() {
  
  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = $(".post-list").children().length,
      loadNewPostsThreshold = 3000;
      console.log(postsToLoad);
  // Load the JSON file containing all URLs
  $.getJSON('/np.io//js-posts.json', function(data) {
    postURLs = data["posts"];
    // console.log(postURLs);
    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad)
      disableFetching();
  });
	
  // If there's no spinner, it's not a page where posts should be fetched
  if ($(".infinite-spinner").length < 1)
    shouldFetchPosts = false; 
	console.log($(".infinite-spinner").length);
  // Are we close to the end of the page? If we are, load more posts
  $(window).scroll(function(e){
    if (!shouldFetchPosts || isFetchingPosts) return;
    
    var windowHeight = $(window).height(),
        windowScrollPosition = $(window).scrollTop(),
        bottomScrollPosition = windowHeight + windowScrollPosition,
        documentHeight = $(document).height();
      console.log({windowHeight, windowScrollPosition, documentHeight});
    // If we've scrolled past the loadNewPostsThreshold, fetch posts
    if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
      console.log('bottom')
      fetchPosts();
    }
  });
  console.log(postURLs);
  // Fetch a chunk of posts
  function fetchPosts() {
    console.log('we here');
    // Exit if postURLs haven't been loaded
    console.log(postURLs);
    if (!postURLs) return;
    console.log('we passed');
    
    isFetchingPosts = true;
    
    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
        postCount = $(".post-list").children().length,
        callback = function() {
          console.log(postCount)
          loadedPosts++;
          var postIndex = postCount + loadedPosts;
          
          if (postIndex > postURLs.length-1) {
            disableFetching();
            return;
          }
          
          if (loadedPosts < postsToLoad) {
            fetchPostWithIndex(postIndex, callback);
          } else {
            isFetchingPosts = false;
          }
        };
        callback();
        console.log(postCount, loadedPosts, callback)
    fetchPostWithIndex(postCount + loadedPosts, callback);
  }
	
  function fetchPostWithIndex(index, callback) {
    console.log('we at fetch')
    var postURL = postURLs[index];
		console.log(postURL)
    $.get(postURL, function(data) {
      console.log(data)
      $(data).find(".post").appendTo(".post-list");
      callback();
    });
  }
  
  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $(".infinite-spinner").fadeOut();
  }
	
});
