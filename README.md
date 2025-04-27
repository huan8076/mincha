# Mincha

## 目錄
* [開發環境](#開發環境)
  * [👉 Node.js](#👉-node.js)
  * [👉 Pnpm](#👉-pnpm)
  * [👉 Git](#👉-git)
* [建置作業](#建置作業)
* [專案運行](#專案運行)
* [專案結構](#專案結構)
* [命名規範](#命名規範)
* [注意事項](#注意事項)
* [如何開始](#如何開始)
* [發布](./docs/RELEASE.md)
* [模組](./docs/MODULE.md)
* [共用方法](./docs/FUNCTION.md)
  * [物件大小寫轉換](./docs/FUNCTION.md#物件大小寫轉換)
  * [判斷是否為Object](./docs/FUNCTION.md#判斷是否為Object)
  * [等待一段時間](./docs/FUNCTION.md#等待一段時間)
  * [監聽向下滾動觸發事件](./docs/FUNCTION.md#監聽向下滾動觸發事件)
* [常見錯誤](./docs/ERROR.md)
* [套件](./docs/PLUGIN.md)
* [紀錄](./docs/NOTE.md)

## 開發環境
<font color=#ff0000>**請使用 Node 20.17.0 + pnpm 9.9.0**</font>
### 👉 Node.js
#### 安裝 [Node.js 20.17.0](https://nodejs.org/en/blog/release/v20.17.0)

#### 使用版本
```
 v20.17.0
```
#### 確認安裝完成
```sh
node --version
```

### 👉 pnpm

#### 安裝 [pnpm](https://www.npmjs.com/package/pnpm)
#### 使用版本
```
 9.9.0
```

```sh
npm install pnpm@9.9.0 -g
```

### 👉 Git
#### 安裝 [Git](https://git-scm.com/downloads)

#### 確認安裝完成
```sh
git --version
```

## 建置作業
```sh
pnpm install
```

## 專案運行
**環境設定對應 env 於 config 資料夾**

開發指令

- 🔥 ```pnpm run dev``` (dev環境)
- 🔥 ```pnpm run dev:staging``` (staging環境)
- 🔥 ```pnpm run dev:prod``` (正式環境)

## 專案結構
```shell
RD-FrontEnd_Vue3_Web
├─ .env
├─ .env.development
├─ .env.production
├─ .env.staging
└─ src
  ├─ api # 呼叫 api 的方法都放這
  │  ├─ [domain] # 放置各 domain api
  │  ├─ interceptors # 部分 domain 共用的攔截器
  │  ├─ Model.ts # api 通用型別
  │  └─ index.ts # api 主要檔案
  ├─ assets # 放置素材
  ├─ components # 放置會重複使用的元件
  ├─ composables # 放置共用有狀態邏輯
  ├─ docs # 放置專案文件
  ├─ enums # 放置 enum
  ├─ locals # i18n
  │  ├─ lang # 放置各語系配置
  │  └─ index.ts # i18n 主要檔案
  ├─ router # 存放 router 檔案
  │  ├─ routes # 依各頁面區分 route
  │  │  └─ [...].ts # 依各頁面區分 route
  │  └─ index.ts # router 主要檔案
  ├─ stores # 存放 pinia 檔案
  │  ├─ [...].ts # 依各功能區分 store
  │  └─ index.ts # pinia 主要檔案
  ├─ styles # 存放 css 檔案
  │  └─ index.scss # 樣式主要檔案
  ├─ utils # 放置共用無狀態邏輯
  ├─ views # 頁面，依照頁面創建資料夾，資料夾底下可創建
  ├─ App.vue # vue 主框架
  └─ main.ts # 主要檔案
```

## 命名規範
#### [命名規範](https://kingnetrd.visualstudio.com/RD-ProjectWorkItem/_wiki/wikis/RD-ProjectWorkItem.wiki/2184/Coding-Style-%E8%A6%8F%E7%AF%84?anchor=%E8%AE%8A%E6%95%B8%E5%91%BD%E5%90%8D)

#### [CSS規範](https://dev.azure.com/KingnetRD/RD-ProjectWorkItem/_wiki/wikis/RD-ProjectWorkItem.wiki/2696/CSS-%E8%A6%8F%E7%AF%84)

## 注意事項
### Auto Import
#### 該專案使用 ```unplugin-auto-import```，因此 ```vue```、```vue-router```、```vue-i18n```、```pinia```可直接使用。
- vue
```typescript
// import { ref } from 'vue'

const paymentList = ref<PaymentData[]>([])
```
- vue-router
```typescript
// import { useRouter } from 'vue-router'

const { push } = useRouter()
```
- vue-i18n
```typescript
// import { useI18n } from 'vue-i18n'

const { t } = useI18n()
```
- pinia
```typescript
// import { storeToRefs } from 'pinia'
import { useHelloWorldStore } from '@/stores'

const { count } = storeToRefs(useHelloWorldStore())
```

### API 使用
#### API 回傳內容
- API 必定成功，因此無需 try catch，且會回傳三筆資料
  - data - 請求成功時的 API 回傳內容
  - error - 請求失敗時的 API 錯誤內容
  - status - 狀態碼

- 使用範例
```typescript
import { GetPostalData } from '@/api/smartLifeCore'
import { GetPostalDataParams } from '@/api/smartLifeCore/model/PostalModel'

const getPostalData = async (): Promise<void> => {
  const params: GetPostalDataParams = {
    com_id: '123132'
  }
  const { data, error, status } = await GetPostalData(params) // 已不必再使用 try catch
  console.log(data, error, status)
}
```

### API 攔截器
#### API 攔截器撰寫分為三個區塊
- ```index.ts``` 裡面的 ```setCommonInterceptors``` 是撰寫無論外部內部所有 domain 皆通用的攔截器。
- ```interceptors.ts``` 裡面撰寫部分 domain 共用的攔截器，在各需要使用 domain import 使用
- ```各 domain``` 裡面撰寫只針對該 domain 使用的攔截器

### API Config
#### API 確保滿一定時間後才回傳
- ```index.ts``` 裡面的 ```setCommonInterceptors``` 有針對 api 調用回傳時間做設定，使用方式為：
```typescript
// api.ts
export const GetData = async (params: ParamsInterface, config: CustomRequestConfig = {}) =>
  await createApi<BEPostalData>({
    url: '/api/xxx',
    method: 'GET',
    params,
    ...config
  }, 'CommunityUser')

// 引用的地方
const params = {}
const config = { handleMs: 2000 } // 確保 api 打滿 2 秒
const res = await GetData(params, config)
```
#### 新增其他 config
或有其他需求，需增加一些設定帶到 api 請求中，需要調整
```typescript
// src/types/axios.d.ts
declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    startTime: number
    // 新增你需要的東西
  }
}

// src/api/Model.ts
export interface CustomRequestConfig {
  handleMs?: number
  // 新增你需要的東西
}