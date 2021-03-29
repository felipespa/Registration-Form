<template>
  <div>
    <section class="p-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="error-section">
              <h1>404</h1>
              <h2>Página não encontrada</h2>
              <router-link :to="{ path: '/' }" class="btn btn-solid"
                >Voltar para a Home</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.error-section {
  padding: 130px 0 140px;
  text-align: center;
  h1 {
    font-size: 200px;
    font-weight: 900;
    margin: 0;
    line-height: 0.8;
    color: #aaaaaa;
    margin-top: -11px;
  }
  h2 {
    color: #aaaaaa;
    font-weight: 500;
    letter-spacing: 3px;
    margin: 40px 0;
  }
  .btn-solid {
    color: #fff;
    background: rgb(25, 118, 210);
  }
}
</style>
