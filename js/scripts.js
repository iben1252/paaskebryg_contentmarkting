$(function () { // DOM ready for jQuery??
	//write your code below

	//alert("helo")

	//https://www.sowecms.com/demos/jquery.instagramFeed/index.html
	$.instagramFeed({
		'username': 'wonderingpotatoe',
		/*'tag': 'wonderingpotatoe',*/
		'container': "#instagram-feed-demo",
		/*'image_size': [150, 240, 320, 480, 640],*/
		'image_size': 320,
		'display_profile': true,
		'display_biography': true,
		'display_gallery': true,
		/*'get_data': false,
		'callback': "seeJson",*/
		/*'styling': true, */
		'items': 100,
		'items_per_row': 3,
		'margin': 1,
		'styling': false
		/*'username': 'lasseclaes',
		'container': "#my-instagram-feed",
		'get_data': true,
		'callback': seeJson*/
	});

	/*function seeJson(data) {
	  console.log(data);
	}*/

	//The two go to debugging tools: alert & console.log - uncomment them using // or /* .... */
	//alert("hey");
	console.log('hi there from "js/scripts.js" - good to see you');
	//console.error('Just checking if YOU are checking the console. You should always open Chrome DevTools and check the console when doing web development. \n\nPlease uncomment or delete these messages from the js-file. \n\nBUT remember the syntax for alert and console.log \(e.g. by keeping then in the comments in the file\). \n\n//Lasse');
}); //END DOM ready


