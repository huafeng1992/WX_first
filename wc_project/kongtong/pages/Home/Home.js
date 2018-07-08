
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("hello")
  },
  onSwiperTap: function(event) {
    console.log(event)
    wx.showToast({
      title: event.target.id + ""
    })
  }

  
})