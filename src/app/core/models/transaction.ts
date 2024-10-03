import { Client } from "./client";
import { Fund } from "./fund";

export interface Transaction
{
    type: number,
    date: Date,
    fund: Fund,
    client: Client
}