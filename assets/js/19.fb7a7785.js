(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{472:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[t("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/ImageryProvider.html?classFilter=imageryprovide",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方 api"),t("OutboundLink")],1),t("br"),s._v(" "),t("a",{attrs:{href:"http://cv3.zhengqj.cc/imagery",target:"_blank",rel:"noopener noreferrer"}},[s._v("相关示例"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"内置-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置-api"}},[s._v("#")]),s._v(" 内置 API")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ArcGisMapServerImageryProvider\n支持ArcGIS Online和Server的相关服务\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" IonImageryProvider\nCesium Ion 在线服务\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" createOpenStreetMapImageryProvider\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OSM")]),s._v("影像服务，根据不同的url选择不同的风格\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" createTileMapServiceImageryProvider\n看文档是根据MapTiler规范，貌似是可以自己下载瓦片，发布服务，类似ArcGIS影像服务的过程\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" GridImageryProvider\n渲染每一个瓦片内部的格网，了解每个瓦片的精细度\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" MapboxImageryProvider\nMapbox影像服务，根据mapId指定地图风格\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" SingleTileImageryProvider\n单张图片的影像服务，适合离线数据或对影像数据要求并不高的场景下\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" TileCoordinatesImageryProvider\n渲染每一个瓦片的围，方便调试\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" UrlTemplateImageryProvider\n指定url的format模版，方便用户实现自己的Provider，比如国内的高德，腾讯等影像服务，url都是一个固定的规范，都可以通过该Provider轻松实现。而"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OSM")]),s._v("也是通过该类实现的。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" WebMapServiceImageryProvider\n符合"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WMS")]),s._v("规范的影像服务都可以通过该类封装，指定具体参数实现\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" WebMapTileServiceImageryProvider\n服务"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WMTS1")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("规范的影像服务，都可以通过该类实现，比如国内的天地图\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"加载高德地图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载高德地图"}},[s._v("#")]),s._v(" 加载高德地图")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewerLayers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imageryLayers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" layer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UrlTemplateImageryProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\turl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tsubdomains"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewerLayers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addImageryProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("layer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"加载本地-wms-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载本地-wms-服务"}},[s._v("#")]),s._v(" 加载本地 wms 服务")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewerLayers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imageryLayers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" layer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WebMapServiceImageryProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\turl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/geoserver/topp/wms'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tlayers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'topp:states'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tproxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DefaultProxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proxy/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewerLayers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addImageryProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("layer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"加载离线切片服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载离线切片服务"}},[s._v("#")]),s._v(" 加载离线切片服务")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//需要在根目录下有tilemapservice.xml文件，可以通过切片下软件生成，具体可以看 参考资料2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewerLayers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imageryLayers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" layer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cesium"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("createTileMapServiceImageryProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\turl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'本地离线切片服务地址'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewerLayers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addImageryProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("layer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("blockquote",[t("p",[s._v("参考资料"),t("br"),s._v("\n[1]http://blog.sina.com.cn/s/blog_15e866bbe0102xmo5.html"),t("br"),s._v("\n[2]https://www.jianshu.com/p/7b5476d8a7f6")])]),s._v(" "),t("h2",{attrs:{id:"_3-https-www-jianshu-com-p-1bde8a358955"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-https-www-jianshu-com-p-1bde8a358955"}},[s._v("#")]),s._v(" [3]https://www.jianshu.com/p/1bde8a358955")]),s._v(" "),t("p",[s._v("更多内容，欢迎关注公众号"),t("br"),s._v(" "),t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5310582-3cf76fa57d99fb99.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"seeling_GIS"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);