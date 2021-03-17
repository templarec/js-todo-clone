$(document).ready(function () {
	var button = $('.to-do [type="button"]');

	button.click(function () {
		var todo = $('#todo');
		var inputTxt = $('#todoTitle');
		var testo = inputTxt.val();
		var templateLi = $('#template li');
		var template = templateLi.clone();
		template.children('span#titolo').text(testo);
		todo.append(template);
	});
});