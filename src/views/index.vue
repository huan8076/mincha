<template>
  <q-page-container id="index">
    <q-header class="index__header">
      <q-toolbar>
        <q-icon name="menu" class="cursor-pointer" size="38px" />
        <q-toolbar-title class="text-center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Logo
        </q-toolbar-title>
        <q-icon name="search" size="38px" @click="onLogout" />
      </q-toolbar>
      <q-toolbar class="index__header__edge">
        <q-toolbar-title>
          <p>Good Morning</p>
          <p>{{ username }}!</p>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <div class="index__content page">
      <div class="row">
        <div class="col-6 col--left">
          <div class="menuCard menuCard--filled">
            <div class="menuCard__icon">
              <q-icon name="schedule" />
            </div>
            <div class="menuCard__content">
              <p class="menuCard__title">
                打卡
              </p>
              <p class="menuCard__desc">
                別忘了上下班打卡
              </p>
            </div>
            <div class="menuCard__bottomSide">
              <q-icon name="start" />
            </div>
          </div>
        </div>
        <div class="col-6 col--right">
          <div class="menuCard menuCard--filled">
            <div class="menuCard__icon">
              <q-icon name="campaign" />
            </div>
            <div class="menuCard__content">
              <p class="menuCard__title">
                公告
              </p>
              <p class="menuCard__desc">
                掌握公司最新消息
              </p>
            </div>
            <div class="menuCard__bottomSide">
              <q-icon name="start" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="menuCard menuCard--filled" @click="router.push('/educationTraining/')">
            <div class="menuCard__tag tag primary">#新手等級</div>
            <div class="menuCard__icon">
              <q-icon name="school" />
            </div>
            <div class="menuCard__content">
              <p class="menuCard__title">
                教育訓練
              </p>
              <p class="menuCard__desc">
                完成指定訓練課程，升級等級
              </p>
            </div>
            <div class="menuCard__bottomSide">
              <q-icon name="start" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col--left">
          <div class="menuCard menuCard--outline">
            <div class="row">
              <div class="menuCard__icon">
                <q-icon name="contactsupport" />
              </div>
              <div class="menuCard__content">
                <p class="menuCard__title">
                  AI助手
                </p>
                <p class="menuCard__desc">
                  協助解答與操作指引
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col--right">
          <div class="menuCard menuCard--outline">
            <div class="row">
              <div class="menuCard__icon">
                <q-icon name="analytics" />
              </div>
              <div class="menuCard__content">
                <p class="menuCard__title">
                  數據圖表
                </p>
                <p class="menuCard__desc">
                  查看個人績效與統計
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script setup lang="ts">
const router = useRouter()

const username = ref<string>('')
username.value = localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')).userName : '訪客'

/**
 * 登出功能
 * 清除 localStorage 中的 loginData，並跳轉到登入頁
 */
const onLogout = async (): Promise<void> => {
  try {
    // 清除 localStorage 中的 loginData
    localStorage.removeItem('loginData')

    // 跳轉到登入頁
    await router.push('/login')
  } catch (error) {
    // 錯誤處理，這裡可以使用 Quasar 的通知元件顯示錯誤訊息
    console.error('登出失敗:', error)
  }
}

</script>

<style lang="scss" scoped>
.q-page-container {
  background-color: #FFF;
}
.index__header {
  background-color: transparent;

  .q-toolbar {
    background-color: $SystemPrimary;
  }

  .index__header__edge {
    height: 120px;
    padding: 20px;
    border-radius: 0 0 25px 25px;
    align-items: flex-start;
  }
}

.index__content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 30px;

  .row {
    width: 100%;

    .col--left {
      padding-right: 10px;
    }

    .col--right {
      padding-left: 10px;
    }
  }

  .menuCard {
    position: relative;
    width: 100%;
    padding: 12px 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;

    .menuCard__tag {
      position: absolute;
      top: 12px;
      right: 24px;
    }

    .menuCard__icon {
      margin-right: 8px;
      font-size: 50px;
    }

    .menuCard__content {
      padding: 4px 0;
    }

    .menuCard__title {
      font-size: 24px;
      line-height: 1.5;
      font-weight: bold;
    }

    .menuCard__desc {
      font-size: 14px;
      line-height: 1.2;
    }

    .menuCard__bottomSide {
      display: flex;
      justify-content: flex-end;
      padding: 4px 0;

      .q-icon {
        font-size: 30px;
      }
    }

  }

  .menuCard.menuCard--filled {
    //實心藍底卡片
    background-color: $SystemPrimary;
    color: $SystemWhite;
  }

  .menuCard.menuCard--outline {
    //空心藍框卡片
    border: 1px solid $SystemPrimary;
    color: $SystemPrimary;
    ;
  }
}
</style>
