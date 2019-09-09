class User < ApplicationRecord
    has_many :runs
    has_many :mazes, through: :runs
end
