class GroupsController < ApplicationController
  def new
    @group = Group.new
    @group.users << Current_user
  end

  def create
    @group = Group.new
    if @group.save
      redirect_to root_path, notice: "グループを作成しました。"
  end

  def edit
  end

  def update
  end
end
