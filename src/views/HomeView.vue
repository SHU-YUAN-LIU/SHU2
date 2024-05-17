<template>

  <div class="home-container">
    <MainHeader />
    <!-- <MainHeader @click.stop="toggleMenu" /> -->
    <!-- <hamMenu v-if="showMenu" /> -->
    <!-- 首頁開頭 -->
    <div class="home-top">
      <!-- 影片 -->
      <div class="video-container-group" @scroll="scrollEvent">
        <video class="video-container" autoplay muted loop>
          <source src="@/assets/video/DigiSalad Website Video-v3.mp4" type="video/mp4" id="videoVideo">
        </video>
      </div>
      <!-- 標題 -->
      <div class="home-title-group">
        <!-- logo -->
        <div class="logo">
          <img src="@/assets/image/icon/logo.svg" alt="">
        </div>
        <!-- title -->
        <div class="home-title">
          <span>WE CREATE</span> <br>
          <span>AMAZING </span><br>
          <span>DIGITAL EXPERIENCES</span>
        </div>
      </div>
      <!-- 左邊小字 -->
      <div class="home-left-line-group">
        <div class="home-left-line"></div>
        <span>DIGITAL AGENCY</span>
      </div>
      <!-- 往下滑(TASTE US NOW!) -->
      <div class="taste-us-now">
        <div>
          <img src="@/assets/image/icon/dish.svg" alt="">
          <span>TASTE US NOW!</span>
        </div>
        <div class="taste-us-now-line"></div>
      </div>
    </div>
    <!-- 內文-頭 -->
    <waveLineTitle :waveLineTitle="about" style="background-color:#F2F2F2;  padding: 130px 0 60px;" />

    <!-- 內文影片 -->
    <div class="content-video-container">
      <video class="content-video" autoplay muted loop>
        <source src="@/assets/video/DigiSalad - 為您創造驚喜的用戶體驗.mp4" type="video/mp4" id="videoVideo">
      </video>
      <span class="content-video-word">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis
        tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu
        tellus tortor. Etiam at <br>condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante,
        eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
        consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
        molestie faucibus.
      </span>
      <button>
        <span>VIEW MORE</span>
        <div></div>
      </button>
    </div>
    <!-- 得獎AWARDS-藍色區塊 -->
    <div class="our-ingradients-group">
      <!-- 藍色標題  -->
      <div class="ingradients-top">
        <waveLineTitle :waveLineTitle="ourIngredients" style="padding: 360px 0 40px;" />
        <span class="our-ingradients-content">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis
          tincidunt<br>
          urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus
          tortor.<br> Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend
          a
          dolor et, venenatis<br> facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam
          consectetur,
          eros et vulputate euismod,<br> nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie
          faucibus.
        </span>
        <!-- our server -->
        <button>
          <span>OUR SERVICES</span>
          <div></div>
        </button>
      </div>

      <!-- 服務介紹-卡片 -->
      <!-- item是陣列裡的每一筆資料，index目前是索引值) -->
      <div class="cards">
        <div v-for="(item, index) in cards" :key="index">
          <!-- ourServerCard :跟子元件命名一樣="陣列裡的每一筆資料" -->
          <ourServerCard :item="item" />
        </div>
      </div>

      <!-- 藍底最底下小字 -->
      <div class="ingradients-bottom">
        <p>VIEW MORE DIGISALAD’S INGRADIENTS</p>
      </div>
      <!-- 得獎AWARDS-白色區塊 -->
      <div class="home-award-group">
        <div class="awards-title">
          <waveLineTitle :waveLineTitle="awards" />
          <span class="award-content">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper
            bibendum
            bibendum. Duis
            tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc
            eu
            tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
          </span>
        </div>
        <div class="awards-img-group">
          <img src="@/assets/image/亞洲智能應用程式大獎.svg" alt="">
          <img src="@/assets/image/亞洲智能應用程式大獎.svg" alt="">
          <img src="@/assets/image/亞洲智能應用程式大獎.svg" alt="">
          <img src="@/assets/image/亞洲智能應用程式大獎.svg" alt="">
        </div>
      </div>

      <!-- 底部TONYNG -->
      <div class="tonyng-bg">
        <img src="@/assets/image/TONYNG-bg.png" alt="">
        <div class="tonyng-group">
          <div class="tonyng-left">
            <img src="@/assets/image/TONYNG.png" alt="">
            <div>
              <span>TONY NG</span>
              <span>Founder & Creative Director</span>
            </div>
          </div>
          <div class="tonyng-right">
            <img src="@/assets/image/icon/quote.svg" alt="">
            <span>A great digital work isn’t about designing beautiful pages purely. It is about context - how do we
              deliver
              the <span>right experience to the right person at the right time.</span> The most important thing is that
              your work can
              engage customers at anytime, anywhere and let users experience an entire amazing digital journey.
            </span>
          </div>
        </div>
      </div>

    </div>

    <!-- 品牌經驗 -->
    <waveLineTitle :waveLineTitle="ourBrandEx" style="margin-top: 550px; padding: 13px 0 60px;" />
    <div class="brand-experience">
      <span>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis
        tincidunt
        urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus
        tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a
        dolor
        et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros
        et
        vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </span>
      <img src="@/assets/image/brand-experience.png" alt="brand-experience">
    </div>

    <!-- Home最底部 -->
    <div class="home-slider-bg">

      <div class="home-slider-cards-group">
        <div class="left-arrow">
          <img src="@/assets/image/icon/left-arrow.svg" alt="">
        </div>
        <homeSliderCard />
        <div class="right-arrow">
          <img src="@/assets/image/icon/right-arrow.svg" alt="">
        </div>
      </div>

      <div class="home-bg-pic">
        <img src="@/assets/image/lp-club-bg.png" alt="">
      </div>
      <div class="date-group">
        <div class="date-first">
          <p>01</p>
        </div>
        <div class="date-line"></div>
        <div class="date-end">
          <p>04</p>
        </div>
      </div>
    </div>


  </div>

