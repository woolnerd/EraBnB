class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :era_theme, null: false
      t.string :address, null: false
      t.float :longitude
      t.float :latitude
      t.integer :num_bedrms, null: false 
      t.integer :num_baths, null: false 
      t.integer :price, null: false
      t.integer :clean_fee, null: false 
      t.integer :service_fee, null: false 
      t.timestamps
    end

    add_index :listings, :title, unique: true  
  end
end
