"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDataSource = void 0;
var typeorm_1 = require("typeorm");
var PostgresDataSource = new typeorm_1.DataSource({
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "docker",
    password: "ignite",
    database: "rentx",
    migrationsRun: true,
    entities: ["./src/modules/**/entities/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
});
exports.PostgresDataSource = PostgresDataSource;
PostgresDataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (error) { return console.error("Error during Data Source initialization", error); });
