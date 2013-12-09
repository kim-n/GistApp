# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.new(username: "user", password: "password")
gist1 = user.gists.build(title: "Gist 1")
gist2 = user.gists.build(title: "Gist 2")
gist3 = user.gists.build(title: "Gist 3")
user.save!