</template>


<script>
import waveLineTitle from '@/components/waveLineTitle.vue';
import ourServerCard from '@/components/ourServerCard.vue';
import homeSliderCard from '@/components/homeSliderCard.vue';
import MainHeader from '@/components/MainHeader.vue';
import hamMenu from '@/components/hamMenu.vue'
export default {
  components: {
    waveLineTitle,
    ourServerCard,
    homeSliderCard,
    MainHeader,
    hamMenu,
  },
  data() {
    return {
      about: 'ABOUT DIGISALAD',
      awards: 'AWARDS',
      ourIngredients: 'OUR INGRADIENTS',
      ourBrandEx: 'OUR BRAND EXPERIENCE',

      //cards陣列裡面放物件(卡片資訊)
      cards: [
        {
          // 卡片1
          serverPic: './src/assets/image/icon/card-1.svg',
          serverTitle: 'UX DESIGN',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'VIEW MORE'
        },
        {
          // 卡片2
          serverPic: 'src/assets/image/icon/card-2.svg',
          serverTitle: 'UI DESIGN',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'VIEW MORE'
        },
        {
          // 卡片3
          serverPic: 'src/assets/image/icon/card-3.svg',
          serverTitle: 'WEBSITE DEVELOPMENT',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'VIEW MORE'
        },
        {
          // 卡片4
          serverPic: 'src/assets/image/icon/card-4.svg',
          serverTitle: 'MOBILE APP DEVELOPMENT',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'VIEW MORE'
        },
        {
          // 卡片5
          serverPic: 'src/assets/image/icon/card-5.svg',
          serverTitle: 'ECOMMERCE',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'VIEW MORE'
        },
        {
          // 卡片6
          serverPic: 'src/assets/image/icon/card-6.svg',
          serverTitle: 'CUSTOMER LOYALTY',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'VIEW MORE'
        },
        {
          // 卡片7
          serverPic: 'src/assets/image/icon/card-7.svg',
          serverTitle: 'DIGITAL TRANSFORMATION',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'VIEW MORE'
        },
        {
          // 卡片8
          serverPic: 'src/assets/image/icon/card-8.svg',
          serverTitle: 'DIGITAL MARKETING',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'VIEW MORE'
        },
        {
          // 卡片9
          serverPic: 'src/assets/image/icon/card-9.svg',
          serverTitle: 'BRANDING',
          serverContent: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
          viewMore: 'BRANDING'
        },
      ]
    }
  },
  mounted() {
    document.title = 'Home'
  },
  methods: {
    scrollEvent(e) {
      console.log(e);
    }
  },
}
</script>

<style lang="scss"></style>