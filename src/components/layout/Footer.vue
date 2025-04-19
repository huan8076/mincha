<template>
  <div id="footer">
    <div class="footer-tab">
      <q-icon name="home" size="28px" color="primary" />
      <span>首頁</span>
    </div>
    <div class="footer-tab">
      <q-icon name="chat" size="28px" />
      <span>訊息</span>
    </div>
    <div class="footer-tab">
      <q-icon name="work" size="28px" />
      <span>工作</span>
    </div>
    <div class="footer-tab">
      <q-icon name="account_circle" size="28px" />
      <span>個人</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer-tab {
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  span {
    margin-top: 2px;
    font-size: 13px;
  }
}
</style>