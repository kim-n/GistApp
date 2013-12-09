class Gist < ActiveRecord::Base
  attr_accessible :owner_id, :title, :tag_ids

  validates :owner, :title, presence: true

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id,
    inverse_of: :gists
  )

  has_many :favorites, inverse_of: :gist

  has_many :gist_files, inverse_of: :gist
  has_many :taggings, inverse_of: :gist
  has_many :tags, through: :taggings, source: :tag

  def as_json(options=nil)
    favorite = self.favorites.where(user_id: options[:user_id])
    super(include: :gist_files).merge({"favorite" => favorite.as_json({})[0]})
  end
end
