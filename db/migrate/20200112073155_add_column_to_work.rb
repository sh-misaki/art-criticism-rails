class AddColumnToWork < ActiveRecord::Migration[6.0]
  def change
    add_column :works, :artist_name, :string
  end
end
