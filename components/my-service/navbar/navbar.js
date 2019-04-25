// components/navbar.js
var util = require('../../../utils/util.js');
var http = require('../../../utils/http.js');
var app = getApp();
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookList0: {
      type: Array,
      value: []
    },
    bookList1: {
      type: Array,
      value: []
    },
    bookList2: {
      type: Array,
      value: []
    },
    activeIndex: {
      type: Number,
      value: 0
    },
  },

  relations: {
    './book-cell-0': {
      type: 'child', // 关联的目标节点应为子节点
      linked(target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged(target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked(target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    },
    './book-cell-1': {
      type: 'child', // 关联的目标节点应为子节点
      linked(target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged(target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked(target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    },
    './book-cell-2': {
      type: 'child', // 关联的目标节点应为子节点
      linked(target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged(target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked(target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: ["等签到", "进行中", "已结束"],
    sliderOffset: 0,
    sliderLeft: 0
  },
  lifetimes: {
    ready() {
      var that = this;
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
            sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
          });
        }
      });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tabClick: function(e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft
      });
      this.triggerEvent('tabChange', e.currentTarget.id); //update activeIndex
    },
  }
})