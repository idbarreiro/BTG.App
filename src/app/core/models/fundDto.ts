export interface Response {
    successful: boolean,
    message: string,
    errors: string[],
    data: FundDto[]
}

export interface FundDto
{
    id: number,
    fundId: number,
    name: string,
    minAmount: number,
    category: string
}