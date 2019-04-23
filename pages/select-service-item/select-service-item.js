// pages/qna/qna.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    radioItems: [{
      question: '选择养生项目',
      list: [{
        name: '空间火灸',
        value: '1',
        checked: false
      },
      {
        name: '空间艾灸',
        value: '2'
      },
      {
        name: '空间按摩',
        value: '3'
      }
      ]
    }],
    type: 0//1客户身份进来， 2理疗师身份进来
  },

  radioChange: function (e) {
    console.log(e);
    console.log('radio发生change事件，携带value值为：', e.currentTarget.dataset.value);

    var index1 = e.currentTarget.dataset.index1;
    var index2 = e.currentTarget.dataset.index2;
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if (i == index1) {
        for (var j = 0; j < radioItems[i].list.length; j++) {
          radioItems[i].list[j].checked = false;
        }
      }

    }

    radioItems[index1].list[index2].checked = true;

    this.setData({
      radioItems: radioItems
    });
  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  ok(e){
    wx.navigateTo({
      url: '../service-item/service-item',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      type: options.type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})