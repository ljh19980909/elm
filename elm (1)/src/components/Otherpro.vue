<template>
    <div class="otherpro">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>其他问题</strong></h4>
            </div>
        </div>
        <h2>
           Q1: 什么是订单数 订单数是指商家最近30天的订单总数，这个数据是动态的，每天都会进行更新。 ### Q2: 商品多久内可以评价？评价后是否能修改？ * 下单确认收货后，7天内可以对商品进行评价。超过7天，评价功能自动失效。 * 美食一旦点评就不能做修改，评价不可删除撤销，请知悉。 ### Q3: 为什么提示下单次数过多，无法下单？ 在24小时内，同一手机号在同一设备上最多可以成功提交7次订单。 
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Otherpro",
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