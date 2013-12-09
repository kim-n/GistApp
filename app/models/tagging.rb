class Tagging < ActiveRecord::Base
  attr_accessible :gist_id, :tag_id

  validates :gist, :tag, presence: true

  belongs_to :gist, inverse_of: :taggings
  belongs_to :tag, inverse_of: :taggings
end
