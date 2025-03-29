# 共用方法

* [物件大小寫轉換](#物件大小寫轉換)
* [判斷是否為Object](#判斷是否為Object)
* [等待一段時間](#等待一段時間)
* [監聽向下滾動觸發事件](#監聽向下滾動觸發事件)

## 物件大小寫轉換

### 使用方法
> 大寫轉小寫
```typescript
import { toCamelCase } from '@/utils/bff.ts'

const lowerCaseObj = toCamelCase(obj)
```
> 小寫轉大寫
```typescript
import { toPascalCase } from '@/utils/bff.ts'

const upperCaseObj = toPascalCase(obj)
```

## 判斷是否為Object

### 使用方式
```typescript
import { isObject } from '@/utils/is.ts'

isObject(obj)
```


## 等待一段時間

### 使用方式
```typescript
import { sleep } from '@/utils/index'

await sleep(2000)
```


## 監聽向下滾動觸發事件

### 使用方式
```typescript
import { handleScroll } from '@/utils/scroll'

/*
  第一參數 element 要監聽滾動的元素
  第二參數 callback 滾動條件達成時觸發的事件
  第三參數 distancePx 距離底部多少px時觸發。預設 20px
*/
const { removeEventListener } = await handleScroll(element, callback, 10)

// 不需要監聽時調用
removeEventListener()
```

