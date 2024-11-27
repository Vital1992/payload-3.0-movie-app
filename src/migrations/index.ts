import * as migration_20241127_060438_initial from './20241127_060438_initial'
import * as migration_20241127_062058_movies from './20241127_062058_movies'
import * as migration_20241127_064413_movies from './20241127_064413_movies'

export const migrations = [
  {
    up: migration_20241127_060438_initial.up,
    down: migration_20241127_060438_initial.down,
    name: '20241127_060438_initial',
  },
  {
    up: migration_20241127_062058_movies.up,
    down: migration_20241127_062058_movies.down,
    name: '20241127_062058_movies',
  },
  {
    up: migration_20241127_064413_movies.up,
    down: migration_20241127_064413_movies.down,
    name: '20241127_064413_movies',
  },
]
