// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播数据
    list: [
      {
        link: "",
        imgSrc:
          "//i0.hdslb.com/bfs/archive/2e6909bd75bf0ce2d6802faa65fd2ac800bfcc15.jpg@480w_300h.webp"
      },
      {
        link: "",
        imgSrc:
          "//i0.hdslb.com/bfs/archive/0bb36d5b9ac1d695757552d32a02d4cb94218adb.jpg@480w_300h.webp"
      },
      {
        link: "",
        imgSrc:
          "https://i0.hdslb.com/bfs/archive/82232bca677f06d69734159653cf29db82ff5d9c.png@480w_"
      },
      {
        link: "",
        imgSrc:
          "https://i0.hdslb.com/bfs/archive/28d93d03968baa475a2c3982640736a66b4405c3.jpg@480w_"
      }
    ],
    //视频卡片
    acrtlist: [
      {
        id: 1,
        name: "【抗肺炎】村长广播",
        img:
          "//i1.hdslb.com/bfs/archive/86a3bf504f8af737d31fa5dc96590e06619f0452.jpg@320w_200h.webp"
      },
      {
        id: 2,
        name: "吹毁友情",
        img:
          "//i1.hdslb.com/bfs/archive/cb3189cc609ea0f5c2aa1f19526a44990354b979.jpg@320w_200h.webp"
      },
      {
        id: 1,
        name: "【火锅城】完美细节！",
        img:
          "//i1.hdslb.com/bfs/archive/29f63c78989348dedc003d939cbd7326d5d1b224.jpg@320w_200h.webp"
      },
      {
        id: 2,
        name: "音乐：处处吻",
        img:
          "//i1.hdslb.com/bfs/archive/003b4a739080944140cab368825a624f1d2949ae.jpg@320w_200h.webp"
      },
      {
        id: 1,
        name: "冠状病毒阴霾下.哪个瞬间？",
        img:
          "//i1.hdslb.com/bfs/archive/8e5f8f3d88e450d4c3a93d7aea5b012e2001b167.jpg@320w_200h.webp"
      },
      {
        id: 2,
        name: "想见你",
        img:
          "//i2.hdslb.com/bfs/archive/36d2265b01705f23e7cd7c8232209bacebf54237.jpg@320w_200h.webp"
      }
    ],
    //导航数据
    navList: [
      {
        key: 0,
        id: "19000104",
        name: "首页",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "19000104",
            date: "12-09",
            fraction: "100",
            edit: "false",
            index: "0",
            key: "0"
          },
          {
            id: "19000104",
            date: "12-10",
            fraction: "98",
            edit: "false",
            index: "1",
            key: "1"
          },
          {
            id: "19000104",
            date: "12-11",
            fraction: "100",
            edit: "false",
            index: "2",
            key: "2"
          },
          {
            id: "19000104",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "3",
            key: "3"
          },
          {
            id: "19000104",
            date: "12-16",
            fraction: "100",
            edit: "false",
            index: "4",
            key: "4"
          },
          {
            id: "19000104",
            date: "12-17",
            fraction: "110",
            edit: "false",
            index: "5",
            key: "5"
          },
          {
            id: "19000104",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "6",
            key: "6"
          },
          {
            id: "19000104",
            date: "12-19",
            fraction: "110",
            edit: "false",
            index: "7",
            key: "7"
          },
          {
            id: "19000104",
            date: "12-20",
            fraction: "120",
            edit: "false",
            index: "8",
            key: "8"
          },
          {
            id: "19000104",
            date: "12-23",
            fraction: "95",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "19000104",
            date: "12-24",
            fraction: "100",
            edit: "false",
            index: "10",
            key: "10"
          }
        ],
        totalScore: 1133,
        average: 103,
        grade: "KING"
      },
      {
        key: 1,
        id: "19000192",
        name: "动画",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "19000192",
            date: "12-09",
            fraction: "60",
            edit: "false",
            index: "2",
            key: "2"
          },
          {
            id: "19000192",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "3",
            key: "3"
          },
          {
            id: "19000192",
            date: "12-11",
            fraction: "100",
            edit: "false",
            index: "4",
            key: "4"
          },
          {
            id: "19000192",
            date: "12-13",
            fraction: "98",
            edit: "false",
            index: "5",
            key: "5"
          },
          {
            id: "19000192",
            date: "12-16",
            fraction: "100",
            edit: "false",
            index: "6",
            key: "6"
          },
          {
            id: "19000192",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "7",
            key: "7"
          },
          {
            id: "19000192",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "8",
            key: "8"
          },
          {
            id: "19000192",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "19000192",
            date: "12-23",
            fraction: "80",
            edit: "false",
            index: "10",
            key: "10"
          },
          {
            id: "19000192",
            date: "12-24",
            fraction: "95",
            edit: "false",
            index: "11",
            key: "11"
          }
        ],
        totalScore: 923,
        average: 92,
        grade: "学神"
      },
      {
        key: 2,
        id: "19000216",
        name: "番剧",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "19000216",
            date: "12-09",
            fraction: "120",
            edit: "false",
            index: "3",
            key: "3"
          },
          {
            id: "19000216",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "4",
            key: "4"
          },
          {
            id: "19000216",
            date: "12-11",
            fraction: "100",
            edit: "false",
            index: "5",
            key: "5"
          },
          {
            id: "19000216",
            date: "12-13",
            fraction: "98",
            edit: "false",
            index: "6",
            key: "6"
          },
          {
            id: "19000216",
            date: "12-16",
            fraction: "100",
            edit: "false",
            index: "7",
            key: "7"
          },
          {
            id: "19000216",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "8",
            key: "8"
          },
          {
            id: "19000216",
            date: "12-18",
            fraction: "130",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "19000216",
            date: "12-19",
            fraction: "95",
            edit: "false",
            index: "10",
            key: "10"
          },
          {
            id: "19000216",
            date: "12-20",
            fraction: "90",
            edit: "false",
            index: "11",
            key: "11"
          },
          {
            id: "19000216",
            date: "12-23",
            fraction: "120",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "19000216",
            date: "12-24",
            fraction: "95",
            edit: "false",
            index: "13",
            key: "13"
          }
        ],
        totalScore: 1148,
        average: 104,
        grade: "KING"
      },
      {
        key: 3,
        id: "19000217",
        name: "国创",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "19000217",
            date: "12-09",
            fraction: "80",
            edit: "false",
            index: "4",
            key: "4"
          },
          {
            id: "19000217",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "5",
            key: "5"
          },
          {
            id: "19000217",
            date: "12-11",
            fraction: "90",
            edit: "false",
            index: "6",
            key: "6"
          },
          {
            id: "19000217",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "7",
            key: "7"
          },
          {
            id: "19000217",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "8",
            key: "8"
          },
          {
            id: "19000217",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "19000217",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "10",
            key: "10"
          },
          {
            id: "19000217",
            date: "12-19",
            fraction: "100",
            edit: "false",
            index: "11",
            key: "11"
          },
          {
            id: "19000217",
            date: "12-20",
            fraction: "90",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "19000217",
            date: "12-23",
            fraction: "0",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "19000217",
            date: "12-24",
            fraction: "90",
            edit: "false",
            index: "14",
            key: "14"
          }
        ],
        totalScore: 930,
        average: 85,
        grade: "学霸"
      },
      {
        key: 4,
        id: "19000253",
        name: "音乐",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "19000253",
            date: "12-09",
            fraction: "120",
            edit: "false",
            index: "5",
            key: "5"
          },
          {
            id: "19000253",
            date: "12-10",
            fraction: "150",
            edit: "false",
            index: "6",
            key: "6"
          },
          {
            id: "19000253",
            date: "12-11",
            fraction: "160",
            edit: "false",
            index: "7",
            key: "7"
          },
          {
            id: "19000253",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "8",
            key: "8"
          },
          {
            id: "19000253",
            date: "12-16",
            fraction: "100",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "19000253",
            date: "12-17",
            fraction: "110",
            edit: "false",
            index: "10",
            key: "10"
          },
          {
            id: "19000253",
            date: "12-18",
            fraction: "110",
            edit: "false",
            index: "11",
            key: "11"
          },
          {
            id: "19000253",
            date: "12-19",
            fraction: "95",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "19000253",
            date: "12-20",
            fraction: "120",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "19000253",
            date: "12-23",
            fraction: "120",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "19000253",
            date: "12-24",
            fraction: "100",
            edit: "false",
            index: "15",
            key: "15"
          }
        ],
        totalScore: 1285,
        average: 117,
        grade: "KING"
      },
      {
        key: 5,
        id: "19000361",
        name: "邵可心",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "19000361",
            date: "12-09",
            fraction: "98",
            edit: "false",
            index: "6",
            key: "6"
          },
          {
            id: "19000361",
            date: "12-10",
            fraction: "90",
            edit: "false",
            index: "7",
            key: "7"
          },
          {
            id: "19000361",
            date: "12-11",
            fraction: "90",
            edit: "false",
            index: "8",
            key: "8"
          },
          {
            id: "19000361",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "19000361",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "10",
            key: "10"
          },
          {
            id: "19000361",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "11",
            key: "11"
          },
          {
            id: "19000361",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "19000361",
            date: "12-19",
            fraction: "100",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "19000361",
            date: "12-20",
            fraction: "80",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "19000361",
            date: "12-23",
            fraction: "100",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "19000361",
            date: "12-24",
            fraction: "100",
            edit: "false",
            index: "16",
            key: "16"
          }
        ],
        totalScore: 1038,
        average: 94,
        grade: "学神"
      },
      {
        key: 6,
        id: "19000381",
        name: "王杰",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "19000381",
            date: "12-09",
            fraction: "100",
            edit: "false",
            index: "7",
            key: "7"
          },
          {
            id: "19000381",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "8",
            key: "8"
          },
          {
            id: "19000381",
            date: "12-11",
            fraction: "100",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "19000381",
            date: "12-13",
            fraction: "98",
            edit: "false",
            index: "10",
            key: "10"
          },
          {
            id: "19000381",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "11",
            key: "11"
          },
          {
            id: "19000381",
            date: "12-17",
            fraction: "90",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "19000381",
            date: "12-18",
            fraction: "90",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "19000381",
            date: "12-19",
            fraction: "100",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "19000381",
            date: "12-20",
            fraction: "90",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "19000381",
            date: "12-23",
            fraction: "110",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "19000381",
            date: "12-24",
            fraction: "100",
            edit: "false",
            index: "17",
            key: "17"
          }
        ],
        totalScore: 1058,
        average: 96,
        grade: "举人"
      },
      {
        key: 7,
        id: "19000398",
        name: "李玉雷",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "19000398",
            date: "12-09",
            fraction: "98",
            edit: "false",
            index: "8",
            key: "8"
          },
          {
            id: "19000398",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "19000398",
            date: "12-11",
            fraction: "95",
            edit: "false",
            index: "10",
            key: "10"
          },
          {
            id: "19000398",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "11",
            key: "11"
          },
          {
            id: "19000398",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "19000398",
            date: "12-17",
            fraction: "90",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "19000398",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "19000398",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "19000398",
            date: "12-20",
            fraction: "70",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "19000398",
            date: "12-23",
            fraction: "100",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "19000398",
            date: "12-24",
            fraction: "100",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "19000398",
            date: "12-25",
            fraction: "95",
            edit: "false",
            index: "19",
            key: "19"
          }
        ],
        totalScore: 1118,
        average: 93,
        grade: "学神"
      },
      {
        key: 8,
        id: "18000319",
        name: "白岩松",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000319",
            date: "12-20",
            fraction: "0",
            edit: "false",
            index: "9",
            key: "9"
          },
          {
            id: "18000319",
            date: "12-23",
            fraction: "0",
            edit: "false",
            index: "10",
            key: "10"
          }
        ],
        totalScore: 0,
        average: 0,
        grade: "小白"
      },
      {
        key: 9,
        id: "18001316",
        name: "高慧龙",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18001316",
            date: "12-09",
            fraction: "90",
            edit: "false",
            index: "10",
            key: "10"
          },
          {
            id: "18001316",
            date: "12-10",
            fraction: "0",
            edit: "false",
            index: "11",
            key: "11"
          },
          {
            id: "18001316",
            date: "12-11",
            fraction: "80",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "18001316",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "18001316",
            date: "12-16",
            fraction: "50",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "18001316",
            date: "12-17",
            fraction: "50",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "18001316",
            date: "12-18",
            fraction: "98",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "18001316",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "18001316",
            date: "12-20",
            fraction: "60",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18001316",
            date: "12-23",
            fraction: "60",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18001316",
            date: "12-24",
            fraction: "60",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18001316",
            date: "12-25",
            fraction: "90",
            edit: "false",
            index: "21",
            key: "21"
          }
        ],
        totalScore: 828,
        average: 69,
        grade: "B"
      },
      {
        key: 10,
        id: "18001173",
        name: "穆萨江",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18001173",
            date: "12-09",
            fraction: "90",
            edit: "false",
            index: "11",
            key: "11"
          },
          {
            id: "18001173",
            date: "12-10",
            fraction: "30",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "18001173",
            date: "12-13",
            fraction: "0",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "18001173",
            date: "12-16",
            fraction: "65",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "18001173",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "18001173",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "18001173",
            date: "12-19",
            fraction: "100",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "18001173",
            date: "12-20",
            fraction: "60",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18001173",
            date: "12-24",
            fraction: "70",
            edit: "false",
            index: "19",
            key: "19"
          }
        ],
        totalScore: 615,
        average: 68,
        grade: "B"
      },
      {
        key: 11,
        id: "18000876",
        name: "李士合",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000876",
            date: "12-09",
            fraction: "60",
            edit: "false",
            index: "12",
            key: "12"
          },
          {
            id: "18000876",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "18000876",
            date: "12-11",
            fraction: "80",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "18000876",
            date: "12-13",
            fraction: "60",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "18000876",
            date: "12-16",
            fraction: "100",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "18000876",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "18000876",
            date: "12-18",
            fraction: "0",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18000876",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18000876",
            date: "12-20",
            fraction: "-100",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18000876",
            date: "12-23",
            fraction: "60",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18000876",
            date: "12-24",
            fraction: "80",
            edit: "false",
            index: "22",
            key: "22"
          }
        ],
        totalScore: 630,
        average: 57,
        grade: "小白"
      },
      {
        key: 12,
        id: "18000895",
        name: "杨迪",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000895",
            date: "12-09",
            fraction: "95",
            edit: "false",
            index: "13",
            key: "13"
          },
          {
            id: "18000895",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "18000895",
            date: "12-11",
            fraction: "80",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "18000895",
            date: "12-13",
            fraction: "60",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "18000895",
            date: "12-16",
            fraction: "95",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "18000895",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18000895",
            date: "12-18",
            fraction: "0",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18000895",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18000895",
            date: "12-20",
            fraction: "30",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18000895",
            date: "12-23",
            fraction: "90",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18000895",
            date: "12-24",
            fraction: "70",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18000895",
            date: "12-25",
            fraction: "60",
            edit: "false",
            index: "24",
            key: "24"
          }
        ],
        totalScore: 870,
        average: 73,
        grade: "B+"
      },
      {
        key: 13,
        id: "18001214",
        name: "雒皓",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18001214",
            date: "12-09",
            fraction: "110",
            edit: "false",
            index: "14",
            key: "14"
          },
          {
            id: "18001214",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "18001214",
            date: "12-11",
            fraction: "160",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "18001214",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "18001214",
            date: "12-16",
            fraction: "85",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18001214",
            date: "12-17",
            fraction: "95",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18001214",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18001214",
            date: "12-19",
            fraction: "95",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18001214",
            date: "12-20",
            fraction: "60",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18001214",
            date: "12-23",
            fraction: "90",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18001214",
            date: "12-24",
            fraction: "80",
            edit: "false",
            index: "24",
            key: "24"
          }
        ],
        totalScore: 1075,
        average: 98,
        grade: "探花"
      },
      {
        key: 14,
        id: "18000897",
        name: "权泽辉",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000897",
            date: "12-09",
            fraction: "70",
            edit: "false",
            index: "15",
            key: "15"
          },
          {
            id: "18000897",
            date: "12-10",
            fraction: "0",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "18000897",
            date: "12-11",
            fraction: "60",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "18000897",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18000897",
            date: "12-16",
            fraction: "60",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18000897",
            date: "12-17",
            fraction: "60",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18000897",
            date: "12-18",
            fraction: "110",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18000897",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18000897",
            date: "12-20",
            fraction: "80",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18000897",
            date: "12-23",
            fraction: "70",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18000897",
            date: "12-24",
            fraction: "80",
            edit: "false",
            index: "25",
            key: "25"
          }
        ],
        totalScore: 780,
        average: 71,
        grade: "B+"
      },
      {
        key: 15,
        id: "18001404",
        name: "冯叶雨",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18001404",
            date: "12-09",
            fraction: "90",
            edit: "false",
            index: "16",
            key: "16"
          },
          {
            id: "18001404",
            date: "12-10",
            fraction: "90",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "18001404",
            date: "12-13",
            fraction: "0",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18001404",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18001404",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18001404",
            date: "12-18",
            fraction: "80",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18001404",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18001404",
            date: "12-20",
            fraction: "90",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18001404",
            date: "12-23",
            fraction: "85",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18001404",
            date: "12-24",
            fraction: "70",
            edit: "false",
            index: "25",
            key: "25"
          }
        ],
        totalScore: 775,
        average: 78,
        grade: "A"
      },
      {
        key: 16,
        id: "18001042",
        name: "王明月",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18001042",
            date: "12-09",
            fraction: "95",
            edit: "false",
            index: "17",
            key: "17"
          },
          {
            id: "18001042",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18001042",
            date: "12-11",
            fraction: "60",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18001042",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18001042",
            date: "12-16",
            fraction: "70",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18001042",
            date: "12-17",
            fraction: "90",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18001042",
            date: "12-18",
            fraction: "90",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18001042",
            date: "12-19",
            fraction: "100",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18001042",
            date: "12-20",
            fraction: "60",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "18001042",
            date: "12-23",
            fraction: "100",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "18001042",
            date: "12-24",
            fraction: "70",
            edit: "false",
            index: "27",
            key: "27"
          }
        ],
        totalScore: 935,
        average: 85,
        grade: "学霸"
      },
      {
        key: 17,
        id: "18000949",
        name: "王玮",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000949",
            date: "12-09",
            fraction: "100",
            edit: "false",
            index: "18",
            key: "18"
          },
          {
            id: "18000949",
            date: "12-10",
            fraction: "95",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18000949",
            date: "12-11",
            fraction: "70",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18000949",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18000949",
            date: "12-16",
            fraction: "95",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18000949",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18000949",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18000949",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "18000949",
            date: "12-20",
            fraction: "60",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "18000949",
            date: "12-23",
            fraction: "95",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "18000949",
            date: "12-24",
            fraction: "110",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18000949",
            date: "12-25",
            fraction: "100",
            edit: "false",
            index: "29",
            key: "29"
          }
        ],
        totalScore: 1115,
        average: 93,
        grade: "学神"
      },
      {
        key: 18,
        id: "18000452",
        name: "王旭晃",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000452",
            date: "12-09",
            fraction: "100",
            edit: "false",
            index: "19",
            key: "19"
          },
          {
            id: "18000452",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "18000452",
            date: "12-11",
            fraction: "90",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18000452",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18000452",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18000452",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18000452",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "18000452",
            date: "12-19",
            fraction: "80",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "18000452",
            date: "12-20",
            fraction: "80",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "18000452",
            date: "12-23",
            fraction: "100",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18000452",
            date: "12-24",
            fraction: "90",
            edit: "false",
            index: "29",
            key: "29"
          }
        ],
        totalScore: 1020,
        average: 93,
        grade: "学神"
      },
      {
        key: 19,
        id: "17001175",
        name: "侯启航",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "17001175",
            date: "12-09",
            fraction: "100",
            edit: "false",
            index: "20",
            key: "20"
          },
          {
            id: "17001175",
            date: "12-10",
            fraction: "95",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "17001175",
            date: "12-11",
            fraction: "80",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "17001175",
            date: "12-13",
            fraction: "98",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "17001175",
            date: "12-16",
            fraction: "90",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "17001175",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "17001175",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "17001175",
            date: "12-19",
            fraction: "95",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "17001175",
            date: "12-20",
            fraction: "60",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "17001175",
            date: "12-23",
            fraction: "90",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "17001175",
            date: "12-24",
            fraction: "90",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "17001175",
            date: "12-25",
            fraction: "95",
            edit: "false",
            index: "31",
            key: "31"
          }
        ],
        totalScore: 1093,
        average: 91,
        grade: "学神"
      },
      {
        key: 20,
        id: "18001410",
        name: "张广聚",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18001410",
            date: "12-09",
            fraction: "100",
            edit: "false",
            index: "21",
            key: "21"
          },
          {
            id: "18001410",
            date: "12-10",
            fraction: "110",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18001410",
            date: "12-11",
            fraction: "100",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18001410",
            date: "12-13",
            fraction: "98",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18001410",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "18001410",
            date: "12-17",
            fraction: "90",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "18001410",
            date: "12-18",
            fraction: "90",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "18001410",
            date: "12-19",
            fraction: "95",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18001410",
            date: "12-20",
            fraction: "90",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "18001410",
            date: "12-23",
            fraction: "110",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "18001410",
            date: "12-24",
            fraction: "100",
            edit: "false",
            index: "31",
            key: "31"
          }
        ],
        totalScore: 1063,
        average: 97,
        grade: "进士"
      },
      {
        key: 21,
        id: "18001221",
        name: "王子豪",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18001221",
            date: "12-09",
            fraction: "110",
            edit: "false",
            index: "22",
            key: "22"
          },
          {
            id: "18001221",
            date: "12-10",
            fraction: "105",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18001221",
            date: "12-11",
            fraction: "80",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18001221",
            date: "12-13",
            fraction: "98",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "18001221",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "18001221",
            date: "12-17",
            fraction: "90",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "18001221",
            date: "12-18",
            fraction: "90",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18001221",
            date: "12-19",
            fraction: "98",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "18001221",
            date: "12-20",
            fraction: "80",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "18001221",
            date: "12-23",
            fraction: "90",
            edit: "false",
            index: "31",
            key: "31"
          },
          {
            id: "18001221",
            date: "12-24",
            fraction: "95",
            edit: "false",
            index: "32",
            key: "32"
          }
        ],
        totalScore: 1016,
        average: 92,
        grade: "学神"
      },
      {
        key: 22,
        id: "18000647",
        name: "舒皓奇",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000647",
            date: "12-09",
            fraction: "90",
            edit: "false",
            index: "23",
            key: "23"
          },
          {
            id: "18000647",
            date: "12-10",
            fraction: "100",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18000647",
            date: "12-11",
            fraction: "70",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "18000647",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "18000647",
            date: "12-16",
            fraction: "85",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "18000647",
            date: "12-17",
            fraction: "95",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18000647",
            date: "12-18",
            fraction: "100",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "18000647",
            date: "12-19",
            fraction: "80",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "18000647",
            date: "12-20",
            fraction: "0",
            edit: "false",
            index: "31",
            key: "31"
          },
          {
            id: "18000647",
            date: "12-23",
            fraction: "90",
            edit: "false",
            index: "32",
            key: "32"
          },
          {
            id: "18000647",
            date: "12-24",
            fraction: "80",
            edit: "false",
            index: "33",
            key: "33"
          }
        ],
        totalScore: 890,
        average: 81,
        grade: "A+"
      },
      {
        key: 23,
        id: "18000588",
        name: "谢尚佑",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000588",
            date: "12-09",
            fraction: "90",
            edit: "false",
            index: "24",
            key: "24"
          },
          {
            id: "18000588",
            date: "12-10",
            fraction: "80",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "18000588",
            date: "12-11",
            fraction: "70",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "18000588",
            date: "12-13",
            fraction: "100",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "18000588",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18000588",
            date: "12-18",
            fraction: "90",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "18000588",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "18000588",
            date: "12-20",
            fraction: "80",
            edit: "false",
            index: "31",
            key: "31"
          },
          {
            id: "18000588",
            date: "12-23",
            fraction: "70",
            edit: "false",
            index: "32",
            key: "32"
          },
          {
            id: "18000588",
            date: "12-24",
            fraction: "70",
            edit: "false",
            index: "33",
            key: "33"
          }
        ],
        totalScore: 840,
        average: 84,
        grade: "A+"
      },
      {
        key: 24,
        id: "18001096",
        name: "吴楠",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18001096",
            date: "12-09",
            fraction: "90",
            edit: "false",
            index: "25",
            key: "25"
          },
          {
            id: "18001096",
            date: "12-10",
            fraction: "90",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "18001096",
            date: "12-11",
            fraction: "80",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "18001096",
            date: "12-13",
            fraction: "60",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18001096",
            date: "12-16",
            fraction: "100",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "18001096",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "18001096",
            date: "12-18",
            fraction: "0",
            edit: "false",
            index: "31",
            key: "31"
          },
          {
            id: "18001096",
            date: "12-19",
            fraction: "50",
            edit: "false",
            index: "32",
            key: "32"
          },
          {
            id: "18001096",
            date: "12-20",
            fraction: "0",
            edit: "false",
            index: "33",
            key: "33"
          },
          {
            id: "18001096",
            date: "12-23",
            fraction: "85",
            edit: "false",
            index: "34",
            key: "34"
          },
          {
            id: "18001096",
            date: "12-24",
            fraction: "100",
            edit: "false",
            index: "35",
            key: "35"
          }
        ],
        totalScore: 755,
        average: 69,
        grade: "B"
      },
      {
        key: 25,
        id: "16000773",
        name: "贾俊科",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "16000773",
            date: "12-09",
            fraction: "70",
            edit: "false",
            index: "26",
            key: "26"
          },
          {
            id: "16000773",
            date: "12-10",
            fraction: "90",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "16000773",
            date: "12-11",
            fraction: "80",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "16000773",
            date: "12-13",
            fraction: "98",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "16000773",
            date: "12-16",
            fraction: "100",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "16000773",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "31",
            key: "31"
          },
          {
            id: "16000773",
            date: "12-18",
            fraction: "80",
            edit: "false",
            index: "32",
            key: "32"
          },
          {
            id: "16000773",
            date: "12-19",
            fraction: "50",
            edit: "false",
            index: "33",
            key: "33"
          },
          {
            id: "16000773",
            date: "12-20",
            fraction: "0",
            edit: "false",
            index: "34",
            key: "34"
          },
          {
            id: "16000773",
            date: "12-24",
            fraction: "80",
            edit: "false",
            index: "35",
            key: "35"
          }
        ],
        totalScore: 748,
        average: 75,
        grade: "A"
      },
      {
        key: 26,
        id: "18000139",
        name: "崔皓然",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000139",
            date: "12-09",
            fraction: "80",
            edit: "false",
            index: "27",
            key: "27"
          },
          {
            id: "18000139",
            date: "12-10",
            fraction: "90",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18000139",
            date: "12-11",
            fraction: "80",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "18000139",
            date: "12-13",
            fraction: "60",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "18000139",
            date: "12-16",
            fraction: "80",
            edit: "false",
            index: "31",
            key: "31"
          },
          {
            id: "18000139",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "32",
            key: "32"
          },
          {
            id: "18000139",
            date: "12-18",
            fraction: "0",
            edit: "false",
            index: "33",
            key: "33"
          },
          {
            id: "18000139",
            date: "12-19",
            fraction: "90",
            edit: "false",
            index: "34",
            key: "34"
          },
          {
            id: "18000139",
            date: "12-20",
            fraction: "0",
            edit: "false",
            index: "35",
            key: "35"
          },
          {
            id: "18000139",
            date: "12-23",
            fraction: "80",
            edit: "false",
            index: "36",
            key: "36"
          },
          {
            id: "18000139",
            date: "12-24",
            fraction: "100",
            edit: "false",
            index: "37",
            key: "37"
          },
          {
            id: "18000139",
            date: "12-25",
            fraction: "30",
            edit: "false",
            index: "38",
            key: "38"
          }
        ],
        totalScore: 790,
        average: 66,
        grade: "B"
      },
      {
        key: 27,
        id: "18000310",
        name: "段泊伊",
        date: "12-6",
        edit: false,
        dateArr: [
          {
            id: "18000310",
            date: "12-09",
            fraction: "85",
            edit: "false",
            index: "28",
            key: "28"
          },
          {
            id: "18000310",
            date: "12-10",
            fraction: "70",
            edit: "false",
            index: "29",
            key: "29"
          },
          {
            id: "18000310",
            date: "12-13",
            fraction: "0",
            edit: "false",
            index: "30",
            key: "30"
          },
          {
            id: "18000310",
            date: "12-16",
            fraction: "70",
            edit: "false",
            index: "31",
            key: "31"
          },
          {
            id: "18000310",
            date: "12-17",
            fraction: "100",
            edit: "false",
            index: "32",
            key: "32"
          },
          {
            id: "18000310",
            date: "12-18",
            fraction: "70",
            edit: "false",
            index: "33",
            key: "33"
          },
          {
            id: "18000310",
            date: "12-19",
            fraction: "80",
            edit: "false",
            index: "34",
            key: "34"
          },
          {
            id: "18000310",
            date: "12-20",
            fraction: "80",
            edit: "false",
            index: "35",
            key: "35"
          },
          {
            id: "18000310",
            date: "12-23",
            fraction: "90",
            edit: "false",
            index: "36",
            key: "36"
          },
          {
            id: "18000310",
            date: "12-24",
            fraction: "80",
            edit: "false",
            index: "37",
            key: "37"
          },
          {
            id: "18000310",
            date: "12-25",
            fraction: "60",
            edit: "false",
            index: "38",
            key: "38"
          }
        ],
        totalScore: 785,
        average: 71,
        grade: "B+"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
