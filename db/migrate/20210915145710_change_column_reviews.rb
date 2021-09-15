class ChangeColumnReviews < ActiveRecord::Migration[6.1]
  def change
    rename_column :reviews, :integer, :rating
  end
end
