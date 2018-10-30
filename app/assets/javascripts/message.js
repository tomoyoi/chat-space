$(function(){

  function buildHTML(message){
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user.name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at.strtime('%Y/%m/%d %H:%M')}
                    </div>
                  </div>
                  <div class="lower-message">
                    <div class="lower-message__contents">
                      ${message.content}
                    </div>
                    <img class="lower-message__image" src="${message.image.url}">
                  </div>
                </div>`
    return html
  }
  $('#new_content').on("submit", function(e){
    e.preventDefault();
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
    .done(function(data) {
      var html = buildHTML(data);
      $('.message').append(html);
      $('.form__submit').prop('disabled',false);
      $('.message').animate({ scrollTop: $('.upper-message').offset().top}, 100 );
      $('#new_message')[0].reset();
    })
  })
})
