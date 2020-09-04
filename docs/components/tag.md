# tag

::: demo
```html
<div style="width: 300px;height: 200px;background-color: #eee;">
    <div class="tui-tag type-a"><span>A</span></div>
    <div class="tui-tag type-b"><span>B</span></div>
    <div class="tui-tag type-c"><span>C</span></div>
</div>
<style>
    /* type-a */
    .tui-tag.type-a {
        position: absolute;
        z-index: 2;
    }
    .tui-tag.type-a {
        border-style: solid;
        border-width: 2rem;
        border-color: #3ca4e4 transparent transparent #3ca4e4;
    }
    .tui-tag.type-a span {
        display: inline-block;
        position: absolute;
        top: -2rem;
        left: -2rem;
        width: 2rem;
        line-height: 2rem;
        text-align: center;
        color: #fff;
    }
    /* type-b */
    .tui-tag.type-b {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
    }
    .tui-tag.type-b {
        border-style: solid;
        border-width: 2rem;
        border-color: #3ca4e4 #3ca4e4 transparent transparent;
    }
    .tui-tag.type-b span {
        display: inline-block;
        position: absolute;
        top: -2rem;
        right: -2rem;
        width: 2rem;
        line-height: 2rem;
        text-align: center;
        color: #fff;
    }
    /* type-b */
    .tui-tag.type-c {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;
    }
    .tui-tag.type-c {
        border-style: solid;
        border-width: 2rem;
        border-color: transparent #3ca4e4 #3ca4e4 transparent;
    }
    .tui-tag.type-c span {
        display: inline-block;
        position: absolute;
        bottom: -2rem;
        right: -2rem;
        width: 2rem;
        line-height: 2rem;
        text-align: center;
        color: #fff;
    }
</style>
```
:::
