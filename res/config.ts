import dotenv from "dotenv"

dotenv.config()

const MONGO_USERNAME = process.env.MONGO_USERNAME || ""
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ""

const MONGO_URL = process.env.MONGO_URL || ""

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8080

export const config = {
    mongo: {
        url: MONGO_URL.replace("<password>", MONGO_PASSWORD),
        password: MONGO_PASSWORD
    },
    server: {
        port: SERVER_PORT
    }

}