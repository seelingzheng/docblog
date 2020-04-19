(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{483:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("因为最近在处理一些数据的时候用到 spatial adjustment 这个工具，就想着能否通过 arcpy 来实现整体图形偏移，目前的代码只实现了根据一个固定的经纬度差值或者墨卡托差值来做整体偏移")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" arcpy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" arcpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" env\n\nenv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("workspace "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'F:\\gisdata\\arcpy_test\\spatialAdjust'")]),s._v("\n\npoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" arcpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\narray "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" arcpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" arcpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("da"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UpdateCursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'polygon2.shp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SHAPE@'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        g "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" pts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" pt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" pts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("X "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("X "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.315567")]),s._v("\n                    point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.055089")]),s._v("\n                    array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("point"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s 数据处理完成'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n        geometry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" arcpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Polygon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arcpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SpatialReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4326")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("u'polygon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后一个点位和第一个点位相同组合成一个polygon")]),s._v("\n            geometry  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" arcpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Polygon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arcpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SpatialReference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4326")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("removeAll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" geometry\n        cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("updateRow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s 图形更新完成'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);