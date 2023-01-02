export const dbConfig = {
    HOST: 'localhost',
    USER: 'apu',
    PASSWORD: 'tigerit',
    DB: 'tripplanner',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}