<template>
  <div id="educationTrainingCourse" class="page">
    <q-header class="page__header">
      <q-toolbar>
        <q-icon name="menu" class="cursor-pointer" size="38px" />
        <q-toolbar-title class="text-center"></q-toolbar-title>
      </q-toolbar>
      <div class="page__header__edge">
        <div class="page__header__edge__content">
          <p class="page__header__edge__title">
            教育訓練
          </p>
        </div>
        <img src="@/assets/login/exampleBG.png" class="page__header__edge__image" alt="login background" />
      </div>
    </q-header>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.q-header.page__header {
  height: 170px;
  overflow: hidden;
}
.q-toolbar {
  z-index: 2;
}
.page__header-edge {
  position: absolute;
  top: 0;
}
.page__header-edge {
  position: absolute;
  top: 0;
  width: 100%;
  height: 170px;
  padding-top: 50px;
  z-index: 1;
}

.page__header__edge__content {
  padding: 12px 0 0 40px
}

.page__header__edge__title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 10px;
}

.page__header__edge__image {
  position: absolute;
  height: 150px;
  right: 0;
  bottom: 0;
}
</style>