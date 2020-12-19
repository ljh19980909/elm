<template>
    <div class="commend">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>推荐有奖</strong></h4>
            </div>
        </div>
        <div class="content">
            <div class="content_img">
                <img src="../assets/invite.png" alt="">
            </div>
            <ul class="content_firend">
                <li>
                    <img src="../assets/weixin.png" alt="">
                    <p>邀请微信好友</p>
                </li>
                <li>
                    <img src="../assets/QQ.png" alt="">
                    <p>邀请QQ好友</p>
                </li>
                <li>
                    <img src="../assets/erweima.png" alt="">
                    <p>面对面邀请</p>
                </li>
            </ul>
            <div class="content_num">
                <div>
                    <h3>累计收益</h3>
                    <p><span>0</span>元</p>
                </div>
                <div>
                    <h3>成功邀请</h3>
                    <p><span>0</span>人</p>
                </div>
            </div>
            <p class="content_p">-收益明细-</p>
            <div class="content_red">
                <div><img src="../assets/hongbao.png" alt=""></div>
                <p>还不赶紧去邀请好友</p>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Commend",
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

    .content {
        margin-top: 1.2rem;
    }
    .content_img{
        width: 100%;
    }
    .content_img img{
        width: 100%;
        height: 100%;
    }
    .content_firend{
        background-color: #FFFFFF;
        overflow: hidden;
        padding: .6rem .3rem;
    }
    .content_firend li{
        float: left;
        text-align: center;
        width: 33%;
    }
    .content_firend li img{
        width: 50%;
    }
    .content_num{
        padding-top: .4rem;
        padding-bottom: .4rem;
        overflow: hidden;
        margin-bottom: .5rem;
    }
    .content_num>div{
        width: 50%;
        float: left;
        text-align: center;
        font-size: .32rem;
        color: #666666;
    }
    .content_num>div:first-child{
        border-right: .01rem solid rgba(51, 51, 51, 0.4);
    }
    .content_num>div p span{
        font-size: .5rem;
        font-weight: 700;
    }
    .content_num>div:first-child p span{
        color: #ff5633;
    }
    .content_p{
        text-align: center;
        color: #666666;
        font-size: .32rem;
        margin-bottom: .5rem;
    }
    .content_red>div{
        width: 8%;
        margin: 0 auto;
    }
    .content_red>div img{
        width: 100%;
    }
    .content_red p {
        text-align: center;
        color: #999999;
    }
</style>
