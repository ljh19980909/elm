<template>
    <div class="anonymous">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>匿名购买</strong></h4>
            </div>
        </div>
        <h3 id="ahrefmailtomarketing_coopelememarketing_coopelemeaahrefmailtoprelemeprelemea" style="pointer-events: auto;">品牌合作
            <a href="mailto:marketing_coop@ele.me">marketing_coop@ele.me</a> ### 媒体合作 <a href="mailto:pr@ele.me">pr@ele.me</a></h3>
    </div>
</template>

<script>
    export default {
        name: "Anonymous",
        methods: {
            back() {
                this.changea()
                this.$router.go(-1)
            },
            changea() {
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

    h3 {
        margin-top: 1rem;
        padding: .4rem;
    }
</style>s
