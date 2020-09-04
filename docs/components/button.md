# button

::: demo
```html
<div class="button-list"> <!-- 删除 -->
    <button class="tui-btn primary"><span>按钮</span></button>
</div> <!-- 删除 -->

<style>
/* 删除start */
.button-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* 删除end */
.tui-btn {
    padding: 0.5rem 1rem;
    border-radius: 3px;
    cursor: pointer;
}
.tui-btn span {
    display: block;
}
.tui-btn.primary {
    background-color: #07c160;
    color: #fff;
}
.tui-btn:active {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}
</style>
```
:::

## hover

::: demo
```html
<div class="button-list"> <!-- 删除 -->
    <button class="tui-btn primary hover-a"><span>hover效果a</span></button>
    <button class="tui-btn primary hover-b"><span>hover效果b</span></button>
    <button class="tui-btn primary hover-c"><span>hover效果c</span></button>
    <button class="tui-btn primary hover-d"><span>hover效果d</span></button>
    <button class="tui-btn primary hover-e"><span>hover效果e</span></button>
    <button class="tui-btn primary hover-f"><span>hover效果f</span></button>
</div> <!-- 删除 -->

<style>
/* 删除start */
.button-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-list button + button {
    margin-top: 30px;
}
/* 删除end */
.tui-btn {
    padding: 0.5rem 1rem;
    border-radius: 3px;
    cursor: pointer;
}
.tui-btn span {
    display: block;
}
.tui-btn.primary {
    background-color: #07c160;
    color: #fff;
}
.tui-btn:active {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}
/* hover-a */
.tui-btn.hover-a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    transform: rotateY(90deg) rotateX(90deg);
}
.tui-btn.hover-a:hover::before {
    transform: rotate(0);
}
/* hover-b */
.tui-btn.hover-b::before {
    content: '';
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    filter: blur(4px);
    opacity: 0;
    transition: all 0.3s ease;
}
.tui-btn.hover-b:hover::before {
    opacity: 1;
}
/* hover-c */
.tui-btn.hover-c::before {
    content: '';
    position: absolute;
    z-index: -2;
    top: 3px;
    left: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background-color: inherit;
}
.tui-btn.hover-c:hover::before {
    animation: outline 0.8s ease infinite;
}
@keyframes outline {
    100% {
        opacity: 0;
        transform: scale(1.5)
    }
}
/* hover-d */
.tui-btn.hover-d {
    overflow: hidden;
}
.tui-btn.hover-d::before {
    content: '';
    position: absolute;
    top: calc(50% - 0.3rem);
    left: 0.3rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.3rem 0 0.3rem 0.5rem;
    border-color: transparent transparent transparent rgba(255,255,255,0.5);
    transition: all 0.3s ease;
    transform: translate(-0.8rem, 0);
}
.tui-btn.hover-d:hover::before {
    transform: translate(0, 0);
}
.tui-btn.hover-d::after {
    content: '';
    position: absolute;
    top: calc(50% - 0.3rem);
    right: 0.3rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.3rem 0.5rem 0.3rem 0;
    border-color: transparent rgba(255,255,255,0.5) transparent transparent ;
    transition: all 0.3s ease;
    transform: translate(0.8rem, 0);
}
.tui-btn.hover-d:hover::after {
    transform: translate(0, 0);
}
/* hover-e */
.tui-btn.hover-e {
    overflow: hidden;
}
.tui-btn.hover-e:hover {
    color: #07c160;
}
.tui-btn.hover-e::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
    transition: all 0.3s ease;
    transform: translate(0, -100%);
}
.tui-btn.hover-e:hover::before {
    transform: translate(0, 0);
}
.tui-btn.hover-e::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px #07c160;
    border-radius: 3px;
}
.tui-btn.hover-e:active::after {
    box-shadow: inset 0 0 0 1px #07c160, inset 0 2px 4px rgba(0,0,0,0.2);
}
/* hover-f */
.tui-btn.hover-f {
    transition: all 0.3s ease;
}
.tui-btn.hover-f span {
    transition: all 0.3s ease;
}
.tui-btn.hover-f:hover {
    transform: translate(0, -0.15rem)
}
.tui-btn.hover-f::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: inherit;
    opacity: 0.3;
    transition: all 0.3s ease;
}
.tui-btn.hover-f:hover::before {
    transform: translate(0, 0.3rem)
}
</style>
```
:::