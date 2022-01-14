				// TOGGLE PARA QUE APAREZCAN Y DESAPAREZCAN LAS PIEZAS (CON JQUERY)

			$(document).ready(function(){
				$("#addClothing").click(function(){
					$(".mangaCortaWhite, .mangaCortaGray, .mangaCortaRed").toggleClass("addRemove");
				});
				$("#addClothing2").click(function(){
					$(".mangaLargaWhite, .mangaLargaGray, .mangaLargaRed").toggleClass("addRemove");
				});
				$("#addClothing3").click(function(){
					$(".jeanWhite, .jeanGray, .jeanRed").toggleClass("addRemove");
				});
				$("#addClothing4").click(function(){
					$(".faldaWhite, .faldaGray, .faldaRed").toggleClass("addRemove");
				});
				$("#addClothing5").click(function(){
					$(".deVestirWhite, .deVestirGray, .deVestirRed").toggleClass("addRemove");
				});
				$("#addClothing6").click(function(){
					$(".casualWhite, .casualGray, .casualRed").toggleClass("addRemove");
				});
			});
				
				// BUTTON QUE REDIRIGE A LA PÁGINA INTERNA DEL ARMARIO

			$(document).ready(function(){
				$('.btnIniciar').click(function(){ 
					window.location = 'armario.html'
				});
			});

				// CAJA QUE VA A CONTENER LA ROPA QUE YA EXISTE EN EL ARMARIO PARA QUE EL USUARIO PUEDA SELECCIONAR

			class Piezas{
				constructor(data){
					this.pieza = data.pieza;
					this.color = data.color;
					this.estilo = data.estilo;
					this.id = data.id;
				}
			}

			let armarioDePiezas = [
				new Piezas ({pieza: "Camisa", color: "Blanca", estilo: "Manga corta",id:1}),
				new Piezas ({pieza: "Camisa", color: "Gris", estilo: "Manga corta",id:2}),
				new Piezas ({pieza: "Camisa", color: "Roja", estilo: "Manga corta",id:3}),
				new Piezas ({pieza: "Camisa", color: "Blanca", estilo: "Manga larga",id:4}),
				new Piezas ({pieza: "Camisa", color: "Gris", estilo: "Manga larga",id:5}),
				new Piezas ({pieza: "Camisa", color: "Roja", estilo: "Manga larga",id:6}),
				new Piezas ({pieza: "Parte inferior", color: "Blanca", estilo: "Jeans",id:7}),
				new Piezas ({pieza: "Parte inferior", color: "Gris", estilo: "Jeans",id:8}),
				new Piezas ({pieza: "Parte inferior", color: "Roja", estilo: "Jeans",id:9}),
				new Piezas ({pieza: "Parte inferior", color: "Blanca", estilo: "Falda",id:10}),
				new Piezas ({pieza: "Parte inferior", color: "Gris", estilo: "Falda",id:11}),
				new Piezas ({pieza: "Parte inferior", color: "Roja", estilo: "Falda",id:12}),
				new Piezas ({pieza: "Chaqueta", color: "Blanca", estilo: "De Vestir",id:13}),
				new Piezas ({pieza: "Chaqueta", color: "Gris", estilo: "De Vestir",id:14}),
				new Piezas ({pieza: "Chaqueta", color: "Roja", estilo: "De Vestir",id:15}),
				new Piezas ({pieza: "Chaqueta", color: "Blanca", estilo: "Casual",id:16}),
				new Piezas ({pieza: "Chaqueta", color: "Gris", estilo: "Casual",id:17}),
				new Piezas ({pieza: "Chaqueta", color: "Roja", estilo: "Casual",id:18}),
			]

				// ESTA CAJA QUE CONTIENE LA ROPA QUE EL CLIENTE VA SELECCIONANDO DE LA ROPA QUE YA EXISTE EN EL AMARIO GENERAL

			const armarioCliente = [];

			let buscar = document.getElementsByClassName('stylePiezas')
				for (const piezas of buscar){
					piezas.addEventListener('click', ()=> agregador(parseInt(piezas.id)))
				}

			function agregador (productoID){
				let notificacion = armarioCliente.some(el => el.id == productoID)
				if(notificacion){
					Toastify({
						text: "🥴 La pieza ya está agregada en el mezclador",
						duration: 1000,
						position: "left",
						className: "info",
						style: {
						  background: "#CC2936",
						}
					}).showToast();
				}else{
					let producto = armarioDePiezas.find(item => item.id === productoID);
					armarioCliente.push(producto);

				// LOCAL STORAGE
					localStorage.setItem('armarioCliente', JSON.stringify(armarioCliente))
					Toastify({
						text: "✅ Se ha agregado la pieza en el mezclador",
						duration: 1000,
						position: "left",
						className: "info",
						style: {
					  		background: "#5A7D7C",
						}
				  	}).showToast();
				}
			}

				// LAS PIEZAS QUE SE MOSTRARAN CUANDO EL USUARIO SELECCIONE
			
			let img =[
				{id:1, img:'<img class="mangaCortaWhite addRemove" src=https://img.icons8.com/ios/50/000000/t-shirt--v1.png/>'}, 
				{id:2, img: '<img class="mangaCortaGray addRemove" src="https://img.icons8.com/ios/50/000000/t-shirt--v1.png"/>'}, 
				{id:3, img: '<img class="mangaCortaRed addRemove" src="https://img.icons8.com/ios/50/000000/t-shirt--v1.png"/>'},
				{id:4, img: '<img class="mangaLargaWhite addRemove" src=https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-polo-shirt-clothes-itim2101-lineal-itim2101-1.png/>'},
				{id:5, img: '<img class="mangaLargaGray addRemove" src=https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-polo-shirt-clothes-itim2101-lineal-itim2101-1.png/>'},
				{id:6, img: '<img class="mangaLargaRed addRemove" src=https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-polo-shirt-clothes-itim2101-lineal-itim2101-1.png/>'},
				{id:7, img: '<img class="jeanWhite addRemove" src=https://img.icons8.com/dotty/80/000000/jeans.png/>'},
				{id:8, img: '<img class="jeanGray addRemove" src=https://img.icons8.com/dotty/80/000000/jeans.png/>'},
				{id:9, img: '<img class="jeanRed addRemove" src=https://img.icons8.com/dotty/80/000000/jeans.png/>'},
				{id:10, img: '<img class="faldaWhite addRemove" src=https://img.icons8.com/wired/64/000000/skirt.png/>'},
				{id:11, img: '<img class="faldaGray addRemove" src=https://img.icons8.com/wired/64/000000/skirt.png/>'},
				{id:12, img: '<img class="faldaRed addRemove" src=https://img.icons8.com/wired/64/000000/skirt.png/>'},
				{id:13, img: '<img class="deVestirWhite addRemove" src=https://img.icons8.com/external-wanicon-solid-wanicon/64/000000/external-overcoat-autumn-clothes-accesories-wanicon-solid-wanicon.png/>'},
				{id:14, img: '<img class="deVestirGray addRemove" src=https://img.icons8.com/external-wanicon-solid-wanicon/64/000000/external-overcoat-autumn-clothes-accesories-wanicon-solid-wanicon.png/>'},
				{id:15, img: '<img class="deVestirRed addRemove" src=https://img.icons8.com/external-wanicon-solid-wanicon/64/000000/external-overcoat-autumn-clothes-accesories-wanicon-solid-wanicon.png/>'},
				{id:16, img: '<img class="casualWhite addRemove" src=https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-jacket-winter-photo3ideastudio-lineal-photo3ideastudio.png/>'},
				{id:17, img: '<img class="casualGray addRemove" src=https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-jacket-winter-photo3ideastudio-lineal-photo3ideastudio.png/>'},
				{id:18, img: '<img class="casualRed addRemove" src=https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-jacket-winter-photo3ideastudio-lineal-photo3ideastudio.png/>'},
				]

			let probando = $(".stylePiezas");
			for(const probar of probando){
				$(probar).one("click", function(){
					let imagen = img.find(elemento => elemento.id == probar.id);
					$("#piezasSeleccionadas2").append(`${imagen.img}`);
				});
			}


				// FILTROS Y FUNCIONAMIENTO DEL BOTON QUE MEZCLARA LAS PIEZAS QUE EL USUARIO HA SELECCIONADO

			let btnMezclador = document.getElementById('btnMezclar')
			btnMezclador.addEventListener('click', ()=>{
				let camisa = armarioCliente.filter(el => el.pieza == 'Camisa')
				let pantalon = armarioCliente.filter(el => el.pieza == 'Parte inferior')
				let chaqueta = armarioCliente.filter(el => el.pieza == 'Chaqueta')

				let camisaOut = camisa[Math.floor(Math.random() * camisa.length)]
				let pantalonOut = pantalon[Math.floor(Math.random() * pantalon.length)]
				let chaquetaOut = chaqueta[Math.floor(Math.random() * chaqueta.length)]
				
				let imagenCamisa = img.find(elemento => elemento.id == camisaOut.id);
				let imagenPantalon = img.find(elemento => elemento.id == pantalonOut.id);
				let imagenChaqueta = img.find(elemento => elemento.id == chaquetaOut.id);
				$("#mezclaDePiezas").append(`${imagenCamisa.img} ${imagenPantalon.img} ${imagenChaqueta.img}<hr/>`);
			});