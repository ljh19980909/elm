<template>
    <div class="privilege">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>优惠说明</strong></h4>
            </div>
        </div>
        <h2>
          Q1: 怎么获得红包？ * 抢微信朋友分享的红包获得； * 玩游戏领红包（仅限Android客户端）； ### Q2: 红包如何使用？ * 红包仅限订单选择在线支付时使用； * 每个订单限使用一个红包，每天最多可使用2个红包； * 每个红包只能使用一次，不能叠加或拆分使用； * 红包如有使用金额门槛，则购物车金额需满足金额门槛才可使用； * 红包如有品类、商家、手机号或时段限制，订单需满足对应条件后才可使用； * 红包使用不设找零，如红包可抵扣金额大于订单金额，则订单需支付0.01元。 ### Q3: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？ * 会的，订单无效后红包会自动返还到您的账户里。 ### Q4: 红包兑换码怎样兑换成红包，怎样查看红包？ * 在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。 ### Q5: 预订早餐、预订午餐的红包怎么使用？在哪里查询？ * 预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。 * 预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。 ### Q6: 互斥红包怎么使用？ * 互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。 ### Q7: 红包领取规则是什么? * 同一个手机号一天限领取三个。 * 同一注册用户一天限领取三个。 * 注册用户红包直接发送至用户账户里。 * 同一个手机号一天最多使用两个红包。 * 未收到红包短信的用户注意查看手机里的拦截短信。 * 有任何问题请拨打客服电话：10105757。 ### Q8：首单红包的使用条件？ * 首单红包需同时满足以下条件才可用，且首单红包不与其他优惠（首减、满减、满赠、套餐赠、折扣菜）同享。 * 新用户（设备、手机号、饿了么账号、支付账号均未在饿了么外卖下过单）首次下单。 * 仅限在线支付使用，且收餐人手机号、领取红包时输入的手机号和账号中的手机号需为同一手机号。 * 微信小程序中“商超便利”和“果蔬生鲜”分类暂未开通。
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Privilege",
        methods:{
            back() {
                this.changea()
                this.$router.go(-1)   
            },
            changea(){
                this.$store.commit("changea")
            }
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
    h2{
        margin-top: 1rem;
        padding: .4rem;
    }
</style>s