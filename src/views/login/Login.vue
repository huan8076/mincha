<template>
  <q-page-container id="login">
    <div class="login__content page">
      <div class="login__topArea">
        <img src="@/assets/images/login/login_top_img.png" alt="login background" />
      </div>
      <div class="login__inputArea">
        <div class="login__inputArea__slogan">
          <p>Hello,</p>
          <p>Welcome!</p>
        </div>
        <div class="login__input">
          <div class="row">
            <div class="col-2 login__input__label">
              帳號
            </div>
            <div class="col-9 offset-1">
              <q-input v-model="account" borderless class="login__input--input" placeholder="輸入手機號碼" :rules="[validatePhoneNumber]" maxlength="10" />
            </div>
          </div>
        </div>
        <div class="login__input">
          <div class="row">
            <div class="col-2 login__input__label">
              密碼
            </div>
            <div class="col-9 offset-1">
              <q-input v-model="password" borderless type="password" class="login__input--input" placeholder="**********" :rules="[validatePassword]" maxlength="20" />
            </div>
          </div>
        </div>
        <div class="row justify-end">
          <div class="cursor-pointer">
            忘記密碼?
          </div>
        </div>

        <div class="row justify-center login_btnArea">
          <div class="login__btnArea--btn" @click="onLogin">
            登入
          </div>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import type { LoginResponse } from '@/api/mincha/model/Auth'
import { Login } from '@/api/mincha'

const $q = useQuasar()
const account = ref<string>('')
const password = ref<string>('')
const router = useRouter()

/**
 * 驗證手機號碼格式
 * 僅允許輸入數字，並檢查是否為有效的台灣手機號碼格式
 */
const validatePhoneNumber = (val: string): boolean | string => {
  const regex = /^09\d{8}$/
  return regex.test(val) || '請輸入有效的手機號碼格式'
}

/**
 * 驗證密碼格式
 * 密碼長度至少為 12 碼，且必須包含一個大寫字母、一個小寫字母和一個數字
 */
const validatePassword = (val: string): boolean | string => {
  if (val) return true // 暫時不檢查格式
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{12,}$/
  return regex.test(val) || '密碼格式有誤'
}

/**
 * 登入功能
 * 將帳號與密碼儲存到 localStorage，並跳轉到首頁
 */
const onLogin = async (): Promise<void> => {
  try {
    // 檢查帳號與密碼是否填寫
    if (!account.value || !password.value) {
      $q.notify({
        type: 'warning',
        message: '請輸入帳號與密碼',
        position: 'top',
        timeout: 2000
      })
      throw new Error('請輸入帳號與密碼')
    }

    // 將帳號與密碼儲存到 localStorage 的 loginData 欄位
    const loginData = {
      username: account.value,
      password: password.value
    }
    const { data, error } = await Login<LoginResponse>(loginData)
    if (data) {
      const userData = {
        userName: data.username,
        userPhone: loginData.username,
        token: data.token
      }

      localStorage.setItem('loginData', JSON.stringify(userData))
      // 跳轉到首頁
      await router.push('/')
    }

    if (error) {
      $q.notify({
        type: 'warning',
        message: '登入失敗，請檢查帳號或密碼',
        position: 'top',
        timeout: 2000
      })
    }
  } catch (error) {
    // 錯誤處理，這裡可以使用 Quasar 的通知元件顯示錯誤訊息
    console.error('登入失敗:', error)
  }
}
</script>

<style lang="scss" scoped>
#login {
  max-width: 100vw; //登入頁最大寬度調整
  background-color: $SystemPrimary;
  display: flex;
  justify-content: center;
}

.login__content {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.login__topArea {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;

  img {
    position: relative;
    width: 80%;
    bottom: -20px;
  }
}

.login__inputArea {
  background-color: $SystemGray;
  border-radius: 100px 100px 0 0;
  border: 1px solid #b8d8b8;
  padding: 40px;
  z-index: 10;
}

.login__inputArea__slogan {
  margin-bottom: 20px;

  p {
    color: $SystemPrimary;
    font-size: 40px;
    font-weight: 700;
  }
}

.login__input {
  border: 2px solid $SystemPrimary;
  border-left: 8px solid $SystemPrimary;
  padding: 4px 0px;
  margin-bottom: 16px;
  color: $SystemPrimary;
}

.login__input__label {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}

.login__input--input {
  font-size: 20px;
  color: #999;
}

.login_btnArea {
  padding-top: 20px;
}

.login__btnArea--btn {
  width: 50%;
  height: 40px;
  border-radius: 50em;
  line-height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $SystemWhite;
  background-color: $SystemYellow;
  cursor: pointer;
}

.login__btnArea--btn:active {
  opacity: 0.8;
}
</style>