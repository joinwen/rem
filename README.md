###  动态计算 font-size

#### 1. 第一步，确定设计稿大小
   此处：设计稿 375px

#### 2. 第二步，确定设计稿对应的手机屏幕大小
   此处，手机屏幕 375px

#### 3. 第三步，联立等式
   `k * designWidth * rem = mobileWidth`
   此处：
   `designWidth` 为设计稿大小
   `mobileWidth` 为手机大小
   k 为计算因子，一般取值为 `1, 1/10, 1/100` 等等

   稍作移项调整：
   `rem = mobileWidth / (k * designWidth)`

   在这里我们取 ` k = 1`
   则：
   `rem = mobileWidth / designWidth = 1px`

#### 4. 第四步，动态修改 rem
   联立等式：
   `mobileWidth / tabletWidth = mobileRem / tabletRem`

   两边移项：
   `tabletRem = mobileRem / (mobileWidth / tabletWidth)`

   这里我们取平板电脑 `tabletWidth = 750px`
   则：
   `tabletRem = 1 / (375 / 750) = 2px`

#### 5. 第五步，仿照第四步，计算其他尺寸手机或者平板的 rem 值

#### 6. 第六步（可选）
   rem 单位值，本质还是像素值，是个绝对值，依赖于具体的手机尺寸，所以需要动态计算。
   vw 值，不依赖于手机尺寸，它是一个相对的单位值，把它类比为百分比即可（vw 单位可以适用于全体 element，百分比有各种局限。。。）

   既然如此，html 根节点的 font-size 可以取 vw 为单位的值，省去动态计算

   由第 4 步，得 `1rem = 1px`
   则：
   `1rem = (1px / designWidth) * 100`
   `= 0.26% * 100`
   `= 0.26vw`
