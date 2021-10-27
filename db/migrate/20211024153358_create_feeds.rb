class CreateFeeds < ActiveRecord::Migration[6.1]
  def change
    create_table :feeds do |t|
      t.string :name, null: false
      t.string :layout, null: false
      t.string :sort, null: false
      t.timestamps
    end

    add_index :feeds, :name, unique: true
  end
end
