class AddNumSeats < ActiveRecord::Migration[5.1]
  def change
    add_column :benches, :num_seats, :integer
  end
end
