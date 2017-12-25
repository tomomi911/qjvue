<template>
<!--首页-->
    <div class="wrapper">
        <HeaderBar></HeaderBar>
        <InfoFlex class="tabs"></InfoFlex>
    </div>
</template>

<script>
    import HeaderBar from '@/components/HeaderBar.vue'
    import InfoFlex from '@/components/InfoFlex.vue'
    
    export default {
        components: {
            HeaderBar,           
            InfoFlex
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
            margin: 2rem 0 5rem 0;
        }
    }
</style>
