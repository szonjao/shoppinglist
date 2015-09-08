function setDraggable(obj) {
	obj.draggable({
		connectToSortable:".listelements",
		revert:"invalid"
	});
} 

function addItem(listitem) {
	$(".listelements").prepend('<div class="rectangle"><input type="checkbox" class="checkbox"><label>'+listitem+'</label><img class="remove" src="./css/images/trash.svg"></div>');
	$("#add").val("");
	setDraggable($(".rectangle"));
};

$(document).ready(function() {
	$("button").on("click", function(){
		$("#add").focus();
		addItem($("#add").val());
	});

	$("#add").on("keydown", function(e) {
		if (e.which === 13) {
			addItem($("#add").val());
		} else {

		};
	});

	$(".listelements").sortable({
		revert:true
	});

	setDraggable($(".rectangle"));

 $('.listelements').on('click', '.remove', function(e) {
    $(this).closest('.rectangle').remove();
  });

 $('.listelements').on('click', '.checkbox', function(e) {
    var item=$(this).closest('.rectangle');
    if (event.target.checked) {
    	$(".listelements").append(item);
    	item.addClass("selected");
    } else {
    	$(".listelements").prepend(item);
    	item.removeClass("selected");
    }

  });

});