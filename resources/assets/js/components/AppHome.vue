<template>
    <div>
        <toolbar></toolbar>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import toolbar from './Toolbar.vue'
    import Footer from './AppFooter.vue'
    export default {
        name: "AppHome",
        components:{
            toolbar,
            'app-footer':Footer
        }
    }
</script>

<style scoped>

</style>