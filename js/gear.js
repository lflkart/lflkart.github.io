function newPic(category, path, imgname, rank, optName, arrau){

    var inj=`<article>
							<a class="thumbnail" href="images/gallery/fulls/${imgname}.png" data-position="left center"><img src="images/gallery/thumbs/${imgname}.png" alt="${imgname}" /></a>
							<h2>${arrau[0]}</h2>
							<p>${arrau[4]}</p>
						</article>`
    return inj


}







	for (var i in gallery) {

		//console.log('loop #'+i)


		var seq = seq || [];
		var seqB = seqB || [];

		function randomFeed(u) {

			var out = seq[u];

			if (Math.round(Math.random() * 100) % 3 > 0) {
				//document.getElementById("feed-gallery").innerHTML

				seq[u] += newPic(gallery[i][1], '', gallery[i][0], gallery[i][2], i,gallery[i][4]);

				//console.log(u+' ODD')

			} else {
				//document.getElementById("feed-gallery").innerHTML
				seq[u] = newPic(gallery[i][1], '', gallery[i][0], gallery[i][2], i, gallery[i][4]);




				//document.getElementById("feed-gallery").innerHTML
                if (seq[u] != undefined){
				seq[u] += out;
                }

				//	console.log(u+' EVEN')
			}
		};

		gallery[i][3] = gallery[i][3] || 5;

		randomFeed(gallery[i][3]);

	for (i in seq) {seq[i] = seq[i].replace("undefined"," ");}


	};



	document.getElementById("thumbnails").innerHTML += seq[5];
	document.getElementById("thumbnails").innerHTML += seq[4];
	document.getElementById("thumbnails").innerHTML += seq[3];
	document.getElementById("thumbnails").innerHTML += seq[2];
	document.getElementById("thumbnails").innerHTML += seq[1];
