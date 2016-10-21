import $ from "jquery";
import init from './student.list';
import Student from './student.class';

export default function ajouter(student){
	let add = $('.new');


	$('.ajout').on('click', function(){
		if (!add.is(':visible')) {
			console.log("Off");
			add.fadeIn();
		} else {
			console.log("On");
			add.fadeOut();
		}
	});

	$('.submit_add').on('click', function(){

		let new_nom = $('#input_nom').val(),
			new_prenom = $('#input_prenom').val(),
			new_img = $('#input_img').val(),
			new_mail	= $('#input_mail').val();

		let add_student = new Student(new_nom, new_prenom, new_img, new_mail);
		student.push(add_student);
		add.fadeOut();
		init(student);

		$('#input_nom').val("");
		$('#input_prenom').val("");
		$('#input_img').val("");
		$('#input_mail').val("");
	})
}