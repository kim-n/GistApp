class Gist < ActiveRecord::Base
  attr_accessible :owner_id, :title

  validates :owner, :title, presence: true

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id,
    inverse_of: :gists
  )

  has_many :favorites, inverse_of: :gist
end
