function addItem(listitem) {
	$(".listelements").prepend('<div class="rectangle"><input type="checkbox" class="checkbox"><label>'+listitem+'</label><img class="remove" src="./css/images/trash.svg"></div>');
};

$(document).ready(function() {
	$("button").on("click", function(){
		$("#add").focus();
		addItem($("#add").val());
	/*$("#add").keydown(function(event){
    if(event.keyCode == 13){
        $("button").trigger("click");
     };*/
	});

	/*$(".add").keydown(function(e){
		if (e.which === 13) {
		addItem($"#add").val());
		else {

		};
	});*/

 $('.listelements').on('click', '.remove', function(events) {
    $(this).closest('.rectangle').remove();
  });

});