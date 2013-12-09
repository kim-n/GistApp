class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  validates :gist, :user, presence: true

  belongs_to :gist, inverse_of: :favorites
  belongs_to :user, inverse_of: :favorites
end
