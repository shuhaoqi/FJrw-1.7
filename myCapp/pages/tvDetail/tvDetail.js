// pages/tvDetail/tvDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    src: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    this.setData({
      src:
        "cloud://webhang-louan.7765-webhang-louan-1301000125/" +
        options.id +
        ".mp4"
    });
  },
  //当视频播放失败的函数
  playErr() {
    wx.showModal({
      title: "视频播放错误",
      content: "你的视频播放地址出错或已下架"
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // this.addBarrage();
  },
  addBarrage() {
    const barrageComp = this.selectComponent(".barrage");
    this.barrage = barrageComp.getBarrageInstance({
      font: "bold 16px sans-serif",
      duration: 10,
      lineHeight: 2,
      mode: "separate",
      padding: [10, 0, 10, 0],
      tunnelShow: false
    });
    this.barrage.open();
    this.barrage.addData([
      {
        color: "#000000", // 默认黑色
        content: "一点都不好笑" // 弹幕内容
      },
      {
        color: "#000000", // 默认黑色
        content: "一点都不好笑" // 弹幕内容
      },
      {
        color: "#000000", // 默认黑色
        content: "一点都不好笑" // 弹幕内容
      },
      {
        color: "#000000", // 默认黑色
        content: "一点都不好笑" // 弹幕内容
      }
    ]);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
