# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Maze.destroy_all


grid = [['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'], 
['O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O'],
['O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
['O', 'I', 'I', 'T', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O'],
['O', 'I', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O'],
['O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O'],
['O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
['O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O'],
['O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
['O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
['O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
['O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O'],
['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
['O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'T', 'O'],
['O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O'],
['O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O'],
['O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
['O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'W'],
['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']].to_json

Maze.create({name: 'First Maze', grid: grid})