Component({
  data: {},
  properties: {
    data: {
      type: Object,
      value: {}
    }
  },
  methods: {
    goTvDetail() {
      wx.navigateTo({
        url: "/pages/tvDetail/tvDetail?id=" + this.properties.data.id
      });
    }
  }
});
