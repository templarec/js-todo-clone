$(document).ready(function () {
	//prendo oggetto button aggiungi
	var button = $('.to-do [type="button"]');
	//al click sul bottone:
	button.click(function () {
		//prendo oggetto di destinazione dove inserire <li>
		var todo = $('#todo');
		//prendo oggetto input text
		var inputTxt = $('#todoTitle');
		//salvo il valore della casella di testo
		var testo = inputTxt.val();
		//prendo oggetto template da clonare
		var templateLi = $('#template li');
		//clono
		var template = templateLi.clone();
		//aggiungo al clone il testo preso sopra dalla textbox
		//e la metto nello span con id titolo
		template.children('span#titolo').text(testo);
		//inserisco dentro l'ul
		todo.append(template);
		//al click sul cestino dell'oggetto temporaneo template
		template.children('#delete').click(function () {
			//rimuovi genitore ovvero tutto <li>
			$(this).parent().remove();
		//al click sull'edit (verde)

		});
		template.children('#edit').click(function () {
			//nascondo #titolo
			$(this).siblings('#titolo').hide();
			//mostro input dell' edit
			var editInput = $(this).siblings('#insert');
			editInput.show();
			editInput.attr("placeholder", $(this).siblings('#titolo').text());
			console.log($(this).siblings('#titolo').text());
			//modifica con invio
			editInput.keyup(function (e) {
				if (e.which == 13){
					var newText = editInput.val();
					editInput.hide();
					$(this).siblings('#titolo').text(newText).show();
				}
			});

		});
		var check = $('#completed');
		check.click(function () {
			$(this).parent().css({"textDecoration": "line-through", "color": "#aaa"});
			$(this).parent().children('span').children('i').css("color","#aaa");;

		});
	});
});