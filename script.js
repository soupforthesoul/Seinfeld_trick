$(document).ready(function(){
	
	for(var x=1;x<=31;x++)
	{$('#dummy').append('<div>'+x+"</div>");}
	
	
	$('div').click(function(){
	
		if($(this).css("background-color")==="rgb(0, 128, 0)")
			{$(this).css("background-color","rgb(0, 50, 0)");}
			else
			{$(this).css("background-color","green");}
		});
});