// pages/service-details/service-details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '黄先生',
    avator: '',
    bookTime: '08：00~09：00',
    signTime: '2019年3月9日8点',
    master: '苗老师',
    id: '1',
    history: [{
        id: '1',
        avator: '',
        shopName: '空间养生馆旗舰店1',
        master: '苗老师',
        project: ['空间艾灸', '空间按摩'],
        serviceTime: '3月9日8点'
      },
      {
        id: '2',
        avator: '',
        shopName: '空间养生馆旗舰店2',
        master: '苗老师',
        project: ['空间艾灸', '空间按摩'],
        serviceTime: '3月9日8点'
      }
    ]
  },

  look(e) {
    // let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../book-details/book-details?type=2'
    })
  },
  close(e) {
    let id = e.currentTarget.dataset.id;
    wx.switchTab({
      url: '../book/book?id=' + id
    })
  },
  service(e) {
    // let id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '是否确认服务',
      confirmText: "确认",
      cancelText: "取消",
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          console.log('确认')
          wx.navigateTo({
            url: '../tongue-service/tongue-service?type=1'
          })
        } else {
          console.log('取消')
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})