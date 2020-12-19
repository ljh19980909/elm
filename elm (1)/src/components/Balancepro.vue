<template>
    <div class="balancepro">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>余额问题</strong></h4>
            </div>
        </div>
        <h2>
          Disclaimer: The application developed by Ele.me or have. Ele.me makes it clear that, your business activities through the participation of the software have nothing to do with Apple Inc., and Apple does not assume any responsibilities of the program. Mobile phone brand partners from Ele.me, such as Apple and App Store. Sponsors of non-mobile phone clients from Ele.me, nor do you get the mobile phone client’s intellectual property rights or any other rights. If the mobile phone client violates the third party’s intellectual property rights, Ele.me will bears the corresponding legal responsibility. Ele.me has the right but not the obligation to improve or correct any errors or defects. Ele.me will not represent or warrant the accuracy or reliability of any contents,information or advertisements which users obtain from the application. Moreover, Ele.me will not be responsible for any products or information which users purchase by the mobile client. Users shall use the application at their own risk. # 免责声明： 本应用由饿了么开发或拥有。饿了么在此申明，用户通过本软件参加的商业活动，与Apple Inc.无关，Apple不承担该程序的任何责任。 饿了么手机客户端的品牌合作商，如Apple，AppStore，非饿了么手机客户端的赞助商，也未拥有该客户端的知识产权或其他任何权益。因饿了么手机客户端侵犯第三方知识产权的，由饿了么承担相应的法律责任。 饿了么有权但无义务，改善或更正本手机客户端的任何错误或缺陷。 用户通过饿了么手机客户端及其中的任何链接、下载获得的一切信息、内容或广告，饿了么不声明或保证其正确性或可靠性；并且对于用户经本手机客户端上的展示、内容、广告而购买、取得的任何产品、或信息，饿了么不负保证责任。用户自行承担使用本软件的风险。
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Balancepro",
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