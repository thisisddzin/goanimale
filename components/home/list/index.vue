<template>
  <ul class="home-list">
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
    <home-list-item />
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-list {
  padding: 20px;
  display: grid;
  gap: 20px;

  @media (min-width: 2000px) { grid-template-columns: auto auto auto auto auto auto auto; }
  @media (max-width: 2000px) { grid-template-columns: auto auto auto auto auto auto; }
  @media (max-width: 1600px) { grid-template-columns: auto auto auto auto auto; }
  @media (max-width: 1200px) { grid-template-columns: auto auto auto auto; }
  @media (max-width: 900px) { grid-template-columns: auto auto auto auto; }
  @media (max-width: 800px) { grid-template-columns: auto auto auto; }
  @media (max-width: 600px) { grid-template-columns: auto auto; }
  @media (max-width: 300px) { grid-template-columns: auto; }
}
</style>