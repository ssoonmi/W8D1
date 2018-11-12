class RemoveNumSeatsAddSeating < ActiveRecord::Migration[5.1]
  def change
    remove_column :benches, :num_seats
    add_column :benches, :seating, :integer
  end
end
