class MessagesController < ApplicationController
  def index
    @user = current_user
  end

  def create
  end
end
