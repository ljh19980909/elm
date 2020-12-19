<template>
    <div class="ulevel">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>用户等级说明</strong></h4>
            </div>
        </div>
        <h2>用户等级是你在饿了么的身份表现，为了感谢您长期以来对饿了么的信赖和支持，我们会根据你的等级回馈相应福利和特权，功能还在内测中，暂定规则如下： ### 用户等级的划分： 用户等级按月度计算，每个自然月的最后一天会统计你当月的累计消费金额（限在线支付金额，不包含活动优惠及红包及代金券抵扣），决定你次月的等级，具体要求如下。 * Lv0 月累计消费100元以下； * Lv1 月累计消费大于等于100，小于200元 * Lv2 月累计消费大于等于200，小于500元 * Lv3 月累计消费大于等于500 ### 升级及降级规则： 每笔订单完成后，系统会自动计算你当月有效的消费金额（限在线支付金额，不包含活动优惠及红包及代金券抵扣），当月累计消费一旦达到下一等级要求，我们会立刻为您升级，您即时就可享受新等级的相关权益。<br>
         如你本月累计消费金额未达到当前等级要求，次月你将被降到与本月消费相匹配的对应等级。 *内测期间饿了么会调整等级权益及规则，饿了么保留对等级体系的所有解释权
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Ulevel",
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
</style>