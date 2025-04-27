<template>
  <q-layout view="lhr lpr lfr">
    <!-- <q-page-container>
      <router-view />
    </q-page-container> -->
    <router-view />
    <q-footer v-if="showFooter" bordered class="bg-white text-grey-10">
      <q-toolbar>
        <Footer></Footer>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import Footer from '@/components/layout/Footer.vue'


const route = useRoute()

// 判斷是否顯示 Footer，根據路由的 meta 屬性
const showFooter = computed(() => route.meta.showFooter === true)

</script>

<style lang="scss" scoped>
.bg-white {
  background-color: white !important;
}
</style>