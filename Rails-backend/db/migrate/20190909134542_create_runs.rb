class CreateRuns < ActiveRecord::Migration[5.2]
  def change
    create_table :runs do |t|
      t.integer :score
      t.integer :time
      t.references :user, foreign_key: true
      t.references :maze, foreign_key: true

      t.timestamps
    end
  end
end
