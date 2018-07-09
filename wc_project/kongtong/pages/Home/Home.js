
var app=getApp()
// pages/Home/Home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',id:"0"},
      {url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',id: "1"},
      {url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',id:"2"}
    ],

    proList: [
      {
        img: "/images/pro_01.jpg",
        title: "test",
        desc: "test"
      },
      {
        img: "/images/pro_02.jpg",
        title: "test",
        desc: "test"
      },
      {
        img: "/images/pro_03.jpg",
        title: "test",
        desc: "test"
      }
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("hello")

    this.swiperWidth();

  },
  onSwiperTap: function(event) {
    console.log(event)
    wx.showToast({
      title: event.target.id + ""
    })
  },

  // 获取并设置swiper的宽度
  swiperWidth: function() {
    // 获取当前设备信息
    var that = this;
    var width = 220;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        that.setData({
          clientHeight: res.windowWidth / 375 * width
        });
        console.log(res.windowWidth / 375);
        console.log(res.windowWidth / 375 * width);
      }
    })
  }
})