<template>
    <div>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import toolbar from './Toolbar.vue'
    import Footer from './AppFooter.vue'
    import Login from './login/Login.vue'
    export default {
        name: "AppHome",
        components:{
            toolbar,
            'app-footer':Footer,
            'login':Login
        }
    }
</script>

<style scoped>

</style>