$(function(){

	
	var counter = 0;

	$( "div.item" ).draggable();
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
						$( this ).dialog( "close" );
					},
					Cancel: function() {
						$( this ).dialog( "close" );
					}
				}
			});
			
		});
		
	}
	
	bindHandlers();
	
});