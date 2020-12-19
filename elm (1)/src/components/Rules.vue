<template>
    <div class="rules">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>活动细则</strong></h4>
            </div>
        </div>
        <h2>
          会员权益调整 尊敬的用户，随着会员服务体系优化，「蜂鸟专送」商家得到大规模普及，大大丰富了会员用户的用餐选择，从2016年9月1日开始，新购及续费的会员服务将由免配送费调整为每单最高减免4元配送费，之前购买的会员服务不受影响，感谢您的支持！敬请期待更多会员特权。 ### Q1: 特权介绍 * 减配送费：饿了么会员卡绑定账户，每日前3单在「蜂鸟专送」标识商家可减配送费，每单最高可减4元。 * 更多特权，敬请期待！ ### Q2: 会员资费 * 月卡20元（一个月按31天计算） ### Q3: 购卡说明 * 在线购买：饿了么App > 我的 > 饿了么会员卡。 * 请认准饿了么官方认证渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Rules",
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