import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import bodyParser from "body-parser"
import cors from "cors"

import usersRoutes from "./src/routes/users/users.js"

dotenv.config()

const PORT = process.env.PORT || 8080
const app = express()

const corsOptions = {
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// APP ROUTES
app.use('/v1/users', usersRoutes);

app.get("/", (req, res, next) => {
	res.status(200).json({
		ok: true,
		message: "DeigitalVaultTest"
	})
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} 🚀`)
})


export default app; // Exportar app como default