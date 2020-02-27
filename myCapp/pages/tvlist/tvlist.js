// pages/tvlist/tvlist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //视频列表数据
    acrtlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //假数据
    var datalist = [
      {
        id: "19000192",
        list: [
          {
            id: 1,
            img:
              "https://tse2-mm.cn.bing.net/th/id/OIP.dpAOCYBFZu8RdPthYdRuNwHaLH?w=200&h=300&c=7&o=5&dpr=1.25&pid=1.7",
            name: "芳华"
          }
        ]
      },
      {
        id: "19000104",
        list: [
          {
            id: 2,
            img:
              "https://tse2-mm.cn.bing.net/th/id/OIP.7rsrWPfjpq-gmrSz4iRlswHaKj?w=203&h=289&c=7&o=5&dpr=1.25&pid=1.7",
            name: "阿凡达"
          }
        ]
      }
    ];
    //1.获取路由传过来的视频分类的id值
    const data = datalist.find(item => item.id === options.id);
    //2.用id值取请求接口，获取视频分类的数据
    if (data) {
      this.setData({
        acrtlist: data.list
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

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
