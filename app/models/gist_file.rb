class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :name

  validates :body, :gist, :name, presence: true

  belongs_to :gist, inverse_of: :gist_files
end
