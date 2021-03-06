# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Run.destroy_all
Maze.destroy_all


grid1 = [   ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'], 
            ['O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'T', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'I', 'I', 'T', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'T', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O'],
            ['O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'T', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'T', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'T', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'T', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'T', 'I', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'W'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']].to_json


grid2 = [   ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'], 
            ['O', 'I', 'I', 'I', 'O', 'I', 'T', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'I', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'T', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'T', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'T', 'I', 'I', 'I', 'I', 'O', 'T', 'O', 'T', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'T', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'T', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'T', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O'],
            ['O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'W'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']].to_json

grid3 = [   ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'], 
            ['O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'O', 'T', 'O'],
            ['O', 'O', 'I', 'O', 'I', 'O', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'O', 'I', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'I', 'T', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'I', 'T', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'O', 'O', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'T', 'O', 'I', 'O', 'T', 'O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O'],
            ['O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'T', 'O', 'I', 'I', 'I', 'O', 'T', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O'],
            ['O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'O', 'I', 'O', 'I', 'T', 'O', 'I', 'O', 'T', 'O', 'I', 'I', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O'],
            ['O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'W'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']].to_json

grid4 = [   ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'], 
            ['O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'T', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'T', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'T', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'T', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'T', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'O'],
            ['O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'T', 'O', 'I', 'O', 'T', 'I', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'T', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O'],
            ['O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O'],
            ['O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O'],
            ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'O', 'T', 'O', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O'],
            ['O', 'I', 'I', 'I', 'I', 'I', 'I', 'T', 'O', 'I', 'I', 'I', 'O', 'T', 'I', 'I', 'I', 'I', 'W'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']].to_json

Maze.create({name: '1 Pop Star', grid: grid1})
Maze.create({name: '2 Crystal Cave', grid: grid2})
Maze.create({name: '3 Dark Labyrinth', grid: grid3}) 
Maze.create({name: '4 Fountain of Dreams', grid: grid4})