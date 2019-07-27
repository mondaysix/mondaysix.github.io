(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{179:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"android-知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-知识","aria-hidden":"true"}},[t._v("#")]),t._v(" Android 知识")]),t._v(" "),a("h2",{attrs:{id:"四大组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四大组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 四大组件")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Activity")])])]),t._v(" "),a("p",[a("strong",[t._v("生命周期")]),t._v("：onCreate()--\x3eonStart()--\x3eonResume()--\x3eonPause()--\x3eonStop()---\x3eonRestart()--\x3eonDestroy()")]),t._v(" "),a("p",[t._v("启动Activity：onCreate()--\x3eonStart()--\x3eonResume()然后Activity进入运行状态")]),t._v(" "),a("p",[t._v("当前Activity被其他Activity覆盖,调用onPause()")]),t._v(" "),a("p",[t._v("当前ACTIVITY回到前台，调用OnResume")]),t._v(" "),a("p",[a("strong",[t._v("启动模式")])]),t._v(" "),a("p",[t._v("Standard（每次都会创建一个activity）、")]),t._v(" "),a("p",[t._v("singleTop（栈顶复用）：若需要创建的activity处于栈顶，则直接复用，onNewIntent（传入新的intent）会被调用。如果没有处于栈顶则和standard模式一致")]),t._v(" "),a("p",[t._v("singleTask(栈内复用)：若需要创建的activity处于栈内，则把存在他上面的所有activity都销毁")]),t._v(" "),a("p",[t._v("singleInstance(全局单例模式)：整个系统中只有一个")]),t._v(" "),a("p",[t._v("启动模式方式：")]),t._v(" "),a("p",[t._v("​       manifest.xml中静态指定，launchMode")]),t._v(" "),a("pre",[a("code",[t._v("intent中动态指定：addFlags\n")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Service")])])]),t._v(" "),a("p",[t._v("启动方式：startservice和bindservice")]),t._v(" "),a("p",[t._v("**startservice：**启动一个服务执行后台任务，不进行通信，停止服务使用stopservice")]),t._v(" "),a("p",[t._v("生命周期：startservice—>oncreate---\x3eonstartcommand---\x3eservice running—>ondestroy")]),t._v(" "),a("p",[t._v("**bindservice:**启动服务可以进行通信，停止服务使用unbindservice")]),t._v(" "),a("p",[t._v("生命周期：bindservice---》oncreate---》onbind---》client are bound to service---》onunbind---》ondestroy")]),t._v(" "),a("p",[t._v("service需要注册在manifest")]),t._v(" "),a("p",[t._v("两者的区别：startservice与客户端是否退出没有关联关系，即使客户端停止运行，服务同样也会在后台运行。bindservice是与客户端绑定的，客户端退出，service也自动停止")]),t._v(" "),a("p",[a("strong",[t._v("BroadcastReceiver")])]),t._v(" "),a("p",[t._v("静态注册和动态注册")]),t._v(" "),a("p",[a("strong",[t._v("ContentProvider")])]),t._v(" "),a("h2",{attrs:{id:"aidl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aidl","aria-hidden":"true"}},[t._v("#")]),t._v(" AIDL")]),t._v(" "),a("p",[t._v("Android Interface Definition Language，接口定义语言，"),a("strong",[t._v("为了实现进程间的通信")])]),t._v(" "),a("p",[t._v("每个进程都由自己的Dalvik VM实例，一块独立的内存，存储自己的数据，执行自己的操作。不同的进程不知道相互的信息，则出现了AIDL，通过AIDL制定一些规则，规定它们能进行哪些操作，一个进程可以访问另外一个进程的数据")]),t._v(" "),a("p",[t._v("数据类实现Parcelable接口，将需要传输的数据转化为能够在内存之间流通的形式，即序列化与反序列化")]),t._v(" "),a("h2",{attrs:{id:"view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view","aria-hidden":"true"}},[t._v("#")]),t._v(" View")]),t._v(" "),a("p",[a("strong",[t._v("PopupMenu")])]),t._v(" "),a("p",[t._v("使用步骤：")]),t._v(" "),a("p",[t._v("1、res目录下创建menu文件夹，用例存放菜单资源文件，比如新建一个case_item.xml")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("menu xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("item\n        android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/test_fun1"')]),t._v("\n        android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_fun1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("item\n        android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@+id/test_fun2"')]),t._v("\n        android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_fun1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("menu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("p",[t._v("2、展示菜单项")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建PopupMenu对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PopupMenu")]),t._v(" popup"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PopupMenu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将R.menu.popup_menu菜单资源加载到popup菜单中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMenuInflater")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inflate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("menu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("case_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" popup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMenu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置点击事件")]),t._v("\npopup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOnMenuItemClickListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PopupMenu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnMenuItemClickListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMenuItemClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MenuItem")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//展示列表")]),t._v("\npopup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//隐藏该对话框")]),t._v("\npopup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dismiss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                           \n")])])]),a("p",[a("strong",[t._v("Adapter")])]),t._v(" "),a("p",[t._v("BaseAdapter、ArrayAdapter、TreeListViewAdapter")]),t._v(" "),a("h2",{attrs:{id:"应用问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用问题")]),t._v(" "),a("p",[a("strong",[t._v("app崩溃后自动重启问题")])]),t._v(" "),a("p",[t._v("https://www.jianshu.com/p/eb34c5df30e5")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/BeyondWorlds/article/details/79759348")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CrashHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UncaughtExceptionHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDefaultUncaughtExceptionHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uncaughtException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),t._v(" thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCause")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCause")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" errInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            errInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uncaughtException: "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StackTraceElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" stackTraceElements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStackTrace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StackTraceElement")]),t._v(" ste "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" stackTraceElements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                errInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\tat "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ste"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" errInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exception"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结束当前进程，关闭当前的JVM")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);