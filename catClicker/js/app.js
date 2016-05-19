/* ======= Model ======= */

var model = {
	currCat: null,
	cats : [
		{
			clickCount: 0,
			name: "Fluffball", 
			img: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
		},
		{
			clickCount: 0,
			name: "Blue", 
			img: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
		},
		{
			clickCount: 0,
			name: "Caramel and Coffee", 
			img: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
		},
		{
			clickCount: 0,
			name: "Poofball", 
			img: "http://www.autostraddle.com/wp-content/uploads/2014/06/Fluffy-Kitten.jpg",
		},
		{
			clickCount: 0,
			name: "Silver", 
			img: "http://r.ddmcdn.com/s_f/o_1/w_1024/h_682/APL/uploads/2012/10/TooCute-KittenCamHighlights.jpg",
		},
		{
			clickCount: 0,
			name: "Whiskers", 
			img: "https://cnet1.cbsistatic.com/hub/i/r/2013/10/28/a7d76924-6de6-11e3-913e-14feb5ca9861/resize/570xauto/7a588ff8458b4530606dfd6fae3ed654/Kitten_Cheezburger.jpg",
		}
	]
};

/* ======= Octopus ======= */

var octopus = {
	init: function() {
		// set the current cat to the first one in the list
		model.currCat = model.cats[0];

		// tell views to initialize
		catListView.init();
		catView.init();
	},
	getCurrCat: function() {
		return model.currCat;
	},
	getCats: function() {
		return model.cats;
	},
	setCurrCat: function(cat) {
		model.currCat = cat;
	},
	incrementCounter: function() {
		model.currCat.clickCount++;
		catView.render();
	}
};

/* ======= Views ======== */

var catView = {
	init: function() {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click', function(){
        	octopus.incrementCounter();
        })

        this.render();
	},
	render: function() {
		var currentCat = octopus.getCurrCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.img;
	}
};

var catListView = {
	init: function() {
		this.catListElem = document.getElementById('cat-list');
		this.render();
	},
	render: function() {
		var cat, elem, i;
		var cats = octopus.getCats();
		this.catListElem.innerHTML = '';

		for(i = 0; i < cats.length; i++){
			cat = cats[i];
			elem = document.createElement('li');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(catCopy){
				return function() {
					octopus.setCurrCat(catCopy);
					catView.render();
				};
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};

octopus.init();
