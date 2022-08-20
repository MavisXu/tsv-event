export const plots2 = [
    {
        id: 0,
        text: '又是新的一天！元气满满，起床，今天穿什么好呢？',
        time: '8:00',
        location: '家中',
        options: [
            { 
                id: 0.0,
                label: '好看衣服',
                text: '',
                to: 1,
                attributesChange: {
                    appearance: 1,
                    mood: 1
                }
            },
            { 
                id: 0.1,
                label: '实用衣服',
                text: '',
                to: 1,
                attributesChange: {}
            },
            { 
                id: 0.2,
                label: '犹豫',
                text: '',
                to: 2,
                attributesChange: {
                    appearance: -1,
                    mood: -1
                }
            }
        ]
    },
    {
        id: 1,
        text: '早高峰很挤，进园区扫场所码人很多，拍照发朋友圈，感慨卡点打卡失败。家长评论：再起早点就好了嘛，女孩子要勤快一点呀，不要这么懒',
        time: '9:00',
        location: '公司',
        options: [
            { 
                id: 1.0,
                label: '回复：不要上纲上线',
                text: '',
                to: 2,
                attributesChange: {}
            },
            { 
                id: 1.1,
                label: '回复：知道了知道了',
                text: '',
                to: 2,
                attributesChange: {}
            },
            { 
                id: 1.2,
                label: '回复：我就懒！我爱睡觉睡觉爱我！',
                text: '',
                to: 2,
                attributesChange:{}
            }
        ]
    },
    {
        id: 2,
        text: '家长小窗私聊：和他谈过没有？什么时候我们两边父母碰个面？你年纪也不小了，这样拖下去对你不好。',
        time: '9:00',
        location: '公司',
        options: [
            { 
                id: 2.0,
                label: '回复：我上班呢，晚点再说。',
                text: '',
                to: 3,
                attributesChange: {}
            },
            { 
                id: 2.1,
                label: '回复：知道了知道了',
                text: '',
                to: 3,
                attributesChange: {}
            },
            { 
                id: 2.2,
                label: '回复：怎么就对我不好了？现在男女都一样。！',
                text: '',
                to: 3,
                attributesChange:{}
            }
        ]
    },
    {
        id: 3,
        text: '家长小窗私聊：你又这样。晚上给家里打个电话。女的不比男的！他不怕等，你的时间可宝贵得多！',
        time: '9:00',
        location: '公司',
        options: [
            { 
                id: 3.0,
                label: '回复：我上班呢，晚点再说。',
                text: '',
                to: 4,
                attributesChange: {
                    mood: -1
                }
            },
            { 
                id: 3.1,
                label: '回复：知道了知道了',
                text: '',
                to: 4,
                attributesChange: {
                    mood: -1
                }
            },
            { 
                id: 3.2,
                label: '回复：我不着急。',
                text: '',
                to: 4,
                attributesChange:{}
            }
        ]
    },
    {
        id: 4,
        text: '家长：等你着急就晚了！你打算几岁生小孩？等我们年纪大了谁帮你带小孩？',
        time: '9:00',
        location: '公司',
        options: [
            { 
                id: 4.0,
                label: '回复：我上班呢，晚点再说。',
                text: '',
                to: 5,
                attributesChange: {
                    mood: -1
                }
            },
            { 
                id: 4.1,
                label: '回复：知道了知道了',
                text: '',
                to: 5,
                attributesChange: {
                    mood: -1
                }
            },
            { 
                id: 4.2,
                label: '回复：母职惩罚……我就是不着急！',
                text: '',
                to: 5,
                attributesChange:{
                    mood: -1
                }
            }
        ]
    },
    {
        id: 5,
        text: '家长：记得晚上打电话聊聊。',
        time: '9:00',
        location: '公司',
        options: [
            { 
                id: 5.0,
                label: '继续',
                text: '',
                to: 6,
                attributesChange: {}
            }
        ]
    },
    {
        id: 6,
        text: '午饭吃凉面, 同事a带饭, 吐槽懒得洗便当盒。',
        time: '12:00',
        location: '公司',
        options: [
            { 
                id: 6.0,
                label: '建议她明天吃外卖',
                text: '',
                to: 7,
                attributesChange: {}
            },
            { 
                id: 6.1,
                label: '建议她带回家洗',
                text: '',
                to: 9,
                attributesChange: {
                    mood: -1
                }
            },
            { 
                id: 6.2,
                label: '吐槽凉面不好吃',
                text: '没吃多少凉面。',
                to: 10,
                attributesChange:{
                    strength: -1
                }
            }
        ]
    },
    {
        id: 7,
        text: 'a拒绝。a说吃外卖也要给家里做饭, 还要多花一份钱, 算了吧。',
        time: '12:00',
        location: '公司',
        options: [
            { 
                id: 7.0,
                label: '建议她：那就不做饭啊，让你老公做',
                text: '',
                to: 8,
                attributesChange: {}
            },
        ]
    },
    {
        id: 8,
        text: 'a: 他才不会做呢。他说他做得不好吃。',
        time: '12:00',
        location: '公司',
        options: [
            { 
                id: 8.0,
                label: '继续',
                text: '',
                to: 10,
                attributesChange: {
                    mood: -1
                }
            },
        ]
    },
    {
        id: 9,
        text: '同事b: 一个女的这样邋遢多不好，男的都不会愿意放一个脏饭盒在包里一整天的',
        time: '12:00',
        location: '公司',
        options: [
            { 
                id: 9.0,
                label: '继续',
                text: '',
                to: 10,
                attributesChange: {
                    mood: -1
                }
            },
        ]
    },
    {
        id: 10,
        text: '午休,于工位拉开午休折叠床躺上去睡觉, 经过的同事c: 你一个女生就这样当众睡下来，不太好吧？',
        time: '12:30',
        location: '公司',
        options: [
            { 
                id: 10.0,
                label: '回应：没什么不好的，想太多的人要自己反思',
                text: '',
                to: 11,
                attributesChange: {
                    mood: 1
                }
            },
            { 
                id: 10.1,
                label: '装没听见',
                text: '',
                to: 11,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 11,
        text: '与领导一对一开会，讨论项目进度；领导：不知道你是不是性格问题，一般来说女孩子应该更细心的啊。',
        time: '13:45',
        location: '公司',
        options: [
            { 
                id: 11.0,
                label: '回应：哈哈哈我比较大大咧咧',
                text: '',
                to: 12,
                attributesChange: {
                    mood: -1
                }
            },
            { 
                id: 11.1,
                label: '回应：一般来说男孩子会比女孩子长得高呀，不知道是什么原因导致领导你比我矮一些？',
                text: '',
                to: 12,
                attributesChange: {
                    mood: 1,
                    money: 1,
                    courage: 1
                }
            },
            { 
                id: 11.2,
                label: '微笑并岔过话题',
                text: '',
                to: 12,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 12,
        text: '领导通知发项目奖金',
        time: '15:30',
        location: '公司',
        options: [
            { 
                id: 12.0,
                label: '回应：好开心好开心',
                text: '',
                to: 13,
                attributesChange: {
                    mood: 1,
                    money: 1
                }
            },
            { 
                id: 12.1,
                label: '回应: 对不起, x哥, 虽然你没我高，但是你好帅',
                text: '',
                to: 13,
                attributesChange: {
                    mood: 1,
                    money: 1
                }
            },
            { 
                id: 12.2,
                label: '内心：早就该发了',
                text: '',
                to: 13,
                attributesChange: {
                    money: 1
                }
            }
        ]
    },
    {
        id: 13,
        text: '收到正在休哺乳假的同事c微信: 听说要发项目奖金了？',
        time: '16:00',
        location: '公司',
        options: [
            { 
                id: 13.0,
                label: '回应：是呀，好开心好开心',
                text: '',
                to: 14,
                attributesChange: {
                    mood: 1,
                }
            },
            { 
                id: 13.1,
                label: '回应：不知道，没听说，怎么了',
                text: '',
                to: 14,
                attributesChange: {}
            },
            { 
                id: 13.2,
                label: '回应：好像是，早就该发了。',
                text: '',
                to: 14,
                attributesChange: {}
            }
        ]
    },
    {
        id: 14,
        text: 'c:唉,我听说是要发了,如果你没得到消息找领导问问。我估计我的是没了，前期跟那么紧有什么用，休产假就是被摘桃。',
        time: '16:00',
        location: '公司',
        options: [
            { 
                id: 14.0,
                label: '回应：摸摸。好好休息吧',
                text: '',
                to: 15,
                attributesChange: {
                    mood: -1,
                }
            },
            { 
                id: 14.1,
                label: '回应：嗯嗯',
                text: '',
                to: 15,
                attributesChange: {}
            },
            { 
                id: 14.2,
                label: '回应：别想太多，等你回来就好了',
                text: '',
                to: 15,
                attributesChange: {}
            }
        ]
    },
    {
        id: 15,
        text: '朋友群弹出消息：朋友乙：哈哈哈哈快看这个【链接】（小狗过榴莲堆视频），好可爱！',
        time: '16:10',
        location: '公司',
        options: [
            { 
                id: 15.0,
                label: '回应：哈哈哈哈傻狗',
                text: '',
                to: 16,
                attributesChange: {
                    mood: 1,
                }
            },
            { 
                id: 15.1,
                label: '回应：哈哈哈哈好可爱噢啊啊啊',
                text: '',
                to: 16,
                attributesChange: {
                    mood: 1
                }
            }
        ]
    },
    {
        id: 16,
        text: '朋友群弹出消息。朋友甲:傻x同事今天又没事找事',
        time: '16:10',
        location: '公司',
        options: [
            { 
                id: 16.0,
                label: '回应:我同事也是傻x,有病,我摊开折叠床睡午觉她说我影响不好',
                text: '',
                to: 17,
                attributesChange: {}
            },
            { 
                id: 16.1,
                label: '回应:阿弥陀佛,我同事也是傻x',
                text: '',
                to: 17,
                attributesChange: {}
            },
            { 
                id: 16.2,
                label: '回应:算了算了，挣钱要紧',
                text: '',
                to: 17,
                attributesChange: {}
            }
        ]
    },
    {
        id: 17,
        text: '朋友群。乙:拜托老天让我发财吧我不想上这个x班了🙏🙏;',
        time: '16:10',
        location: '公司',
        options: [
            { 
                id: 17.0,
                label: '提议晚上聚聚',
                text: '',
                to: 18,
                attributesChange: {}
            },
            { 
                id: 17.1,
                label: '一起吐槽',
                text: '',
                to: 18,
                attributesChange: {
                    mood: 1
                }
            }
        ]
    },
    {
        id: 18,
        text: '朋友乙：晚上一块吃饭吧今天周五！庆祝一下！',
        time: '16:10',
        location: '公司',
        options: [
            { 
                id: 18.0,
                label: '同意',
                text: '',
                to: 19,
                attributesChange: {}
            },
            { 
                id: 18.1,
                label: '拒绝',
                text: '',
                to: 100,
                attributesChange: {}
            }
        ]
    },
    {
        id: 19,
        text: '开会中',
        time: '16:20',
        location: '公司',
        options: [
            { 
                id: 18.0,
                label: '继续',
                text: '',
                to: 21,
                attributesChange: {
                    life: -1
                }
            },
        ]
    },
    {
        id: 21,
        text: '下班了。和朋友们看到xx小区开新盘, 盛惠2w8每平方米、非学区',
        time: '19:00',
        location: '商场',
        options: [
            { 
                id: 21.0,
                label: '吐槽：掏空我全家都买不起',
                text: '',
                to: 22,
                attributesChange: {}
            },
            { 
                id: 21.1,
                label: '吐槽：现在的房子是金子做的吗',
                text: '',
                to: 22,
                attributesChange: {}
            }
        ]
    },
    {
        id: 22,
        text: '终于到餐厅了，可以开始吃饭啦',
        time: '19:30',
        location: '餐厅',
        options: [
            { 
                id: 22.0,
                label: '继续',
                text: '',
                to: 23,
                attributesChange: {
                    life: 1,
                    mood: 1,
                    money: -1
                }
            },
        ]
    },
    {
        id: 23,
        text: '微信：家长：还没下班吗？',
        time: '20:00',
        location: '餐厅',
        options: [
            { 
                id: 23.0,
                label: '回应：没呢',
                text: '',
                to: 24,
                attributesChange: {
                    moral: -1
                }
            },
            { 
                id: 23.1,
                label: '回应：下了，和甲、乙在外面玩，后聊',
                text: '',
                to: 24,
                attributesChange: {}
            },
            { 
                id: 23.2,
                label: '回应：别管我了，我都这么大了，在外面玩呢',
                text: '',
                to: 24,
                attributesChange: {}
            }
        ]
    },
    {
        id: 24,
        text: '逛各种店但不买',
        time: '20:30',
        location: '商场',
        options: [
            { 
                id: 24.0,
                label: '继续',
                text: '',
                to: 25,
                attributesChange: {
                    life: -1,
                    mood: 1
                }
            }
        ]
    },
    {
        id: 25,
        text: '烧烤店外都是空桌，没有客人，我们进门，坐到靠门最近的一桌。是否坐“田”字右下角的位置',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 25.0,
                label: '是',
                text: '',
                to: 26,
                attributesChange: {
                    life: 1,
                    mood: 1
                }
            },
            { 
                id: 25.1,
                label: '否',
                text: '',
                to: 27,
                attributesChange: {
                    life: 1,
                    mood: 1
                }
            }
        ]
    },
    {
        id: 26,
        text: '点单、吃菜, 刷微博、聊天。男子x走进店中, 膀大腰圆、似乎饮酒。x走向收银台加菜。x离开收银台, x突然摸自己的背。',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 26.0,
                label: '推开”干啥啊你，有病吧你',
                text: '批评对方：你有病吧？你走开！',
                to: 28,
                attributesChange: {
                    mood: -2
                }
            }
        ]
    },
    {
        id: 27,
        text: '点单、吃菜, 刷微博、聊天。男子x走进店中, 膀大腰圆、似乎饮酒。x走向收银台加菜。x离开收银台, x突然摸坐在最外面的朋友的背。',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 27.0,
                label: '帮助朋友，批评对方：你有病吧？你走开！',
                text: '批评对方：走开！别过来！',
                to: 37,
                attributesChange: {
                    mood: -2,
                    courage: 1
                }
            }
        ]
    },
    {
        id: 28,
        text: 'x再次伸手摸背: “怎么了，摸一下怎么了？装什么呀”',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 28.1,
                label: '回应：你有毛病吧? 推开对方',
                text: '',
                to: 29,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 29,
        text: 'x再次伸手摸背:“哎哟什么臭婊子啊,摸你是看得起你,装什么装啊。来你请哥哥喝酒这事儿就算了！”',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 29.0,
                label: '回应：起开！推开对方',
                text: '',
                to: 30,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 30,
        text: 'x再次伸手摸背:“哎哟我操你妈的，给脸不要脸啊？我操你妈的，你还敢不让？你再推试试看？”',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 30.0,
                label: '回应：推开对方，拒绝被摸',
                text: '',
                to: 31,
                attributesChange: {
                    mood: -1,
                }
            }
        ]
    },
    {
        id: 31,
        text: 'x扇女性的脸',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 31.0,
                label: '回应：站起来打回去',
                text: '',
                to: 32,
                attributesChange: {
                    life: -1,
                    mood: -1,
                    appearance: -1,
                    courage: 1
                }
            }
        ]
    },
    {
        id: 32,
        text: 'x把女性按回椅子打。甲离开座位拉x,x踢甲;甲倒向别的桌子;',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 32.0,
                label: '回应：再次站起来回击。',
                text: '',
                to: 33,
                attributesChange: {}
            }
        ]
    },
    {
        id: 33,
        text: 'x揪住甲殴打;男子y冲进来, 举起椅子砸向甲,接着殴打乙;男子z冲进店中,对我拳打脚踢x“真他妈给脸不要脸,臭婊子,以为自己是谁?还敢耍性子”y”我操真他妈的贱货“ ',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 33.0,
                label: '继续',
                text: '',
                to: 34,
                attributesChange: {
                    life: -2,
                    mood: -1,
                    appearance: -1,
                    courage: -1,
                    strength: -1
                }
            }
        ]
    },
    {
        id: 34,
        text: 'x揪住我殴打, x将我拖出店门外。X握着碎酒瓶痛击我的头;我感觉很痛，我有很多伤口，我出血了；',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 34.0,
                label: '继续',
                text: '',
                to: 35,
                attributesChange: {
                    life: -3
                }
            }
        ]
    },
    {
        id: 35,
        text: 'x放开了我, 我看到乙被x抡向地上, 我听到咚的一声。X擦了擦手, 他手上是红色的血。我站起来。X揪住我的头发拖拽我, 我力不能支。我倒地，蜷住身体；',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 35.0,
                label: '继续',
                text: '旁人劝架、被x殴打;警笛声响起,x、y、z立刻抽身,在警察到达之前跑了。',
                to: 101,
                attributesChange: {
                    life: -1,
                    mood: -1
                }
            }
        ]
    },
    {
        id: 37,
        text: 'x反复伸手骚扰朋友,朋友不堪其扰，不停推拒。',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 37.0,
                label: '继续',
                text: '',
                to: 38,
                attributesChange: {}
            }
        ]
    },
    {
        id: 38,
        text: 'X:“怎么了，摸一下怎么了？装什么呀”',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 38.0,
                label: '继续',
                text: '',
                to: 39,
                attributesChange: {}
            }
        ]
    },
    {
        id: 39,
        text: 'X:“摸你是看得起你，装什么装啊。来你请哥哥喝酒这事儿就算了！”',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 39.0,
                label: '站起来要求对方走开',
                text: '',
                to: 40,
                attributesChange: {
                    mood: -1
                }
            },
            { 
                id: 39.1,
                label: '默不作声',
                text: '',
                to: 40,
                attributesChange: {
                    mood: -1,
                    courage: -1
                }
            }
        ]
    },
    {
        id: 40,
        text: '在朋友的反复拒绝下,X动手一耳光扇向朋友, 我试图走到朋友身边。',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 40.0,
                label: '继续',
                text: '',
                to: 41,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 41,
        text: 'x揪住我殴打, 男子y冲进来, 举起椅子砸向我, 接着殴打乙; 男子z冲进店中, 殴打朋友甲x“真他妈给脸不要脸, 臭婊子, 以为自己是谁? 还敢耍性子”y”我操真他妈的贱货“',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 40.0,
                label: '继续',
                text: '',
                to: 42,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 42,
        text: 'x揪住朋友甲殴打, x将甲拖出店门外',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 42.0,
                label: '我试图从地上爬起',
                text: 'y踹我, 我蜷起身体。',
                to: 43,
                attributesChange: {
                    life: -3
                }
            },
            { 
                id: 42.1,
                label: '我跑出店外，打电话报警',
                text: 'x看到我, 揪住我的头发把我抡向地面，我的头磕上台阶。',
                to: 45,
                attributesChange: {
                    life: -3
                }
            }
        ]
    },
    {
        id: 43,
        text: 'y离开了, 我站了起来, 店主询问我: 你认识那几个打人的人吗? 我回答: 不认识; 我寻找乙; 店里有别的客人在哭, 我跑出店; 我看到x擦了擦手, 他手上都是血。X又开始对我朋友拳打脚踢',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 43.0,
                label: '继续',
                text: '旁人劝架、被x殴打;警笛声响起,x、y、z立刻抽身,在警察到达之前跑了。',
                to: 102,
                attributesChange: {
                    life: -3
                }
            }
        ]
    },
    {
        id: 45,
        text: '旁人劝架、被x殴打;警笛声响起, x、y、z立刻抽身, 在警察到达之前跑了。',
        time: '24:00',
        location: '烧烤店',
        options: [
            { 
                id: 45.0,
                label: '继续',
                text: '',
                to: 103,
                attributesChange: {}
            }
        ]
    },
    {
        id: 100,
        text: '深夜收到朋友短信：我们被人打了，打人的跑了。'
    },
    {
        id: 101,
        text: '结局1: 被骚扰; 大量出血；面部头部受伤；'
    },
    {
        id: 102,
        text: '结局3: 未被骚扰，未出血；受伤'
    },
    {
        id: 103,
        text: '结局2: 未被骚扰，未出血；头部受击打；受伤'
    }
]