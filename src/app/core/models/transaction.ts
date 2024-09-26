import { Client } from "../models/client";

export interface Transaction
{
    fundId: number,
    fundName: string,
    amount: number,
    type: string,
    date: Date,
    client: Client
}