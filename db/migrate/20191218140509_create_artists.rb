class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name, :null => false
      t.string :nationality
      t.integer :beginYear
      t.integer :endYear
      t.string :role

      t.timestamps
    end
  end
end
