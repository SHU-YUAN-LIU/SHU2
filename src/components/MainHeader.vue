<template>
    <div :class="['header-group', headerClass]">
        <div class="header">
            <div class="header-logo" v-if="showLogo">
                <img src="@/assets/image/icon/logo-blue.svg" alt="logo-blue">
            </div>
            <div class="header-right">
                <a href="#" :class="['start', { 'active': showMenu }]">
                    <span>START YOUR PROJECT</span>
                </a>
                <div class="ham-line-group" @click.stop="toggleMenu">
                    <div :class="['line-group', { 'active': showMenu }]">
                        <div :class="['line', blackHam]"></div>
                        <div :class="['line', blackHam]"></div>
                        <div :class="['line', blackHam]"></div>

                    </div>
                </div>
            </div>
        </div>
        <hamMenu v-if="showMenu" />
    </div>

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

        }
    },
    mounted() {
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;//控制hamMenu開關
        }
    },
    props: {
        headerClass: {
            type: [String, Array], //允許headerClass是字符或是數組
            default: '',
        },
        blackHam: {
            type: String,
            default: '',
        },
        showLogo: {
            type: Boolean,
            default: false,
        },
        showMenu: {
            type: Boolean,
            default: false,
        },


    },
}
</script>

<style scoped></style>