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
	
  //$( "#draggable" ).draggable();
  //  $( "#droppable" ).droppable({
  //    hoverClass: "ui-state-active",
  //    drop: function( event, ui ) {
  //      $( this )
  //        .addClass( "ui-state-highlight" )
  //        .find( "p" )
  //          .html( "Dropped!" );
  //    }
  //  });
  //
  //  $( "#draggable2" ).draggable();
  //  $( "#paperOrganizer, #digitalOrganizer" ).droppable({
  //    accept: "#draggable2",
  //    activeClass: "ui-state-hover",
  //    drop: function( event, ui ) {
  //      $( this )
  //        .addClass( "ui-state-highlight" )
  //        .find( "li" )
  //          .html( "Dropped!" );
  //    }
  //  });

});