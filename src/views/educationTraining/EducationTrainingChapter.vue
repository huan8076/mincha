<template>
  <q-page-container id="educationTrainingChapter">
    <q-header class="">
      <q-toolbar>
        <q-toolbar-title class="text-left">
          冬瓜
        </q-toolbar-title>
        <q-icon name="close" size="38px" @click="router.back()" />
      </q-toolbar>
    </q-header>
    <div class="educationTrainingChapter__content page">
      <div class="content__image">
        <img src="@/assets/login/login_top_img.png" />
      </div>
      <div class="content__wrapper">
        <div class="content__step">
          <p>
            全步驟(11)
          </p>
        </div>
        <div class="content__index">
          1
        </div>
        <div class="content__intro">
          <div class="content__intro__title">
            冬瓜煮熱水量比例是否正確
          </div>
          <div class="content__intro__text">
            加入正確比例的水量，以利冬瓜均勻煮透，避免過稀或過濃。 <br />
            建議比例：冬瓜：水= 1：3加入正確比例的水量，以利冬瓜均勻煮透，避免過稀或過濃。  <br />
            建議比例：冬瓜：水=1:3 <br />
            加入正確比例的水量，以利冬瓜均勻煮透，避免過稀或過濃。 <br />
            建議比例：冬瓜：水=1:3 <br />
          </div>
        </div>
      </div>
    </div>
    <div class="footer__wrapper">
      <div class="footer__button">
        <div class="btn btn-Outline btn-Rounded">
          回教育訓練
        </div>
        <div class="btn btn-Filled btn-Rounded">
          下一步
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="scss" scoped>
#educationTrainingChapter {
  padding-bottom: 80px;
}

.content__image {
  position: relative;
  background-color: $SystemWhite;
  z-index: 2;
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
}
.content__wrapper {
  position: relative;
  display: flex;
  padding: 40px 0 20px 0;
  z-index: 1;
}
.content__step{
  position: absolute;
  top: -12px;
  right: 5px;
  padding: 4px;

  p {
    padding: 4px 0;
    font-size: 13px;
    color: $SystemPrimary;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 15px;
    background-color: $SystemPrimary;
    border-radius: 50em;
  }

  &:active {
    opacity: 0.8;
  }
}

.content__index {
  width: 15%;
  min-width: 50px;
  max-width: 200px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}
.content__intro {
  padding-right: 20px;

  &__title {
    font-size: 20px;
    padding: 10px 0;
    margin-bottom: 10px;
  }

  &__text {
    font-size: 16px;
  }
}
.footer__wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: $SystemWhite;
  border-top: 1px solid #CCC;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}
.footer__button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 600px;

  .btn {
    width: 150px;
  }
}
</style>