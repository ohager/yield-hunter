import { BurstValue } from '@burstjs/util'

export interface PaymentComponentProps {
  recipientId: string
  value: BurstValue
  onFinish: (success: boolean) => void
}
