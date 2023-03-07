## website-view

自动统计网站 UV 和 PV 统计工具

## 快速开始


### 导入库

```html
<script src="https://cdn.jsdelivr.net/gh/dengjiawen8955/website-view/website-view.min.js"></script>
<!-- 推荐指定版本 -->
<script src="https://cdn.jsdelivr.net/gh/dengjiawen8955/website-view@v0.0.2/website-view.min.js"></script>
```

或者下载到本地，从本地导入

```html
<script src="assert/website-view.min.js"></script>
```

### 快速使用


```html
<span id="website_pv_container" style='display:none'>
    👀 本站总访问量：<span id="website_pv"></span> 次
</span>
<span id="website_uv_container" style='display:none'>
    | 🚴‍♂️ 本站总访客数：<span id="website_uv"></span> 人
</span>
```

比如基于 docsify 的 _coverpage.md 如下

```markdown
# bmft-blog <small>0.0</small>

> 邓嘉文Jarvan的个人博客。

<br>

<span id="website_pv_container" style='display:none'>
    👀 本站总访问量：<span id="website_pv"></span> 次
</span>
<span id="website_uv_container" style='display:none'>
    | 🚴‍♂️ 本站总访客数：<span id="website_uv"></span> 人
</span>

<br>

[GitHub](https://github.com/dengjiawen8955)
[开始阅读](/README.md)
```


![效果图](https://markdown-1304103443.cos.ap-guangzhou.myqcloud.com/2022-02-0420230306174022.png)
