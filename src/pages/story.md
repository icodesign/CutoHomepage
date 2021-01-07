---
title: "Cuto 2.0 和它背后的故事"
---

# Cuto 2.0 和它背后的故事

![Banner](../images/story/banner.webp)

Cuto 2.0 上线了。有点开心，也有点忐忑。

开心是因为，时隔一年多，Cuto 经历了差点死掉，又终于回归。

忐忑是因为，这次更新后，Cuto 从免费转成内购解锁，不确定反响会怎样。

借着这次 2.0 上线，我来讲讲过去这一年 Cuto 的幕后故事，也介绍一下新版本的功能和收费模式。

⚠如果你想快速了解这次 Cuto 新版本变化，可跳过第一个小标题（我的流水账），从第二部分「让换壁纸自动化」开始看。

![App Store Page of Cuto](../images/story/pic1.webp)

## 从放弃到重生

自 18 年初从少数派独立出来后，Cuto 就由我和罐子两人接手，我们利用业余时间来做这款 app。

由于更早期的历史遗留问题，Cuto 需要先进行前后端的完全重写，才能在后续更顺畅地进行新功能迭代。所以我们首先就把 Cuto 开发工作分成了两个阶段：先完成后端重构优化，再对 app 全面重写。

后端重构挺顺利，我们大概在 18 年底就已完成，节省了一些服务器开支，也给 app 修了些 Bug，做了一些小的改进。

但到了 app 重写阶段，我俩都一度失去动力，甚至真的决定过放弃。

一方面是随着当时竞品的快速迭代，已经有若干 app 先于 Cuto 做了一些我们想做的方向，并且做得还挺好。

另一方面，我俩也逐渐意识到，两人配置的业余项目，并不足以支撑我们最初构想的双版本并行的 Cuto。

具体来说，罐子的开发能力虽然强，但要一个人同时兼顾 iOS 和 Android 并不现实；我虽然擅长内容运营和一部分推广工作，但要把 Cuto 做成更强调社区、运营型的产品，工作量也不是我业余能轻松搞定的。于是，Cuto 的进度原地踏步，我俩都持续在拖延。

可能是拖得太久，也可能是我们觉得如果不按之前规划来做的话，这件事似乎不是那么有意思了……加上用爱发电这么久，一直在亏的一个项目，让人越来越没有激情和动力。

![亏损](../images/story/pic2.webp)

2020 年 6 月的一天，罐子给我发消息说，想退出 Cuto 的开发，我直接就答应了，并且长舒了一口气。因为，那段时间我也一直在想：「要不算了吧？」

我们很快达成放弃的共识之后，要面对的是如何善后 Cuto。我们想了直接下架关掉，也考虑过转让出去，我也去接触了几个朋友，认真去谈了转让 Cuto 事宜。

但谈着谈着，也有了越来越多的不舍和不甘心。Cuto 不算一款成功的产品，但倾注了我的心力。从最初上线数起的话，我已经连续四年每周不间断挑选、更新 Cuto 壁纸了，也得到了很多用户的肯定，换谁来这都会是一件难以割舍的事。

![App Store Reviews](../images/story/pic3.webp)

「妈的，我要再试一次。」

纠结了一些天之后，我向罐子发出了第二次邀请，表达了我的想法，提出了新的方案。我也不知道是因为我的诚意还是其他什么打动了他，但我当时特别紧张。

这次，我们吸取之前的教训，决定抛掉一些心理负担，集中精力，就做好相对没那么复杂的 iOS 版本再说。

Cuto 2.0 就这么经历了一次从放弃到重生。


## 让换壁纸自动化

Cuto 2.0 不算翻天覆地的变化，但也有一些新东西。

我们重写了整个 app，把首页改了，每周的壁纸标出了期数，并更强调「今天」和当周的新壁纸。壁纸更新节奏也从每周末一次更新 6 张，改成了每天更新 1 张，一周共 7 张。这样一来，大家不再需要等到周末，每天打开 app 也都能有新壁纸。

新版里「收藏」功能也变得更有用了。一方面是支持了 iCloud 同步记录，这样即使你删了 app，下次再装回来的时候，以前收藏的壁纸也还在那儿；以及 iPhone 上的收藏也能同步到 iPad 上了。

![Screenshot](../images/story/pic4.webp)


另一方面，配合我们最新支持的「自动换壁纸」快捷指令，你除了可以实现自动更换 Cuto 当日新壁纸、自动更换随机一张 Cuto 壁纸，还能自动更换随机一张你在 Cuto 收藏列表里的壁纸。

![Automation](../images/story/pic5.webp)

「从你收藏的壁纸里随机」是我个人认为最有意义且最实用的。虽说 Cuto 壁纸的平均质量还不错，但我相信，没有人会喜欢里面每一张壁纸。

