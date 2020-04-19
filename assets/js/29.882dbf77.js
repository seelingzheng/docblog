(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{487:function(e,n,s){"use strict";s.r(n);var a=s(2),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("strong",[e._v('关注公众号"seeling_GIS"，菜单栏点击【获取资料】，领取视频学习资料')])]),e._v(" "),s("p",[e._v("在做 Webgis 相关功能读加载几何图形时，需要的是几何图形的 GeoJson 格式的数据；Arcpy 中的 Geometry、FeatureSet、RecordSet 对象 提供了 JSON 属性可以直接获取到几何图形的 GeoJson 格式的数据；")]),e._v(" "),s("p",[e._v("下面举例通过 Geometry 对象获取到几何图形的 json 与 Extent 属性值；具体代码与详细的注释如下：")]),e._v(" "),s("h3",{attrs:{id:"方式一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[e._v("#")]),e._v(" 方式一")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#coding=utf-8\nimport arcpy\nfrom arcpy import  env\nimport  os,sys,json\n\nreload(sys)\nsys.setdefaultencoding('utf8')\n\nenv.workspace = os.getcwd()\n\nshpFile='/shps/C.shp'   #图层路径\n\nSearchCursor=arcpy.SearchCursor(shpFile)\nfor row in SearchCursor:\n   Geo=row.shape\n   GeoJsonStr=Geo.JSON   #获得图形的json格式数据\n   print GeoJsonStr\n   print type(GeoJsonStr)\n   # 把字符串格式的Geojson转换为字典格式，方便获取里面的信息\n   GeoJon=json.loads(GeoJsonStr)\n   print \"GeoJon Type:\",type(GeoJon)    #通过type函数查看变量的数据类型\n   print GeoJon\n     #输出信息\n   print 'rings：',GeoJon['rings']    #获取到Geojson里的rings信息\n   print \"wkt:\",GeoJon['spatialReference']['wkt']   #获取参考系信息\n\n   #获取图形的四至信息（最大最小的XY）并输出\n   extent=Geo.extent\n   print \"XMax:\",extent.XMax\n   print \"YMax:\", extent.YMax\n   print \"XMin:\", extent.XMin\n   print \"YMin:\", extent.YMin\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br")])]),s("p",[e._v("输出结果")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"rings":[[[444898.63150000013,4414552.9708999991],[444984.29050000012,4414555.2860000003],[444983.62899999972,4414566.8615000006],[444982.96760000009,4414585.7130999994],[444983.62899999972,4414603.9033000004],[444984.95199999958,4414622.4242000002],[445038.1995000001,4414623.7470999993],[445042.49890000001,4414501.0462999996],[444957.17059999984,4414499.7234000005],[444956.17850000039,4414541.0646000002],[444898.96219999995,4414541.7260999996],[444898.63150000013,4414552.9708999991]]],"spatialReference":{"wkt":"PROJCS[\\"CGCS_2000_Transverse_Mercator\\",GEOGCS[\\"GCS_CGCS_2000\\",DATUM[\\"D_CGCS_2000\\",SPHEROID[\\"CGCS_2000\\",6378137.0,298.257222101]],PRIMEM[\\"Greenwich\\",0.0],UNIT[\\"Degree\\",0.0174532925199433]],PROJECTION[\\"Transverse_Mercator\\"],PARAMETER[\\"false_easting\\",500000.0],PARAMETER[\\"false_northing\\",0.0],PARAMETER[\\"central_meridian\\",117.0],PARAMETER[\\"scale_factor\\",1.0],PARAMETER[\\"latitude_of_origin\\",0.0],UNIT[\\"Meter\\",1.0]]"}}\n<type \'unicode\'>\nGeoJon Type: <type \'dict\'>\n{u\'rings\': [[[444898.63150000013, 4414552.970899999], [444984.2905000001, 4414555.286], [444983.6289999997, 4414566.861500001], [444982.9676000001, 4414585.713099999], [444983.6289999997, 4414603.9033], [444984.9519999996, 4414622.4242], [445038.1995000001, 4414623.747099999], [445042.4989, 4414501.0463], [444957.17059999984, 4414499.7234000005], [444956.1785000004, 4414541.0646], [444898.96219999995, 4414541.7261], [444898.63150000013, 4414552.970899999]]], u\'spatialReference\': {u\'wkt\': u\'PROJCS["CGCS_2000_Transverse_Mercator",GEOGCS["GCS_CGCS_2000",DATUM["D_CGCS_2000",SPHEROID["CGCS_2000",6378137.0,298.257222101]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["false_easting",500000.0],PARAMETER["false_northing",0.0],PARAMETER["central_meridian",117.0],PARAMETER["scale_factor",1.0],PARAMETER["latitude_of_origin",0.0],UNIT["Meter",1.0]]\'}}\nrings：[[[444898.63150000013, 4414552.970899999], [444984.2905000001, 4414555.286], [444983.6289999997, 4414566.861500001], [444982.9676000001, 4414585.713099999], [444983.6289999997, 4414603.9033], [444984.9519999996, 4414622.4242], [445038.1995000001, 4414623.747099999], [445042.4989, 4414501.0463], [444957.17059999984, 4414499.7234000005], [444956.1785000004, 4414541.0646], [444898.96219999995, 4414541.7261], [444898.63150000013, 4414552.970899999]]]\nwkt: PROJCS["CGCS_2000_Transverse_Mercator",GEOGCS["GCS_CGCS_2000",DATUM["D_CGCS_2000",SPHEROID["CGCS_2000",6378137.0,298.257222101]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["false_easting",500000.0],PARAMETER["false_northing",0.0],PARAMETER["central_meridian",117.0],PARAMETER["scale_factor",1.0],PARAMETER["latitude_of_origin",0.0],UNIT["Meter",1.0]]\nXMax: 445042.4989\nYMax: 4414623.7471\nXMin: 444898.6315\nYMin: 4414499.7234\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("ArcGIS10.1 后的版本添加了 da 操作数据模块，引入了令牌的功能，可以根据自己需求直接获取对应的信息，令牌相关知识可以参考官网帮助文档；例如通过")]),e._v(" "),s("p",[e._v("SHAPE@JSON 令牌获得几何图形的 json 信息。下面的代码使用 with 的好处是使用完的游标后会自动释放资源，避免资源被占用。")]),e._v(" "),s("h3",{attrs:{id:"方式二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[e._v("#")]),e._v(" 方式二")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("with arcpy.da.SearchCursor(shpFile,['SHAPE@JSON','SHAPE@WKT','SHAPE@AREA']) as SearchCursor:\n    for row in SearchCursor:\n        GeoJsonStr=row[0]\n        WKTStr = row[1]\n        AREA = row[2]\n        print \"GeoJsonStr\",GeoJsonStr\n        GeoJson = json.loads(GeoJsonStr)\n        print 'rings：', GeoJson['rings']  # 获取到Geojson里的rings信息\n        print \"wkt:\", GeoJson['spatialReference']['wkt']  # 获取参考系信息\n        print \"WKTStr\", WKTStr\n        print \"AREA:\", AREA\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("输出结果")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('GeoJsonStr {"rings":[[[444898.63150000013,4414552.9708999991],[444984.29050000012,4414555.2860000003],[444983.62899999972,4414566.8615000006],[444982.96760000009,4414585.7130999994],[444983.62899999972,4414603.9033000004],[444984.95199999958,4414622.4242000002],[445038.1995000001,4414623.7470999993],[445042.49890000001,4414501.0462999996],[444957.17059999984,4414499.7234000005],[444956.17850000039,4414541.0646000002],[444898.96219999995,4414541.7260999996],[444898.63150000013,4414552.9708999991]]],"spatialReference":{"wkt":"PROJCS[\\"CGCS_2000_Transverse_Mercator\\",GEOGCS[\\"GCS_CGCS_2000\\",DATUM[\\"D_CGCS_2000\\",SPHEROID[\\"CGCS_2000\\",6378137.0,298.257222101]],PRIMEM[\\"Greenwich\\",0.0],UNIT[\\"Degree\\",0.0174532925199433]],PROJECTION[\\"Transverse_Mercator\\"],PARAMETER[\\"false_easting\\",500000.0],PARAMETER[\\"false_northing\\",0.0],PARAMETER[\\"central_meridian\\",117.0],PARAMETER[\\"scale_factor\\",1.0],PARAMETER[\\"latitude_of_origin\\",0.0],UNIT[\\"Meter\\",1.0]]"}}\nrings：[[[444898.63150000013, 4414552.970899999], [444984.2905000001, 4414555.286], [444983.6289999997, 4414566.861500001], [444982.9676000001, 4414585.713099999], [444983.6289999997, 4414603.9033], [444984.9519999996, 4414622.4242], [445038.1995000001, 4414623.747099999], [445042.4989, 4414501.0463], [444957.17059999984, 4414499.7234000005], [444956.1785000004, 4414541.0646], [444898.96219999995, 4414541.7261], [444898.63150000013, 4414552.970899999]]]\nwkt: PROJCS["CGCS_2000_Transverse_Mercator",GEOGCS["GCS_CGCS_2000",DATUM["D_CGCS_2000",SPHEROID["CGCS_2000",6378137.0,298.257222101]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["false_easting",500000.0],PARAMETER["false_northing",0.0],PARAMETER["central_meridian",117.0],PARAMETER["scale_factor",1.0],PARAMETER["latitude_of_origin",0.0],UNIT["Meter",1.0]]\nWKTStr MULTIPOLYGON (((444898.96219999995 4414541.7260999996, 444956.17850000039 4414541.0646000002, 444957.17059999984 4414499.7234000005, 445042.49890000001 4414501.0462999996, 445038.1995000001 4414623.7470999993, 444984.95199999958 4414622.4242000002, 444983.62899999972 4414603.9033000004, 444982.96760000009 4414585.7130999994, 444983.62899999972 4414566.8615000006, 444984.29050000012 4414555.2860000003, 444898.63150000013 4414552.9708999991, 444898.96219999995 4414541.7260999996)))\nAREA: 9143.20710096\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("strong",[e._v("更多 Python 与 GIS 开发相关")])]),e._v(" "),s("hr"),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIyNDYzMjU2NQ==&mid=2247483718&idx=1&sn=66d8c897b1993a468cae8d986570476b&chksm=e80d4adcdf7ac3ca2bcfd180ccc59144c05f6291cf8fdf5c081cc1944ed1f3b38bfa405b6b62&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Python@GIS】在 leaflet 加载 flask 后台数据 （一）"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIyNDYzMjU2NQ==&mid=2247483722&idx=1&sn=22e8b6a1b9ae0cfe4af4b07edf1d294b&chksm=e80d4ad0df7ac3c60853c7ec2335e59a4eb1ab0734551f4d2652e3abbc7f389d8d9d06a52d14&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Python@GIS】在 leaflet 加载 flask 后台数据 （二）"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIyNDYzMjU2NQ==&mid=2247483750&idx=1&sn=f762f2b94536ed5d9f00931a887a708b&chksm=e80d4afcdf7ac3eaee279aa04f940d6cebd831104cce62410594c3b8e070ddeef9189a08a711&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Python@GIS】在 leaflet 加载 flask 后台数据 （三）"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIyNDYzMjU2NQ==&mid=2247483787&idx=1&sn=ed79f6a4eeff123079e3e55d83973b98&chksm=e80d4a11df7ac3074d4bfa16110dd1b199ddad07bb4f73930283358cb64cef2ceaecf17b24c2&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Python@arcpy】 GeoDataBase 导出为 Shapefile"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIyNDYzMjU2NQ==&mid=2247483792&idx=1&sn=9db272ecd747c57dc851f90450a35883&chksm=e80d4a0adf7ac31c9967b1d52710ade8731ae1b74c5fad8aeb4c38f45e81f8c5fcb8c80a141c&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Python@SuperMap】shapefile 导入到超图文件数据集(udb)"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIyNDYzMjU2NQ==&mid=2247483746&idx=3&sn=2d46d39f7b6022fd10f289379c501d11&chksm=e80d4af8df7ac3ee74c9dee63395dff35383432da9c63d5bfa501e6d9ff49703b132fa1ead92&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Python@arcpy】批量偏移点线面"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIyNDYzMjU2NQ==&mid=2247483850&idx=1&sn=bc70b2a544d483689d5c1a12848cfe38&chksm=e80d4a50df7ac346f65b65bb197387736f5bbdfe100c2ca1a1ef4eaa2f2aaf8acc26cc0b86b6&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Python@arcpy】ArcMap 中使用 ArcPy 实现 Geometry 与 WKT 的相互转换"),s("OutboundLink")],1)]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("更多精彩 扫描二维码或者搜索公众号 ‘seeling_GIS’")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5310582-3cf76fa57d99fb99.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"seeling_GIS"}})])])}),[],!1,null,null,null);n.default=r.exports}}]);