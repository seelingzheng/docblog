(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{483:function(e,r,s){"use strict";s.r(r);var t=s(2),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"geoserver-服务部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geoserver-服务部署"}},[e._v("#")]),e._v(" geoserver 服务部署")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("文件下载")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("安装版本下载 "),s("a",{attrs:{href:"http://geoserver.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("网址"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[e._v("插件下载 个版本下均有对应版本的的插件\n"),s("img",{attrs:{src:"/images/geoserver/deploy5.jpg",alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("插件集成：将下载的 jar 包文件放入到 "),s("strong",[e._v("geoserver\\WEB-INF\\lib")]),e._v(" 文件夹下")])]),e._v(" "),s("li",[s("p",[e._v("geoserver 跨域问题")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    链接：https://pan.baidu.com/s/1i0ZZCvVqzFWT6XkfAPf7Tg\n    提取码：关注微信公众号获取\n    # 内附配置说明\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("直接部署版本下载")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 该包是用tomcat 和 GeoServer war包部署，使用到的插件是 mysql，也解决了跨域访问的验证\n链接：https://pan.baidu.com/s/16Bk3WV6_fbXAu6FD-zdmVA\n提取码：关注微信公众号获取\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])])])])]),e._v(" "),s("h2",{attrs:{id:"服务图层发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务图层发布"}},[e._v("#")]),e._v(" 服务图层发布")]),e._v(" "),s("h3",{attrs:{id:"登陆服务管理页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登陆服务管理页"}},[e._v("#")]),e._v(" 登陆服务管理页")]),e._v(" "),s("ul",[s("li",[e._v("打开网址 http://localhost:12009/geoserver 默认端口是：8080 默认登陆用户名和密码是 admin/geoserver")])]),e._v(" "),s("h3",{attrs:{id:"新建工作区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建工作区"}},[e._v("#")]),e._v(" 新建工作区")]),e._v(" "),s("ul",[s("li",[e._v("点击左侧 "),s("strong",[e._v("数据 -> 工作区")])]),e._v(" "),s("li",[e._v("填写 "),s("strong",[e._v("name")]),e._v(" 和 "),s("strong",[e._v("命令空间 URI")]),s("br"),e._v(" "),s("img",{attrs:{src:"/images/geoserver/deploy_workplace.jpg",alt:""}})])]),e._v(" "),s("h3",{attrs:{id:"连接-mysql-数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接-mysql-数据库"}},[e._v("#")]),e._v(" 连接 mysql 数据库")]),e._v(" "),s("ul",[s("li",[e._v("点击左侧 "),s("strong",[e._v("数据 -> 数据存储")])]),e._v(" "),s("li",[e._v("点击 "),s("strong",[e._v("添加新的数据存储")]),s("br"),e._v(" "),s("img",{attrs:{src:"/images/geoserver/deploy.jpg",alt:""}})]),e._v(" "),s("li",[e._v("填入数据库连接信息"),s("br"),e._v(" "),s("img",{attrs:{src:"/images/geoserver/deploy1.jpg",alt:""}})]),e._v(" "),s("li",[e._v("连接成功数据库之后，选择需要发布的表，发布服务"),s("br"),e._v(" "),s("img",{attrs:{src:"/images/geoserver/deploy2.jpg",alt:""}})]),e._v(" "),s("li",[e._v("图层发布服务参数设置：主要是设置投影和样式\n"),s("ul",[s("li",[e._v("投影\n"),s("ul",[s("li",[e._v("本机 SRS 通常是直接识别出来，如果未识别出来，可以不用填写")]),e._v(" "),s("li",[e._v("定义 SRS 通过查找 进行选择需要的投影，这里使用的是 4326")]),e._v(" "),s("li",[e._v("边框中 Native Bounding Box 通常也是根据数据自动识别或者点击"),s("strong",[e._v("从数据中计算")]),e._v("，如果没有可以不用填写")]),e._v(" "),s("li",[e._v("纬度/经度边框 此为必填项，如果知道可以直接填写，也可以通过数据填写，如果不知道，可以这种一个【-180,-90,180,90】全球范围，\n"),s("img",{attrs:{src:"/images/geoserver/deploy3.jpg",alt:""}})])])]),e._v(" "),s("li",[e._v("样式 ，点击顶部的发布，然后在下部分找到 "),s("strong",[e._v("Layer Settings")]),e._v(" 因为发布的图层是面图层所以在 Default Style 中选择 polygon，其他图像均可在下拉列表中找到对应的样式，此项如果不设置在老版本 geoserver 会报错"),s("br"),e._v(" "),s("img",{attrs:{src:"/images/geoserver/deploy4.jpg",alt:""}})])])]),e._v(" "),s("li",[e._v("点击发布")]),e._v(" "),s("li",[e._v("图层服务查看 "),s("strong",[s("em",[e._v("左键->图层组")])])]),e._v(" "),s("li",[e._v("图层服务预览 "),s("strong",[s("em",[e._v("左键->Layer Preview")])]),e._v(" "),s("img",{attrs:{src:"/images/geoserver/deploy6.jpg",alt:""}})]),e._v(" "),s("li",[e._v("编辑更新时报错修改：\n"),s("img",{attrs:{src:"/images/geoserver/deploy8.jpg",alt:""}}),e._v(" "),s("img",{attrs:{src:"/images/geoserver/deploy7.jpg",alt:""}})])])])}),[],!1,null,null,null);r.default=a.exports}}]);