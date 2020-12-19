<template>
    <div class="download">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>下载</strong></h4>
            </div>
        </div>
        <div class="content">
            <div><i class="el-icon-platform-eleme" style="color: #3cabff;"></i></div>
            <p>下载饿了么APP</p>
            <el-button type="success" class="download_btn" @click="warning()">下载</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Download",
        methods: {
            back() {
                this.$router.go(-1)
            },
            warning() {
                this.$notify({
                    title: '无法下载',
                    message: 'IOS用户请前往AppStore下载',
                    offset: 200,
                    type: 'warning'
                });
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
        left: 45%;
        font-size: .5rem;
        color: #FFFFFF;
    }

    .content {
        width: 100%;
        padding: 1.5rem;
        height: 17.75rem;
        background-color: #FFFFFF;
        text-align: center;
    }

    .content i {
        font-size: 7rem;
    }

    .content div {
        margin: 0 auto;
    }

    .content p {
        font-size: .5rem;
    }

    .download_btn {
        margin-top: .5rem;
        width: 100%;
    }
</style>
