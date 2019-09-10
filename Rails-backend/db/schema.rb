# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_09_134542) do

  create_table "mazes", force: :cascade do |t|
    t.json "grid"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "runs", force: :cascade do |t|
    t.integer "score"
    t.integer "time"
    t.string "user", default: "Not Entered"
    t.integer "maze_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["maze_id"], name: "index_runs_on_maze_id"
  end

end
