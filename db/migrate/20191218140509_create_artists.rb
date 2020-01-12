class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name, :null => false
      t.string :nationality
      t.integer :beginYear
      t.integer :endYear
      t.string :role

      t.column :created_at, 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP'
      t.column :updated_at, 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    end
  end
end
