json.user_name @message.user.name
json.content @message.content
json.image @message.image.url
json.datetime @message.created_at.in_time_zone('Tokyo').strftime('%Y/%m/%d %H:%M:%S')

