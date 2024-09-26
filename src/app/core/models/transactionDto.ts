export interface Response {
    successful: boolean,
    message: string,
    errors: string[],
    data: TransactionDto[]
}

export interface TransactionDto
{
    id: string,
    fundId: number,
    fundName: string,
    amount: number,
    type: string,
    date: string
}