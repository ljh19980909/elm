<template>
    <div class="exchange">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>兑换红包</strong></h4>
            </div>
        </div>
        <div class="content">
            <input type="text" v-model="input" placeholder="请输入兑换码"></input>
            <div class="verify">
                <input type="text" v-model="input2" placeholder="验证码"></input>
                <div @click="getVerify">
                    <img :src="verify" alt="">
                </div>
            </div>

            <el-button type="info" class="content_btn" @click="exchange" plain disabled>兑换</el-button>
        </div>


    </div>
</template>

<script>
	import { Erweima,Exchange } from "@/request/api.js"
    export default {
        name: "Exchange",
        data() {
            return {
                input: '',
                input2: '',
                verify: "",
                yzMsg: ''
            }
        },
        created() {
            Erweima().then(data => {
                this.verify = data.code;
            }).catch(err => {
                console.log(err)
            });
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
            getVerify() {
                Erweima().then(data => {
                    this.verify = data.code;
                }).catch(err => {
                    console.log(err)
                });
            },
            exchange() {
                Exchange(this.$store.state.achieves.user_id).then(data => {
                    this.yzMsg = data.message;
                    if (this.yzMsg == '无效的兑换码') {
                        console.log(this.yzMsg)
                        this.$notify({
                            title: '警告',
                            message: '无效的兑换码',
                            type: 'warning',
                            offset: 100
                        });
                    }

                }).catch(err => {
                    console.log(err)
                });
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
        margin-top: 1.5rem;
        padding-left: .4rem;
        padding-right: .4rem;
    }

    .content>input:nth-child(1) {
        width: 100%;
        font-size: .45rem;
        color: #666;
        padding: .4rem .3rem;
        border-radius: .15rem;
        margin-bottom: .4rem;
    }

    .verify>input {
        width: 66%;
        font-size: .45rem;
        color: #666;
        padding: .4rem .3rem;
        border-radius: .15rem;
        margin-bottom: .4rem;
        float: left;
    }

    .verify>div {
        float: left;
        width: 30%;
        margin-left: .3rem;
        padding-top: .2rem;
        background-color: #FFFFFF;
        height: 1.4rem;
        border-radius: .15rem;
    }

    .verify>div img {
        width: 100%;
    }

    .content_btn {
        clear: both;
    }

    .content_btn {
        width: 100%;
    }
</style>
