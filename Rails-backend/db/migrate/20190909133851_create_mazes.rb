class CreateMazes < ActiveRecord::Migration[5.2]
  def change
    create_table :mazes do |t|
      t.json :grid
      t.string :name
      t.integer :high_score

      t.timestamps
    end
  end
end
