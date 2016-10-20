import $ from "jquery";
import init from './student.list';
import Student from './student.class';

export default function ajouter(student){
	let hide = $('.new').css("display");


	$('.ajout').on('click', function(){
		if (hide == "none") {
			$('.new').fadeIn();
		} else {
			$('.new').fadeOut();
		}
	});

	$('#submit_add').on('click', function(){

		let new_nom = $('#input_nom').val(),
			new_prenom = $('#input_prenom').val(),
			new_img = $('#input_img').val(),
			new_mail	= $('#input_mail').val();

		let add_student = new Student(new_nom, new_prenom, new_img, new_mail);
		student.push(add_student);
		init(student);
		$('.new').toggleClass("hidden");
	})
}