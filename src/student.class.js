export default class{
	constructor( prenom, nom, image, mail ){
		this.prenom = prenom;
		this.nom = nom;
		this.image = image;
		this.mail = mail;

		this.score = 0;
		this.presence = 0;
		this.retard = 0;
		this.absence = 0;
		this.participation = 0;
		this.tableau = 0;
	}
}