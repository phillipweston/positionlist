$(document).ready(function(){

  // This does the sortable functionality and returns
  // a sortstop type when user is done moving items

  $("#sortable").sortable({
    
      start: function(event, ui) {
        console.log(event);
      },
      stop: function(event, ui) {
        console.log(event);
      }
  });


  // This posts the form when the sortstop type
  // above happens

  $("form").on('sortstop', function(e){
      $.ajax({
          type: "POST",
          url: "/sort",
          data: $(this).serialize()
      }).done(function(response){
          console.log(this);
      }); // ends ajax
    }); // ends on sortstop
}); // ends ready



// // // // TBD: need a trigger on item move to return details on the move to the server
// // // route for updating the database
