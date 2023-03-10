$(document).ready(function() {
   $.ajax({
       url: "http://localhost/News-website-using-jQuery-Ajax-PHP/Backend/news.php",
       type: "GET",
       async: true,
       dataType: "json",
        success: function (news) {
           for (let i = 0; i < news.length; i++) {
              console.log(news);
    
              let newsItem = $("<div>").addClass("news-item");
              let newsImg = $('<img>').attr('src', news[i].image_url);
              newsImg.addClass("news-img");
              let newsTitle = $("<h2>").text(news[i].title);
              let newsDescription = $("<p>").text(news[i].description);
              let newsDate = $("<p>").text(news[i].date);
              newsItem.append(newsImg,newsTitle,newsDescription,newsDate);
              $("#container").append(newsItem);
           }
        },
        error: function(xhr, status, error) {
          console.error("Error getting news data: " + error);
       }
   });
});

