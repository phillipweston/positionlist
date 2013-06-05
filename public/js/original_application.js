$(document).ready(function(){

    var request;
    var is_dragging = false;

    $("#sortable").sortable({
      start: function(event, ui) {
        is_dragging = true;
        console.log(event);
      },
      stop: function(event, ui) {
        is_dragging = false;
        console.log(event);
        $.ajax({
            type: "POST",
            url: "/sort",
            data: $("form").serialize()
        }).done(function(response){
          console.log(response);
        });
      } // ends stop
    }); // ends sortable

}); // ends ready



// // TBD: need a trigger on item move to return details on the move to the server
// route for updating the database
