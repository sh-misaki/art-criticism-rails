class CreateWorks < ActiveRecord::Migration[6.0]
  def change
    create_table :works do |t|
      t.string :name, :null => false
      t.string :primaryImage
      t.string :primaryImageSmall
      t.string :department
      t.string :classification
      t.string :year
      t.references :artist, null: false, foreign_key: true

      t.column :created_at, 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP'
      t.column :updated_at, 'DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    end
  end
end
