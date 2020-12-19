<template>
    <div class="signin">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>签到规则</strong></h4>
            </div>
        </div>
        <h2>
            如何签到领红包 用户需要支付 1 元参与活动（后续签到不收费）<br>
             活动期间每日签到，9 天后即可领取 10 元无门槛红包<br>
              如期间忘记签到，可领红包金额会减少，详细如下：<br>
              <strong>完成 9 天签到：</strong>10元（2个5元红包） - 
              <strong>漏签 1 天：</strong>8元（2个4元红包） - ）
              <strong>漏签 2 天：</strong>6元（2个3元红包） - 
              <strong>漏签 3 天：</strong>4元（2个2元红包） - 
              <strong>漏签 4 天及以上：</strong>1个2元红包 
              <br>
               ### 漏签后如何补签 如忘记签到，可通过下单补签，漏签当日至红包领取日前一天每1笔有效订单可补签 1 天（仅限在线支付订单），例：如您在活动第 3 天忘记签到，只要你在第 3 天至第 9 天内完成1笔有效的订单，即可完成补签。 ### 每日签到拿福利： - 签到期间，每日 10:30 可抢 5 元红包，每日限领取 1个。红包数量有限，抢完即止，要记得来早哦~
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Signin",
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