# [一个随机点名页面](https://xiaomingtang.github.io/dianming/)
## Version
v1.1
## Introduction
一个随机点名页面，自行修改`js/index.js`中行首的`_students`变量为学生名字即可。
## Feature
* 为了预防点名过程中不小心刷新页面，随机序列的默认周期为1自然日，意即，在1自然日内（0-24时），刷新页面得到的随机序列是固定的（例如今天是CDABE，明天是BEACD）（**注意**，虽然随机序列不变，但**缺席状态会丢失**，所以请避免点名过程中刷新页面。）。
* 为了满足部分确实需要重新随机的需求，因此添加了`强制随机`按钮，点击`强制随机`按钮，则会生成新的随机点名序列。
* （v1.1新增）可以标记缺席，点名结束后会统计出所有缺席的人名。
* **由于部分用户只能使用windows自带的文本编辑器，因此本程序编码均为utf-8-BOM**，有需要的用户请自行修改编码。
## TODO
* Message提示功能。
* 缺席状态本地存储功能（用以对抗点名过程中刷新页面导致的缺席状态的丢失）。
* 自由调节`广播状态（broadcast-mode）`下字体大小。