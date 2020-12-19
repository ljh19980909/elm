<template>
    <div class="myintegral">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>我的积分</strong></h4>
            </div>
        </div>
        <div class="idetail" v-if="!geta">
            <router-view></router-view>
        </div>
        <div class="content">
            <div class="content_nav">
                <h3>当前积分<span><i class="el-icon-question"></i>
                        <span @click="toIdetail()">积分说明</span>
                    </span></h3>
                <p><span>0</span>分</p>
                <el-button plain class="content_btn">积分兑换商品</el-button>
            </div>
        </div>
        <p class="myintegral_p">最近30天积分纪录</p>
        <div class="logo">
            <div>
                <img src="../assets/integral.png">
                <p>最近30天无积分纪录</p>
                <p>快去下单赚取大量积分吧</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Myintegral",
        methods: {
            back() {
                this.$router.go(-1)
            },
            toIdetail(){
                this.changea()
                this.$router.push('/myintegral/idetail')
            },
            changea(){
                this.$store.commit("changea")
            }
        },
        computed: {
            geta(){
                console.log(this.$store.state.a)
                return this.$store.state.a
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
        border-bottom: .01rem solid rgba(229, 229, 229, 0.3);
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
        width: 100%;
        margin-top: 1.2rem;
        height: 4.56rem;
        background-color: #3190e8;
        padding: .2rem;
    }

    .content_nav {
        width: 100%;
        height: 100%;
        border-radius: .1rem;
        background-color: #FFFFFF;
    }

    .content_nav {
        padding: .2rem;
        color: #666666;
        font-size: .29rem;
    }

    .content_nav h3>span {
        float: right;
        color: #3190e8;
    }

    .content_nav h3>span i {
        font-size: .4rem;
    }

    .content_nav h3>span span {
        color: #3190e8;
        margin-left: .1rem;
    }

    .content_nav>p {
        font-size: .44rem;
        color: #333333;
        margin-top: .1rem;
    }

    .content_nav>p span {
        font-size: 1.1rem;
        margin-right: .1rem;
    }

    .content_btn {
        background-color: #fe6d47;
        color: #FFFFFF;
        font-weight: 700;
        font-size: .5rem;
        width: 100%;
        margin-top: .5rem;
    }
    
    .logo{
        width: 5rem;
        margin: 0 auto;
        margin-top: 1rem;
        text-align: center;
    }
    .logo img{
        width: 100%;
    }
    .logo p{
        font-size: .43rem;
        color: #666666;
        margin-top: .3rem;
    }
    .logo p:last-child{
        font-size: .33rem;
        color: #999999;
        margin-top: .3rem;
    }
    
    .myintegral_p{
        padding-left: .3rem;
        line-height: 1.3rem;
        color: #999999;
        font-size: .38rem;
    }
    
    .idetail{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        background-color: #FFFFFF;
    }
</style>
