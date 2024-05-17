<template>
    <div class="header-group">
        <div class="header">
            <div class="header-logo" v-if="showLogo">
                <img src="@/assets/image/icon/logo-blue.svg" alt="">
            </div>
            <div class="header-right">
                <a href="#" :class="['start', { 'active': showMenu }]">
                    <span>START YOUR PROJECT</span>
                </a>
                <div class="ham-line-group" @click.stop="toggleMenu">
                    <div :class="['line-group', { 'active': showMenu }]">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <hamMenu v-if="showMenu" />
</template>

<script>
import homeSliderCard from '@/components/homeSliderCard.vue'
import hamMenu from '@/components/hamMenu.vue'

export default {
    components: {
        homeSliderCard,
        hamMenu
    },
    data() {
        return {
            showLogo: false, //logo一開始關著
            showMenu: false, // 選單一開始關著
        }
    },
    mounted() {

    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;//控制hamMenu開關
        }
    },
}
</script>

<style></style>