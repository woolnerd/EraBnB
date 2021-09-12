class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :booker_id, null: false 
      t.date :check_in, null: false 
      t.date :check_out, null: false
      t.integer :guests, null: false 
      t.float :total_price, null: false 
      t.timestamps
    end
    
    add_index :bookings, :listing_id 
    add_index :bookings, :booker_id
  end
end
