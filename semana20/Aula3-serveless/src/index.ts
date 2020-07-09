import express from "express";
import cors from "cors";
import {AddressInfo} from "net";

const app = express();
app.use(cors({origin: true}))

export default app


if(process.env.NODE_ENV !== "serveless") {
    const server = app.listen(process.env.PORT || 3000, () => {
        if(server) {
            const address = server.address() as AddressInfo
            console.log(`Server is running in http://localhost:${address.port}`)
        } else {
            console.log(`Failure`)
        }

    })
    
}

