import $ from "jquery";

export default function init(student){
	console.log(student);

	let list_student = student;

	let $liste = $('.liste'),
		$one 	= $liste.children('li').detach();

	for(let j=0; j<student.length; j++){

		let li 		= $one.clone(),
			eleve 	= list_student[j];

		eleve.id 	= j;

		let ajout 	= '<li><div class="col-md-4 pad12">'+ eleve.prenom + ' ' + eleve.nom +'</div>'+
						'<div class="col-md-4 pad12">'+ eleve.score + '</div>'+
						'<div class="col-md-4">'+
						'<label for="present" class="present pad5"><i class="fa fa-check-circle fa-2x" aria-hidden="true"></i></label>'+
						'<input type="radio" name="checkbox'+j+'">'+
						'<label for="retard" class="retard pad5"><i class="fa fa-clock-o fa-2x" aria-hidden="true"></i></i></label>'+
						'<input type="radio" name="checkbox'+j+'">'+
						'<label for="absent" class="absent pad5"><i class="fa fa-ban fa-2x" aria-hidden="true"></i></i></label>'+
						'<input type="radio" name="checkbox'+j+'"></div></li>';

		console.log(li);

		$liste.append(ajout);
	}
}