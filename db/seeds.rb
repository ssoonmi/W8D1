# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all
User.destroy_all

Bench.create!(description: "Inner Sunset", lat: 37.765341, lng: -122.461017)
Bench.create!(description: "Noe Valley", lat: 37.752684, lng: -122.430063)
Bench.create!(description: "Origin", lat: 0, lng: 0)
