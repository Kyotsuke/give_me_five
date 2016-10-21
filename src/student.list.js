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

	$(".eleve0").toggleClass('selected');
	card(0);
	modif_card(get_id);

	$('.liste').on('click', 'li', function(){
		let index = $( ".liste li" ).index( this ),
			id_eleve = list_student[index],
			get_id = index;

		$(".selected").toggleClass('selected');
		$(".eleve"+index).toggleClass('selected');
		$('.profil').fadeOut(500, function(){
			card(index);

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



	$('.modify').on('click', function(){
		let mod = student[get_id];

		mod.nom = $('#nom').val();
		mod.prenom = $('#prenom').val();
		mod.mail = $('#mail').val();

		return init(student);
	})




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
		$('.presence .moins').on('click', function(){
			student[get_id].presence -= 1;

			if (student[get_id].presence <= 0) {
				student[get_id].presence = 0;
			}

			return card(get_id);
		})

		$('.retard .moins').on('click', function(){
			student[get_id].retard -= 1;

			if (student[get_id].retard <= 0) {
				student[get_id].retard = 0;
			}

			return card(get_id);
		})

		$('.absence .moins').on('click', function(){
			student[get_id].absence -= 1;

			if (student[get_id].absence <= 0) {
				student[get_id].absence = 0;
			}

			return card(get_id);
		})

		$('.participation .moins').on('click', function(){
			student[get_id].participation -= 1;

			if (student[get_id].participation <= 0) {
				student[get_id].participation = 0;
			}

			return card(get_id);
		})

		$('.tableau .moins').on('click', function(){
			student[get_id].tableau -= 1;

			if (student[get_id].tableau <= 0) {
				student[get_id].tableau = 0;
			}

			return card(get_id);
		})

		$('.presence .plus').on('click', function(){
			student[get_id].presence += 1;

			return card(get_id);
		})

		$('.retard .plus').on('click', function(){
			student[get_id].retard += 1;

			return card(get_id);
		})

		$('.absence .plus').on('click', function(){
			student[get_id].absence += 1;

			return card(get_id);
		})

		$('.participation .plus').on('click', function(){
			student[get_id].participation += 1;

			return card(get_id);
		})

		$('.tableau .plus').on('click', function(){
			student[get_id].tableau += 1;

			return card(get_id);
		})
	};
}