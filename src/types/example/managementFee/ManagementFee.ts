import { BEPaymentData, BEWriteoffReceipt } from '@/api/smartLifeCore/model/FeeModel'
import { type CamelCase } from '@/utils/bff'

export type ManagementFeeVersion = 'v3' | 'v4'

export interface PaymentData extends CamelCase<BEPaymentData> {}

export interface WriteoffReceipt extends CamelCase<BEWriteoffReceipt> {}