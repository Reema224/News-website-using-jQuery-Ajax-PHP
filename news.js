const news_img = document.getElementById("news_img");
const news_title = document.getElementById("news_title");
const news_description = document.getElementById("news_description");
const news_date = document.getElementById("news_date");

  $(document).ready(function() {
	// Fetch the news data from the PHP API
	$.getJSON('./Backend/news.php', function(data) {
		// Loop through the news data and append each article to the HTML page
		$.each(data, function(index, news) {
			news_img = news.image_url;
            news_title=news.title
			news_description= news.description ;
			news_date= news.date;
			$('#container').append(html);
		});
	});
});


// axios.post('http://localhost/backend-group-project2/signup.php', data)
//     .then((result) => {
//     console.log(result);
//     if (result.data.status== "success") {
//       alert("Signed up successfully!");
//       window.location.href = "../index.html"; // redirect to product page
//     } else {
//       alert("Email Already exists!");
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });