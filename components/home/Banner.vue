<template>
  <header ref="home-banner-header" :style="{ backgroundImage }" class="home-banner flex flex--align-center">
    <hgroup class="home-banner__title">
      <h1>🐶 Go Animale</h1>
      <h2>Participe da maior comunidade pet, conheça mais sobre o mundo pet, saiba qual pet é melhor para você.</h2>
    </hgroup>
    <svg viewBox="0 0 1440 120" fill="white"><path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path></svg>
  </header>
</template>

<script>
import bgImg1 from '@/assets/images/home-cover/7.png';
import bgImg2 from '@/assets/images/home-cover/8.png';
import bgImg3 from '@/assets/images/home-cover/9.png';
import bgImg4 from '@/assets/images/home-cover/10.png';
import bgImg5 from '@/assets/images/home-cover/11.png';
import bgImg6 from '@/assets/images/home-cover/12.png';

export default {
  data() {
    return {
      backgroundImage: `url(${bgImg1})`,
    }
  },
  mounted() {
    this.startBanner()
  },
  methods: {
    startBanner() {
      let pos = 0
      const images = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6]

      setInterval(() => {
        if(pos > images.length -2) pos = 0
        else pos ++

        this.$refs['home-banner-header'].style.backgroundImage = `url(${images[pos]})`
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-banner {
  width: 100%;
  height: 500px;
  padding: 20px;
  color: white;
  position: relative;
  padding-bottom: 120px;
  background-position: bottom center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  transition: background-image 1s ease;
  filter: grayscale(20%);

  @media (max-width: 600px) {
    padding: 12px;
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: -10px;
  }

  &__title {
    max-width: 500px;
    width: 100%;
    text-shadow: $text-shadow-default;

    h1 {
      font-size: 55px;
    }

    h2 {
      font-weight: 400;
    }
  }

  @media(max-width: 600px) {
    height: 400px;
    padding-bottom: 60px;

    &__title {
      h1 {
        font-size: 40px;
      }
    }
  }
}
</style>
