function setDraggable(obj) {
	obj.draggable({
		connectToSortable:".listelements",
		revert:"invalid"
	});
} 

function addItem(listitem) {
	var index= $(".listelements").children().length + 1;
	var element= '<div class="rectangle"><div class="roundedTwo"><input type="checkbox" value="None" id="roundedTwo#'+index+'" name="check" /><label for="roundedTwo#'+index+'"></label>'+'</div><label class="item">' + listitem + '</label><img class="remove" src="./css/images/trash.svg">' +'</div>';
	$(".listelements").prepend(element);
	$("#add").val("");
	setDraggable($(".rectangle"));
};

$(document).ready(function() {
	$(".roundedTwo").on("click", function() {
		var chb= $(this).closest("checkbox");
		chb.trigger("click");
	});

	$("button").on("click", function(){
		$("#add").focus();
		addItem($("#add").val());
	});

	$("#add").on("keydown", function(e) {
		if (e.which === 13) {
			addItem($("#add").val());
		}
	});

	$(".listelements").sortable({
		revert:true
	});

	setDraggable($(".rectangle"));

 $('.listelements').on('click', '.remove', function(e) {
    $(this).closest('.rectangle').remove();
  });

 $('.listelements').on('click', 'input[type=checkbox]', function(e) {
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
