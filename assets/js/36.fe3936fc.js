(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{469:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[s._v("#")]),s._v(" 开发环境")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("conda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.8")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过 anaconda 安装 后自带")]),s._v("\npython"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),s._v("\n平台：winsows "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"依赖环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖环境配置"}},[s._v("#")]),s._v(" 依赖环境配置")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("直接下载超图发布的，配置好的环境")]),s._v(" "),a("blockquote",[a("p",[s._v("miniconda 链接:https://pan.baidu.com/s/1T9dZjG_J3NXu45Sf6y-NHw 密码:nfei"),a("br"),s._v("\njava 环境 链接：https://pan.baidu.com/s/1lJkvo3yLNMbu3Zdy-YcggQ 提取码：l3ob")])])]),s._v(" "),a("li",[a("p",[s._v("环境配置")]),s._v(" "),a("ul",[a("li",[s._v("解压 miniconda")]),s._v(" "),a("li",[s._v("解压 java 环境包，然后配置 Bin 文件夹路径到 path 环境变量下")])])]),s._v(" "),a("li",[a("p",[s._v("代码如下")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Time    : 2020/3/17 23:59")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author  : seelingzheng")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @公众号  : seeling_gis")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @File    : importshp.py")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Software: PyCharm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("from  iobjectspy.conversion import  import_shape\nimport os,sys\nfrom os import path")]),s._v(" "),a("p",[s._v("shp_dir = r'F:\\gisdata\\实验数据\\丰台gdb\\output\\样例'")]),s._v(" "),a("p",[s._v("udb_dir = r'F:\\gisdata\\实验数据\\丰台gdb\\test.UDB'")]),s._v(" "),a("p",[s._v("def loop_file(file):\nfiles = os.listdir(file)\nfor f in files:\nnew_file =  file + os.sep + f\nprint (new_file)\nif path.isdir(new_file):\nloop_file(new_file)\nelif  path.split(new_file)[1][-3:] == 'shp':\nprint(new_file+'*'*4)\nshp_udb(new_file)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n\ndef shp_udb(f):\n    result = import_shape(f,udb_dir)\n    print_info(result)\n\ndef print_info(result):\n    if result is not None:\n        for item in result:\n            name = item\n            if not isinstance(item, str):\n                name = item.name\n            sys.stdout.write('导入数据成功，导入到数据集 %s\\n'% name)\n\nif __name__ == '__main__':\n    loop_file(shp_dir)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\n# 环境配置中可能出现的问题\n1. 报 numpy 版本问题，可以卸载原来的重新安装如下版本，这个版本号是超图技术客服给的\n ```python\n # 卸载 numpy\n pip uninstall numpy  imgaug\n # 重新安装\n pip install numpy == 1.15.0\n pip install opencv-python==3.1.0.5\n pip install imgaug==0.2.6\n pip install opencv-python-headless\n\n ```\n2. pip 镜像环境配置\n```python\n#windows 下\n%HOMEPATH%\\pip\\pip.ini  #如果没有可以手动创建\n#在pip.ini文件中添加\n [global]\n index-url = http://mirrors.aliyun.com/pypi/simple/\n [install]\n trusted-host=mirrors.aliyun.com\n\n # 也可以直接在 使用pip的时候在后面加入 镜像参数\n pip install packagename  -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);