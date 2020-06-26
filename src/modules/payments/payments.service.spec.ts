import { Test, TestingModule } from '@nestjs/testing'
import { PaymentsService } from './payments.service'

describe('PaymentsService', () => {
  let service: PaymentsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsService],
    }).compile()

    service = module.get<PaymentsService>(PaymentsService)
  })

  describe('verify', () => {
    it('should return results from enums', () => {
      const result = service.verify()
      expect(['Confirmed', 'Declined']).toContain(result.status)
    })
  })
})
