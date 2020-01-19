class AddColumnToWork < ActiveRecord::Migration[6.0]
  def change
    add_column :works, :artist_name, :string
    add_column :works, :source, :string
    add_column :works, :sourceId, :string
  end
end
