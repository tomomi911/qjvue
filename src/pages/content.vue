<template>
    <div class="layout">
        <!--锚点定位 提高用户体验-->
        <mu-appbar class="header" :title="data.newName">
            <mu-icon-button @click="goback" icon="arrow_back" slot="left" />
            <mu-icon-menu icon="more_vert" slot="right">
                <mu-menu-item title="顶部" href="#content-tip" />
                <mu-menu-item title="返回首页" to="/qjhome" />
            </mu-icon-menu>
        </mu-appbar>
       
        <div class="main">
            <!--标题-->
            <div id="content-tip">                              
                <strong>  {{data.title}}  </strong>
            </div>
            <!--内容相关-->
            <div class="content-about">                            
              <span>发表时间：{{data.newFbtime}}</span><br>
                <!--用 util>filter.js 里的formatData方法 转换时间格式-->
              <span>浏览量：</span>
            </div>
            <!--正文 -->
            <div class="content" v-html="data.newValue"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {                
                data: {
                    author: {},
                    replies: {}
                },
                styleObj: {
                    backgroundColor: '#999'
                },
                scroll:'',
                imgpaths:[]             
            }
        },
        created() {  
            this.getData()           
        },
        methods: {

            getData() {
                let id = this.$route.query.id      
                let that = this
                axios.get("http://www.qjggzy.cn/qjztb/gy/wx_new_info.do?newId=" + id)
                    .then(function(response) {
                        that.data = response.data
                        console.log(this.imgpaths.length)
                        // console.log(that.data)
                    })
            },
            goback() {
                this.$router.go(-1)
                // 后退一步记录，等同于 history.back()
            },
            menu(){
                this.scroll=document.documentElement.scrollTop || document.body.scrollTop;
                let scrollTop = this.scroll
                if(scrollTop > 0){
                    $('#topdown_wrap').stop(false,true).fadeIn('slow')
                }else{
                    $('#topdown_wrap').stop(false,true).fadeOut('slow')
                }
                console.log(this.scroll)
            },
            matcher(){
                    let str = this.data.newValue
                    //匹配图片（g表示匹配所有结果i表示区分大小写）
                    let imgReg = /<img.*?(?:>|\/>)/gi;
                    //匹配src属性
                    let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                    let arr = str.match(imgReg);
                    window.alert('所有已成功匹配图片的数组：'+arr);
                    
                    for (let i = 0; i < arr.length; i++) {
                        let src = arr[i].match(srcReg);
                        //获取图片地址
                        if(src[1]){
                            window.alert('已匹配的图片地址'+(i+1)+'：'+src[1]);
                            this.imgpaths.push(src[1])
                        }                    
                    }
            }

        },
        mounted(){
            window.addEventListener('scroll',this.menu)
        }
    }
</script>

<style lang="scss" scoped>
   .layout{
    width: 100%;
    position: relative;
    }   
   .content-box{
    width: 100%;
    }
    .content{
        margin: 0 10px;
        font-size: 14px;
        color: #000;
        overflow-x: auto;
    }

    @import '../assets/sass/_base.scss';
    .wrapper {
        @include wrapper;
        #content-tip {
            position: relative;
            padding: 2rem;
            @include border-btm;
            span {
                position: relative;
                background-color: $class-green;
                color: #fff;
                padding: 0.2rem;
                border-radius: 0.2rem;
                font-size: 1rem;
                bottom: 0.2rem;
            }
            strong {
                font-size: 1.8rem;
            }
        }
        .content-about {
            position: relative;
            height: 5rem;
            padding-bottom: 1rem;
            @include border-btm;
            font-size: 1.2rem;
            color: $gray;
            text-align: left;
            line-height: 2rem;
            span {
                position: relative;
                padding-left: 2rem;
                top: 0.5rem;
                left: 5rem;
            }
            .content-author-pic {
                position: absolute;
                left: 0.6rem;
                border-radius: 50%;
                width: 4rem;
                height: 4rem;
                cursor: pointer;
                top: 0.4rem;
            }
        }
        .demo-checkbox {
            font-size: 1.6rem;
            margin-top: 1.6rem;
            position: relative;
        }
        .collect {
            text-align: center;
        }
        .content-text img{
            padding: 1rem;
            max-width:100%;
        }
        #comments-main {
            border-top: 1rem solid #EFF2F7;
            @include border-btm;
            padding-bottom: 0.5rem;
            list-style-type: none;
            .comments-num {
                border-left: 0.3rem solid #fa8072;
                font-size: 1.6rem;
                padding: 0.4rem 0.6rem;
            }
            li {
                position: relative;
                margin: {
                    left: -1rem;
                    top: 1rem;
                    right: 1rem;
                }
                @include border-btm;
                img {
                    border-radius: 50%;
                    width: 4rem;
                    height: 4rem;
                    cursor: pointer;
                    top: 0.4rem;
                }
                strong {
                    position: relative;
                    font-size: 1.6rem;
                    bottom: 2.5rem;
                }
                .comment-reply {
                    text-align: center;
                    margin: 0.2rem;
                    .comment-reply .demo-raised-button {
                        width: 0.8rem;
                        height: 1.6rem;
                    }
                }
            }
            .comments-peopele-ups {
                float: right;
                color: $gray;
            }
            .comments-peopele-time {
                position: absolute;
                font-size: 1.2rem;
                line-height: 2.2rem;
            }
            .textsms {
                float: right;
                margin-right: 0.5rem;
            }
        }
        #comments-input {
            text-align: center;
            margin: 1rem;
        }

        #topdown_wrap{
            position:fixed;
            width:100%;
            z-index:3000;
            top:0;
            border-bottom:1px solid rgba(0,0,0,.1);
            display:none;
            }
        .download_content{
            display:block;
            background-color:rgba(255,255,255,.7);
            color:#333
            }
        .download_banner{width:100%;height:45px;line-height:45px}
        .download_banner img{vertical-align:middle}
        .closebtn{float:right;padding:15px 10px;font-size:16px}
        .secimg_box img{
            position:relative;
            width:100%;
            }
    }
</style>
