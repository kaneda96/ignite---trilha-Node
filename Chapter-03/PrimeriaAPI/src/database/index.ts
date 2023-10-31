import { DataSource } from "typeorm"
import { User } from "../modules/accounts/entities/UserModel"

const PostgresDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrationsRun: true,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
})


PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((error) => console.error("Error during Data Source initialization", error))

export { PostgresDataSource };