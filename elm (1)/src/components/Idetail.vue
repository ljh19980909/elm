<template>
    <div class="idetail">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>匿名购买</strong></h4>
            </div>
        </div>
        <div class="markdown">
            <h3>Q1: 怎么获得积分？</h3>
            <p>在线支付的订单将获得订单积分奖励：</p>
            <ul>
                <li>积分将在用户完成评价后获得。</li>
                <li>可获得积分=订单金额×10（即1元=10点积分）。</li>
                <li>订单金额指实际付款金额，不包含活动优惠金额。</li>
                <li>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</li>
            </ul>
            <h3>Q2: 积分用来做什么？</h3>
            <p>可以在积分商城兑换各种礼品。</p>
            <h3>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
            <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
            <h3>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
            <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Idetail",
        methods: {
            back() {
                this.changea()
                this.$router.go(-1)
            },
            changea() {
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

    .markdown {
        margin-top: .8rem;
        padding: .4rem;
    }

    .markdown h3 {
        line-height: 1.3rem;
        color: #333333;
        font-size: .45rem;
    }

    .markdown p,.markdown li {
        color: #666666;
        font-size: .38rem;
        line-height: .5rem;
    }
</style>s
