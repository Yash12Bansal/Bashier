import  express from "express";
import { zapRouter } from "./router/zap";
import { useRouter } from "./router/user";
import cors from 'cors';

const app=express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/user", useRouter);
app.use("/api/v1/zap", zapRouter);

app.listen(3000);