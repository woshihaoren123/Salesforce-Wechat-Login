# Salesforce-Wechat-Login

场景：第三方网站使用salesforce认证(自定义登录页面)，需要微信登录
第三方网站点击登录 -> 跳转到salesforce community login page -> 点击微信登录 -> 扫描微信二维码 -> 跳转回第三方网站

1. 申请微信开放平台账号
2. 创建Custom Metadata Types
3. 创建Apex, CustomerWechatProvider.apxc
4. 创建Auth.Provider, Type是CustomerWechatProvider
5. 创建WechatRedirectCmp.cmp
6. 创建WechatRedirectController.apxc
7. 创建Community Page引用WechatRedirectCmp, Access 设置为 Public
8. 设置Community Guest Profile权限, 添加WechatRedirectController和Custom Metadata Types
9. 设置Community Login Page 添加wechat Auth.Provider

#### 中间跳转是为了解决微信state too long
第三方网站点击登录 -> 跳转到salesforce community login page -> 点击微信登录 -> Communtiy Wechat Page -> 扫描微信二维码 -> Communtiy Wechat Page -> 跳转回第三方网站
#### 微信开放平台call back白名单只设置主域名就行, 类似https://google.com, 不需要设置到https://google.com/callback
#### WechatProvider.apxc中getUserInfo一定要返回email信息, 这里放的是openid
#### Custom Metadata Types 中wechatRedirectUrl 设置的是Community Page 的url
