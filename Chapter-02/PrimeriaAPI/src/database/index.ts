import { DataSource } from "typeorm"

const PostgresDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: true,
  entities: ["./src/modules/cars/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"]
})

export { PostgresDataSource };