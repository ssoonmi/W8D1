# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#

class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    #... query logic goes here
    north_pt = bounds[:northEast][:lat].to_f
    east_pt = bounds[:northEast][:lng].to_f
    south_pt = bounds[:southWest][:lat].to_f
    west_pt = bounds[:southWest][:lng].to_f

    Bench.where('lat > :south AND lat < :north AND lng < :east AND lng > :west',
      west: west_pt,
      east: east_pt,
      south: south_pt,
      north: north_pt)
  end
end

# {
#   bounds: {
#     northEast: {
#       lat: 1,
#       lng: -1
#     },
#     southWest: {
#       lat: -1,
#       lng: 1
#     }
#   }
# }
