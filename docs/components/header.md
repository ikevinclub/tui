# header

## 布局a
::: demo
```html
<html> <!-- 删除html标签 -->
    <div class="tui-header type-a">
        <div class="tui-header-logo">
            <img src="" alt="" name="logo">
        </div>
        <div class="tui-header-nav">
            <ul>
                <li>
                    <a href="">首页</a>
                </li>
                <li>
                    <a>一级菜单</a>
                    <ul>
                        <li>
                            <a href="">二级菜单</a>
                        </li>
                    </ul>
                </li>
                <li class="active">
                    <a href="">一级菜单</a>
                </li>
            </ul>
        </div>
    </div>
</html> <!-- 删除html标签 -->
<style>
.tui-header.type-a {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 100px;
    padding: 0 10px;
    background-color: #3ca4e4;
}
.tui-header.type-a .tui-header-logo {
    width: 140px;
    height: 80px;
    margin-right: 20px;
    /* 替换start */
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwcHgiIGhlaWdodD0iODBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI1MDAiPjx0ZXh0IGZpbGw9IiNGRkZGRkYiPjx0c3BhbiB4PSIzNSIgeT0iNDkiPkxPR088L3RzcGFuPjwvdGV4dD48L2c+PC9zdmc+) center no-repeat;
    border: 1px dashed #fff;
    /* 替换end */
}
.tui-header.type-a .tui-header-nav {
    flex: 1;
}
.tui-header.type-a .tui-header-nav ul {
    margin: 0;
    padding: 0;
}
.tui-header.type-a .tui-header-nav > ul {
    width: 100%;
    display: flex;
}
.tui-header.type-a .tui-header-nav > ul > li a {
    display: block;
    padding: 0.5em 0.5em;
    font-size: 14px;
    color: #2C3E50;
    transition: all 0.3s ease;
    user-select: none;
}
.tui-header.type-a .tui-header-nav > ul > li > a {
    border-radius: 3px;
    padding: 0.5em 1.5em;
}
.tui-header.type-a .tui-header-nav > ul > li a:hover {
    background-color: #47b4f7;
    text-decoration: none !important;
}
.tui-header.type-a .tui-header-nav > ul > li.active {
    box-shadow: 0 2px 0 #fff
}
.tui-header.type-a .tui-header-nav > ul > li.active > a {
    color: #fff;
}
.tui-header.type-a .tui-header-nav > ul > li > a + ul {
    visibility: hidden;
    position: absolute;
    z-index: 2;
    min-width: 150px; 
    padding: 5px 0;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    transition: all 0.2s ease 0.3s;
    transform-origin: 0% 0%;
    transform: rotateX(90deg);
}
.tui-header.type-a .tui-header-nav > ul > li a:not([href])::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: calc(50% - 5px);
    right: 4px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PHBvbHlsaW5lIHN0cm9rZT0iIzJDM0U1MCIgcG9pbnRzPSIwLjUgMy41IDUgNi41IDkuNSAzLjUiPjwvcG9seWxpbmU+PC9nPjwvc3ZnPg==);
    transition: all 0.2s ease 0.3s;
}
.tui-header.type-a .tui-header-nav > ul > li:hover a:not([href])::after {
    transform: rotate(180deg);
}
.tui-header.type-a .tui-header-nav > ul > li:hover > ul {
    visibility: visible;
    transform: rotateX(0deg);
}
</style>
```
:::

## 布局b

