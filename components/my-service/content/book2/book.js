// components/home/content/hot/hot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id: {
      type: Number
    },
    shopName: {
      type: String
    },
    man: {
      type: String
    },
    bookTime: {
      type: String
    },
    projectName: {
      type: String
    },
    serviceTime: {
      type: String
    },
    status: {
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
    goToBookTime(e) {
      console.log(e);
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../../../../book-time/book-time?id=' + id
      })
    },
    look(e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../../../../book-details/book-details?id=' + id
      })
    },
    evaluate(e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../../../../evaluate/evaluate?id=' + id
      })
    },
    sign(e) {
      let id = e.currentTarget.dataset.id;
      wx.showModal({
        title: '签到确认',
        content: '您已成功签到',
        confirmText: "健康问卷",
        cancelText: "关闭",
        success: function(res) {
          console.log(res);
          if (res.confirm) {
            console.log('健康问卷');
            wx.navigateTo({
              url: '../../../../qna/qna?type=1',
            })
          } else {
            console.log('关闭')
          }
        }
      });
    },
    cancel() {
      wx.showModal({
        title: '取消预约',
        content: '本月您还有2次免扣积分的机会。确认是否取消。',
        confirmText: "关闭",
        cancelText: "确认",
        success: function(res) {
          console.log(res);
          if (res.confirm) {
            console.log('关闭')
          } else {
            console.log('确认')
          }
        }
      });
    },
    tel(e) {
      let phone = e.currentTarget.dataset.phone;
      wx.makePhoneCall({
        phoneNumber: String(phone) //仅为示例，并非真实的电话号码
      })
    }
  },
})