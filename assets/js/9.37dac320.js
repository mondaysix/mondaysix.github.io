(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{185:function(s,n,e){"use strict";e.r(n);var t=e(0),v=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"svn管理常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svn管理常用操作","aria-hidden":"true"}},[s._v("#")]),s._v(" svn管理常用操作")]),s._v(" "),e("h2",{attrs:{id:"svn服务启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svn服务启动","aria-hidden":"true"}},[s._v("#")]),s._v(" svn服务启动")]),s._v(" "),e("ol",[e("li",[s._v("服务器重启后要先查看svn服务是否是运行状态，可用命令ps aux|grep svnserve")]),s._v(" "),e("li",[s._v("如果服务是启动状态会出现两个进程，一个是有路径的进程，一个是没有路径的进程。如果只有一个进程那么说明服务没有启动，需要重新启动一下服务，可用命令svnserver -d -r <svn版本库的具体地址>")]),s._v(" "),e("li",[s._v("若不确定svn版本库的地址，可用查找路径命令 find / -name svn")]),s._v(" "),e("li",[s._v("启动服务后需要再次查看svn服务的状态，确定服务是否启动ps aux|grep svnserve 此时出现两个进程说明服务已经启动，测试tortoise svn是否可以连接")]),s._v(" "),e("li",[s._v("如果服务没有启动，需要杀死相关进程再重启svn服务，可用命令 kill -9 <进程号>")])])])}],!1,null,null,null);n.default=v.exports}}]);