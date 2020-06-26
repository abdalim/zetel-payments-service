import { Injectable } from '@nestjs/common'

import { VerifyResult, VerifyResponseDto } from './payments.dto'

@Injectable()
export class PaymentsService {
  verify(): VerifyResponseDto {
    const possibleResultKeys = Object.keys(VerifyResult)
    const randomInt = this.getRandomIntWithMax(possibleResultKeys.length)
    return {
      status: VerifyResult[possibleResultKeys[randomInt]],
    }
  }

  private getRandomIntWithMax(max: number) {
    return Math.floor(Math.random() * Math.floor(max))
  }
}
