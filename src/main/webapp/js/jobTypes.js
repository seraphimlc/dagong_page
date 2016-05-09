/**
 * Created by liuchang on 15/1/11.
 */
var jobTypes = {"0": [
    {"id": 1, "level": 1, "name": "生活|服务业", "parentId": 0},
    {"id": 2, "level": 1, "name": "人力|行政|管理", "parentId": 0},
    {"id": 3, "level": 1, "name": "销售|客服|采购|淘宝", "parentId": 0},
    {"id": 4, "level": 1, "name": "市场|媒介|广告|设计", "parentId": 0},
    {"id": 5, "level": 1, "name": "生产|物流|质控|汽车", "parentId": 0},
    {"id": 6, "level": 1, "name": "网络|通信|电子", "parentId": 0},
    {"id": 7, "level": 1, "name": "法律|教育|翻译|出版", "parentId": 0},
    {"id": 8, "level": 1, "name": "财会|金融|保险", "parentId": 0},
    {"id": 9, "level": 1, "name": "医疗|制药|环保", "parentId": 0},
    {"id": 10, "level": 1, "name": "建筑|装修|物业|其它", "parentId": 0}
], "1": [
    {"id": 11, "level": 2, "name": "餐饮", "parentId": 1},
    {"id": 12, "level": 2, "name": "家政保洁/安保", "parentId": 1},
    {"id": 13, "level": 2, "name": "美容/美发", "parentId": 1},
    {"id": 14, "level": 2, "name": "酒店/旅游", "parentId": 1},
    {"id": 15, "level": 2, "name": "娱乐/休闲", "parentId": 1},
    {"id": 16, "level": 2, "name": "保健按摩", "parentId": 1},
    {"id": 17, "level": 2, "name": "运动健身", "parentId": 1}
], "10": [
    {"id": 49, "level": 2, "name": "建筑", "parentId": 10},
    {"id": 50, "level": 2, "name": "物业管理", "parentId": 10},
    {"id": 51, "level": 2, "name": "农/林/牧/渔", "parentId": 10}
], "11": [
    {"id": 52, "level": 3, "name": "服务员", "parentId": 11},
    {"id": 53, "level": 3, "name": "送餐员", "parentId": 11},
    {"id": 54, "level": 3, "name": "厨师/厨师长", "parentId": 11},
    {"id": 55, "level": 3, "name": "后厨", "parentId": 11},
    {"id": 56, "level": 3, "name": "传菜员", "parentId": 11},
    {"id": 57, "level": 3, "name": "配菜/打荷", "parentId": 11},
    {"id": 58, "level": 3, "name": "洗碗工", "parentId": 11},
    {"id": 59, "level": 3, "name": "面点师", "parentId": 11},
    {"id": 60, "level": 3, "name": "茶艺师", "parentId": 11},
    {"id": 61, "level": 3, "name": "迎宾/接待", "parentId": 11},
    {"id": 62, "level": 3, "name": "大堂经理/领班", "parentId": 11},
    {"id": 63, "level": 3, "name": "餐饮管理", "parentId": 11},
    {"id": 64, "level": 3, "name": "学徒", "parentId": 11},
    {"id": 65, "level": 3, "name": "杂工", "parentId": 11},
    {"id": 66, "level": 3, "name": "咖啡师", "parentId": 11},
    {"id": 67, "level": 3, "name": "预订员", "parentId": 11}
], "12": [
    {"id": 68, "level": 3, "name": "保洁", "parentId": 12},
    {"id": 69, "level": 3, "name": "保姆", "parentId": 12},
    {"id": 70, "level": 3, "name": "月嫂", "parentId": 12},
    {"id": 71, "level": 3, "name": "育婴师/保育员", "parentId": 12},
    {"id": 72, "level": 3, "name": "洗衣工", "parentId": 12},
    {"id": 73, "level": 3, "name": "钟点工", "parentId": 12},
    {"id": 74, "level": 3, "name": "保安", "parentId": 12},
    {"id": 75, "level": 3, "name": "护工", "parentId": 12},
    {"id": 76, "level": 3, "name": "送水工", "parentId": 12}
], "13": [
    {"id": 77, "level": 3, "name": "发型师", "parentId": 13},
    {"id": 78, "level": 3, "name": "美发助理/学徒", "parentId": 13},
    {"id": 79, "level": 3, "name": "洗头工", "parentId": 13},
    {"id": 80, "level": 3, "name": "美容导师", "parentId": 13},
    {"id": 81, "level": 3, "name": "美容师", "parentId": 13},
    {"id": 82, "level": 3, "name": "美容助理/学徒", "parentId": 13},
    {"id": 83, "level": 3, "name": "化妆师", "parentId": 13},
    {"id": 84, "level": 3, "name": "美甲师", "parentId": 13},
    {"id": 85, "level": 3, "name": "宠物美容", "parentId": 13},
    {"id": 86, "level": 3, "name": "美容店长", "parentId": 13},
    {"id": 87, "level": 3, "name": "美容/瘦身顾问", "parentId": 13},
    {"id": 88, "level": 3, "name": "彩妆培训师", "parentId": 13},
    {"id": 89, "level": 3, "name": "美体师", "parentId": 13}
], "14": [
    {"id": 90, "level": 3, "name": "酒店前台", "parentId": 14},
    {"id": 91, "level": 3, "name": "客房服务员", "parentId": 14},
    {"id": 92, "level": 3, "name": "楼面经理", "parentId": 14},
    {"id": 93, "level": 3, "name": "行里员", "parentId": 14},
    {"id": 94, "level": 3, "name": "救生员", "parentId": 14},
    {"id": 95, "level": 3, "name": "酒店管理", "parentId": 14},
    {"id": 96, "level": 3, "name": "订票员", "parentId": 14},
    {"id": 97, "level": 3, "name": "导游", "parentId": 14},
    {"id": 98, "level": 3, "name": "计调", "parentId": 14},
    {"id": 99, "level": 3, "name": "签证专员", "parentId": 14},
    {"id": 100, "level": 3, "name": "旅游顾问", "parentId": 14}
], "15": [
    {"id": 101, "level": 3, "name": "酒吧服务员", "parentId": 15},
    {"id": 102, "level": 3, "name": "娱乐厅服务员", "parentId": 15},
    {"id": 103, "level": 3, "name": "礼仪/迎宾", "parentId": 15},
    {"id": 104, "level": 3, "name": "主持人", "parentId": 15},
    {"id": 105, "level": 3, "name": "调酒师", "parentId": 15},
    {"id": 106, "level": 3, "name": "音效师", "parentId": 15},
    {"id": 107, "level": 3, "name": "灯光师", "parentId": 15},
    {"id": 108, "level": 3, "name": "摄影师/摄像师", "parentId": 15},
    {"id": 109, "level": 3, "name": "影视/后期制作", "parentId": 15},
    {"id": 110, "level": 3, "name": "配音员", "parentId": 15},
    {"id": 111, "level": 3, "name": "放映员", "parentId": 15}
], "16": [
    {"id": 112, "level": 3, "name": "按摩师", "parentId": 16},
    {"id": 113, "level": 3, "name": "足疗师", "parentId": 16},
    {"id": 114, "level": 3, "name": "搓澡工", "parentId": 16},
    {"id": 115, "level": 3, "name": "针灸推拿", "parentId": 16}
], "17": [
    {"id": 116, "level": 3, "name": "健身教练", "parentId": 17},
    {"id": 117, "level": 3, "name": "瑜伽教练", "parentId": 17},
    {"id": 118, "level": 3, "name": "舞蹈老师", "parentId": 17},
    {"id": 119, "level": 3, "name": "台球教练", "parentId": 17},
    {"id": 120, "level": 3, "name": "高尔夫助理", "parentId": 17}
], "18": [
    {"id": 121, "level": 3, "name": "商务司机", "parentId": 18},
    {"id": 122, "level": 3, "name": "客运司机", "parentId": 18},
    {"id": 123, "level": 3, "name": "货运司机", "parentId": 18},
    {"id": 124, "level": 3, "name": "出租车司机", "parentId": 18},
    {"id": 125, "level": 3, "name": "班车司机", "parentId": 18},
    {"id": 126, "level": 3, "name": "特种车司机", "parentId": 18},
    {"id": 127, "level": 3, "name": "驾校教练/陪练", "parentId": 18}
], "19": [
    {"id": 128, "level": 3, "name": "文员", "parentId": 19},
    {"id": 129, "level": 3, "name": "前台/总机/接待", "parentId": 19},
    {"id": 130, "level": 3, "name": "人事专员/助理", "parentId": 19},
    {"id": 131, "level": 3, "name": "人事经理/主管", "parentId": 19},
    {"id": 132, "level": 3, "name": "人事总监", "parentId": 19},
    {"id": 133, "level": 3, "name": "行政专员/助理", "parentId": 19},
    {"id": 134, "level": 3, "name": "行政经理/主管", "parentId": 19},
    {"id": 135, "level": 3, "name": "行政总监", "parentId": 19},
    {"id": 136, "level": 3, "name": "经理助理/秘书", "parentId": 19},
    {"id": 137, "level": 3, "name": "薪酬/绩效/员工关系", "parentId": 19},
    {"id": 138, "level": 3, "name": "猎头顾问", "parentId": 19},
    {"id": 139, "level": 3, "name": "后勤", "parentId": 19},
    {"id": 140, "level": 3, "name": "培训专员/助理", "parentId": 19},
    {"id": 141, "level": 3, "name": "培训经理/主管", "parentId": 19},
    {"id": 142, "level": 3, "name": "招聘专员/助理", "parentId": 19},
    {"id": 143, "level": 3, "name": "招聘经理/主管", "parentId": 19}
], "2": [
    {"id": 18, "level": 2, "name": "司机", "parentId": 2},
    {"id": 19, "level": 2, "name": "人事/行政/后勤", "parentId": 2},
    {"id": 20, "level": 2, "name": "高级管理", "parentId": 2}
], "20": [
    {"id": 144, "level": 3, "name": "CEO/总裁/总经理", "parentId": 20},
    {"id": 145, "level": 3, "name": "首席运营官coo", "parentId": 20},
    {"id": 146, "level": 3, "name": "首席财务官CFO", "parentId": 20},
    {"id": 147, "level": 3, "name": "首席技术官CTO", "parentId": 20},
    {"id": 148, "level": 3, "name": "副总裁/副总经理", "parentId": 20},
    {"id": 149, "level": 3, "name": "总裁助理/总经理助理", "parentId": 20},
    {"id": 150, "level": 3, "name": "分公司经理", "parentId": 20},
    {"id": 151, "level": 3, "name": "合伙人", "parentId": 20}
], "21": [
    {"id": 152, "level": 3, "name": "销售代表", "parentId": 21},
    {"id": 153, "level": 3, "name": "销售助理", "parentId": 21},
    {"id": 154, "level": 3, "name": "销售经理/主管", "parentId": 21},
    {"id": 155, "level": 3, "name": "销售总监", "parentId": 21},
    {"id": 156, "level": 3, "name": "电话销售", "parentId": 21},
    {"id": 157, "level": 3, "name": "销售支持", "parentId": 21},
    {"id": 158, "level": 3, "name": "汽车销售", "parentId": 21},
    {"id": 159, "level": 3, "name": "医药代表", "parentId": 21},
    {"id": 160, "level": 3, "name": "医疗器械销售", "parentId": 21},
    {"id": 161, "level": 3, "name": "网络销售", "parentId": 21},
    {"id": 162, "level": 3, "name": "区域销售", "parentId": 21},
    {"id": 163, "level": 3, "name": "渠道专员", "parentId": 21},
    {"id": 164, "level": 3, "name": "渠道经理/总监", "parentId": 21},
    {"id": 165, "level": 3, "name": "客户经理/主管", "parentId": 21},
    {"id": 166, "level": 3, "name": "大客户经理", "parentId": 21},
    {"id": 167, "level": 3, "name": "团购业务员/经理", "parentId": 21},
    {"id": 168, "level": 3, "name": "会籍顾问", "parentId": 21}
], "22": [
    {"id": 169, "level": 3, "name": "客服专员/助理", "parentId": 22},
    {"id": 170, "level": 3, "name": "客服经理/主管", "parentId": 22},
    {"id": 171, "level": 3, "name": "客服总监", "parentId": 22},
    {"id": 172, "level": 3, "name": "售前/售后服务", "parentId": 22},
    {"id": 173, "level": 3, "name": "电话客服", "parentId": 22},
    {"id": 174, "level": 3, "name": "客户关系管理", "parentId": 22}
], "23": [
    {"id": 175, "level": 3, "name": "外贸专员/助理", "parentId": 23},
    {"id": 176, "level": 3, "name": "外贸经理/主管", "parentId": 23},
    {"id": 177, "level": 3, "name": "采购员", "parentId": 23},
    {"id": 178, "level": 3, "name": "采购助理", "parentId": 23},
    {"id": 179, "level": 3, "name": "采购经理/总监", "parentId": 23},
    {"id": 180, "level": 3, "name": "报关员", "parentId": 23},
    {"id": 181, "level": 3, "name": "商务专员/经理", "parentId": 23},
    {"id": 182, "level": 3, "name": "买手", "parentId": 23}
], "24": [
    {"id": 183, "level": 3, "name": "店员/营业员", "parentId": 24},
    {"id": 184, "level": 3, "name": "收银员", "parentId": 24},
    {"id": 185, "level": 3, "name": "促销/导购员", "parentId": 24},
    {"id": 186, "level": 3, "name": "理货员/陈列员", "parentId": 24},
    {"id": 187, "level": 3, "name": "防损员/内保", "parentId": 24},
    {"id": 188, "level": 3, "name": "店长/卖场经理", "parentId": 24},
    {"id": 189, "level": 3, "name": "招商经理/主管", "parentId": 24},
    {"id": 190, "level": 3, "name": "奢侈品业务", "parentId": 24},
    {"id": 191, "level": 3, "name": "品类管理", "parentId": 24},
    {"id": 192, "level": 3, "name": "食品加工/处理", "parentId": 24},
    {"id": 193, "level": 3, "name": "督导", "parentId": 24}
], "25": [
    {"id": 194, "level": 3, "name": "网店店长", "parentId": 25},
    {"id": 195, "level": 3, "name": "淘宝客服", "parentId": 25},
    {"id": 196, "level": 3, "name": "淘宝美工", "parentId": 25},
    {"id": 197, "level": 3, "name": "店铺文案编辑", "parentId": 25},
    {"id": 198, "level": 3, "name": "店铺推广", "parentId": 25},
    {"id": 199, "level": 3, "name": "活动策划", "parentId": 25}
], "26": [
    {"id": 200, "level": 3, "name": "房产经纪人", "parentId": 26},
    {"id": 201, "level": 3, "name": "置业顾问", "parentId": 26},
    {"id": 202, "level": 3, "name": "房产店长/经理", "parentId": 26},
    {"id": 203, "level": 3, "name": "房产店员/助理", "parentId": 26},
    {"id": 204, "level": 3, "name": "房产客服", "parentId": 26},
    {"id": 205, "level": 3, "name": "房产内勤", "parentId": 26},
    {"id": 206, "level": 3, "name": "房产评估师", "parentId": 26},
    {"id": 207, "level": 3, "name": "房产开发/策划", "parentId": 26},
    {"id": 208, "level": 3, "name": "其它房产职位", "parentId": 26}
], "27": [
    {"id": 209, "level": 3, "name": "市场专员/助理", "parentId": 27},
    {"id": 210, "level": 3, "name": "市场拓展", "parentId": 27},
    {"id": 211, "level": 3, "name": "市场调研", "parentId": 27},
    {"id": 212, "level": 3, "name": "市场经理/总监", "parentId": 27},
    {"id": 213, "level": 3, "name": "市场策划", "parentId": 27},
    {"id": 214, "level": 3, "name": "企划经理/主管", "parentId": 27},
    {"id": 215, "level": 3, "name": "品牌专员/经理", "parentId": 27},
    {"id": 216, "level": 3, "name": "媒介专员/助理", "parentId": 27},
    {"id": 217, "level": 3, "name": "媒介经理/主管", "parentId": 27},
    {"id": 218, "level": 3, "name": "会务会展专员/经理", "parentId": 27},
    {"id": 219, "level": 3, "name": "公关专员/助理", "parentId": 27},
    {"id": 220, "level": 3, "name": "公关经理/主管", "parentId": 27}
], "28": [
    {"id": 221, "level": 3, "name": "咨询经理/主管", "parentId": 28},
    {"id": 222, "level": 3, "name": "咨询顾问", "parentId": 28},
    {"id": 223, "level": 3, "name": "企业策划", "parentId": 28},
    {"id": 224, "level": 3, "name": "媒介策划/管理", "parentId": 28},
    {"id": 225, "level": 3, "name": "客户主管/专员", "parentId": 28},
    {"id": 226, "level": 3, "name": "婚礼策划师", "parentId": 28},
    {"id": 227, "level": 3, "name": "会展策划/设计", "parentId": 28},
    {"id": 228, "level": 3, "name": "广告设计/制作", "parentId": 28},
    {"id": 229, "level": 3, "name": "广告方案", "parentId": 28},
    {"id": 230, "level": 3, "name": "广告创意", "parentId": 28},
    {"id": 231, "level": 3, "name": "创意指导/总监", "parentId": 28}
], "29": [
    {"id": 232, "level": 3, "name": "CAD设计/制图", "parentId": 29},
    {"id": 233, "level": 3, "name": "产品/包装设计", "parentId": 29},
    {"id": 234, "level": 3, "name": "店面/陈列/展览设计", "parentId": 29},
    {"id": 235, "level": 3, "name": "多媒体/动画设计", "parentId": 29},
    {"id": 236, "level": 3, "name": "服装设计", "parentId": 29},
    {"id": 237, "level": 3, "name": "工艺/珠宝设计", "parentId": 29},
    {"id": 238, "level": 3, "name": "家具/家居用品设计", "parentId": 29},
    {"id": 239, "level": 3, "name": "美编/美术设计", "parentId": 29},
    {"id": 240, "level": 3, "name": "美术指导", "parentId": 29},
    {"id": 241, "level": 3, "name": "平面设计", "parentId": 29},
    {"id": 242, "level": 3, "name": "装修装潢设计", "parentId": 29}
], "3": [
    {"id": 21, "level": 2, "name": "销售", "parentId": 3},
    {"id": 22, "level": 2, "name": "客服", "parentId": 3},
    {"id": 23, "level": 2, "name": "贸易/采购", "parentId": 3},
    {"id": 24, "level": 2, "name": "超市/百货/零售", "parentId": 3},
    {"id": 25, "level": 2, "name": "淘宝职位", "parentId": 3},
    {"id": 26, "level": 2, "name": "房产中介", "parentId": 3}
], "30": [
    {"id": 243, "level": 3, "name": "组装工", "parentId": 30},
    {"id": 244, "level": 3, "name": "综合维修工", "parentId": 30},
    {"id": 245, "level": 3, "name": "铸造/注塑/模具工", "parentId": 30},
    {"id": 246, "level": 3, "name": "制冷/水暖工", "parentId": 30},
    {"id": 247, "level": 3, "name": "油漆工", "parentId": 30},
    {"id": 248, "level": 3, "name": "印花工", "parentId": 30},
    {"id": 249, "level": 3, "name": "样衣工", "parentId": 30},
    {"id": 250, "level": 3, "name": "压熨工", "parentId": 30},
    {"id": 251, "level": 3, "name": "瓦工", "parentId": 30},
    {"id": 252, "level": 3, "name": "水泥工", "parentId": 30},
    {"id": 253, "level": 3, "name": "手机维修", "parentId": 30},
    {"id": 254, "level": 3, "name": "染工", "parentId": 30},
    {"id": 255, "level": 3, "name": "切割/焊工", "parentId": 30},
    {"id": 256, "level": 3, "name": "钳工", "parentId": 30},
    {"id": 257, "level": 3, "name": "普工", "parentId": 30},
    {"id": 258, "level": 3, "name": "木工", "parentId": 30},
    {"id": 259, "level": 3, "name": "锅炉工", "parentId": 30},
    {"id": 260, "level": 3, "name": "管道工", "parentId": 30},
    {"id": 261, "level": 3, "name": "钢筋工", "parentId": 30},
    {"id": 262, "level": 3, "name": "缝纫工", "parentId": 30},
    {"id": 263, "level": 3, "name": "纺织工", "parentId": 30},
    {"id": 264, "level": 3, "name": "电梯工", "parentId": 30},
    {"id": 265, "level": 3, "name": "电工", "parentId": 30},
    {"id": 266, "level": 3, "name": "车工/铣工", "parentId": 30},
    {"id": 267, "level": 3, "name": "铲车/叉车工", "parentId": 30},
    {"id": 268, "level": 3, "name": "操作工", "parentId": 30},
    {"id": 269, "level": 3, "name": "包装工", "parentId": 30},
    {"id": 270, "level": 3, "name": "钣金工", "parentId": 30}
], "31": [
    {"id": 271, "level": 3, "name": "材料工程师", "parentId": 31},
    {"id": 272, "level": 3, "name": "厂长/副厂长", "parentId": 31},
    {"id": 273, "level": 3, "name": "车间主任", "parentId": 31},
    {"id": 274, "level": 3, "name": "工业工程师", "parentId": 31},
    {"id": 275, "level": 3, "name": "工艺设计", "parentId": 31},
    {"id": 276, "level": 3, "name": "化验/检验", "parentId": 31},
    {"id": 277, "level": 3, "name": "技术工程师", "parentId": 31},
    {"id": 278, "level": 3, "name": "设备管理维护", "parentId": 31},
    {"id": 279, "level": 3, "name": "生产计划", "parentId": 31},
    {"id": 280, "level": 3, "name": "生产主管/组长", "parentId": 31},
    {"id": 281, "level": 3, "name": "生产总监", "parentId": 31},
    {"id": 282, "level": 3, "name": "维修工程师", "parentId": 31},
    {"id": 283, "level": 3, "name": "质量管理", "parentId": 31},
    {"id": 284, "level": 3, "name": "总工程师/副总工程师", "parentId": 31}
], "32": [
    {"id": 285, "level": 3, "name": "装卸/搬运工", "parentId": 32},
    {"id": 286, "level": 3, "name": "物流总监", "parentId": 32},
    {"id": 287, "level": 3, "name": "物流经理/主管", "parentId": 32},
    {"id": 288, "level": 3, "name": "调度员", "parentId": 32},
    {"id": 289, "level": 3, "name": "快递员", "parentId": 32},
    {"id": 290, "level": 3, "name": "国际货运", "parentId": 32},
    {"id": 291, "level": 3, "name": "供应链管理", "parentId": 32},
    {"id": 292, "level": 3, "name": "单证员", "parentId": 32},
    {"id": 293, "level": 3, "name": "仓库经理", "parentId": 32},
    {"id": 294, "level": 3, "name": "仓库管理员", "parentId": 32}
], "33": [
    {"id": 295, "level": 3, "name": "板房/底格出格师", "parentId": 33},
    {"id": 296, "level": 3, "name": "电脑放码员", "parentId": 33},
    {"id": 297, "level": 3, "name": "纺织品设计师", "parentId": 33},
    {"id": 298, "level": 3, "name": "服装打样/制版", "parentId": 33},
    {"id": 299, "level": 3, "name": "服装设计师", "parentId": 33},
    {"id": 300, "level": 3, "name": "生产管理", "parentId": 33},
    {"id": 301, "level": 3, "name": "食品/饮料研发/检验", "parentId": 33},
    {"id": 302, "level": 3, "name": "样衣工", "parentId": 33},
    {"id": 303, "level": 3, "name": "纸样师/车板工", "parentId": 33}
], "34": [
    {"id": 304, "level": 3, "name": "质量检验员/测试员", "parentId": 34},
    {"id": 305, "level": 3, "name": "认证工程师/审核员", "parentId": 34},
    {"id": 306, "level": 3, "name": "测试工程师", "parentId": 34},
    {"id": 307, "level": 3, "name": "安全消防", "parentId": 34},
    {"id": 308, "level": 3, "name": "安全管理", "parentId": 34}
], "35": [
    {"id": 309, "level": 3, "name": "4S店管理", "parentId": 35},
    {"id": 310, "level": 3, "name": "安全性能工程师", "parentId": 35},
    {"id": 311, "level": 3, "name": "二手车评估师", "parentId": 35},
    {"id": 312, "level": 3, "name": "发动机/总装工程师", "parentId": 35},
    {"id": 313, "level": 3, "name": "加油站工作员", "parentId": 35},
    {"id": 314, "level": 3, "name": "理赔专员/顾问", "parentId": 35},
    {"id": 315, "level": 3, "name": "轮胎工", "parentId": 35},
    {"id": 316, "level": 3, "name": "汽车/摩托车修理", "parentId": 35},
    {"id": 317, "level": 3, "name": "汽车电子工程师", "parentId": 35},
    {"id": 318, "level": 3, "name": "汽车机械工程师", "parentId": 35},
    {"id": 319, "level": 3, "name": "汽车检验/检测", "parentId": 35},
    {"id": 320, "level": 3, "name": "汽车美容", "parentId": 35},
    {"id": 321, "level": 3, "name": "汽车设计工程师", "parentId": 35},
    {"id": 322, "level": 3, "name": "停车管理员", "parentId": 35},
    {"id": 323, "level": 3, "name": "洗车工", "parentId": 35},
    {"id": 324, "level": 3, "name": "装配工艺工程师", "parentId": 35}
], "36": [
    {"id": 325, "level": 3, "name": "质量工程师", "parentId": 36},
    {"id": 326, "level": 3, "name": "语音/视频/图形", "parentId": 36},
    {"id": 327, "level": 3, "name": "游戏设计/开发", "parentId": 36},
    {"id": 328, "level": 3, "name": "硬件工程师", "parentId": 36},
    {"id": 329, "level": 3, "name": "项目经理/主管", "parentId": 36},
    {"id": 330, "level": 3, "name": "系统架构师", "parentId": 36},
    {"id": 331, "level": 3, "name": "网站运营", "parentId": 36},
    {"id": 332, "level": 3, "name": "网站策划", "parentId": 36},
    {"id": 333, "level": 3, "name": "网站编辑", "parentId": 36},
    {"id": 334, "level": 3, "name": "网页设计/制作", "parentId": 36},
    {"id": 335, "level": 3, "name": "网络与信息安全工程师", "parentId": 36},
    {"id": 336, "level": 3, "name": "网络管理员", "parentId": 36},
    {"id": 337, "level": 3, "name": "通信技术工程师", "parentId": 36},
    {"id": 338, "level": 3, "name": "实施工程师", "parentId": 36},
    {"id": 339, "level": 3, "name": "软件工程师", "parentId": 36},
    {"id": 340, "level": 3, "name": "技术总监/经理", "parentId": 36},
    {"id": 341, "level": 3, "name": "技术专员/助理", "parentId": 36},
    {"id": 342, "level": 3, "name": "技术支持/维护", "parentId": 36},
    {"id": 343, "level": 3, "name": "程序员", "parentId": 36},
    {"id": 344, "level": 3, "name": "产品经理/专员", "parentId": 36},
    {"id": 345, "level": 3, "name": "测试工程师", "parentId": 36},
    {"id": 346, "level": 3, "name": "DBA", "parentId": 36}
], "37": [
    {"id": 347, "level": 3, "name": "测试/可靠性工程师", "parentId": 37},
    {"id": 348, "level": 3, "name": "产品工艺/规划工程师", "parentId": 37},
    {"id": 349, "level": 3, "name": "灯光/照明设计工程师", "parentId": 37},
    {"id": 350, "level": 3, "name": "电路工程师/技术员", "parentId": 37},
    {"id": 351, "level": 3, "name": "电子/电气工程师", "parentId": 37},
    {"id": 352, "level": 3, "name": "电子/电器维修", "parentId": 37},
    {"id": 353, "level": 3, "name": "无线电工程师", "parentId": 37},
    {"id": 354, "level": 3, "name": "研发工程师", "parentId": 37},
    {"id": 355, "level": 3, "name": "音频/视频工程师", "parentId": 37},
    {"id": 356, "level": 3, "name": "自动化工程师", "parentId": 37}
], "38": [
    {"id": 357, "level": 3, "name": "仪器/仪表/计量", "parentId": 38},
    {"id": 358, "level": 3, "name": "研发工程师", "parentId": 38},
    {"id": 359, "level": 3, "name": "机械工程师", "parentId": 38},
    {"id": 360, "level": 3, "name": "机电工程师", "parentId": 38},
    {"id": 361, "level": 3, "name": "测试/可靠性工程师", "parentId": 38},
    {"id": 362, "level": 3, "name": "版图设计工程师", "parentId": 38}
], "39": [
    {"id": 363, "level": 3, "name": "家教", "parentId": 39},
    {"id": 364, "level": 3, "name": "教学/教务管理", "parentId": 39},
    {"id": 365, "level": 3, "name": "教育产品开发", "parentId": 39},
    {"id": 366, "level": 3, "name": "老师/助教", "parentId": 39},
    {"id": 367, "level": 3, "name": "培训策划", "parentId": 39},
    {"id": 368, "level": 3, "name": "培训师/讲师", "parentId": 39},
    {"id": 369, "level": 3, "name": "培训助理", "parentId": 39},
    {"id": 370, "level": 3, "name": "校长", "parentId": 39},
    {"id": 371, "level": 3, "name": "学术研究/科研", "parentId": 39},
    {"id": 372, "level": 3, "name": "野外拓展训练师", "parentId": 39},
    {"id": 373, "level": 3, "name": "幼教", "parentId": 39},
    {"id": 374, "level": 3, "name": "招生/课程顾问", "parentId": 39}
], "4": [
    {"id": 27, "level": 2, "name": "市场/媒介/公关", "parentId": 4},
    {"id": 28, "level": 2, "name": "广告/会展/咨询", "parentId": 4},
    {"id": 29, "level": 2, "name": "美术/设计/创意", "parentId": 4}
], "40": [
    {"id": 375, "level": 3, "name": "律师助理", "parentId": 40},
    {"id": 376, "level": 3, "name": "律师/法律顾问", "parentId": 40},
    {"id": 377, "level": 3, "name": "合规管理", "parentId": 40},
    {"id": 378, "level": 3, "name": "法务专员/主管", "parentId": 40},
    {"id": 379, "level": 3, "name": "产权/专利顾问", "parentId": 40}
], "41": [
    {"id": 380, "level": 3, "name": "阿拉伯", "parentId": 41},
    {"id": 381, "level": 3, "name": "德语", "parentId": 41},
    {"id": 382, "level": 3, "name": "俄语", "parentId": 41},
    {"id": 383, "level": 3, "name": "法语", "parentId": 41},
    {"id": 384, "level": 3, "name": "韩语", "parentId": 41},
    {"id": 385, "level": 3, "name": "葡萄牙", "parentId": 41},
    {"id": 386, "level": 3, "name": "日语", "parentId": 41},
    {"id": 387, "level": 3, "name": "西班牙", "parentId": 41},
    {"id": 388, "level": 3, "name": "小语种", "parentId": 41},
    {"id": 389, "level": 3, "name": "意大利", "parentId": 41},
    {"id": 390, "level": 3, "name": "英语", "parentId": 41}
], "42": [
    {"id": 391, "level": 3, "name": "编辑/撰稿", "parentId": 42},
    {"id": 392, "level": 3, "name": "出版/发行", "parentId": 42},
    {"id": 393, "level": 3, "name": "记者/采编", "parentId": 42},
    {"id": 394, "level": 3, "name": "排版设计/制作", "parentId": 42},
    {"id": 395, "level": 3, "name": "印刷操作", "parentId": 42},
    {"id": 396, "level": 3, "name": "装订/烫金", "parentId": 42},
    {"id": 397, "level": 3, "name": "总编/副总编/主编", "parentId": 42}
], "43": [
    {"id": 398, "level": 3, "name": "账务总监", "parentId": 43},
    {"id": 399, "level": 3, "name": "账务分析员", "parentId": 43},
    {"id": 400, "level": 3, "name": "统计员", "parentId": 43},
    {"id": 401, "level": 3, "name": "税务经理/主管", "parentId": 43},
    {"id": 402, "level": 3, "name": "审计专员/助理", "parentId": 43},
    {"id": 403, "level": 3, "name": "审计经理/主管", "parentId": 43},
    {"id": 404, "level": 3, "name": "会计/会计师", "parentId": 43},
    {"id": 405, "level": 3, "name": "出纳", "parentId": 43},
    {"id": 406, "level": 3, "name": "成本管理员", "parentId": 43},
    {"id": 407, "level": 3, "name": "财务经理/主管", "parentId": 43},
    {"id": 408, "level": 3, "name": "财务/会计助理", "parentId": 43}
], "44": [
    {"id": 409, "level": 3, "name": "担保/拍卖/典当", "parentId": 44},
    {"id": 410, "level": 3, "name": "风险管理/控制", "parentId": 44},
    {"id": 411, "level": 3, "name": "股票交易员", "parentId": 44},
    {"id": 412, "level": 3, "name": "融资经理/总监", "parentId": 44},
    {"id": 413, "level": 3, "name": "融资专员", "parentId": 44},
    {"id": 414, "level": 3, "name": "投资/理财顾问", "parentId": 44},
    {"id": 415, "level": 3, "name": "外汇/基金/国债经理人", "parentId": 44},
    {"id": 416, "level": 3, "name": "信贷管理/资信评估", "parentId": 44},
    {"id": 417, "level": 3, "name": "信用卡/银行卡业务", "parentId": 44},
    {"id": 418, "level": 3, "name": "银行会计/柜员", "parentId": 44},
    {"id": 419, "level": 3, "name": "银行经理/主任", "parentId": 44},
    {"id": 420, "level": 3, "name": "证券/期货/外汇经纪人", "parentId": 44},
    {"id": 421, "level": 3, "name": "证券分析/金融研究", "parentId": 44},
    {"id": 422, "level": 3, "name": "证券经理/总监", "parentId": 44},
    {"id": 423, "level": 3, "name": "资产评估", "parentId": 44}
], "45": [
    {"id": 424, "level": 3, "name": "储备经理人", "parentId": 45},
    {"id": 425, "level": 3, "name": "车险专员", "parentId": 45},
    {"id": 426, "level": 3, "name": "保险项目经理", "parentId": 45},
    {"id": 427, "level": 3, "name": "保险培训师", "parentId": 45},
    {"id": 428, "level": 3, "name": "保险内勤", "parentId": 45},
    {"id": 429, "level": 3, "name": "保险客户经理", "parentId": 45},
    {"id": 430, "level": 3, "name": "保险客服", "parentId": 45},
    {"id": 431, "level": 3, "name": "保险精算师", "parentId": 45},
    {"id": 432, "level": 3, "name": "保险经纪人", "parentId": 45},
    {"id": 433, "level": 3, "name": "保险顾问", "parentId": 45},
    {"id": 434, "level": 3, "name": "保险其它职位", "parentId": 45}
], "46": [
    {"id": 435, "level": 3, "name": "保健医生", "parentId": 46},
    {"id": 436, "level": 3, "name": "宠物护理/兽医", "parentId": 46},
    {"id": 437, "level": 3, "name": "导医", "parentId": 46},
    {"id": 438, "level": 3, "name": "护理主任/护士长", "parentId": 46},
    {"id": 439, "level": 3, "name": "护士/护理", "parentId": 46},
    {"id": 440, "level": 3, "name": "理疗师", "parentId": 46},
    {"id": 441, "level": 3, "name": "美容整形师", "parentId": 46},
    {"id": 442, "level": 3, "name": "心理医生", "parentId": 46},
    {"id": 443, "level": 3, "name": "验光师", "parentId": 46},
    {"id": 444, "level": 3, "name": "药剂师", "parentId": 46},
    {"id": 445, "level": 3, "name": "医疗管理", "parentId": 46},
    {"id": 446, "level": 3, "name": "医生", "parentId": 46},
    {"id": 447, "level": 3, "name": "医药质检", "parentId": 46},
    {"id": 448, "level": 3, "name": "营养师", "parentId": 46}
], "47": [
    {"id": 449, "level": 3, "name": "医药研发/生产/注册", "parentId": 47},
    {"id": 450, "level": 3, "name": "医疗器械研发/维修", "parentId": 47},
    {"id": 451, "level": 3, "name": "生物工程/生物制药", "parentId": 47},
    {"id": 452, "level": 3, "name": "临床研究/协调", "parentId": 47}
], "48": [
    {"id": 453, "level": 3, "name": "EHS管理", "parentId": 48},
    {"id": 454, "level": 3, "name": "环保工程师", "parentId": 48},
    {"id": 455, "level": 3, "name": "环保技术", "parentId": 48},
    {"id": 456, "level": 3, "name": "环保检测", "parentId": 48},
    {"id": 457, "level": 3, "name": "环境工程艺术", "parentId": 48},
    {"id": 458, "level": 3, "name": "环境管理/保护", "parentId": 48},
    {"id": 459, "level": 3, "name": "环境绿化", "parentId": 48},
    {"id": 460, "level": 3, "name": "水质检测员", "parentId": 48},
    {"id": 461, "level": 3, "name": "污水处理工程师", "parentId": 48}
], "49": [
    {"id": 462, "level": 3, "name": "综合布线/弱电", "parentId": 49},
    {"id": 463, "level": 3, "name": "资料员", "parentId": 49},
    {"id": 464, "level": 3, "name": "造价师/预算师", "parentId": 49},
    {"id": 465, "level": 3, "name": "园林/景观设计", "parentId": 49},
    {"id": 466, "level": 3, "name": "土木/土建工程师", "parentId": 49},
    {"id": 467, "level": 3, "name": "市政工程师", "parentId": 49},
    {"id": 468, "level": 3, "name": "幕墙工程师", "parentId": 49},
    {"id": 469, "level": 3, "name": "建筑工程师/总工", "parentId": 49},
    {"id": 470, "level": 3, "name": "工程项目管理", "parentId": 49},
    {"id": 471, "level": 3, "name": "工程管理", "parentId": 49},
    {"id": 472, "level": 3, "name": "给排水/制冷/暖通", "parentId": 49},
    {"id": 473, "level": 3, "name": "道路桥梁技术", "parentId": 49},
    {"id": 474, "level": 3, "name": "测绘/测量", "parentId": 49},
    {"id": 475, "level": 3, "name": "安全管理/安全员", "parentId": 49},
    {"id": 476, "level": 3, "name": "安防工程师", "parentId": 49}
], "5": [
    {"id": 30, "level": 2, "name": "普工/技工", "parentId": 5},
    {"id": 31, "level": 2, "name": "生产管理/研发", "parentId": 5},
    {"id": 32, "level": 2, "name": "物流/仓储", "parentId": 5},
    {"id": 33, "level": 2, "name": "服装/纺织/食品", "parentId": 5},
    {"id": 34, "level": 2, "name": "质控/安防", "parentId": 5},
    {"id": 35, "level": 2, "name": "汽车制造/服务", "parentId": 5}
], "50": [
    {"id": 477, "level": 3, "name": "合同管理", "parentId": 50},
    {"id": 478, "level": 3, "name": "物业管理员", "parentId": 50},
    {"id": 479, "level": 3, "name": "物业经理/主管", "parentId": 50},
    {"id": 480, "level": 3, "name": "物业维修", "parentId": 50},
    {"id": 481, "level": 3, "name": "招商经理/主管", "parentId": 50}
], "51": [
    {"id": 482, "level": 3, "name": "养殖人员", "parentId": 51},
    {"id": 483, "level": 3, "name": "养殖部主管", "parentId": 51},
    {"id": 484, "level": 3, "name": "饲料业务", "parentId": 51},
    {"id": 485, "level": 3, "name": "农艺师", "parentId": 51},
    {"id": 486, "level": 3, "name": "动物营养/饲料研发", "parentId": 51},
    {"id": 487, "level": 3, "name": "畜牧师", "parentId": 51},
    {"id": 488, "level": 3, "name": "场长", "parentId": 51}
], "6": [
    {"id": 36, "level": 2, "name": "计算机/互联网/通信", "parentId": 6},
    {"id": 37, "level": 2, "name": "电子/电气", "parentId": 6},
    {"id": 38, "level": 2, "name": "机械/仪器仪表", "parentId": 6}
], "7": [
    {"id": 39, "level": 2, "name": "教育培训", "parentId": 7},
    {"id": 40, "level": 2, "name": "法律", "parentId": 7},
    {"id": 41, "level": 2, "name": "翻译", "parentId": 7},
    {"id": 42, "level": 2, "name": "编辑/出版/印刷", "parentId": 7}
], "8": [
    {"id": 43, "level": 2, "name": "财务/审计/统计", "parentId": 8},
    {"id": 44, "level": 2, "name": "金融/银行/证券/投资", "parentId": 8},
    {"id": 45, "level": 2, "name": "保险", "parentId": 8}
], "9": [
    {"id": 46, "level": 2, "name": "医院/医疗/护理", "parentId": 9},
    {"id": 47, "level": 2, "name": "制药/生物工程", "parentId": 9},
    {"id": 48, "level": 2, "name": "环保", "parentId": 9}
]};

