var itemCount = 0;

$('.add').click(function (){
  itemCount ++;
  $('#itemCount').html(itemCount).css('display', 'block');
}); 


$(document).ready(function(){
    $('#loginButton').click(function(){
        $('#loginModal').modal('show')
    });
});

$(document).ready(function(){
    $('#modalButton').click(function(){
        $('#ResModal').modal('show')
    });
});

$(document).ready(function(){
      $("mycarousel").carousel( { interval: 2000} );
});

componentDidMount() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      e.target // newly activated tab
      e.relatedTarget // previous active tab
    })
    };
