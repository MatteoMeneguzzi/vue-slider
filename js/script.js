var app = new Vue({
	el: "#app",
	data: {
		photos: [
			"./img/image1.jpg",
			"./img/image2.jpeg",
			"./img/image3.webp",
			"./img/image4.webp",
		],
		indexPhoto: 0,
		intervalID: 0,
	},
	created() {
		// Appena la pagina è caricata parte questa funzione
		this.startLoop();
	},
	methods: {
		prevPhoto() {
			this.indexPhoto--;
			if (this.indexPhoto < 0) {
				this.indexPhoto = this.photos.length - 1;
			}
		},
		nextPhoto() {
			this.indexPhoto++;
			if (this.indexPhoto > this.photos.length - 1) {
				this.indexPhoto = 0;
			}
		},
		switchPhoto(index) {
			console.log(index);
			this.indexPhoto = index;
		},
		startLoop() {
			this.intervalID = setInterval(() => {
				this.nextPhoto();
			}, 3000);
		},
		stopLoop() {
			clearInterval(this.intervalID);
		},
	},
});
