<template>
    <div class="usecart">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>兑换会员</strong></h4>
            </div>
        </div>
        <div class="content">
            <p>成功兑换后将关联到当前帐号：<span>{{this.$store.state.achieves.username}}</span></p>
            <input v-model="input" type="text" name="cartNumber" maxlength="10" placeholder="请输入10位卡号">
            <input v-model="input2" type="text" name="passWord" maxlength="6" placeholder="请输入6位卡密">
            <el-button :plain="true" :style="input.length==10&&input2.length==6?'':'background-color: #cccccc;'" class="content_btn"
                @click="exchange">兑换</el-button>
        </div>
        <div class="footer">
            <h3>——温馨提示——</h3>
            <p>新兑换的会员服务，权益以「会员说明」为准。</p>
            <p>月卡：30次减免配送费。</p>
            <p>季卡：90次减免配送费。</p>
            <p>年卡：360次减免配送费。</p>
            <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Usecart",
        data() {
            return {
                input: "",
                input2: "",
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
            exchange() {
                if (this.input.length == 10 && this.input2.length == 6) {
                    this.$notify({
                        title: '错误',
                        message: '无效的卡号',
                        type: 'warning',
                        offset: 100
                    });
                }

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

    .content input {
        width: 100%;
        order-bottom: 1px solid #f5f5f5;
        height: 1.3rem;
        font-size: .43rem;
        color: #999;
        padding-left: .4rem;
    }

    .content_btn {
        width: 90%;
        margin-left: 5%;
        height: 1.1rem;
        margin-top: .4rem;
        color: #FFFFFF;
        font-weight: 800;
        font-size: .5rem;
        background-color: #4cd964;
    }

    .footer {
        width: 80%;
        margin: .7rem auto;
        color: #AAAAAA;
    }

    .footer h3 {
        text-align: center;
        margin-bottom: .4rem;
        font-size: .4rem;
    }

    .footer p {
        font-size: .32rem;
        margin-top: .1rem;
    }
</style>
