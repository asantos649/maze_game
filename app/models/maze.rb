class Maze < ApplicationRecord
    has_many :runs
    has_many :users, through: :runs
end
