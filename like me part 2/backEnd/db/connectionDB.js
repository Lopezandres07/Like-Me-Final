import pg from 'pg'

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'likeme',
  password: '300595',
  port: 5432,
})

export default pool
