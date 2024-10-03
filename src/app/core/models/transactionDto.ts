import { Fund } from "./fund"

export interface Response {
    successful: boolean,
    message: string,
    errors: string[],
    data: TransactionDto[]
}

export interface TransactionDto
{
    id: string,
    type: number,
    date: string,
    fund: Fund
}