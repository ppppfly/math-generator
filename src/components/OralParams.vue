<template>
  <div class="oral-param print_hide">
    <div class="param-form">
      <el-form :model="formModel" @submit="handle_submit">
        <el-form-item label="题型选择:">
          <el-checkbox-group v-model="formModel.operList">
            <el-checkbox label="+">加法</el-checkbox>
            <el-checkbox label="-">减法</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="答题方式:">
          <el-checkbox-group v-model="formModel.displayType">
            <el-checkbox :label="1">标准题</el-checkbox>
            <el-checkbox :label="2">填空题</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="有无括号">
          <el-radio-group v-model="formModel.bracketType">
            <el-radio :label="0">无括号</el-radio>
            <el-radio :label="1">有括号</el-radio>
            <el-radio :label="2">随机</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="算数范围:">
          <el-input-number v-model="formModel.paramMin" size="small" label="最小值"/>
          <div class="scope-joint-mark"/>
          <el-input-number v-model="formModel.paramMax" size="small" label="最大值"/>
        </el-form-item>

        <el-form-item label="结果范围:">
          <el-input-number v-model="formModel.resultMin" size="small" label="最小值"/>
          <div class="scope-joint-mark"/>
          <el-input-number v-model="formModel.resultMax" size="small" label="最大值"/>
        </el-form-item>

        <el-form-item label="运算位数:">
          <el-input-number v-model="formModel.operNum" :min="2" :max="10" size="small" label="运算位数"/>
        </el-form-item>

        <el-form-item label="题目数量:">
          <span>
            <span class="param-sub-label">总页数：</span>
            <el-input-number v-model="formModel.pageCount" :min="1" size="small" label="总页数"/>
            <span class="param-sub-label label-page-size">每页题目数：</span>
            <el-input-number v-model="formModel.pageSize" :min="1" size="small" label="每页条数"/>
          </span>
        </el-form-item>

        <div class="buttons">
          <el-button native-type="submit">生成</el-button>
          <el-button @click="handle_print">打印</el-button>
        </div>

      </el-form>
    </div>
    <div class="param-declare"/>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useStore} from "vuex";

let store = useStore()

let formModel = ref(store.state.formModel)

const handle_submit = () => {
  store.commit('handleOralGenerator', formModel)
}
const handle_print = () => window.print()
</script>

<style lang="scss" scoped>

.oral-param {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;

  .param-form {
    width: 100%;
    margin-left: 20px;

    .scope-joint-mark {
      display: inline-block;
      width: 20px;
      height: 2px;
      background-color: #606266;
      padding: 4px 10px;
      background-clip: content-box;
    }

    .param-sub-label {
      font-size: 12px;
      color: #606266;;
    }

    .label-page-size {
      padding-left: 10px;
    }
  }

  .param-declare {
    width: 100%;
  }
}

.el-form-item {
  margin-bottom: 0;
}

.buttons {
  display: flex;
  justify-content: center;
  margin: 10px;
}
</style>
