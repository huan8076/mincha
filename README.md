# RD-FrontEnd_Vue3_Web

<font color=#ff0000>
此為範本專案，使用時請移除該行敘述，以及專案內 example 資料夾 <br>
詳細移除內容查看底下 <b>Template 注意事項</b>
</font>

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
* [Template 注意事項](#template-注意事項)
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

```

## Template 注意事項

### 專案導入後需刪除或調整部分
#### Readme
1. 最上方 ```此為範本專案，使用時請移除該行敘述，以及專案內 example 資料夾...``` 提示文案移除
2. 最下方的如何開始
3. ```Template 注意事項``` 移除，包含：
    * ```Template 注意事項``` 內容部分
    * 目錄 ```Template 注意事項``` 超連結

#### package.json
1. ```name``` 改成專案名稱

#### .env
1. ```VITE_APP_NAME``` 為測試用，可移除


#### file
##### 以下皆僅為範例樣本，參考完之後即可移除
1. 所有 ```example``` 的資料夾皆可移除
2. ```stores > helloWorld.ts``` 可移除
3. ```router > routes``` 底下範例可移除，若移除亦須同步移除 ```router > index.ts``` 裡的引用及配置
4. ```components > HelloWorld.vue``` 可移除
5. ```api > smartLifeCore``` 可移除

## 如何開始
[wiki 建立新專案](https://kingnetrd.visualstudio.com/RD-ProjectWorkItem/_wiki/wikis/RD-ProjectWorkItem.wiki/2727/-Vue3-Template-%E5%BB%BA%E7%AB%8B%E6%96%B0%E5%B0%88%E6%A1%88)