const config = {
  type: 'carousel',
   autoplay:3000,
  perView: 1,
   animationDuration: 600,
	 breakpoints:{
	  600: { perView: 1 },
	  800: { perView: 1 },
	  1200: { perView: 1 }
	}
}
new Glide('.glide', config).mount();



