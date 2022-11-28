<template>
  <nav class="home-filters flex flex--direction-column">
    <h2>Filtros</h2>
    <ul class="flex">
      <li class="active"><nuxt-link to="/mamiferos">🐶 Mamíferos</nuxt-link></li>
      <li><nuxt-link to="/aves">🐦 Aves</nuxt-link></li>
      <li><nuxt-link to="/repteis">🐊 Répteis</nuxt-link></li>
      <li><nuxt-link to="/anfibios">🐸 Anfíbios</nuxt-link></li>
      <li><nuxt-link to="/peixes">🐟 Peixes</nuxt-link></li>
      <li><nuxt-link to="/invertebrados">🐍 Invertebrados</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @mixin activeEffect() {
    opacity: 1;
    transform: scale(1.05);
  }

  .home-filters {
    width: 100%;

    h2 {
      padding: 5px 20px;
    }

    ul {
      padding: 5px 20px;
      gap: 10px;
      width: 100%;
      overflow: auto;

      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll; 

      &::-webkit-scrollbar {
          display: none; /* for Chrome, Safari, and Opera */
      }

      li {
        border: 2px dashed $black_color;
        border-radius: 25px;
        padding: 7px 15px;
        opacity: 0.7;
        transition: opacity 0.5s, transform 0.5s;
        white-space: nowrap;

        &:hover {
          @include activeEffect;
        }

        a {
          color: $black_color;
          font-weight: bold;
          width: 100%;
          height: 100%;
        }
      }

      .active {
        @include activeEffect;
        border: 2px dashed $primary_color_second;

        a {
          color: $primary_color_second;
        }
      }
    }
  }
</style>