<template>
  <li class="home-item" onclick="">
    <section class="home-item__inner">
      <article :style="{ backgroundImage }" class="home-item__front flex flex--align-center flex--justify-center">
        <hgroup class="flex flex--direction-column flex--align-center">
          <h3>Pastor Alemão</h3>
          <h5>Cachorro</h5> 
        </hgroup>
      </article>
      <article class="home-item__back flex flex--align-center flex--justify-center">
        <hgroup class="flex flex--direction-column flex--align-center">
          <h3>Back</h3>
          <h5>back</h5> 
        </hgroup>
      </article>
    </section>
  </li>
</template>

<script>
import bgImg1 from '@/assets/images/test/pastor_alemao.jpg';

export default {
  data() {
    return {
      backgroundImage: `url(${bgImg1})`,
    }
  }

}
</script>

<style lang="scss" scoped>
.home-item {
  min-height: 170px;
  border-radius: 20px;
  color: white;
  text-shadow: $text-shadow-default;
  border: 1.5px solid $black_color;
  transition: border-color 0.5s;
  cursor: crosshair;
  perspective: 1000px;

  &:hover, &:active {
    border-color: $primary_color_second;
  }

  &:hover &__inner, &:active &__inner {
    transform: rotateY(180deg);
  }

  &__inner {
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  &__front, &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 19px;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  &__back {
    transform: rotateY(180deg);
    background: $secondary_color_first;
  }

  @media (min-width: 2000px) { height: calc(calc(2000px/6) - 28px - 28px); }
  @media (max-width: 2000px) { height: calc(calc(2000px/6) - 28px - 28px); }
  @media (max-width: 1900px) { height: calc(calc(1900px/6) - 28px - 28px); }
  @media (max-width: 1800px) { height: calc(calc(1800px/6) - 28px - 28px); }
  @media (max-width: 1700px) { height: calc(calc(2000px/6) - 28px - 28px); }
  @media (max-width: 1600px) { height: calc(calc(1600px/5) - 28px - 28px); }
  @media (max-width: 1500px) { height: calc(calc(1500px/5) - 28px - 28px); }
  @media (max-width: 1400px) { height: calc(calc(1400px/5) - 28px - 28px);  }
  @media (max-width: 1350px) { height: calc(calc(1350px/5) - 28px - 28px);  }
  @media (max-width: 1300px) { height: calc(calc(1300px/5) - 28px - 28px);  }
  @media (max-width: 1250px) { height: calc(calc(1250px/5) - 28px - 28px);  }
  @media (max-width: 1200px) { height: calc(calc(1200px/4) - 28px - 28px); }
  @media (max-width: 1150px) { height: calc(calc(1150px/4) - 28px - 28px); }
  @media (max-width: 1100px) { height: calc(calc(1200px/4) - 28px - 28px); }
  @media (max-width: 1050px) { height: calc(calc(1050px/4) - 28px - 28px); }
  @media (max-width: 1000px) { height: calc(calc(1000px/4) - 28px - 28px); }
  @media (max-width: 950px) { height: calc(calc(950px/4) - 28px - 28px); }
  @media (max-width: 900px) { height: calc(calc(900px/4) - 28px - 28px); }
  @media (max-width: 850px) { height: calc(calc(850px/4) - 28px - 28px); }
  @media (max-width: 800px) { height: calc(calc(800px/3) - 28px - 28px); }
  @media (max-width: 750px) { height: calc(calc(750px/3) - 28px - 28px); }
  @media (max-width: 700px) { height: calc(calc(700px/3) - 28px - 28px); }
  @media (max-width: 650px) { height: calc(calc(650px/3) - 28px - 28px); }
  @media (max-width: 600px) { height: calc(calc(600px/2) - 28px - 28px);}
  @media (max-width: 550px) { height: calc(calc(550px/2) - 28px - 28px);}
  @media (max-width: 500px) { height: calc(calc(500px/2) - 28px - 28px);}
  @media (max-width: 450px) { height: calc(calc(450px/2) - 28px - 28px);}
  @media (max-width: 400px) { height: calc(calc(400px/2) - 28px - 28px);}
  @media (max-width: 350px) { height: calc(calc(350px/2) - 28px - 28px);}
  @media (max-width: 300px) { height: calc(calc(300px/1) - 28px - 28px);}
}
</style>