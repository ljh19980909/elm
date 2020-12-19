<template>
    <div class="voucher">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>代金券说明</strong></h4>
            </div>
        </div>
        <h2>
          新用户是根据设备、饿了么账号、下单手机号进行判断，如果您下单时以上信息均为首次使用则符合饿了么定义的新用户 * 仅限新用户使用移动端app提交订单并选择在线支付时享受（饿配送订单选择餐到付款也可享受） * 在本设备上曾经有过购买记录行为的手机不能参加本活动 * 新用户首单立减金额各区域不同 * 活动仅支持手机客户端最新版本
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Voucher",
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
        left: 35%;
        font-size: .5rem;
        color: #FFFFFF;
    }
    h2{
        margin-top: 1rem;
        padding: .4rem;
    }
</style>s