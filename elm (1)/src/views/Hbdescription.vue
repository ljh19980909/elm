<template>
    <div class="hbdescription">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>红包说明</strong></h4>
            </div>
        </div>
        <section id="scroll_section" class="scroll_container">
            <div class="markdown" style="transition-duration: 0ms; transform: translate(0px, 0px) scale(1) translateZ(0px); transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);">
                <h3 id="q1-" style="pointer-events: auto;">Q1: 怎么获得红包？</h3>
                <ul style="pointer-events: auto;">
                    <li>通过邀请好友获得</li>
                    <li>在下单返红包的商家下单获得</li>
                    <li>抢微信朋友分享的红包获得</li>
                </ul>
                <h3 id="q2-" style="pointer-events: auto;">Q2: 红包可以做什么？</h3>
                <p style="pointer-events: auto;">可以抵扣在线支付时的实际支付金额。</p>
                <h3 id="q3-" style="pointer-events: auto;">Q3: 红包的门槛金额按照什么金额计算？</h3>
                <p style="pointer-events: auto;">红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>
                <h3 id="q4-" style="pointer-events: auto;">Q4: 一个红包能拆开多次使用吗？</h3>
                <p style="pointer-events: auto;">不能，一个红包只能一次性使用，不能分开使用。</p>
                <h3 id="q5-" style="pointer-events: auto;">Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h3>
                <p style="pointer-events: auto;">会的，订单无效后红包会自动返还到您的账户里。</p>
                <h3 id="q6-" style="pointer-events: auto;">Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h3>
                <p style="pointer-events: auto;">在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。</p>
                <h3 id="q7-" style="pointer-events: auto;">Q7: 邀请好友了，为什么没获得红包？</h3>
                <p style="pointer-events: auto;">先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
                <h3 id="q8-" style="pointer-events: auto;">Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</h3>
                <ul style="pointer-events: auto;">
                    <li>预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</li>
                    <li>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</li>
                </ul>
                <h3 id="q9-" style="pointer-events: auto;">Q9: 互斥红包怎么使用？</h3>
                <ul style="pointer-events: auto;">
                    <li>互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</li>
                </ul>
                <h3 id="q10-" style="pointer-events: auto;">Q10: 返红包活动， 红包领取规则是什么?</h3>
                <ul style="pointer-events: auto;">
                    <li>同一个手机号一天限领取三个。</li>
                    <li>同一注册用户一天限领取三个。</li>
                    <li>注册用户红包直接发送至用户账户里。</li>
                    <li>非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</li>
                    <li>红包的使用周期为1周，自红包发放的第2天开始计算。</li>
                    <li>同一个手机号一天最多使用两个红包。</li>
                    <li>未收到红包短信的用户注意查看手机里的拦截短信。</li>
                    <li>有任何问题请拨打客服电话：10105757。</li>
                </ul>
            </div>
        </section>


    </div>
</template>

<script>
    export default {
        name: "Hbdescription",
        data() {
            return {
                input: '',
                input2: ''
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
        }
    }
</script>

<style scoped>
    .head_top {
        background-color: #3190e8;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 1.2rem;
    }

    .back {
        left: .2rem;
        width: .7rem;
        height: .7rem;
        font-size: .7rem;
        color: white;
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
    }

    .top_tittle {
        position: absolute;
        top: 20%;
        left: 40%;
        font-size: .5rem;
        color: #FFFFFF;
    }
    .scroll_container{
        margin-top: 1.2rem;
        padding-left: .4rem;
        padding-right: .4rem;
        background-color: #FFFFFF;
    }
    .markdown h3 {
        line-height: 1.3rem;
        font-size: .45rem;
    }
    .markdown li, .markdown p {
        font-size: .37rem;
        color: #666;
        line-height: .62rem;
    }
</style>
