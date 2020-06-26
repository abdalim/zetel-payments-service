export enum VerifyResult {
  Confirmed = 'Confirmed',
  Declined = 'Declined',
}

export class VerifyResponseDto {
  status: VerifyResult
}

export class VerifyOrderDto {
  pin: string
  token: string
  item: string
  price: number
}
