json.user_name @message.user.name
json.content @message.content
json.image @message.image.url
json.datetime @message.created_at.to_s(:default)

