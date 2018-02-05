class CreateParseVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :parse_venues do |t|
      t.string :name
      t.string :objectId
      t.string :sgId

      t.timestamps
    end
  end
end
