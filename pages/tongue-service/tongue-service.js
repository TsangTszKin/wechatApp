// pages/tongue-history/tongue-history.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    type: '1' //1理疗前，2理疗后
  },

  seeBigImg(e) {
    console.log(e.target.dataset.url)
    util.seeBigImg(e.target.dataset.url);
  },
  selectImg(e) {
    var self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        self.setData({
          imgUrl: tempFilePaths[0]
        })
      }
    })
  },
  next(e) {
    this.data.type == 1 ?
      wx.navigateTo({
        url: '../service-item/service-item',
      }) :
      wx.navigateTo({
        url: '../service-advice/service-advice',
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      type: options.type
    })
    wx.setNavigationBarTitle({
      title: options.type == 1 ? '服务前舌诊' :'服务后舌诊'
    })
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