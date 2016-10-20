import $ from "jquery";
import ajouter from './student.add';

export default function init(student){

	let list_student = student;

	let $liste = $('.liste'),
		$one 	= $liste.children('li').detach();

	for(let j=0; j<student.length; j++){

		let li 		= $one.clone(),
			eleve 	= list_student[j];

		eleve.id 	= j;

		let ajout 	= '<li class="eleve'+j+'"><div class="col-md-4 pad12">'+ eleve.prenom + ' ' + eleve.nom +'</div>'+
						'<div class="col-md-4 pad12">'+ eleve.score + '</div>'+
						'<div class="col-md-4 status">'+
						'<label for="present" class="present pad5"><i class="fa fa-check-circle fa-2x" aria-hidden="true"></i></label>'+
						'<input type="radio" name="checkbox'+j+'">'+
						'<label for="retard" class="retard pad5"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i></i></label>'+
						'<input type="radio" name="checkbox'+j+'">'+
						'<label for="absent" class="absent pad5"><i class="fa fa-ban fa-2x" aria-hidden="true"></i></i></label>'+
						'<input type="radio" name="checkbox'+j+'"></div></li>';

		$liste.append(ajout);
	};

	$(".eleve0").toggleClass('selected');
	card(0);

	$('.liste').on('click', 'li', function(){
		let index = $( ".liste li" ).index( this ),
			id_eleve = list_student[index];

		$(".selected").toggleClass('selected');
		$(".eleve"+index).toggleClass('selected');
		$('.profil').fadeOut(500, function(){
			card(index);

			$('.profil').fadeIn(500);
		})
	});


	function card(id){
		let put = student[id];
		$('#nom').text(put.nom);
		$('#prenom').text(put.prenom);
		$('#image').css('background-image', 'url('+put.image+')');
		$('#mail').attr('href', 'mailto:'+put.mail).text(put.mail);

		$('#score').text(put.score);
		$('#presence').text(put.presence);
		$('#retard').text(put.retard);
		$('#absence').text(put.absence);
		$('#participation').text(put.participation);
		$('#tableau').text(put.tableau);

	}

	ajouter(student);
}