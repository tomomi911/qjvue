<template>
<!--首页-->
    <div class="wrapper">
        <!--顶栏-->
        <HeaderBar></HeaderBar>    
        <!--顶部的tabs及列表内容-->
        <exposure class="tabs"></exposure>
    </div>
</template>

<script>
    import HeaderBar from '@/components/HeaderBar.vue'
    import exposure from '@/components/exposure.vue'
    export default {
        components: {
            exposure,
            HeaderBar
        },
        data() {
            return {
               msg:'欢迎'     
        }
    }
}
</script>

<style scoped lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        .tabs {
            flex: 1;
            position:relative;
            top:10rem;
            margin: 4rem 0 0 0;
        }
    }
    .header{
        width:100%;
        height:14rem;
        position:absolute;
        left:0;
        top:0;
    }
    
</style>
