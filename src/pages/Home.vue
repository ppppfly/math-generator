<template>
  <div class="oral">
    <div class="print_hide">
      <div class="params">
        <OralParams ref="oralParamsRef"/>
      </div>
      <div class="buttons">
        <el-button @click="handleOralGenerator">
          生成
        </el-button>
        <el-button @click="handlePrint">
          打印
        </el-button>
      </div>
    </div>
    <OralPreview ref="oralPreviewRef"/>
  </div>
</template>

<script setup>
import OralParams from "../components/OralParams.vue";
import OralPreview from "../components/OralPreview/OralPreview.vue";
import {computed, ref} from "vue";

let oralList = ref([])
const oralParamsRef = ref(null);
const oralPreviewRef = ref(null);


let pageNum = computed(() => Math.floor(oralList.value.length / 30) -1)
function handleOralGenerator() {
  const params = oralParamsRef.value.getParams();
  params.batchNum = parseInt(params.pageCount * params.pageSize, 10);
  console.log('题目参数：', params);
  oralPreviewRef.value.oralGenerator(params);
}

</script>

<style scoped>

</style>