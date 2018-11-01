<template>

  <!-- apply start-->
  <div class="apply section">
    <div class="title">Apply Bate Version Inner Play</div>
    <form class="form" action="##">
      <div class="group">
        <input class="input" type="text" placeholder="job" />
        <input class="input" type="text" placeholder="job" />
        <input class="input" type="text" placeholder="job" />
        <input class="input" type="text" placeholder="job" />
      </div>
      <input class="submit" type="submit" value="submit" />
    </form>
  </div>
  <!-- apply end -->
</template>

<script>


import jstracker from 'jstracker'
jstracker.init({
  report: (errorLogs) => {
    alert('apply');
    alert(JSON.stringify(errorLogs));
  }
});

export default {
  name: "Apply"
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";
@rem:  37.5rem;;

@media only screen and (min-width: 1025px) {
  .apply {
    background: #2e2a86;
  }
  .apply .title {
    font-weight: 500;
    font-size: 24/@rem;
    color: #70fec3;
    margin-top: 100/@rem;
    text-align: center;
  }
  .apply .form {
    width: 470/@rem;
    margin: 40/@rem auto 80/@rem;
  }
  .apply .form .group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .apply .form .group .input {
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 8/@rem;
    padding-left: 20/@rem;
    height: 45/@rem;
  }
  .apply .form .group .input::placeholder {
    font-size: 16/@rem;
    color: #7099ca;
  }
  .apply .form .group .input:nth-child(1),
  .apply .form .group .input:nth-child(2),
  .apply .form .group .input:nth-child(3) {
    width: 150/@rem;
  }
  .apply .form .group .input:nth-child(4) {
    width: 100%;
    margin-top: 10/@rem;
  }
  .apply .form .submit {
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 100/@rem;
    width: 250/@rem;
    height: 52/@rem;
    font-size: 16/@rem;
    color: #ffffff;
    display: block;
    margin: 40/@rem auto 0;
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
  .apply {
    background: #2e2a86;
  }
  .apply .title {
    font-weight: 500;
    font-size: 18/@rem;
    color: #70fec3;
    margin-top: 80/@rem;
    text-align: center;
  }
  .apply .form {
    width: 100%;
    margin: 20/@rem auto 80/@rem;
  }
  .apply .form .group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20/@rem;
  }
  .apply .form .group .input {
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 8/@rem;
    padding-left: 20/@rem;
    height: 45/@rem;
  }
  .apply .form .group .input::placeholder {
    font-size: 16/@rem;
    color: #7099ca;
  }
  .apply .form .group .input:nth-child(1),
  .apply .form .group .input:nth-child(2),
  .apply .form .group .input:nth-child(3),
  .apply .form .group .input:nth-child(4) {
    width: 100%;
    margin-top: 10/@rem;
  }
  .apply .form .submit {
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 100/@rem;
    width: 250/@rem;
    height: 52/@rem;
    font-size: 16/@rem;
    color: #ffffff;
    display: block;
    margin: 40/@rem auto 0;
  }
}
</style>
