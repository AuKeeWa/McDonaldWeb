<template>
    <div class="game-box">
        <div class="game-box">
            <div class="frulit-box">
                <div class="slot" v-for="(slot, index) in slots" ref="slots" :key="index">
                    <img class="slot__item" v-for="(opt, subindex) in slot.items" :key="opt + subindex" :src="opt"/>
                </div>
            </div>
            <div class="start-btn" @click="start"></div>
        </div>
    </div>
</template>

<script>
    const next =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||

    function (cb) {
        window.setTimeout(cb, 10000 / 60);
    };

    export default {
        data() {
            return {
                slots: [
                {
                    title: "Burger",
                    items: [
                        require("../../public/images/dishes/burger/01.png"),
                        require("../../public/images/dishes/burger/02.png"),
                        require("../../public/images/dishes/burger/03.png"),
                        require("../../public/images/dishes/burger/04.png"),
                        require("../../public/images/dishes/burger/05.png"),
                        require("../../public/images/dishes/burger/06.png"),
                        require("../../public/images/dishes/burger/07.png"),
                        require("../../public/images/dishes/burger/08.png"),
                        require("../../public/images/dishes/burger/09.png"),
                        require("../../public/images/dishes/burger/10.png"),
                        require("../../public/images/dishes/burger/11.png"),
                        require("../../public/images/dishes/burger/12.png"),
                        require("../../public/images/dishes/burger/13.png"),
                        require("../../public/images/dishes/burger/14.png"),
                        require("../../public/images/dishes/burger/15.png"),
                    ],
                },
                {
                    title: "Snack",
                    items: [
                        require("../../public/images/dishes/snacks/01.png"),
                        require("../../public/images/dishes/snacks/02.png"),
                        require("../../public/images/dishes/snacks/03.png"),
                        require("../../public/images/dishes/snacks/04.png"),
                        require("../../public/images/dishes/snacks/05.png"),
                        require("../../public/images/dishes/snacks/06.png"),
                        require("../../public/images/dishes/snacks/07.png"),
                        require("../../public/images/dishes/snacks/08.png"),
                        require("../../public/images/dishes/snacks/09.png"),
                        require("../../public/images/dishes/snacks/10.png"),
                    ],
                },
                {
                    title: "Drink",
                    items: [
                        require("../../public/images/dishes/beverage/01.png"),
                        require("../../public/images/dishes/beverage/02.png"),
                        require("../../public/images/dishes/beverage/04.png"),
                        require("../../public/images/dishes/beverage/08.png"),
                        require("../../public/images/dishes/beverage/12.png"),
                        require("../../public/images/dishes/beverage/13.png"),
                    ],
                },
                ],

                opts: null,
                startedAt: null,
                fontSize: null,
            };
        },

        mounted() {
            this.$nextTick(() => {
                this.fontSize = this.getFont();
            });
        },
        methods: {
            start() {
                if (this.opts) {
                    return;
                }
                // let height = this.fontSize * 6;
                let height = 144;    //图片高度
                this.opts = this.slots.map((data, i) => {
                    const slot = this.$refs.slots[i]; // 读取每一列
                    const choice = Math.floor(Math.random() * data.items.length); // 获取每一列的长度
                    const opts = {
                        el: slot, //指向奖项元素的父级来控制控制滚动速度;
                        finalPos: choice * height, // height 为每一个奖品滚动标签的高度;
                        // finalPos: (choice-choice+1) * height,
                        startOffset:720 + Math.random() * 720 + i * 720, // 影响转的圈数
                        height: data.items.length * height,
                        duration: 3000 + i * 640, // 动画时常
                        isFinished: false, // 是否已经停止了
                    };
                    return opts;
                });

                next(this.animate); // 启动动画
            },
            animate: function (timestamp) {
                // timestamp当前的方法持续的毫秒数
                if (this.startedAt == null) {
                    this.startedAt = timestamp; // 动画初始时间
                }
                const timeDiff = timestamp - this.startedAt; //动画持续的时间
                this.opts.forEach((opt) => {
                    if (opt.isFinished) {
                        return;
                    }
                    const timeRemaining = Math.max(opt.duration - timeDiff, 0); // 总的持续时间 - 动画持续时间 = 剩下的时间,0表示结束
                    const power = 3;
                    const offset = (Math.pow(timeRemaining, power) / Math.pow(opt.duration, power)) * opt.startOffset;
                    const pos = -1 * Math.floor((offset + opt.finalPos) % opt.height);
                    console.log(offset,opt.finalPos,opt.height);
                    opt.el.style.transform = "translateY(" + pos + "px)";
                    if (timeDiff > opt.duration) {
                        opt.isFinished = true;
                    }
                });
                if (this.opts.every((o) => o.isFinished)) {
                    // 判断时候所有的isFinished都是true
                    this.opts = null;
                    this.startedAt = null;
                } else {
                    next(this.animate);
                }
            },
            getFont() {
                var ration = 2;
                var params = {
                    defaultFontSize: 20,
                    designWidth: 750,
                };
                var clientWidth = document.documentElement.clientWidth;
                ration = clientWidth / params.designWidth;
                return ration * params.defaultFontSize;
            },
        },
    };
</script>

<style lang="scss" scoped>
.game-box {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: url("../../public/images/cover.png") no-repeat;
    background-size: 100% 100%;
    .game-box {
        width: 40rem;
        height: 26.88rem;
        background: url("../../public/images/cover2.png") no-repeat;
        background-size: 100% 100%;
        margin: 18rem auto 0 auto;
        position: relative;
        .start-btn {
            width: 12rem;
            height: 7rem;
            border-radius: 50%;
            position: absolute;
            bottom: 1rem;
            left: 14rem;
            cursor: pointer;
        }
        .frulit-box {
            width: 36rem;
            height: 12rem;
            position: absolute;
            top: 4.8rem;
            left: 2rem;
            display: flex;
            overflow: hidden;
            .slot {
                width: 12rem;
                height: 12rem;
                margin-right: 0.2rem;
                &:nth-child(3) {
                    margin-right: 0;
                }
                .slot__item {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
        }
    }
}

</style>