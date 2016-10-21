// import $ from "jquery";
// import init from './student.list';

export default function modif_card(student){
	let get_id = $( ".selected" ).index( this );
	
	$('.score').on('click', '.moins', function(){
		console.log(get_id);
		student[get_id].score -= 1;

		return init(student);
	})

	$('.presence > .moins').on('click', function(){
		student[get_id].presence -= 1;
	})

	$('.retard .moins').on('click', function(){
		student[get_id].retard -= 1;
	})

	$('.absence .moins').on('click', function(){
		student[get_id].absence -= 1;
	})

	$('.participation .moins').on('click', function(){
		student[get_id].participation -= 1;
	})

	$('.tableau .moins').on('click', function(){
		student[get_id].tableau -= 1;
	})

	$('.score .plus').on('click', function(){
		student[get_id].score += 1;
	})

	$('.presence .plus').on('click', function(){
		student[get_id].presence += 1;
	})

	$('.retard .plus').on('click', function(){
		student[get_id].retard += 1;
	})

	$('.absence .plus').on('click', function(){
		student[get_id].absence += 1;
	})

	$('.participation .plus').on('click', function(){
		student[get_id].participation += 1;
	})

	$('.tableau .plus').on('click', function(){
		student[get_id].tableau += 1;
	})

};