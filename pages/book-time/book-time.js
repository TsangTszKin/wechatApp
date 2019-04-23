// pages/book-time/book-time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        name: '08:00~09:00',
        value: '08:00~09:00',
        status: 0,
        checked: true
      },
      {
        name: '09:00~10:00',
        value: '09:00~10:00',
        status: 1
      },
      {
        name: '09:00~10:00',
        value: '1',
        status: 1
      },
      {
        name: '09:00~10:00',
        value: '2',
        status: 1
      },
      {
        name: '09:00~10:00',
        value: '3',
        status: 1
      },
      {
        name: '09:00~10:00',
        value: '4',
        status: 1
      },
      {
        name: '09:00~10:00',
        value: '5',
        status: 1
      },
      {
        name: '09:00~10:00',
        value: '6',
        status: 1
      },
    ],
    modal: false
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.list;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      list: radioItems
    });
  },
  hideModal(){
    this.setData({
      modal: false
    })
  },
  showModal() {
    this.setData({
      modal: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
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

  },

  book(e) {
    console.log(e);
    let status = e.currentTarget.dataset.status;
    switch (status) {
      case 0:
        wx.showModal({
          title: '预约提示',
          content: '预约已满，请选择其它时段。',
          confirmText: "仍要申请",
          cancelText: "关闭",
          success: function(res) {
            console.log(res);
            if (res.confirm) {
              console.log('仍要申请')
            } else {
              console.log('关闭')
            }
          }
        });
        break;
      case 1:
        wx.showToast({
          title: '预约成功',
          icon: 'success',
          duration: 2000
        })
        break;
    }

  }
})