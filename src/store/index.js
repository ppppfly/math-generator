import {createStore} from "vuex";
import {oralGeneratorBatch} from "../utils/OralUtil";

const store = createStore({
  state() {
    return {
      formModel: {
        operList: ['+', '-'], // 可选运算符
        paramMin: 0, // 参与运算的数的最小值
        paramMax: 100, // 参与运算的数的最大值
        resultMin: 0, // 计算结果的最小值
        resultMax: 100, // 计算结果的最大值
        operNum: 3, // 运算位数
        pageCount: 10, // 总页数
        pageSize: 30, // 每页题目数量
        batchNum: 300, // 生成题目数量
        displayType: [1], // 题目呈现方式。1|标准题型，2|填空题型
        bracketType: 0, // 有无括号。0|无、1|有、2|随机
      },
      oralList: [],
    }
  },
  getters: {
    oralPageList: state => {
      const pageSize = state.formModel.pageSize
      const pageNum = Math.ceil(state.oralList.length / pageSize)
      if (pageNum > 0) {
        return [...(new Array(pageNum)).keys()].map((pageIndex) => {
          const startIdx = pageIndex * pageSize;
          const endIdx = (pageIndex + 1) * pageSize;
          return state.oralList.slice(startIdx, endIdx);
        });
      }
      return [];
    }
  },
  mutations: {
    handleOralGenerator(state, payload) {
      const params = payload.value
      console.log('params -> ', params)
      params.batchNum = params.pageCount * params.pageSize
      state.formModel = params

      let oralList = oralGeneratorBatch(params)
      state.oralList = oralList.map(item => ({
        display: item.display.replace('_', '__'),
        answer: item.answer,
      }))
    }
  }
})

export default store