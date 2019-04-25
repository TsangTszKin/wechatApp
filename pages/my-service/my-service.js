//index.js

var util = require('../../utils/util.js')
var http = require('../../utils/http.js');
var app = getApp()
Page({
  data: {

    activeIndex: 0,
    bookList0: [],
    bookList1: [],
    bookList2: []
  },

  //事件处理函数

  tabChange(e) {
    console.log('e', e);
    if (Number(e.detail) != this.data.activeIndex) {
      this.setData({
        activeIndex: e.detail
      })
      this.refresh();
    }

  },
  onLoad: function() {
    // this.init();
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  upper: function() {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function() {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },
  lower: function(e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function() {
      wx.hideNavigationBarLoading();
      that.nextLoad();
    }, 1000);
    console.log("lower")
  },
  refresh: function() {
    console.log("Number(this.data.activeIndex)", Number(this.data.activeIndex));
    let self = this;
    wx.showToast({
      title: '刷新中',
      icon: 'loading'
    });


    switch (Number(this.data.activeIndex)) {
      case 0:
        {
          let mockData = {
            "bookList0|5": [{
              'id|+1': 1,
              "shopName|4-8": 'x',
              "man|3": 'x',
              "bookTime": '08:00~09:00',
              "projectName|3-10": "x",
              "serviceTime": '2019年3月9日 08:00',
              "status|1": [1] //已服务，待签到，待服务
            }]
          }
          http.ajax('get', '/api/test', {}, (res) => {
            self.setData({
              bookList0: res.data.bookList0
            });
            wx.hideToast()
          }, mockData)
          break;
        }

      case 1:
        {
          let mockData = {
            "bookList1|5": [{
              'id|+1': 1,
              "shopName|4-8": 'x',
              "man|3": 'x',
              "bookTime": '08:00~09:00',
              "projectName|3-10": "x",
              "serviceTime": '2019年3月9日 08:00',
              "status|1": [2] //已服务，待签到，待服务
            }]
          }
          http.ajax('get', '/api/test', {}, (res) => {
            self.setData({
              bookList1: res.data.bookList1
            });
            wx.hideToast()
          }, mockData)
          break;

        }
      case 2:
        {
          let mockData = {
            "bookList2|5": [{
              'id|+1': 1,
              "shopName|4-8": 'x',
              "man|3": 'x',
              "bookTime": '08:00~09:00',
              "projectName|3-10": "x",
              "serviceTime": '2019年3月9日 08:00',
              "status|1": [0] //已服务，待签到，待服务
            }]
          }
          http.ajax('get', '/api/test', {}, (res) => {
            self.setData({
              bookList2: res.data.bookList2
            });
            wx.hideToast()
          }, mockData)
          break;

        }
    }



  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function() {
    let self = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
    })

    switch (Number(this.data.activeIndex)) {
      case 0:
        {
          let mockData = {
            "bookList0|5": [{
              'id|+1': 1,
              "shopName|4-8": 'x',
              "man|3": 'x',
              "bookTime": '08:00~09:00',
              "projectName|3-10": "x",
              "serviceTime": '2019年3月9日 08:00',
              "status|1": [1] //已服务，待签到，待服务
            }]
          }
          http.ajax('get', '/api/test', {}, (res) => {
            // console.log(res);
            let bookList0 = self.data.bookList0;
            res.data.homeList.forEach(element => {
              bookList0.push(element);
            })
            self.setData({
              bookList0: bookList0
            });
            wx.hideToast()
          }, mockData)
          break;
        }

      case 1:
        {
          let mockData = {
            "bookList1|5": [{
              'id|+1': 1,
              "shopName|4-8": 'x',
              "man|3": 'x',
              "bookTime": '08:00~09:00',
              "projectName|3-10": "x",
              "serviceTime": '2019年3月9日 08:00',
              "status|1": [2] //已服务，待签到，待服务
            }]
          }
          http.ajax('get', '/api/test', {}, (res) => {
            let bookList1 = self.data.bookList1;
            res.data.bookList1.forEach(element => {
              bookList1.push(element);
            })
            self.setData({
              bookList1: bookList1
            });
            wx.hideToast()
          }, mockData)
          break;

        }
      case 2:
        {
          let mockData = {
            "bookList2|5": [{
              'id|+1': 1,
              "shopName|4-8": 'x',
              "man|3": 'x',
              "bookTime": '08:00~09:00',
              "projectName|3-10": "x",
              "serviceTime": '2019年3月9日 08:00',
              "status|1": [0] //已服务，待签到，待服务
            }]
          }
          http.ajax('get', '/api/test', {}, (res) => {
            let bookList2 = self.data.bookList2;
            res.data.bookList2.forEach(element => {
              bookList2.push(element);
            })
            self.setData({
              bookList2: bookList2
            });
            wx.hideToast()
          }, mockData)
          break;

        }
    }



  }


})