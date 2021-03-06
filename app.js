//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (login_res) {
          console.log("login_res", login_res)
          if (login_res.code) {
            // 发起网络请求
            wx.request({
              url: 'https://test.com/onLogin',
              data: {
                code: login_res.code
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }


          wx.getUserInfo({
            success: function (res) {
              console.log("res", res)
              that.globalData.userInfo = res.userInfo
              that.globalData.allData = res;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    allData: null
  }
})