(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{173:function(_,v,i){"use strict";i.r(v);var l=i(0),t=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"“用户登录”功能设计测试用例"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#“用户登录”功能设计测试用例","aria-hidden":"true"}},[_._v("#")]),_._v(" “用户登录”功能设计测试用例")]),_._v(" "),i("ul",[i("li",[i("p",[_._v("等价类划分方法")]),_._v(" "),i("p",[_._v("所有可能的输入数据划分成若干个子集，在每个子集中，任意一个输入数据可以揭露程序中潜在的错误，则这样的子集就构成一个等价类")])]),_._v(" "),i("li",[i("p",[_._v("边界值分析方法")]),_._v(" "),i("p",[_._v("选取输入、输出的边界值进行测试。通常选取正好等于、刚刚大于、刚刚小于边界的值作为测试数据")]),_._v(" "),i("p",[_._v("结合等价类划分、边界值分析来分析一系列的测试用例")]),_._v(" "),i("h4",{attrs:{id:"围绕功能性需求可设计如下测试用例："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#围绕功能性需求可设计如下测试用例：","aria-hidden":"true"}},[_._v("#")]),_._v(" 围绕功能性需求可设计如下测试用例：")]),_._v(" "),i("ol",[i("li",[_._v("已注册的用户名和正确的密码")]),_._v(" "),i("li",[_._v("已注册的用户名和错误的密码，错误提示是否正确")]),_._v(" "),i("li",[_._v("用户名和密码为空，错误提示是否正确")]),_._v(" "),i("li",[_._v("用户名和密码是否支持各种特殊字符")]),_._v(" "),i("li",[_._v("用户名为空或者密码为空或者空字符串，错误提示是否正确")]),_._v(" "),i("li",[_._v("若登录功能启用了验证码功能，输入正确验证码，是否登录成功")]),_._v(" "),i("li",[_._v("若登录功能启用了验证码功能，输入错误验证码，错误提示是否正确")]),_._v(" "),i("li",[_._v("用户名和密码是否区分大小写")]),_._v(" "),i("li",[_._v("密码是明文还是密文显示")]),_._v(" "),i("li",[_._v("忘记用户名或者密码的功能是否有")]),_._v(" "),i("li",[_._v("用户第一次登录成功后是否会提示修改密码")]),_._v(" "),i("li",[_._v("用户名和密码是否有长度显示")]),_._v(" "),i("li",[_._v("若登录功能启用了验证码功能，验证码是否支持点击更换，更换后的验证码是否可用")]),_._v(" "),i("li",[_._v("刷新页面是否会更新新的验证码")]),_._v(" "),i("li",[_._v("验证码是否有时效性，在有效时间内输入和超过有效时间后再输入是否可以")]),_._v(" "),i("li",[_._v("用户登录成功但是会话超时了，是否会重定向到登录界面")]),_._v(" "),i("li",[_._v("不同权限的用户登录后显示的页面是否有正确差异")]),_._v(" "),i("li",[_._v("登录界面默认焦点是否在用户名的输入框内")]),_._v(" "),i("li",[_._v("快捷键tab和enter是否可用")]),_._v(" "),i("li",[_._v("是否支持第三方登录，第三方登录是否可以存储密码")]),_._v(" "),i("li",[_._v("网络延迟、弱网、断网、网络切换等等情况下，是否可以正常登录")]),_._v(" "),i("li",[_._v("登录后再次输入登录url，是否会导致刚刚登录的用户失效，是不是不能再次用这个账号登录")]),_._v(" "),i("li",[_._v("使用强密码和弱密码是否都可以登录")]),_._v(" "),i("li",[_._v("已停用的用户登录是否失败")]),_._v(" "),i("li",[_._v("没有激活过的用户登录是否失败")]),_._v(" "),i("li",[_._v("中文键盘输入的字母和英文键盘输入的字母传到后端的字符长度是否一致")]),_._v(" "),i("li",[_._v("用户是否支持异地登录")]),_._v(" "),i("li",[_._v("密码是否支持明文和暗文显示")])]),_._v(" "),i("p",[i("strong",[_._v("非功能性需求，主要设计安全性、性能、兼容性三个方面")])]),_._v(" "),i("h4",{attrs:{id:"围绕安全性需求可设计如下测试用例："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#围绕安全性需求可设计如下测试用例：","aria-hidden":"true"}},[_._v("#")]),_._v(" 围绕安全性需求可设计如下测试用例：")]),_._v(" "),i("ol",[i("li",[i("p",[_._v("后台存储的用户密码是否加密")])]),_._v(" "),i("li",[i("p",[_._v("用户密码在网络传输过程中是否加密")])]),_._v(" "),i("li",[i("p",[_._v("密码是否有有效期，到达有效期后是否提示修改密码")])]),_._v(" "),i("li",[i("p",[_._v("不登录的时候，直接输入成功登录后的url地址是否会重定向到登录界面")])]),_._v(" "),i("li",[i("p",[_._v("密码输入框是否支持复制粘贴")])]),_._v(" "),i("li",[i("p",[_._v("输入框内输入的密码在页面源代码模式下是否可用查看")])]),_._v(" "),i("li",[i("p",[_._v("用户名和密码输入框输入典型的“SQL注入攻击”字符串，返回页面是否正确")])]),_._v(" "),i("li",[i("p",[_._v("用户名和密码框输入典型的“XSS跨站脚本攻击”，验证系统行为是否被改变")])]),_._v(" "),i("li",[i("p",[_._v("连续多次输入错误的密码登录失败情况下，系统是否会阻止继续尝试以应付暴力破解")])]),_._v(" "),i("li",[i("p",[_._v("同一用户在同一终端的不同浏览器登录，是否具有互斥")])]),_._v(" "),i("li",[i("p",[_._v("同一用户在不同的终端登录，是否具有互斥")])]),_._v(" "),i("li",[i("p",[_._v("是否可以直接使用登录的api发送登录请求，绕过验证码校验")])]),_._v(" "),i("li",[i("p",[_._v("截取到的token等信息，是否可以直接在其他终端使用，绕过登录，token过期时间多久")])]),_._v(" "),i("li",[i("p",[_._v("抓包工具抓到的请求是否可以直接登录")])]),_._v(" "),i("li",[i("p",[_._v("后端是否也会校验用户名和密码的长度")])]),_._v(" "),i("li",[i("p",[_._v("用户登录过程中log是否有个人信息明文打印")])]),_._v(" "),i("li",[i("p",[_._v("同时可支持多少个用户登录：比如同时支持10个用户，此时使用11个用户或者9个用户登录")]),_._v(" "),i("p",[_._v("​")])])]),_._v(" "),i("h4",{attrs:{id:"围绕性能压力需求可设计如下测试用例："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#围绕性能压力需求可设计如下测试用例：","aria-hidden":"true"}},[_._v("#")]),_._v(" 围绕性能压力需求可设计如下测试用例：")]),_._v(" "),i("ol",[i("li",[_._v("单用户登录响应的时间<3秒")]),_._v(" "),i("li",[_._v("单用户登录，后台请求数量是否过多")]),_._v(" "),i("li",[_._v("高并发场景下用户的登录响应<5秒")]),_._v(" "),i("li",[_._v("长时间大量用户登录登出，服务器端是否存在内存泄漏")]),_._v(" "),i("li",[_._v("高集合点并发场景下，是否存在资源死锁")])]),_._v(" "),i("h4",{attrs:{id:"围绕兼容性需求可设计如下测试用例："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#围绕兼容性需求可设计如下测试用例：","aria-hidden":"true"}},[_._v("#")]),_._v(" 围绕兼容性需求可设计如下测试用例：")]),_._v(" "),i("ol",[i("li",[_._v("不同浏览器，登录页面显示是否无差异、是否可以成功登录")]),_._v(" "),i("li",[_._v("同一浏览器，不同版本，登录页面显示是否无差异、是否可以成功登录")]),_._v(" "),i("li",[_._v("不同移动终端不同浏览器，登录页面显示是否无差异、是否可以成功登录")]),_._v(" "),i("li",[_._v("不同分辨率下，登录页面显示是否无差异、是否可以成功登录")])])])])])}],!1,null,null,null);v.default=t.exports}}]);