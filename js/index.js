$(function(){

	
	var counter = 0,
	cardTitles = [], // An array of all the card titles
	cardTmpl = '',
	cardTitles = [], // An array of all the category titles
	categoryTmpl = '',
	tmpl = {
		card :'',
		category : ''
	},
	defaults = {
		cards : [
			'DefaultCard1', 'DefaultCard2', 'DefaultCard3','DefaultCard4'
		],
		categories : [
			'Category1', 'Category2'
		]
	};
	
	function setupUI(){
		var defaultCardsStr = '';
	}
	
	function compileTemplates(){
		tmpl.card = _.template($('#cardTmpl').html());
		tmpl.category = _.template($('#categoryTmpl').html());
	}
	
	function setCards(cardTitles){
		console.log(cardTitles);
		
		var cardTitlesArray = cardTitles.split(',');
		
		cardTitles = [];
		
		$.each(cardTitlesArray, function(index, element){
			var trimmedValue = element.trim();
			if(trimmedValue!==''){
			
				cardTitles.push(tmpl.card({title:trimmedValue}));
				
			}
		});
		
		$('.deck').empty().append(cardTitles.join(''));
		$( "div.card" ).draggable();
		
	}

	function setCategories(categoryTitles){
		console.log(categoryTitles);
		
		var categoryTitlesArray = categoryTitles.split(',');
		
		categoryTitles = [];
		
		
		$.each(categoryTitlesArray, function(index, element){
			var trimmedValue = element.trim();
			if(trimmedValue!==''){
			
				categoryTitles.push(tmpl.category({title:trimmedValue}));
				
			}
		});
		
		//$('.deck').empty().append(cardTitles.join(''));
		//$( "div.card" ).draggable();
		
		//Destroy any previously existing categories
		$( ".category" ).droppable('destroy');
		setupCategories();
		
	}

	$( "div.card" ).draggable();
	
	
	function setupCategories(){
			
		$( ".category" ).droppable({
			hoverClass: "hover-state",
			drop: function( event, ui ) {
				var $this = $( this );
				
					$(ui.draggable).draggable('destroy');
					$(ui.draggable).draggable();
					
			}
		}).resizable();
	}
	
	
	$( "#manageCards" ).dialog({
		modal: true,
		autoOpen : false,
		title : 'Manage Cards',
		buttons: {
			"Done": function() {
				var cardTitles = $('#cardTitlesTA').val();
				setCards(cardTitles);
				$( this ).dialog( "close" );
			},
			Cancel: function() {
				$( this ).dialog( "close" );
			}
		},
		position : {
			my : 'left top',
			at : 'left+90 top+5',
			of : window
		}
	});
	
	$( "#manageCategories" ).dialog({
		modal: true,
		autoOpen : false,
		title : 'Manage Categories',
		buttons: {
			"Done": function() {
				var categoryTitles = $('#categoryTitlesTA').val();
				setCategories(categoryTitles);
				$( this ).dialog( "close" );
			},
			Cancel: function() {
				$( this ).dialog( "close" );
			}
		},
		position : {
			my : 'left top',
			at : 'left+90 top+40',
			of : window
		}
	});
	
	
	function bindHandlers(){
	
		$('.set-cards').on('click',function(event){
			var $this = $(this);
			var $target = $(event.target);
			$( "#manageCards" ).dialog('open');
			
		});
		
		$('.set-categories').on('click',function(event){
			var $this = $(this);
			var $target = $(event.target);
			
			$( "#manageCategories" ).dialog('open');
			
		});
		
	}
	
	compileTemplates();
	bindHandlers();
	setupUI();
	setupCategories();
	
});