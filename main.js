$(function() {

  var clone;

  $(".box").draggable({ 
    helper: 'clone'
  });

 $('.item').droppable({
    drop: function (event, ui) {

    if (!ui.draggable.hasClass("box-clone"))
      clone = $(ui.helper).clone(true).addClass('box-clone').appendTo('body').append("<button class='close' onclick='remove(this)''>X</button>").draggable()

    var position = ui.draggable.offset();

    if(position.top != $(this).offset().top){      
      $(clone).appendTo($(this)).offset({
                    top : position.top,
                    left: $(this).offset().left + 20
                });
    }

    else{
      $(clone).appendTo($(this)).offset({
                    top : $(this).offset().top,
                    left: $(this).offset().left + 20 
                });
        }
  }
 })

})

 function remove(el) {
  var element = el;
  element.parentNode.remove();
}