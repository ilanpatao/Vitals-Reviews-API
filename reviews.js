// Add the click function for the go button
$('.go').click(function(){
	// Get the place ID value
	var url = $('#url').val();
	if (url == ''){
		// Alert if field is blank, else continue
		alert('You didn\'t enter a URL!');
	} else {
		// Call my API
		$.getJSON("https://www.reviewsmaker.com/api/public/vitals?url=" + url, function (data){
			// Iterate through the results for this demo and display them on the page
			$('.results').append('<b>Rating: </b>' + data.ratingValue + "<br>");
			$('.results').append('<b>Total Reviews: </b>' + data.reviewCount + "<br>");
			$('.results').append('<b>Total Ratings: </b>' + data.ratingCount + "<br>");
			$('.results').append('<b>Total 5 Star Ratings: </b>' + data.fiveStarRatings + "<br>");
			$('.results').append('<b>Total 4 Star Ratings: </b>' + data.fourStarRatings + "<br>");
			$('.results').append('<b>Total 3 Star Ratings: </b>' + data.threeStarRatings + "<br>");
			$('.results').append('<b>Total 2 Star Ratings: </b>' + data.twoStarRatings + "<br>");
			$('.results').append('<b>Total 1 Star Ratings: </b>' + data.oneStarRatings + "<br>&nbsp;<hr>&nbsp;<br>");
			$.each( data.reviews, function( key, value ) {
			  $('.results').append('<b>Review Headline: </b>' + value.reviewHeadline + "<br>");
			  $('.results').append('<b>Review Date: </b>' + value.reviewDate + "<br>");
			  $('.results').append('<b>Review Rating: </b>' + value.reviewRating + "<br>");
			  $('.results').append('<b>Review Text: </b>' + value.reviewText + "<hr>");
			});
			// Display JSON feed in our input for the demo
			var json = JSON.stringify(data);
			$("#jsonresults").val(json);
		});
	}
});