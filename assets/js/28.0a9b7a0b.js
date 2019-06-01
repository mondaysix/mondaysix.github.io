(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{193:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"软件缺陷报告"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#软件缺陷报告","aria-hidden":"true"}},[a._v("#")]),a._v(" 软件缺陷报告")]),a._v(" "),r("p",[a._v("测试工程师日常工作中重要的输出，把发现的缺陷准备无歧义的表达清楚。公司中通常会有缺陷管理系统，比如jira、bugzilla、bugfree、mantis等等，这类系统中只要按照其中的必填字段描述清楚会自动生成模板的。")]),a._v(" "),r("h2",{attrs:{id:"缺陷标题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺陷标题","aria-hidden":"true"}},[a._v("#")]),a._v(" 缺陷标题")]),a._v(" "),r("p",[a._v("缺陷标题是对缺陷的概括性描述，“在什么情况下发送了什么问题”。具体描述发送的问题是在什么场景下发生的，但缺陷标题不能太长了，对缺陷更详细的描述应该放在“缺陷概述里”")]),a._v(" "),r("h2",{attrs:{id:"缺陷概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺陷概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 缺陷概述")]),a._v(" "),r("p",[a._v("描述缺陷本质与现象的描述，是标题的细化。这部分还可以列出同一类型的缺陷可能出现的场景，是否在之前的版本中重现等等，避免以缺陷重现步骤的形式描述，应该是概括性的语句。清晰简洁的描述缺陷，使得开发工程师能噶偶聚焦缺陷的本质")]),a._v(" "),r("h2",{attrs:{id:"缺陷影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺陷影响","aria-hidden":"true"}},[a._v("#")]),a._v(" 缺陷影响")]),a._v(" "),r("p",[a._v("缺陷引起的问题对用户或者对业务的影响范围以及严重程度。该部分决定了缺陷的优先级（priority）、严重程度（severity）。准确描述缺陷影响的前提是：对软件的应用场景以及需求有深入的理解")]),a._v(" "),r("h2",{attrs:{id:"环境配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境配置")]),a._v(" "),r("p",[a._v("详细描述测试环境的配置细节，为缺陷的重现提供必要的环境信息。比如系统的版本、被测软件版本、被测软件的配置信息等等")]),a._v(" "),r("h2",{attrs:{id:"前置条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前置条件","aria-hidden":"true"}},[a._v("#")]),a._v(" 前置条件")]),a._v(" "),r("p",[a._v("测试步骤前系统处于的状态，这样可以减少缺陷重现步骤的描述，排除不必要的干扰，更有针对性。比如某个业务需要先完成用户登录，那在重现步骤里就没有必要描述登录操作的细节了，直接使用前置条件“用户已完成登录”")]),a._v(" "),r("h2",{attrs:{id:"缺陷重现步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺陷重现步骤","aria-hidden":"true"}},[a._v("#")]),a._v(" 缺陷重现步骤")]),a._v(" "),r("p",[a._v("用简洁的语言向开发工程师展示缺陷重现的具体操作步骤。")]),a._v(" "),r("p",[a._v("写重现步骤时，要确保这个缺陷是可复现性的，最快捷可以重现的路径，避免不必要的干扰。")]),a._v(" "),r("p",[a._v("应尽量避免笼统的描述，缺乏可操作的具体步骤；出现与缺陷重现不相干的步骤；缺乏对测试数据的相关描述")]),a._v(" "),r("h2",{attrs:{id:"期望结果和实际结果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#期望结果和实际结果","aria-hidden":"true"}},[a._v("#")]),a._v(" 期望结果和实际结果")]),a._v(" "),r("p",[a._v("期望结果来自于对需求的理解，实际结果来自于测试执行的结果。")]),a._v(" "),r("p",[a._v("当描述期望结果时，需要说明应该发生什么，而不是什么不应该发生；描述实际结果时，应该说明发生了什么，而不是什么没有发生。")]),a._v(" "),r("h2",{attrs:{id:"优先级-priority-、严重程度-severity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优先级-priority-、严重程度-severity","aria-hidden":"true"}},[a._v("#")]),a._v(" 优先级(priority)、严重程度(severity)")]),a._v(" "),r("p",[a._v("缺陷优先级是指缺陷必须被修复的紧急程度。表示缺陷工程的属性，会随着项目进度、解决缺陷的成本等因素而变化")]),a._v(" "),r("p",[a._v("严重程度是指因缺陷引起的故障对软件产品的影响程度。表示缺陷本身的属性，通常确定后就不再变化")]),a._v(" "),r("p",[a._v("那么两者之间又有什么关系呢？")]),a._v(" "),r("ol",[r("li",[a._v("缺陷越严重，优先级越高")]),a._v(" "),r("li",[a._v("缺陷影响范围越大，优先级也越高")]),a._v(" "),r("li",[a._v("部分缺陷从用户角度来说不算严重，但是会妨碍测试或者自动化测试的执行，这类缺陷属于典型的严重程度偏低，但是优先级高")]),a._v(" "),r("li",[a._v("部分缺陷虽然严重程度比较高，但考虑到修复成本以及技术难度，也会出现优先级较低的情况")])]),a._v(" "),r("h2",{attrs:{id:"变通方案-workaround"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#变通方案-workaround","aria-hidden":"true"}},[a._v("#")]),a._v(" 变通方案(Workaround)")]),a._v(" "),r("p",[a._v("提供一种临时绕开当前缺陷而不影响产品功能的方式")]),a._v(" "),r("p",[a._v("如果某个严重的缺陷没有任何可行的变通方案，那么不管修复缺陷的代价有多大，优先级一定会是最高的，但要是有简单的变通方案，优先级就不一定是最高的了。")]),a._v(" "),r("h2",{attrs:{id:"根原因分析-root-cause-analysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#根原因分析-root-cause-analysis","aria-hidden":"true"}},[a._v("#")]),a._v(" 根原因分析(Root Cause Analysis)")]),a._v(" "),r("p",[a._v("在发现缺陷的同时，定位出问题的根本原因，清楚的描述缺陷产生的原因并反馈给开发工程师。")]),a._v(" "),r("h2",{attrs:{id:"附件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附件","aria-hidden":"true"}},[a._v("#")]),a._v(" 附件")]),a._v(" "),r("p",[a._v("附件通常是为缺陷的存在提供必要的证据支持，常见的有截图、日志、执行过程的视频等等")])])}],!1,null,null,null);t.default=s.exports}}]);