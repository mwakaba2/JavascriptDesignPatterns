$(document).ready(function() {
	var cat1 = {
					name: "Fluffball", 
					img: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
				};
	var cat2 = {
					name: "Blue", 
					img: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
				};
	var cat3 = {
					name: "Caramel and Coffee", 
					img: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
				};
	var cat4 = {
					name: "Poofball", 
					img: "http://www.autostraddle.com/wp-content/uploads/2014/06/Fluffy-Kitten.jpg",
				};
	var cat5 = {
					name: "Silver", 
					img: "http://r.ddmcdn.com/s_f/o_1/w_1024/h_682/APL/uploads/2012/10/TooCute-KittenCamHighlights.jpg",
				};
	var cat6 = {
					name: "Whiskers", 
					img: "https://cnet1.cbsistatic.com/hub/i/r/2013/10/28/a7d76924-6de6-11e3-913e-14feb5ca9861/resize/570xauto/7a588ff8458b4530606dfd6fae3ed654/Kitten_Cheezburger.jpg",
				};

	var cats = [cat1, cat2, cat3, cat4, cat5, cat6];
	var catList = document.createElement('ul');
	var catSection = document.createElement('div');
	for (var i = 0; i < cats.length; i++) {
		var cat = cats[i];
		var elem = document.createElement('div');
		var img = document.createElement('img');
		var name = document.createElement('h1');
		var clicks = document.createElement('h2');
		var link = document.createElement('li');

		img.src = cat.img;
		name.textContent = cat.name;
		clicks.textContent = 0;
		link.textContent = cat.name;
		catList.appendChild(link);

		link.addEventListener('click', (function(currElem) {
			return function() {
				$(catSection).children().hide();
				$(currElem).show();
			}
		})(elem));

		elem.appendChild(img);
		elem.appendChild(name);
		elem.appendChild(clicks);

		elem.addEventListener('click', (function(numClicks) {
			return function() {
				numClicks.textContent = parseInt(numClicks.textContent) + 1;
			}
		})(clicks));

		$(elem).hide();
		catSection.appendChild(elem);
	}

	document.body.appendChild(catSection);
	document.body.appendChild(catList);
});
