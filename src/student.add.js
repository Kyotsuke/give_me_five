import $ from "jquery";
import Student from './student.class';

export default function ajouter(){
	$('.ajout').on('click', function(){
		$('.new').toggleClass("hidden");
	});

	$('#submit_add').on('click', function(){
		let new_nom = $('#input_nom').val(),
			new_prenom = $('#input_prenom').val(),
			new_img = $('#input_img').val(),
			new_mail	= $('#input_mail').val();

		student += [new Student(new_nom, new_prenom, new_img, new_mail)];
	})
}