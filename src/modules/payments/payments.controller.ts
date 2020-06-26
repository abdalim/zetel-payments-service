import { Controller, Post, Body } from '@nestjs/common';
import { VerifyOrderDto, VerifyResponseDto } from './payments.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}
  
  @Post('verify')
  verify(@Body() verifyOrderDto: VerifyOrderDto): Promise<VerifyResponseDto> {
    console.log('POST /verify', verifyOrderDto)
    return Promise.resolve(this.paymentsService.verify())
  }
}
