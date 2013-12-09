# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.new(username: "user", password: "password")
gist1 = user.gists.build(title: "Gist 1")
gist1.gist_files.build(name: "File 1", body: "Body 1")
gist1.gist_files.build(name: "File 2", body: "Body 2")
gist2 = user.gists.build(title: "Gist 2")
gist3 = user.gists.build(title: "Gist 3")
user.favorite_gists = [gist1, gist2]
user.save!

user2 = User.new(username: "user2", password: "password")
user2.favorite_gists = [gist1]
user2.save!
