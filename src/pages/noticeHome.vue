<template>
<!--首页-->
    <div class="wrapper">
        <!--顶栏-->
        <HeaderBar></HeaderBar>
        <!--顶部的tabs及列表内容-->
        <notice class="tabs"></notice>
    </div>
</template>

<script>
    import HeaderBar from '@/components/HeaderBar.vue'
    import notice from '@/components/notice.vue'
    import axios from 'axios'
    export default {
        components: {
            notice,
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
            margin: 4rem 0 5rem 0;
        }
    }
</style>
