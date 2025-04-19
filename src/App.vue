<template>
  <q-layout view="lhr lpr lfr">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer v-if="showFooter" bordered class="bg-white text-grey-10">
      <q-toolbar>
        <Footer></Footer>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import Footer from '@/components/layout/footer.vue'


const route = useRoute()

// 判斷是否顯示 Footer，根據路由的 meta 屬性
const showFooter = computed(() => route.meta.showFooter === true)

</script>

<style lang="scss" scoped>
.bg-white {
  background-color: white !important;
}
.q-page-container {
  position: relative;
  width: 100%;
  height: 100vh;

  .page {
    height: 100%;
    overflow: auto;
  }
}
</style>