$(function(){
  $('#new_content').on("submit", function(e){
    e.preventDefault();
    console.log(this);
    var FormData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: FormData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
  })
})
