// Your jQuery goes here

var userData = {
	name: "",
	email: "",
	html: {likes:[], dislikes:[]},
	css: {likes:[], dislikes:[]},
	js: {likes:[], dislikes:[]},
	skills: {html:"", css:"", js:""} ,
	surveyState: 0 
};
if ( window.localStorage.userData) {
	userData =JSON.parse(window.localStorage.userData);
}

$("#starBtn").click(function(event){
console.log("start clicked")
$("#welcome").hide();
$("#q1").show();

});

$("#name").change(function(event){
console.log($("#name").val());
if($("#name").val()){
	userData.name = $("#name").val();
	console.log(window.localStorage.userData);
	window.localStorage.userData = JSON.stringify(userData);
}
});

$("#email").change(function(event){
	console.log($("#email").val());
	if ($("#email").val()){
		userData.email = $("#email").val();
		console.log(window.localStorage.userData);
		window.localStorage.userData = JSON.stringify(userData);
}





});