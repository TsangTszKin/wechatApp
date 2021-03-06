// components/home/content/hot/hot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id: {
      type: Number
    },
    imgPath: {
      type: String
    },
    title: {
      type: String
    },
    address: {
      type: String
    },
    time: {
      type: String
    },
    type: {
      type: Number
    }
  },
  relations: {
    './navbar': {
      type: 'parent', // 关联的目标节点应为父节点
      linked(target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      },
      linkChanged(target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked(target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})