import { Sequelize } from "sequelize";

const sequelize = new Sequelize("NodeBtap1", "root", "1234", {
    host: "localhost",
    port: 3307,
    dialect: "mysql",
});

// Check Connect Database
try {
    await sequelize.authenticate();
    console.log("Connect Database successful");
} catch (error) {
    console.log("Connect Database Fail !");
}

export { sequelize };
