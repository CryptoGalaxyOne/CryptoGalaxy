 <template>
    <div class="GameInstallGuide">
        <p class="comeBack" @click="$emit('comeBack')"><span class="el-icon-d-arrow-left"></span>{{$t("marketPlace.text32")}}</p>
        <h1>{{$t("marketPlace.text28")}}</h1>
        <h2>{{$t("marketPlace.text29")}}</h2>
        <img :src="'/static/img/gameHelp/1-'+lang+'.jpg'" alt="">
        <h2>{{$t("marketPlace.text30")}}</h2>
        <img :src="'/static/img/gameHelp/2-'+lang+'.jpg'" alt="">
        <h2>{{$t("marketPlace.text31")}}</h2>
        <img :src="'/static/img/gameHelp/3-'+lang+'.jpg'" alt="">
    </div>
</template>
<script>
export default {
    name:'GameInstallGuide',
    data(){
        return{
            lang:"en"
        }
    },
    created(){
        if(localStorage.getItem('lang')){
          this.$i18n.locale = localStorage.getItem('lang');
          this.lang = localStorage.getItem('lang');
         }
    }
}
</script>

<style lang="less" scoped>
    .GameInstallGuide{
        width:100%;
        padding:10px;
        h1{
            font-size: 16px;
            text-align: center;
            margin:20px auto;
            font-weight: 400;
        }
        h2{
            font-size: 12px;
            margin-bottom: 10px;
            margin-top: 20px;
            font-weight: 400;
            line-height: .9rem;
        }
        img{
            width:100%;
        }
        .comeBack{
            font-size: 12px;
        }
    }
</style>