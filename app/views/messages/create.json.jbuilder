json.user_name @message.user.name
json.content @message.content
json.image @message.image.url
json.datetime Time.now.to_s(:datetime)