现在，你完全可以利用「收藏」功能筛选出你自己喜欢的一批壁纸，可能 5 张，可能 10 张、20 张，通过创建快捷指令，你可以轻松实现——在不打开 Cuto app 也不进入系统设置项的情况下，按一定周期完全自动化地更换你的手机壁纸，而且这些壁纸都是你收藏下来的、那些自己喜欢的。

![Automation](../images/story/pic6.webp)

![Automation](../images/story/pic7.webp)

*创建「每天自动换壁纸」自动化步骤。取消「运行前询问」可不通知直接自动更换。*

你也可以设置成手动运行快捷指令才换一张壁纸，把快捷指令放在主屏，或者设置成敲击手机背面三下来运行。

![Automation](../images/story/pic8.gif)

除此之外，新版 Cuto 在 iPad 上的图片排布展示也有了优化，浏览体验会更好。

![iPad](../images/story/pic9.webp)


## 选择内购解锁，而非订阅制

坦诚地说，Cuto 这次加入内购，更准确一点是：Cuto 转为付费 app。

Cuto 2.0 依然是免费下载，只是加入了一项名为「Cuto Pro」的一次性应用内购买。

但是相比之前无限制使用所有功能的老版本，现在免费版本的 Cuto 定位是「试用版」 ，解锁内购后才能获得完整的功能体验。

Cuto 2.0 免费试用版的功能限制是这样：

- 浏览、收藏、保存当前这一周的最新壁纸，最多 7 张
- 浏览、收藏、保存当前 31 个合辑下的前 5 张壁纸，总计 100+ 张
- 收藏记录不支持 iCloud 同步
- 下载保存一张壁纸时会有弹窗广告

就是说，免费版本仍然可以获取 100 多张最新和近期的壁纸，这对于不经常换壁纸的朋友来说仍然是有足够可挑选空间的数量。

一次性付费解锁内购 Cuto Pro 之后，你除了能无限制浏览保存 app 内一千多张壁纸之外，还可以获得：

- 无广告
- iCloud 同步收藏记录
- 自动换壁纸的快捷指令
- 9 个 app 新图标

之所以我们最终决定这种「免费试用版 + 一次性内购」的付费模式，主要是基于开发和运营成本考虑。

以大量图片为主的 Cuto 服务器成本并不低，而 Cuto 的定位也决定了它不是一款用户量会特别大的流量 app，专注为有限的付费用户提供更好的体验，对于我们目前来说会是更合理且现实的选择。

事实上，最初我是坚定希望 Cuto 做成订阅制的，因为它是一款持续更新内容的 app，订阅制就是为了这种模式存在。

但最终让我们放弃订阅制的主要原因是：推出订阅制，也意味着我们有更多的责任去保证 app 的更新迭代能够以一个相对频繁且稳定的周期，持续引入更多新功能。

可对于一款不算大众的壁纸 app 来说，为 Cuto 添加很多新功能是好事吗？以及，我们俩能应付得过来那种更紧张的更新节奏吗？至少目前，我们对这两个问题的回答都是否定的。

另一方面，我们也无法接受「让用户订阅，但又不能确定向用户按周期提供新体验」的做法。我们自己也是大量 app 产品的使用者，我们也见识了不少知名 app 强行转订阅制的失败案例。所以，不搞订阅，对用户、对我们自己应该都能轻松不少。

最后说一下内购的定价。

- Cuto Pro 内购定价是 30 元
- 2.0 版本上线限时促销 18 元
- 部分「请喝饮料」的老用户 12 元

我们非常想给过去所有通过「请喝饮料」打赏支持 Cuto 的老用户优惠，但限于 Apple 接口，我们无法追溯到之前的完整名单，也无法区分单次打赏和多次打赏过的用户，故最终的方案只能定为这样，请谅解。

## 接下来的规划

Cuto 2.0 是一个新的开始。后续我们会继续打磨现有的功能（比如随机壁纸这个小功能），也会引入一些新特性，帮助大家能更容易找到或制作出更多适合做壁纸的图。

之前版本的「图片署名」功能由于这次 app 重写暂时去掉，后续更新会以更好的形式回归。

另外，iPad 版本的 Cuto 还有很大的改进空间，以及，在 Mac 上「自动换壁纸」似乎也是一件理应如此的事。

哦当然，Android 版本的 Cuto 也在计划中，只是情况要复杂不少。我自己也长期在用 Android，和各位一样期望 Cuto for Android 的新版本，还请再多给我们一些时间。

---

你可以在 [App Store](https://apps.apple.com/cn/app/cuto-%E5%A3%81%E7%BA%B8/id1068086465) 下载 Cuto 2.0 新版。

如果你在使用 Cuto 过程中遇到任何问题，请通过应用内「反馈」功能联系我们。

你也可以关注官方微博 [@Cuto壁纸](https://weibo.com/cutowallpaper) ，第一时间了解 Cuto 最新动态。