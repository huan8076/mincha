<template>
  <div>postal</div>
</template>

<script setup lang="ts">
import { GetPostalData } from '@/api/smartLifeCore'
import { GetPostalDataParams } from '@/api/smartLifeCore/model/PostalModel'

const getPostalData = async (): Promise<void> => {
  const params: GetPostalDataParams = {
    com_id: '123132'
  }
  const { data, error } = await GetPostalData(params)
  console.log(data, error)
}

onMounted(async () => {
  await getPostalData()
})
</script>