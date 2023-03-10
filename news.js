// const news_img = document.getElementById("news_img");
// const news_title = document.getElementById("news_title");
// const news_description = document.getElementById("news_description");
// const news_date = document.getElementById("news_date");



// $(document).ready(function() {
// 			$.ajax({
// 				url: './Backend/news.php',
// 				dataType: 'json',
// 				success: function(response) {
// 					console.log(response);
// 					var newsContainer = $('#news');
// 					$.each(response, function(i, newsItem) {
// 						// var newsDiv = $('<div>').addClass('news-item');
// 						var img = $('<img>').attr('src', newsItem.image_url);
// 						var title = $('<h2>').text(newsItem.title);
// 						var desc = $('<p>').text(newsItem.description);
// 						var date = $('<p>').text(newsItem.date);
// 						newsDiv.append(img, title, desc, date);
// 						newsContainer.append(newsContainer);
// 					});
// 				},
// 				error: function(xhr, status, error) {
// 					console.error('Error fetching news:', status, error);
// 				}
// 			});
// 		});
// $(document).ready(function() {
// 	$.ajax({
// 		url: './Backend/news.php',
// 		dataType: 'json',
// 		success: function(data) {
// 			$.each(data, function(index, article) {
// 				$('#news-list').append('<li><img src="' + article.image_url + '"><h2>' + article.title + '</h2><p class="date">' + article.date + '</p><p>' + article.description + '</p></li>');
// 			});
// 		}
// 	});
// });


$(document).ready(function() {
$.ajax({
url: "http://localhost/News-website-using-jQuery-Ajax-PHP/Backend/news.php",
type: "GET",
async: true,
dataType: "json",
success: function (news) {
for (var i = 0; i < news.length; i++) {
    console.log(news)
     var newsImg = $('<img>').attr('src', news[i].image_url);
     var newsTitle = $("<h2>").text(news[i].title);
     var newsDescription = $("<p>").text(news[i].description);
     var newsDate = $("<p>").text(news[i].date);

$("#container").append(newsImg,newsTitle,newsDescription,newsDate);
}
},
error: function(xhr, status, error) {
      console.error("Error getting news data: " + error);
    }
});
});

// $(document).ready(function() {
//   $.ajax({
//     url: 'http://localhost/News-website-using-jQuery-Ajax-PHP/Backend/news.php',
//     type: 'GET',
//     dataType: 'json',
//     success: function(data) {
//       var html = "";
//       $.each(data, function(item) {
//         html += "<div>";
//         html += "<h3>" + item.title + "</h3>";
//         html += "<p>" + item.description + "</p>";
//         html += "</div>";
//       });
//       $("#news").html(html);
//     },
//     error: function(xhr, status, error) {
//       console.error("Error getting news data: " + error);
//     }
//   });
// });