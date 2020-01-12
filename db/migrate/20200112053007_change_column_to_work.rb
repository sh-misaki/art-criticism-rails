class ChangeColumnToWork < ActiveRecord::Migration[6.0]
  def up
    if foreign_key_exists?(:works, :artists)
      remove_foreign_key :works, :artists
      remove_index :works, :artist_id
    end
    change_column :works, :artist_id, :bigint, null: true
  end

  def down
    change_column :works, :artist_id, :bigint, null: false
    add_foreign_key :works, :artists
  end
end
