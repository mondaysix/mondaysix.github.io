(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{169:function(v,t,_){"use strict";_.r(t);var e=_(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"api测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#api测试","aria-hidden":"true"}},[v._v("#")]),v._v(" API测试")]),v._v(" "),_("p",[_("strong",[v._v("本质：")])]),v._v(" "),_("p",[v._v("通过测试参数的排列组合验证返回值/数据库变更是否符合预期，从而确定接口相关代码是否正确。\n从业务角度考虑的意思是这些排列组合不是随便想出来，而是业务中有可能出现的排列组合。\n接口性能测试主要关注接口响应时间、并发、服务器资源的使用情况")]),v._v(" "),_("p",[v._v("API测试基本步骤如下：")]),v._v(" "),_("ol",[_("li",[v._v("准备测试数据")]),v._v(" "),_("li",[v._v("通过API测试工具（常用的命令行工具cURL、图像界面工具Postman或者SoapUI、性能测试Jmeter），发起对被测API的request")]),v._v(" "),_("li",[v._v("验证返回结果的response")])]),v._v(" "),_("p",[v._v("Postman是目前使用最广泛的Http请求模拟工具之一，常用于Web Service API的测试，主要操作包括：")]),v._v(" "),_("ol",[_("li",[v._v("发起API调用")]),v._v(" "),_("li",[v._v("添加结果验证")]),v._v(" "),_("li",[v._v("保存测试用例")]),v._v(" "),_("li",[v._v("基于Postman测试代码自动生成")])]),v._v(" "),_("p",[_("strong",[v._v("测试场景1：被测业务操作由多个API调用完成")])]),v._v(" "),_("p",[v._v("如何才能高效地获取单个前端操作所触发的API调用序列？")]),v._v(" "),_("p",[v._v("​\t通过网络监控，捕获单个前端操作所触发的API调用序列。比如，通过Fiddler之类的网络抓包工具获取")]),v._v(" "),_("p",[_("strong",[v._v("测试场景2：API测试过程中的第三方依赖")])]),v._v(" "),_("p",[v._v("​\tAPI之间存在依赖关系，比如被测对象API A，其内部调用了API B，此时由于某些原因，API B无法使用，导致API A受到影响。")]),v._v(" "),_("p",[v._v("​\t在单体架构下，通常在涉及到第三方API集成的场景中会遇到这个问题，在微服务架构下，API之间相互耦合的依赖问题就会非常严重")]),v._v(" "),_("p",[v._v("测试场景3：异步API测试")]),v._v(" "),_("p",[v._v("​\t异步API是指调用后立即返回，但实际任务并没有真正完成，而是需要稍后去查询或者回调的API")]),v._v(" "),_("p",[v._v("​\t对异步API测试主要分两个部分：一是测试异步调用是否成功，二是，测试异步调用的业务逻辑处理是否成功")]),v._v(" "),_("p",[v._v("异步调用是否成功：检查返回值和后台工作线程是否被创建两个方面")]),v._v(" "),_("p",[v._v("异步API通常会发生一些比较慢的操作，比如数据库I/O、消息队列I/O")]),v._v(" "),_("p",[v._v("基于Postman和Newman的API测试、")]),v._v(" "),_("p",[v._v("基于代码的API测试框架，比较典型的是，基于Java的OkHttp和Unirest、基于python的http,client和request、基于nodejs的native和request")])])}],!1,null,null,null);t.default=n.exports}}]);