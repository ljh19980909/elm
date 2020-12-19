<template>
    <div class="vipdes">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>会员说明</strong></h4>
            </div>
        </div>
        <h2>
           尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 > 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。 ### Q1: 特权介绍 * 身份标识：饿了么会员服务有效期内，享有专属皇冠标识。 * 减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。 * 更多特权，敬请期待！ ### Q2: 资费介绍 * 饿了么会员卡：20元 ### Q3: 使用说明 当用户满足以下任一条件，会员服务自动失效： 1. 自绑定之日起超过31天； 2. 在31天内累计使用减免配送费的蜂鸟订单数量达到30单； ### Q4: 购卡说明 * 在线购买：饿了么App>我的>饿了么会员卡 ### Q5: 温馨提示 * 用户在当前会员服务失效前，无法购买新卡。 * 请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Vipdes",
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
</style>