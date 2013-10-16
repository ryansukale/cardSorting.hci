$(function(){

	
	var counter = 0,
	cardTitles = [], // An array of all the card titles
	cardTmpl = '';
	
	function compileTemplates(){
		cardTmpl = _.template($('#cardTmpl').html());
	}
	
	function setCards(cardTitles){
		console.log(cardTitles);
		
		var cardTitlesArray = cardTitles.split(',');
		
		cardTitles = [];
		var cardTitlesStr = '';
		
		
		$.each(cardTitlesArray, function(index, element){
			var trimmedValue = element.trim();
			if(trimmedValue!==''){
			
				cardTitles.push(cardTmpl({title:trimmedValue}));
				
			}
		});
		
		$('.deck').empty().append(cardTitles.join(''));
		$( "div.card" ).draggable();
		
	}

	$( "div.card" ).draggable();
	$( ".organizer-type" ).droppable({
		hoverClass: "hover-state",
		drop: function( event, ui ) {
			var $this = $( this );
			
			//$this
			//.addClass( "ui-state-highlight" );
				//.append( ui.draggable );
				
				$(ui.draggable).draggable('destroy');
				$(ui.draggable).draggable();
				//counter++;
				//$('.user-options .item').eq(counter).removeClass('hidden');
		}
	});
	
	
	function bindHandlers(){
		$('.add-card').on('click',function(event){
			var $this = $(this);
			var $target = $(event.target);
			
			$( "#addCard" ).dialog({
				modal: true,
				buttons: {
					"Done": function() {
					
						var cardTitles = $('#cardTitlesTA').val();
						
						setCards(cardTitles);
						
						$( this ).dialog( "close" );
						
					},
					Cancel: function() {
						$( this ).dialog( "close" );
					}
				}
			});
			
		});
		
	}
	
	compileTemplates();
	bindHandlers();
	
});