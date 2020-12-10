# Salesforce-Wechat-Login
1. 申请微信开放平台账号
2. 创建Custom Metadata Types
3. 创建Apex, CustomerWechatProvider.apxc
4. 创建Auth.Provider, Type是CustomerWechatProvider
5. 创建WechatRedirectCmp.cmp
6. 创建WechatRedirectController.apxc
7. 创建Community Page引用WechatRedirectCmp, Access 设置为 Public
8. 设置Community Guest Profile权限, 添加WechatRedirectController和Custom Metadata Types
9. 设置Community Login Page 添加wechat Auth.Provider

中间跳转是为了解决微信state too long
微信开放平台call back白名单只设置主域名就行, 类似https://google.com, 不需要设置到https://google.com/callback
CustomerWechatProvider.apxc中getUserInfo一定要返回email信息, 这里放的是openid
