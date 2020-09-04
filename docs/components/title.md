# title

## type-a

::: demo
```html
<div class="tui-section-hd type-a">
    <h3>模块标题</h3>
    <p>内容简介</p>
</div>
<style>
.tui-section-hd.type-a {
    display: flex;
    align-items: flex-end;
    margin: 2rem 0;
    padding: 0.2rem;
    box-shadow: 0 1px 0 #dedede;
}
.tui-section-hd.type-a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 6px;
    height: 100%;
    background-color: #2c3e50;
}
.tui-section-hd.type-a h3,
.tui-section-hd.type-a p {
    margin: 0;
    line-height: 1em;
}
.tui-section-hd.type-a p {
    margin-left: 1rem;
    font-size: 14px;
    color: #757575;
}
</style>
```
:::

## type-b

::: demo
```html
<div class="tui-section-hd type-b">
    <h3>模块标题</h3>
    <p><a href="">链接a</a><a href="">链接b</a></p>
</div>
<style>
.tui-section-hd.type-b {
    display: flex;
    align-items: flex-end;
    margin: 2rem 0;
    padding: 0.2rem;
    box-shadow: 0 1px 0 #dedede;
}
.tui-section-hd.type-b h3,
.tui-section-hd.type-b p {
    margin: 0;
    line-height: 1em;
}
.tui-section-hd.type-b p {
    margin-left: auto;
    font-size: 14px;
}
.tui-section-hd.type-b p a {
    color: #757575;
    font-weight: 400;
}
.tui-section-hd.type-b p a + a {
    margin-left: 20px;
}
.tui-section-hd.type-b p a + a::before {
    content: '/';
    position: absolute;
    left: -12px;
}
</style>
```
:::

## type-c

::: demo
```html
<div class="tui-section-hd type-c">
    <h3>模块标题</h3>
    <p>内容简介</p>
</div>
<style>
.tui-section-hd.type-c {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
}
.tui-section-hd.type-c h3,
.tui-section-hd.type-c p {
    margin: 0;
    line-height: 1em;
}
.tui-section-hd.type-c h3 {
    padding: 0 1rem;
    margin-bottom: 1rem;
    perspective: 100px;
}
.tui-section-hd.type-c h3::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: -0.5em;
    left: 0;
    width: 100%;
    height: 1em;
    background-color: #3ca4e4;
    transform: rotateX(60deg);
}
.tui-section-hd.type-c p {
    font-size: 14px;
    color: #757575;
}
</style>
```
:::