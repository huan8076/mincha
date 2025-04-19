    # copilot-instructions.md
    
    # 專案環境
    - 這個專案使用quasar框架
    - 這個專案使用使用Vue3框架並搭配TypeScript
    
    # 通用風格
    - 使用 2 個空格作為縮排
    - 使用繁體中文書寫Code Review評論
    
    # 命名風格
    - Component 與 Class 使用 PascalCase
    - 變數和function使用 camelCase，避免使用縮寫，讓變數名稱具有可讀性
    - 常數使用SNAKE_CASE
    - 使用具描述性的變數名稱，並搭配助動詞（例：isLoading、hasError）
    - DOM Event 的 callback function 需使用 on 作為開頭
    - function 盡量使用動詞+名詞的形容方式（例：setCommunityName、getWeather）
    
    # Vue
    - 使用composition API
    - vue文件結構，依照template -> script -> style的順序排列
    - 使用 Scoped CSS，避免全域樣式污染
    - 使用 scss 作為 CSS 預處理器
    
    # TypeScript
    - 所有變數需明確定義型別，不使用 any
    - 必須為所有函數定義參數型別與回傳型別，避免隱式型別推斷
    - 物件優先定義介面 (interface) 或型別 (type)，避免使用匿名型別
    
    # JavaScript
    - 結尾不需加上分號
    - 使用try catch來處理錯誤
    - 使用async await來處理非同步
    - 始終加上繁體中文註解
    - 優先使用單引號
    - function的註解需使用JSDoc格式
    - 條件判斷優先使用 === 與 !==
    - 使用Template literals而不是字串加法
    - function的參數超過三個需轉換成物件帶入
    - function的小括號()前後需加上空格
    
    # CSS
    - 樣式屬性按照字母順序排列
    - 使用OOCSS作為CSS設計模式
    - 使用BEM作為CSS設計模式