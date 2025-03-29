<template>
  <div>V3</div>
  <div ref="paymentListElement" class="payment-list">
    <div v-for="(item, index) in paymentList" :key="`${item.billId}_${index}`">
      <div> BillBulkName: {{ item.billBulkName }} </div>
      <div> TabletNote: {{ item.tabletNote }} </div>
      <div> BillOwner: {{ item.billOwner }} </div>
      <div> BillStatus: {{ item.billStatus }} </div>
      <div> BillSettlementStatus: {{ item.billSettlementStatus }} </div>
      <div> BillShouldAmount: {{ item.billShouldAmount }} </div>
      <hr>
    </div>
  </div>
  <button @click="getPaymentList">
    取得新資料
  </button>
</template>

<script setup lang="ts">
import { useManagementFee } from '@/composables/example/useManagementFee'

const { paymentListElement, paymentList, getPaymentList } = useManagementFee('v3')

</script>

<style lang="scss" scoped>
.payment-list {
  min-width: 550px;
  max-height: 75vh;
  overflow-y: auto;
  text-align: left;
}
</style>