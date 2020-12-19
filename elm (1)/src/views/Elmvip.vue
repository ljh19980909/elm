<template>
    <div class="elmvip">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>会员中心</strong></h4>
            </div>
        </div>
        <div class="content">
            <p>为账户 <span>{{this.$store.state.achieves.username}}</span> 购买会员</p>
            <div class="content_one">
                <div class="one_top" @click="toVipdes">
                    <span>会员特权</span>
                    <span>会员说明<i class="el-icon-arrow-right"></i></span>
                </div>
                <ul class="content_two">
                    <li class="two_li">
                        <div class="two_li_left">
                            <img src="../assets/sheng.jpg" alt="">
                        </div>
                        <div class="two_li_right">
                            <h4>减免配送费</h4>
                            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                            <p>蜂鸟专送专享</p>
                        </div>
                    </li>
                    <li class="two_li">
                        <div class="two_li_left">
                            <img src="../assets/sheng2.jpg" alt="">
                        </div>
                        <div class="two_li_right">
                            <h4>减免配送费</h4>
                            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                            <p>蜂鸟专送专享</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="content_three">
                <p>开通会员</p>
                <p>1个月<span>￥20</span><span @click="goumai">购买</span></p>
            </div>
            <div class="content_four">
                <span>兑换会员</span>
                <span @click="toUsecart">使用卡号卡密<i class="el-icon-arrow-right"></i></span>
            </div>
            <div class="content_four">
                <span>购买记录</span>
                <span @click="toInvoicerecord">开发票<i class="el-icon-arrow-right"></i></span>
            </div>
        </div>
        <router-view class="router"></router-view>


    </div>
</template>

<script>
    import Loading from "../components/Loading.vue"
    export default {
        name: "Elmvip",
        data() {
            return {
                a: true
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
            toVipdes() {
                this.changea()
                this.$router.push('/elmvip/vipdes')
            },
            toInvoicerecord() {
                this.$router.push('/elmvip/invoicerecord')
            },
            toUsecart() {
                this.$router.push('/elmvip/usecart')
            },
            changea(){
                this.$store.commit("changea")
            },
			goumai(){
				this.$router.push({
					path:'/shop/confirmOrder/payment'
				})
			}
        },
        mounted() {

        },
        components: {
            Loading,
        },

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

    .content {
        margin-top: 1.3rem;
    }

    .content>p {
        line-height: 1.2rem;
        color: #666666;
        font-size: .37rem;
        padding-left: .5rem;
    }

    .content>p>span {
        color: #333333;
        font-weight: 700;
    }

    .content_one {
        padding-left: .5rem;
        padding-right: .5rem;
        line-height: 1.2rem;
        background-color: #FFFFFF;
        border-bottom: .01rem solid rgba(229, 229, 229, 0.5);
        overflow: hidden;
    }

    .one_top>span:first-child {
        float: left;
        font-size: .44rem;
    }

    .one_top>span:last-child {
        float: right;
        font-size: .35rem;
        color: #999999;
    }

    .content_two {
        clear: both;
    }

    .content_two>li {
        /* box-sizing: border-box; */
        overflow: hidden;
        padding-top: .48rem;
        padding-bottom: .48rem;
    }

    .two_li>div {
        float: left;
    }

    .two_li_left {
        width: 1rem;
    }

    .two_li_left img {
        width: 100%;
    }

    .two_li_right {
        padding-left: .4rem;
    }

    .two_li>div>p {
        line-height: initial;
        color: #999999;
        font-size: .32rem;
    }

    .two_li>div>h4 {
        line-height: initial;
        color: #333333;
        font-size: .44rem;
    }

    .content_three {
        margin-top: .4rem;
        background-color: #FFFFFF;
        padding-left: .5rem;
        padding-right: .5rem;
        font-size: .44rem;
    }

    .content_three>p {
        line-height: 1.3rem;
        border-bottom: .01rem solid rgba(229, 229, 229, 0.5);
    }

    .content_three>p:last-child>span:first-child {
        color: #ff6600;
        font-weight: 800;
    }

    .content_three>p:last-child>span:last-child {
        border: .025rem solid #f60;
        border-radius: .2rem;
        line-height: 0.8rem;
        height: 0.8rem;
        width: 1.3rem;
        text-align: center;
        font-size: .38rem;
        color: #f60;
        float: right;
        margin-top: .25rem;
    }

    .content_four {
        line-height: 1.3rem;
        margin-top: .4rem;
        background-color: #FFFFFF;
        padding-left: .5rem;
        padding-right: .5rem;
        font-size: .44rem;
    }

    .content_four>span:last-child {
        float: right;
        font-size: .35rem;
        color: #999999;
    }

    .router {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #f5f5f5;
        z-index: 100;
    }
</style>
