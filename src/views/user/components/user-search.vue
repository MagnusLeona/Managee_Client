<template>
  <div>
    搜索框
    <div>
      <input type="text" placeholder="请输入客户ID、姓名或者邮箱" v-model="codition"/>
      <div class="commit-button" @click="$emit(commitSearch)">提交</div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch, toRefs, computed } from 'vue';
export default {
  props: {
    DefProps: Object
  },
  setup(props) {
    let { DefProps } = toRefs(props);

    let counter = ref(0);

    const setCounter = async () => {
      console.log('SetCounter');
      setTimeout(() => {
        counter.value ++;
        console.log(counter.value);
      }, 1000);
    };

    const listen = async () => {
      console.log('Listen');
    };

    // 触发mounted方法，调用setCounter
    onMounted(setCounter);

    //定义watch方法，监听DefProps，需要先将props提取并使用toRefs引用
    watch(DefProps, listen);

    const myComputed = computed(() => {
      return 10;
    });

    return {
      conuter: myComputed
    };
  },
  data() {
    return {
      condition: ''
    };
  }
};
</script>

<style>

</style>