::: demo
```html
<html> <!-- 删除html标签 -->
    <div class="tui-header type-b">
        <div class="tui-header-logo">
            <img src="" alt="" name="logo">
        </div>
        <div class="tui-header-nav">
            <ul>
                <li>
                    <a href="">首页</a>
                </li>
                <li>
                    <a>一级菜单</a>
                    <ul>
                        <li>
                            <a href="">二级菜单</a>
                        </li>
                    </ul>
                </li>
                <li class="active">
                    <a href="">一级菜单</a>
                </li>
            </ul>
            <input type="text" placeholder="搜索">
        </div>
    </div>
</html> <!-- 删除html标签 -->
<style>
.tui-header.type-b {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    background-color: #3ca4e4;
}
.tui-header.type-b .tui-header-logo {
    width: 440px;
    height: 80px;
    margin: 0 auto;
    border: 1px dashed #fff;
    text-align: center;
     /* 替换start */
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwcHgiIGhlaWdodD0iODBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI1MDAiPjx0ZXh0IGZpbGw9IiNGRkZGRkYiPjx0c3BhbiB4PSIzNSIgeT0iNDkiPkxPR088L3RzcGFuPjwvdGV4dD48L2c+PC9zdmc+) center no-repeat;
    border: 1px dashed #fff;
    /* 替换end */
}
.tui-header.type-b .tui-header-nav {
    display: flex;
    align-items: center;
    margin-top: 1rem;
}
.tui-header.type-b .tui-header-nav > ul {
    display: flex;
}
.tui-header.type-b .tui-header-nav ul {
    margin: 0;
    padding: 0;
}
.tui-header.type-b .tui-header-nav > ul > li a {
    display: block;
    padding: 0.5em 0.5em;
    font-size: 14px;
    color: #2C3E50;
    transition: all 0.3s ease;
    user-select: none;
}
.tui-header.type-b .tui-header-nav > ul > li > a {
    border-radius: 3px;
    padding: 0.5em 1.5em;
}
.tui-header.type-b .tui-header-nav > ul > li a:hover {
    background-color: #47b4f7;
    text-decoration: none !important;
}
.tui-header.type-b .tui-header-nav > ul > li.active {
    box-shadow: 0 2px 0 #fff
}
.tui-header.type-b .tui-header-nav > ul > li.active > a {
    color: #fff;
}
.tui-header.type-b .tui-header-nav > ul > li > a + ul {
    visibility: hidden;
    position: absolute;
    z-index: 2;
    min-width: 150px; 
    padding: 5px 0;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    transition: all 0.2s ease 0.3s;
    transform-origin: 0% 0%;
    transform: rotateX(90deg);
}
.tui-header.type-b .tui-header-nav > ul > li a:not([href])::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: calc(50% - 5px);
    right: 4px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PHBvbHlsaW5lIHN0cm9rZT0iIzJDM0U1MCIgcG9pbnRzPSIwLjUgMy41IDUgNi41IDkuNSAzLjUiPjwvcG9seWxpbmU+PC9nPjwvc3ZnPg==);
    transition: all 0.2s ease 0.3s;
}
.tui-header.type-b .tui-header-nav > ul > li:hover a:not([href])::after {
    transform: rotate(180deg);
}
.tui-header.type-b .tui-header-nav > ul > li:hover > ul {
    visibility: visible;
    transform: rotateX(0deg);
}
.tui-header.type-b .tui-header-nav input {
    display: block;
    width: 100px;
    margin-left: auto;
    padding: 0.4rem 0.5rem 0.4rem 2rem;
    border-radius: 1rem;
    background-color: transparent;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOSwwLjk5OTk5OTc0OSBDMTIuMDU2ODAwNywwLjk5OTk5OTc0OSAxNC44NDY0OTc0LDIuNzQxNTg5OTQgMTYuMTg4MzkyNiw1LjQ4ODEwNTU2IEMxNy41MzAyODc3LDguMjM0NjIxMTkgMTcuMTg5Nzg2MiwxMS41MDU3MzYyIDE1LjMxMSwxMy45MTcgQzE1LjM1NywxMy45NDcgMTUuNDAxLDEzLjk4NCAxNS40NDEsMTQuMDI1IEwxOS4zOTEsMTcuOTc1IEMxOS43Njk5NzIyLDE4LjM2NzM3ODkgMTkuNzY0NTUyNCwxOC45OTEwODQ4IDE5LjM3ODgxODYsMTkuMzc2ODE4NiBDMTguOTkzMDg0OCwxOS43NjI1NTI0IDE4LjM2OTM3ODksMTkuNzY3OTcyMiAxNy45NzcsMTkuMzg5IEwxNC4wMjcsMTUuNDM5IEMxMy45ODY3Mjg1LDE1LjM5ODg1MDMgMTMuOTQ5OTMwMywxNS4zNTUzNjE1IDEzLjkxNywxNS4zMDkgQzExLjE1NzI3ODQsMTcuNDYwNjk3MSA3LjMxOTM1NTk4LDE3LjU2OTAxMzggNC40NDI2NzAzNSwxNS41NzYzOTE2IEMxLjU2NTk4NDcyLDEzLjU4Mzc2OTQgMC4zMTgyNDcwNTEsOS45NTI3MTgzIDEuMzYyNDk0MDEsNi42MTI3NDY0NyBDMi40MDY3NDA5NywzLjI3Mjc3NDY0IDUuNTAwNTkxMDgsMC45OTkxMjcxNTUgOSwwLjk5OTk5OTc0OSBMOSwwLjk5OTk5OTc0OSBaIE05LDMgQzUuNjg2MjkxNSwzIDMsNS42ODYyOTE1IDMsOSBDMywxMi4zMTM3MDg1IDUuNjg2MjkxNSwxNSA5LDE1IEMxMi4zMTM3MDg1LDE1IDE1LDEyLjMxMzcwODUgMTUsOSBDMTUsNS42ODYyOTE1IDEyLjMxMzcwODUsMyA5LDMgTDksMyBaIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48L2c+PC9zdmc+) left 0.5rem center no-repeat;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.5);
    color: #fff;
    transition: all 0.3s ease;
}
.tui-header.type-b .tui-header-nav input::placeholder {
    color: #fff;
}
.tui-header.type-b .tui-header-nav input:focus {
    width: 160px;
}
</style>
```
:::
