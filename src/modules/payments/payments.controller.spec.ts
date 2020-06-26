import { Test, TestingModule } from '@nestjs/testing'
import { PaymentsController } from './payments.controller'
import { PaymentsService } from './payments.service'
import { VerifyResult } from './payments.dto'

describe('Payments Controller', () => {
  let controller: PaymentsController
  let paymentsService: PaymentsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsService],
      controllers: [PaymentsController],
    }).compile()

    controller = module.get<PaymentsController>(PaymentsController)
    paymentsService = module.get<PaymentsService>(PaymentsService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('POST /verify', () => {
    it('should return verify result', async () => {
      const mockVerifyOrderDto = {
        pin: '1234',
        token: 'abcd',
        item: 'RON99',
        price: 50,
      }
      const mockVerifyResponse = {
        status: VerifyResult.Confirmed,
      }
      jest
        .spyOn(paymentsService, 'verify')
        .mockReturnValueOnce(mockVerifyResponse)
      expect(await controller.verify(mockVerifyOrderDto)).toEqual(
        mockVerifyResponse,
      )
    })
  })
})
