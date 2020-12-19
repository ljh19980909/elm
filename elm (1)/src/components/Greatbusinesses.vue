<template>
    <div class="greatbusinesses">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>超赞商家</strong></h4>
            </div>
        </div>
        <h2>
          Q1: 什么是商家代金券？ 商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。 ### Q2: 怎么获得商家代金券？ * 进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。 * 「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。 ### Q3: 商家代金券使用条件 * 商家代金券仅限在指定商家使用 * 商家代金券仅限在线支付使用 * 每个订单只能使用一张商家代金券，不可与其他代金券叠加使用
        </h2>
    </div>
</template>

<script>
    export default {
        name:"GreatBusinesses",
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