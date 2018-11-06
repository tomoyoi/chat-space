$(document).on("turbolinks:load", function(){
  function buildHTML(messages){
    var message_html = (messages.content) ? `${messages.content}` : "";
    var image_html = (messages.image) ? `<img class="lower-message__image" src=${ messages.image }>` : "";
    var html = `<div class="messages">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${messages.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${messages.datetime}
                    </div>
                  </div>
                  <div class="lower-message">
                    <div class="lower-message__contents">
                      ${ message_html }
                    </div>
                    ${ image_html }
                  </div>
                </div>`
    return html;
  }
  $('#new_content').on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.main_contents__content').append(html);
      $('.form__submit').prop('disabled',false);
      $('.main_contents__content').animate({scrollTop: $('.main_contents__content')[0].scrollHeight},'fast');
      $('#new_content')[0].reset();
    })
    .fail(function(){
      alert('error');
      $('.form__submit').prop('disabled', false);
    })
  });
});

