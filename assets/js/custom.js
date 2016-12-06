$('#clock').countdown('2016/07/28').on('update.countdown', function(event) {
       var $this = $(this).html(event.strftime(''
         + '<div><span>%-w</span>week%!w</div>'
         + '<div><span>%-d</span>day%!d</div>'
         + '<div><span>%H</span>hr</div>'
         + '<div><span>%M</span>min</div>'
         + '<div><span>%S</span>sec</div>'));
     });