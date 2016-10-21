import $ from "jquery";

export default function init(student){

	let list_student = student;

	let get_id = 0;

	let $liste = $('.liste'),
		$one 	= $liste.children('li').detach();

	for(let j=0; j<student.length; j++){

		let li 		= $one.clone(),
			eleve 	= list_student[j];

		eleve.id 	= j;

		let ajout 	= 	'<li class="eleve eleve'+j+'"><div class="col-md-4 pad12 nom_prenom">'+ eleve.prenom + ' ' + eleve.nom +'</div>'+
						'<div class="col-md-4 pad12">'+ eleve.mail +'</div>'+
						'<div class="col-md-4 status">'+
						'<i class="fa fa-check-circle fa-2x set_present pad5" aria-hidden="true"></i>'+
						'<i class="fa fa-clock-o fa-2x set_retard pad5" aria-hidden="true"></i>'+
						'<i class="fa fa-ban fa-2x set_absent pad5" aria-hidden="true"></i></div></li>';

		$liste.append(ajout);
	};




	function card(id){
		let put = student[id];

		put.score = (put.presence * 10) + (put.retard * (-2))+ (put.absence * (-10)) + (put.participation * 5) + (put.tableau * 8);

		$('#nom').val(put.nom);
		$('#prenom').val(put.prenom);
		$('#image').css('background-image', 'url('+put.image+')');
		$('#mail').val(put.mail);

		$('#score').text(put.score);
		$('#presence').text(put.presence);
		$('#retard').text(put.retard);
		$('#absence').text(put.absence);
		$('#participation').text(put.participation);
		$('#tableau').text(put.tableau);
	}

	function modif_card(get_id){
		let elv = student[get_id];

		$('.presence .moins').on('click', function(){
			elv.presence -= 1;

			if (elv.presence <= 0) {
				elv.presence = 0;
			}

			console.log(get_id);

			return card(get_id);
		})

		$('.retard .moins').on('click', function(){
			elv.retard -= 1;

			if (elv.retard <= 0) {
				elv.retard = 0;
			}

			return card(get_id);
		})

		$('.absence .moins').on('click', function(){
			elv.absence -= 1;

			if (elv.absence <= 0) {
				elv.absence = 0;
			}

			return card(get_id);
		})

		$('.participation .moins').on('click', function(){
			elv.participation -= 1;

			if (elv.participation <= 0) {
				elv.participation = 0;
			}

			return card(get_id);
		})

		$('.tableau .moins').on('click', function(){
			elv.tableau -= 1;

			if (elv.tableau <= 0) {
				elv.tableau = 0;
			}

			return card(get_id);
		})

		$('.presence .plus').on('click', function(){
			elv.presence += 1;

			return card(get_id);
		})

		$('.retard .plus').on('click', function(){
			elv.retard += 1;

			return card(get_id);
		})

		$('.absence .plus').on('click', function(){
			elv.absence += 1;

			return card(get_id);
		})

		$('.participation .plus').on('click', function(){
			elv.participation += 1;

			return card(get_id);
		})

		$('.tableau .plus').on('click', function(){
			elv.tableau += 1;

			return card(get_id);
		})
		
		$('.modify').on('click', function(){

			elv.nom = $('#nom').val();
			elv.prenom = $('#prenom').val();
			elv.mail = $('#mail').val();

			return init(student);
		})
	};

	$(".eleve0").toggleClass('selected');
	card(get_id);
	modif_card(get_id);

	$('.liste').on('click', 'li', function(){
		let index = $( ".liste li" ).index( this ),
			id_eleve = list_student[index],
			get_id = index;

		console.log(get_id);

		$(".selected").toggleClass('selected');
		$(".eleve"+get_id).toggleClass('selected');
		$('.profil').fadeOut(500, function(){
			card(get_id);

			modif_card(get_id);

			$('.profil').fadeIn(500);
		})
	});

	$('.set_present').on('click', function(){
		let index = $( ".set_present" ).index( this ),
			id_eleve = student[index];
		
		id_eleve.presence += 1;

		return init(student);		
	})

	$('.set_retard').on('click', function(){
		let index = $( ".set_retard" ).index( this ),
			id_eleve = student[index];
		
		id_eleve.retard += 1;

		return init(student);		
	})

	$('.set_absent').on('click', function(){
		let index = $( ".set_absent" ).index( this ),
			id_eleve = student[index];
		
		id_eleve.absence += 1;

		return init(student);		
	})
}