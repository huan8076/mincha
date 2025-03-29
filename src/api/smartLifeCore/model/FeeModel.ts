import { BillSettlementStatusEnum } from '@/enums/example/ManagementFee'

export type ManagementFeeVersion = 'v3' | 'v4'

export interface BEPaymentData {
  BillActualAmount: number
  BillBarcode1: string
  BillBarcode2: string
  BillBarcode3: string
  BillBarcodeDate: string
  BillBulkName: string
  BillCommunicationBar: string
  BillCreateDate: string
  BillDiffAmount: number
  BillDiscernCode: string | null
  BillDueDate: string
  BillId: number
  BillIsChanged: boolean
  BillOwner: string
  BillOwnerAddress: string
  BillSettleDate: string
  BillSettlementStatus: string
  BillSettlementStatusId: BillSettlementStatusEnum
  BillShouldAmount: number
  BillStartDate: string
  BillStatus: string
  BillType: string
  BillVirtualAccount: string
  TabletId: string
  TabletNote: string
  WriteoffReceipts: BEWriteoffReceipt[]
}

export interface BEWriteoffReceipt {
  BillBulkId: number
  WriteoffId: number
  BillId: number
  ReceiptId: number
  Rn: string
  Sn: string
  Amount: number
  PayDate: string
  EntryDate: string | null
  Note: string
  UpdateDate: string
  ReceiptWayId: number
  Way: string
  Status: string
  ConfigPayWayId: string
  ConfigHandlingFeeModeId: string
  ConfigHandlingFeeModeShowName: string
  HandlingFee: number
  CanDelete: boolean
}