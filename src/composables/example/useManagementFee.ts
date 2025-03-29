import { ManagementFeeVersion, BEPaymentData } from '@/api/smartLifeCore/model/FeeModel'
import { PaymentData } from '@/types/example/managementFee/ManagementFee'
import { toCamelCase } from '@/utils/bff'
import { handleScroll } from '@/utils/scroll'

const FAKE_DATA: BEPaymentData[] = [
  {
    BillBulkName: '信用卡與ATM轉帳',
    BillId: 23015,
    TabletId: '1605100170',
    TabletNote: '管理室',
    BillOwner: 'QA測試',
    BillOwnerAddress: 'QA測試',
    BillDiscernCode: null,
    BillType: '未定義',
    BillStatus: '開啟',
    BillCommunicationBar: 'QA測試',
    BillStartDate: '2024/03/12 00:00:00',
    BillDueDate: '2024/03/15 23:59:59',
    BillBarcodeDate: '2024/03/15 23:59:59',
    BillIsChanged: false,
    BillCreateDate: '2024/03/12 10:19:49',
    BillBarcode1: '1303156N5',
    BillBarcode2: '0157699990016505',
    BillBarcode3: '031559000000030',
    BillVirtualAccount: '57699990016505',
    BillShouldAmount: 20,
    BillActualAmount: 0,
    BillDiffAmount: -20,
    BillSettleDate: '2024/03/12 10:19:49',
    BillSettlementStatusId: 1,
    BillSettlementStatus: '未繳',
    WriteoffReceipts: []
  },
  {
    BillBulkName: '信用卡與ATM轉帳',
    BillId: 23016,
    TabletId: '1605100010',
    TabletNote: '(A12)292號12樓之7',
    BillOwner: 'QA測試',
    BillOwnerAddress: 'QA測試',
    BillDiscernCode: null,
    BillType: '未定義',
    BillStatus: '開啟',
    BillCommunicationBar: 'QA測試',
    BillStartDate: '2024/03/12 00:00:00',
    BillDueDate: '2024/03/15 23:59:59',
    BillBarcodeDate: '2024/03/15 23:59:59',
    BillIsChanged: false,
    BillCreateDate: '2024/03/12 10:25:21',
    BillBarcode1: '1303156N5',
    BillBarcode2: '0157699990016510',
    BillBarcode3: '031567000000060',
    BillVirtualAccount: '57699990016510',
    BillShouldAmount: 50,
    BillActualAmount: 0,
    BillDiffAmount: -50,
    BillSettleDate: '2024/03/12 10:25:21',
    BillSettlementStatusId: 1,
    BillSettlementStatus: '未繳',
    WriteoffReceipts: []
  },
  {
    BillBulkName: '信用卡與ATM轉帳',
    BillId: 23017,
    TabletId: '1605100032',
    TabletNote: '(C03)292號3樓之9',
    BillOwner: '測試',
    BillOwnerAddress: '測試',
    BillDiscernCode: null,
    BillType: '未定義',
    BillStatus: '開啟',
    BillCommunicationBar: '測試',
    BillStartDate: '2024/03/12 00:00:00',
    BillDueDate: '2024/03/13 23:59:59',
    BillBarcodeDate: '2024/03/14 23:59:59',
    BillIsChanged: false,
    BillCreateDate: '2024/03/12 17:50:41',
    BillBarcode1: '1303146N5',
    BillBarcode2: '0157699990016525',
    BillBarcode3: '031485000000110',
    BillVirtualAccount: '57699990016525',
    BillShouldAmount: 100,
    BillActualAmount: 100,
    BillDiffAmount: 0,
    BillSettleDate: '2024/03/12 17:51:02',
    BillSettlementStatusId: 3,
    BillSettlementStatus: '已繳',
    WriteoffReceipts: [
      {
        BillBulkId: 0,
        WriteoffId: 2398,
        BillId: 23017,
        ReceiptId: 2549,
        Rn: '16051001-202403-0002',
        Sn: '16051001-202403-0002',
        Amount: 100,
        PayDate: '2024/03/12 00:00:00',
        EntryDate: null,
        Note: 'test99',
        UpdateDate: '2024/03/12 17:51:02',
        ReceiptWayId: 9,
        Way: '手動入帳',
        Status: '手動繳費',
        ConfigPayWayId: 'CashManual',
        ConfigHandlingFeeModeId: 'Attach',
        ConfigHandlingFeeModeShowName: '外加',
        HandlingFee: 0,
        CanDelete: true
      }
    ]
  }
]

export function useManagementFee(ManagementFeeVersion: ManagementFeeVersion) {
  const paymentListElement = ref<HTMLElement | null>(null)
  const paymentList = ref<PaymentData[]>([])
  const removeEventListenerFunction = ref<(() => void) | null>(null)

  const getV3PaymentList = async (): Promise<PaymentData[]> => {
    const lowerCaseFateData = toCamelCase<BEPaymentData>(FAKE_DATA)
    return lowerCaseFateData
  }

  const getV4PaymentList = async (): Promise<PaymentData[]> => {
    const lowerCaseFateData = toCamelCase<BEPaymentData>(FAKE_DATA)
    return lowerCaseFateData
  }

  const getPaymentList = async (): Promise<void> => {
    let newPaymentListData: PaymentData[] = []
    switch (ManagementFeeVersion) {
      case 'v3': {
        newPaymentListData = await getV3PaymentList()
        break
      }
      case 'v4': {
        newPaymentListData = await getV4PaymentList()
        break
      }
    }
    paymentList.value.push(...newPaymentListData)
  }

  onMounted(async () => {
    await getPaymentList()
    switch (ManagementFeeVersion) {
      case 'v3': {
        if (paymentListElement.value) {
          const { removeEventListener } = await handleScroll(paymentListElement.value, getPaymentList, 10)
          removeEventListenerFunction.value = removeEventListener
        }
        break
      }
      case 'v4': {
        const { removeEventListener } = await handleScroll(window, getPaymentList, 10)
        removeEventListenerFunction.value = removeEventListener
        break
      }
    }
  })

  watch(
    paymentList.value,
    () => {
      if (paymentList.value.length >= 20) {
        if (removeEventListenerFunction.value) removeEventListenerFunction.value()
      }
    }
  )

  return {
    paymentListElement,
    paymentList,
    getPaymentList
  }
}
