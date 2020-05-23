<template>
  <div class="card">
      <span class="name">
          {{ name }}
      </span>
      <span class="amount">
          {{ amount }}
      </span>
  </div>
</template>

<script>
export default {
    props: ['name', 'amount']
}
</script>

<style scoped>
  .card {
    background-color: #dc143c;
    color: #ffffff;
    margin: 10px;
    height: 55px;
    border-radius: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;

  }
    .card .name {
        margin-left: 15px;
    }

    .card .amount {
        margin: 10px;
        padding: 5px;
        height: 35px;
        width: 35px;
        border-radius: 18px;
        background-color: #ffffff;
        color:#dc143c;

        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;


    }
</style>