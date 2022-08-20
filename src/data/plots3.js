export const plots3 = [
    {
        id: 0,
        text: '早晨, 刚睡醒被电话吵醒，发现是未知电话。你：',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 0.0,
                label: '拒接',
                text: '',
                to: 4
            },
            { 
                id: 0.1,
                label: '接起',
                text: '',
                to: 1
            }
        ]
    },
    {
        id: 1,
        text: '你预感不大好，你拒接，并把电话静音。',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 1.0,
                label: '继续',
                text: '',
                to: 2
            }
        ]
    },
    {
        id: 2,
        text: '你接起电话, 那边一个粗壮的男声: “你上次找倪友乾借的8万块什么时候还?”',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 2.0,
                label: '继续',
                text: '',
                to: 3,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 3,
        text: '竟然是催债的！你深感晦气，你立刻把电话挂了。这个倪友乾真是不地道，竟然找人来催债！',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 3.0,
                label: '继续',
                text: '',
                to: 4
            }
        ]
    },
    {
        id: 4,
        text: '没多久电话又打来了。你干脆一个都不接。没想到电话一直被打, 一直显示被呼叫, 眼看电量二十分钟掉了50%！你只好接起了电话：“喂！”\
        还是那个声音，问：“你什么时候还钱？” 你：',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 4.0,
                label: '回复：我没有钱',
                to: 5
            },
            { 
                id: 4.1,
                label: '回复：我过几天就还', 
                to: 10
            }
        ]
    },
    {
        id: 5,
        text: '钱你早就花完了，又没有进账！你：“哪儿来的钱，我没钱还。等我有钱了我会还的。”',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 5.0,
                label: '继续',
                text: '',
                to: 6
            }
        ]
    },
    {
        id: 6,
        text: '对方: “你住在XX区XX路XX街XX小区XX栋X0X。我刚刚买了一桶新漆。你说你房东知道你这么给她门换颜色还会让你住吗?”你：',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 6.0,
                label: '你压根不怕',
                text: '',
                to: 7
            },
            { 
                id: 6.1,
                label: '你有点害怕了',
                text: '',
                to: 8
            }
        ]
    },
    {
        id: 7,
        text: '你：“你刷啊，刷呗。你看我怕吗？兄弟，不是我说，你干的这事儿我也干过，那你也盯了我吧？我是真的没钱！”',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 7.0,
                label: '继续',
                text: '',
                to: 13
            }
        ]
    },
    {
        id: 8,
        text: '你在这儿住了没多久，虽然没太阳又小，但毕竟便宜，你不想再没地儿去。但你确实没钱。你沉默着。',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 8.0,
                label: '继续',
                text: '',
                to: 13
            }
        ]
    },
    {
        id: 9,
        text: '你在这儿住了没多久，虽然没太阳又小，但毕竟便宜，你不想再没地儿去。但你确实没钱。你沉默着。',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 9.0,
                label: '继续',
                text: '',
                to: 13
            }
        ]
    },
    {
        id: 10,
        text: '你压根没钱，但你有经验，这种催债的，打爆电话还是小事，如果被他找上门就更麻烦了。你糊弄道：“我过几天就还。”',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 10.0,
                label: '继续',
                text: '',
                to: 11
            }
        ]
    },
    {
        id: 11,
        text: '“过几天是什么时候？没还怎么办？”你：',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 11.0,
                label: '“我现在没有钱啊！你叫我还我也还不出来！过几天我有钱了自然就会还钱了啊！”你气急败坏',
                text: '',
                to: 13
            },
            { 
                id: 11.1,
                label: '你：“明天！明天我会搞到一笔钱，我立刻就还。”',
                text: '',
                to: 12
            }
        ]
    },
    {
        id: 12,
        text: '对面恐吓道：“三天之后没见到钱，我就上门跟你老婆好好讨论讨论你欠钱不还的事。”',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 12.0,
                label: '继续',
                text: '',
                to: 13,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 13,
        text: '对面笑了一声，“有钱溜冰没钱还？你也知道，要不到钱我也不只是刷刷门。”\
        你：“……”\
        对面似乎很诚心，“要钱还不简单吗？我给你介绍个网站，你上去贷点，先把眼前的还了。”\
        你：',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 13.0,
                label: '拒绝',
                text: '',
                to: 14
            },
            { 
                id: 13.1,
                label: '动心',
                text: '',
                to: 15
            }
        ]
    },
    {
        id: 14,
        text: '“算了吧，我找我兄弟借点。我明天还。”',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 14.0,
                label: '继续',
                text: '',
                to: 17,
                attributesChange: {
                    mood: -1
                }
            },
        ]
    },
    {
        id: 15,
        text: '“什么网站？”',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 15.0,
                label: '继续',
                text: '',
                to: 16
            },
        ]
    },
    {
        id: 16,
        text: '对方告诉你一个网址: JieWangDaiMeiHaoXiaChang.com\
        你看着这个熟悉的域名，回想起了曾经借网贷还不上被人打到处流窜没地儿住没冰溜的日子。你：“算了吧，我找我兄弟借点，我明天还。”',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 16.0,
                label: '继续',
                text: '',
                to: 17,
                attributesChange: {
                    mood: -1
                }
            },
        ]
    },
    {
        id: 17,
        text: '挂了电话，你在床上辗转反侧。你还得买冰。你老婆被你吵醒了，踢了你一脚，“没事做就出去，我大着肚子没睡够！”\
        你骂骂咧咧地起床，随便摸了一件衣服穿上，坐到桌前谋算怎么搞点钱。你想起来有个大哥原来就开赌场，还因此进去过，讲不定有点什么门路可以搞钱。不过今天还早呢，不急！',
        time: '9:00',
        location: '出租屋',
        options: [
            { 
                id: 17.0,
                label: '继续',
                text: '',
                to: 18
            },
        ]
    },
    {
        id: 18,
        text: '你躺在床上刷起了短视频。各种各样的美女对着你搔首弄姿。\
        你看完一个美女变装视频，你感觉：',
        time: '10:30',
        location: '出租屋床上',
        options: [
            { 
                id: 18.0,
                label: '很好看',
                text: '你评论：“兄弟们，快顶我上去让她看到我！”',
                to: 19
            },
            { 
                id: 18.1,
                label: '很漂亮',
                text: '你评论：“烦死了烦死了，这玩意怎么不能直接加微信 。”',
                to: 19
            },
            { 
                id: 18.2,
                label: '很色情',
                text: '你评论：“外面风大，有什么事来我被窝里说。”',
                to: 19
            }
        ]
    },
    {
        id: 19,
        text: '慢慢，零星你收到了几个赞，你不由得感到，这些美女只跟有钱人在一起又有什么用？还不是要拍这种视频给自己这样的人免费看？免费用？\
        你觉得自己赚了。',
        time: '10:30',
        location: '出租屋床上',
        options: [
            { 
                id: 19.0,
                label: '继续',
                text: '',
                to: 20,
                attributesChange: {
                    mood: 1
                }
            }
        ]
    },
    {
        id: 20,
        text: '老婆炒完菜，喊你吃饭。你看了看菜色，只有一点肉末。你：',
        time: '13:30',
        location: '出租屋',
        options: [
            { 
                id: 20.0,
                label: '想吃肉',
                text: '',
                to: 21
            },
            { 
                id: 20.1,
                label: '觉得也能吃',
                text: '',
                to: 22
            }
        ]
    },
    {
        id: 21,
        text: '你把碗一推，骂道：“就吃这些东西，嘴里淡出鸟了！”',
        time: '10:30',
        location: '出租屋',
        options: [
            { 
                id: 21.0,
                label: '继续',
                text: '',
                to: 23
            }
        ]
    },
    {
        id: 22,
        text: '你开始吃饭，吃着吃着被老婆踢了一脚。',
        time: '10:30',
        location: '出租屋',
        options: [
            { 
                id: 22.0,
                label: '继续',
                text: '',
                to: 23
            }
        ]
    },
    {
        id: 23,
        text: '老婆骂道：“现在咱们就吃得起这样的菜！你还天天在外面鬼混！挣点钱吧！我过几天还要去孕检……这个儿子你不想要了是吧！我的命怎么这么苦啊！怎么就跟了你！”你：',
        time: '10:30',
        location: '出租屋',
        options: [
            { 
                id: 23.0,
                label: '愧疚',
                text: '',
                to: 24
            },
            { 
                id: 23.1,
                label: '不高兴',
                text: '',
                to: 25
            }
        ]
    },
    {
        id: 24,
        text: '你：“老婆，我肯定会去搞点钱来，放心放心！”',
        time: '10:30',
        location: '出租屋',
        options: [
            { 
                id: 24.0,
                label: '继续',
                text: '',
                to: 26
            }
        ]
    },
    {
        id: 25,
        text: '你：“你会赚钱？你去外面你赚啊！你怎么不看自己长什么样！现在看不起我了？”',
        time: '10:30',
        location: '出租屋',
        options: [
            { 
                id: 25.0,
                label: '继续',
                text: '',
                to: 26,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 26,
        text: '你觉得你赚钱的事情跟她多说无益，昨天赌博到很晚，你今天其实很累了。\
        你打算先睡一觉，醒来再联系大哥，你们都是夜生活很丰富的人。',
        time: '10:30',
        location: '出租屋',
        options: [
            { 
                id: 26.0,
                label: '继续',
                text: '',
                to: 27
            }
        ]
    },
    {
        id: 27,
        text: '你老婆在热中午的菜，你闻着味醒了。\
        她听见你醒来的声音对你说，“菜鸟驿站说有个快递，你去取一下，回来吃饭。”你：',
        time: '19:00',
        location: '出租屋',
        options: [
            { 
                id: 27.0,
                label: '懒得去',
                text: '你犯懒不想去，所以你只是“嗯”了一句，但没动。',
                to: 28
            },
            { 
                id: 27.1,
                label: '答应去',
                text: '你说“好”，但打算吃完饭再去。',
                to: 28
            },
            { 
                id: 27.2,
                label: '让她去',
                text: '',
                to: 29
            }
        ]
    },
    {
        id: 28,
        text: '你老婆热完菜发现你还在屋里，踢了你一脚，让你吃了饭赶紧去。',
        time: '19:00',
        location: '出租屋',
        options: [
            { 
                id: 28.0,
                label: '继续',
                text: '',
                to: 31
            }
        ]
    },
    {
        id: 29,
        text: '你不想去，你：“等下吃完饭你去拿吧。我又没买东西。”',
        time: '19:00',
        location: '出租屋',
        options: [
            { 
                id: 29.0,
                label: '继续',
                text: '',
                to: 30,
                attributesChange: {
                    moral: -1
                }
            }
        ]
    },
    {
        id: 30,
        text: '你老婆气得把菜往桌上“咣”地一放，骂道：“是不是男人？有没有良心？我还怀着孕呢！”\
        你看她愤怒得像要背过气了，只好答应说，“吃了饭我去取。”',
        time: '19:00',
        location: '出租屋',
        options: [
            { 
                id: 30.0,
                label: '继续',
                text: '',
                to: 31
            }
        ]
    },
    {
        id: 31,
        text: '你走在路上，觉得差不多是时候给大哥打个电话了。\
        你拨通了大哥的电话：“哎哥哥，最近有没有什么路子哇，我老婆又要生了。怎么也得多弄点钱。”',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 31.0,
                label: '继续',
                text: '',
                to: 32
            }
        ]
    },
    {
        id: 32,
        text: '大哥在那边颇为豪气，“巧了嘛，你马哥刚叫我一块吃饭呢，你也来！咱们一块谋划谋划！八点，老地方，知道吧？”\
        你：',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 32.0,
                label: '马上答应',
                text: '',
                to: 33
            },
            { 
                id: 32.1,
                label: '犹豫一下',
                text: '',
                to: 35
            },
            { 
                id: 32.2,
                label: '拒绝',
                text: '',
                to: 37,
                attributesChange: {
                    selected: 32.2
                }
            }
        ]
    },
    {
        id: 33,
        text: '“好哇好哇, 我马上就去!”你说, “8点, 我这边拿了快递抄近路开摩托过去刚好。”',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 33.0,
                label: '继续',
                text: '',
                to: 34
            }
        ]
    },
    {
        id: 34,
        text: '大哥说，“哎骑什么摩托，开车来！有江苏来的兄弟呢，不要看着太小气了。”',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 34.0,
                label: '继续',
                text: '',
                to: 39
            }
        ]
    },
    {
        id: 35,
        text: '去老地方，那肯定又是不到半夜不能散，明天早上要是讨债的上门了，自己昏昏沉沉半睡不醒肯定不行。\
        你：“……”',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 35.0,
                label: '继续',
                text: '',
                to: 36
            }
        ]
    },
    {
        id: 36,
        text: '大哥说，“哎记得开车来哇！有江苏来的兄弟呢，不要看着太小气了。”',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 36.0,
                label: '继续',
                text: '',
                to: 39
            }
        ]
    },
    {
        id: 37,
        text: '你：“哎哥哥，那个讨债的已经要上门了，你能不能借我几万块？我先把这儿换了，然后我今年我就跟着你干，不要钱！”',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 37.0,
                label: '继续',
                text: '',
                to: 38
            }
        ]
    },
    {
        id: 38,
        text: '大哥在那边似乎颇为为难，“你要得这么紧我一时也拿不出来哇，不然这样，你先躲躲风头，等我这边确定了要人，我再找你。”\
        你听出他的意思了。',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 38.0,
                label: '继续',
                text: '',
                to: 40
            }
        ]
    },
    {
        id: 39,
        text: '你答应下来，挂了电话，决定骑摩托抄近路到另一个兄弟家开停在他家的借他开的那辆车，又近又快，从那里开过去差不多八点能到。你低头想事情，余光发现路边有个什么东西，看着像皮包。你：',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 39.0,
                label: '过去查看',
                text: '',
                to: 41
            },
            { 
                id: 39.1,
                label: '赶快去拿快递',
                text: '',
                to: 44
            }
        ]
    },
    {
        id: 40,
        text: '你低头想事情，余光发现路边有个什么东西，看着像皮包。你：',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 40.0,
                label: '过去查看',
                text: '',
                to: 41
            },
            { 
                id: 40.1,
                label: '赶快去拿快递',
                text: '',
                to: 44
            }
        ]
    },
    {
        id: 41,
        text: '真是一只钱包。里面零的整的加起来快三百块。还插着几张银行卡和身份证。你看了看，是个看起来很瘦弱的男的。',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 41.0,
                label: '把钱包交给小区居委',
                text: '',
                to: 42
            },
            { 
                id: 41.1,
                label: '把钱包收起来',
                text: '',
                to: 43
            }
        ]
    },
    {
        id: 42,
        text: '你把钱收进自己兜里，顺路经过小区居委门口把钱包丢那儿了。',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 42.0,
                label: '继续',
                text: '',
                to: 45,
                attributesChange: {
                    money: 1
                }
            }
        ]
    },
    {
        id: 43,
        text: '你把钱包收进自己兜里，觉得今天运气还是蛮不错的。',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 43.0,
                label: '继续',
                text: '',
                to: 45,
                attributesChange: {
                    money: 1,
                    mood: 1
                }
            }
        ]
    },
    {
        id: 44,
        text: '肯定是垃圾，你想，你时间很紧，加快了脚步',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 44.0,
                label: '继续',
                text: '',
                to: 45,
            }
        ]
    },
    {
        id: 45,
        text: '取了快递，一个小方盒子，没写是什么东西。你心想不知道老婆又买了什么。你：',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 45.0,
                label: '干脆在外面拆了，省得带垃圾回去',
                text: '',
                to: 46,
            },
            { 
                id: 45.1,
                label: '带回去让老婆拆',
                text: '',
                to: 47,
            }
        ]
    },
    {
        id: 46,
        text: '你掏出钥匙，把快递盒划开。\
        你闻到了一股腐臭味。\
        你掀开四边盒盖，你发现里面是一只死老鼠。\
        你气急败坏，感觉对方不知好歹。',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 46.0,
                label: '继续',
                text: '',
                to: 105,
                showConditions: [
                    {
                        operation: 'has',
                        attributeName: 'selected',
                        attributeValue: 32.2
                    }
                ],
                attributesChange: {
                    mood: -1,
                    violence: 1
                }
            },
            { 
                id: 46.0,
                label: '继续',
                text: '',
                to: 48,
                showConditions: [
                    {
                        operation: 'no',
                        attributeName: 'selected',
                        attributeValue: 32.2
                    }
                ],
                attributesChange: {
                    mood: -1,
                    violence: 1
                }
            }
        ]
    },
    {
        id: 47,
        text: '你把快递带回去丢给老婆，自己开始找车钥匙和摩托车钥匙。刚找到，就听见老婆一声尖叫，你冲过去看，你老婆撞开你，一路捂着嘴去马桶附近呕吐，她方才坐的椅子前是拆开的快递盒，里面是一只死老鼠。',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 47.0,
                label: '继续',
                text: '',
                to: 48,
                attributesChange: {
                    mood: -1,
                    violence: 1
                }
            }
        ]
    },
    {
        id: 48,
        text: '你老婆边吐边哭：“你又在外面惹了什么事？！”\
        你把死老鼠收起来，“没事，我今天会处理好。”\
        “处理？又去外面打架斗殴那种处理？”\
        你：',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 48.0,
                label: '仍然出门',
                text: '',
                to: 49
            },
            { 
                id: 48.1,
                label: '留在家里照顾她',
                text: '',
                to: 100
            }
        ]
    },
    {
        id: 49,
        text: '“……你不懂。”你不想解释，带着垃圾出门了。',
        time: '19:20',
        location: '小区',
        options: [
            { 
                id: 49.0,
                label: '继续',
                text: '',
                to: 50
            }
        ]
    },
    {
        id: 50,
        text: '你赶时间',
        time: '19:50',
        location: '马路上',
        options: [
            { 
                id: 50.0,
                label: '摩托骑得很快',
                text: '',
                to: 51
            },
            { 
                id: 50.1,
                label: '但还是控制了速度',
                text: '',
                to: 52
            }
        ]
    },
    {
        id: 51,
        text: '在一个拐角一辆电动车突然冲出，你不及刹车，把一位黄衣的外卖小哥撞倒在地。自己也摔倒在地上，撞到了肩膀。',
        time: '19:50',
        location: '马路上',
        options: [
            { 
                id: 51.0,
                label: '继续',
                text: '',
                to: 53,
                attributesChange: {
                    mood: -1,
                    life: -1
                }
            }
        ]
    },
    {
        id: 52,
        text: '在一个拐角一辆电动车突然冲出，你不及刹车，把一位黄衣的外卖小哥撞倒在地',
        time: '19:50',
        location: '马路上',
        options: [
            { 
                id: 52.0,
                label: '继续',
                text: '',
                to: 53
            }
        ]
    },
    {
        id: 53,
        text: '他的速度也很快，由于怕撞到你他将龙头拐开，外卖小哥跟着电动车在地上滑了一段。接着他站起来骂道：“不会看路啊？！”\
        你：',
        time: '19:50',
        location: '马路上',
        options: [
            { 
                id: 53.0,
                label: '生气',
                text: '',
                to: 54
            },
            { 
                id: 53.1,
                label: '无所谓',
                text: '',
                to: 55
            }
        ]
    },
    {
        id: 54,
        text: '你: “傻b! 你嘛的，赶着送死是不是啊？”\
        对面看你一脸凶相，不说话了，收拾起他散掉的外卖箱。\
        你继续赶路',
        time: '19:50',
        location: '马路上',
        options: [
            { 
                id: 54.0,
                label: '继续',
                text: '',
                to: 56,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 55,
        text: '你：“跟你一样赶死呗！”你说完继续赶路。',
        time: '19:50',
        location: '马路上',
        options: [
            { 
                id: 55.0,
                label: '继续',
                text: '',
                to: 56
            }
        ]
    },
    {
        id: 56,
        text: '你准点到，大哥甚至还没来，惯例来了先挨个儿认识一圈, 一圈敬下来, 你刚喝完半瓶啤酒。你已经知道了x早年跟着爹在某市做生意, 后面跟着朋友在外面吃饭, 干起来了, 斗殴进去一次。\
        你分享自己',
        time: '20:00',
        location: '烧烤店',
        options: [
            { 
                id: 56.0,
                label: '你曾经被人带着开始溜冰',
                text: '',
                to: 57
            },
            { 
                id: 56.1,
                label: '之前跟着大哥赌博',
                text: '',
                to: 58
            },
            { 
                id: 56.2,
                label: '因为打架坐牢的事情',
                text: '',
                to: 59
            }
        ]
    },
    {
        id: 57,
        text: '不到十年前你也跟着家里在外面开店，手里有点钱，跟了个朋友一块溜冰。没多久染上瘾了，很快钱就不够用了。\
        钱不够用是其次, 不知道谁举报了你吸毒, 你因此被行政拘留15天。',
        time: '20:00',
        location: '烧烤店',
        options: [
            { 
                id: 57.0,
                label: '继续',
                text: '',
                to: 60
            }
        ]
    },
    {
        id: 58,
        text: '几年前你大哥就做赌场生意, 上下都打点好，着实富过一段。只要进来赌了，轻易就没那么容易走，赚得是越来越多，。不时你自己也赌几把。结果不知怎么回事，忽然有天上面又查起来了，搞得你蹲了快一个月。',
        time: '20:00',
        location: '烧烤店',
        options: [
            { 
                id: 58.0,
                label: '继续',
                text: '',
                to: 61
            }
        ]
    },
    {
        id: 59,
        text: '十几年前吧，你跟着当时的兄弟一块泡吧，没想到在那里看到了自己的女朋友和别的男人。吵着吵着两拨人就打起来了。你上头极了，打得很凶，划烂了一个男的的肚子。\
        你因此被关了四年。',
        time: '20:00',
        location: '烧烤店',
        options: [
            { 
                id: 59.0,
                label: '继续',
                text: '',
                to: 62
            }
        ]
    },
    {
        id: 60,
        text: '大家唏嘘一道，说自己抽烟也是很早跟着朋友一起的。',
        time: '20:00',
        location: '烧烤店',
        options: [
            { 
                id: 60.0,
                label: '继续',
                text: '',
                to: 63
            }
        ]
    },
    {
        id: 61,
        text: '大家纷纷点头，“搞博彩是很赚哇……哈哈，咱们这次不就是谈世界杯赌球的事情嘛！”',
        time: '20:00',
        location: '烧烤店',
        options: [
            { 
                id: 61.0,
                label: '继续',
                text: '',
                to: 63
            }
        ]
    },
    {
        id: 62,
        text: '大家大笑起来，说道：“女人就是沾上就麻烦！”',
        time: '20:00',
        location: '烧烤店',
        options: [
            { 
                id: 62.0,
                label: '继续',
                text: '',
                to: 63
            }
        ]
    },
    {
        id: 63,
        text: '你大哥风风火火地走了进来，因为迟到太久，纷纷要求他先自罚三杯。你大哥话不多说，仰头就是三杯。\
        你：',
        time: '21:00',
        location: '烧烤店',
        options: [
            { 
                id: 63.0,
                label: '十分敬佩',
                text: '',
                to: 64
            },
            { 
                id: 63.1,
                label: '有点责怪他来这么迟',
                text: '',
                to: 65
            }
        ]
    },
    {
        id: 64,
        text: '你就特别敬佩大哥这样爽快豪迈的风格。\
        你跟着也敬了一杯。',
        time: '21:00',
        location: '烧烤店',
        options: [
            { 
                id: 64.0,
                label: '继续',
                text: '',
                to: 66,
                attributesChange: {
                    mood: 1
                }
            },
        ]
    },
    {
        id: 65,
        text: '大哥来得这么迟，你都不方便单独找他说怎么先弄点钱的事。',
        time: '21:00',
        location: '烧烤店',
        options: [
            { 
                id: 65.0,
                label: '继续',
                text: '',
                to: 66
            },
        ]
    },
    {
        id: 66,
        text: '酒过三巡，众人又开始遥想过去。你大哥来劲了。他说到他曾经',
        time: '21:00',
        location: '烧烤店',
        options: [
            { 
                id: 66.0,
                label: '继续',
                text: '',
                to: 67,
                showConditions: [
                    {
                        operation: '>',
                        attributeName: 'random',
                        attributeValue: 50
                    }
                ]
            },
            { 
                id: 66.1,
                label: '继续',
                text: '',
                to: 68,
                showConditions: [
                    {
                        operation: '<=',
                        attributeName: 'random',
                        attributeValue: 50
                    }
                ]
            }
        ]
    },
    {
        id: 67,
        text: '在“借贷公司”催债，谁不还钱，就带着人往人家里找，砸东西，要么把人关到厂子里。\
        大家恭维道：“果断！就是得这么治。”',
        time: '21:00',
        location: '烧烤店',
        options: [
            { 
                id: 67.0,
                label: '继续',
                text: '',
                to: 69
            }
        ]
    },
    {
        id: 68,
        text: '“大家多少都会赌点吧？有段时间市里抓得严呐！那也不可能不赌是吧？我在总局就有个兄弟，他呢，每次要查我赌的那块，他就先通知我，哈哈，我可是一次没被罚过！”你大哥说道。',
        time: '21:00',
        location: '烧烤店',
        options: [
            { 
                id: 68.0,
                label: '继续',
                text: '',
                to: 70
            }
        ]
    },
    {
        id: 69,
        text: '你不禁想到自己今天收到的死老鼠，忍不住叹口气自己喝了一口酒',
        time: '21:00',
        location: '烧烤店',
        options: [
            { 
                id: 69.0,
                label: '继续',
                text: '',
                to: 71,
                attributesChange: {
                    mood: -1
                }
            }
        ]
    },
    {
        id: 70,
        text: '你感慨于大哥的关系之强，又敬了大哥一杯。',
        time: '21:00',
        location: '烧烤店',
        options: [
            { 
                id: 70.0,
                label: '继续',
                text: '',
                to: 71
            }
        ]
    },
    {
        id: 71,
        text: '吃吃聊聊，桌上餐盘里空的空，剩的剩。你大哥站起来说道：“我再去加点酒菜，都还能喝吧？”\
        不能喝？这不是看不起你们吗！“哎哟，这才哪儿跟哪儿？”你说道。大哥走进了店中。\
        没多久，烧烤店里传来了争执声。\
        你走进去发现你大哥和一桌女子起了冲突，你大哥正在打其中一个女子。',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 71.0,
                label: '跑路',
                text: '',
                to: 72,
                showConditions: [
                    {
                        operation: '>=',
                        attributeName: 'mood',
                        attributeValue: 6
                    }
                ]
            },
            { 
                id: 71.1,
                label: '阻拦',
                text: '',
                to: 73,
                showConditions: [
                    {
                        operation: '>=',
                        attributeName: 'mood',
                        attributeValue: 6
                    }
                ]
            },
            { 
                id: 71.2,
                label: '什么都不做',
                text: '',
                to: 74
            },
            { 
                id: 71.3,
                label: '询问',
                text: '',
                to: 74
            }

        ]
    },
    {
        id: 72,
        text: '你忽然觉得有点不妙，你决定先走。',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 72.0,
                label: '继续',
                text: '',
                to: 101
            }
        ]
    },
    {
        id: 73,
        text: '你上前拦住大哥，低声说道，“大哥，这儿有监控！”\
        “算了算了……”你劝道',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 72.0,
                label: '继续',
                text: '',
                to: 102
            }
        ]
    },
    {
        id: 74,
        text: '你大哥注意到你来了，说道：“这个婊子，给脸不要脸！”\
        你发现桌上另一个女人拿起了啤酒瓶。\
        你：',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 74.0,
                label: '什么都不做',
                text: '',
                to: 75,
                showConditions: [
                    {
                        operation: '<=',
                        attributeName: 'violence',
                        attributeValue: 5
                    }
                ]
            },
            { 
                id: 74.1,
                label: '走过去',
                text: '',
                to: 76
            }
        ]
    },
    {
        id: 75,
        text: '你没有走向前去，你不怎么想打女人，但是你也不想碍大哥的眼。',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 75.0,
                label: '继续',
                text: '',
                to: 77
            }
        ]
    },
    {
        id: 76,
        text: '你走了过去，你大哥注意到那个拿起酒瓶子的女人，一把把她揪出座位，重重地踢了她一脚。她倒在桌椅中间。店里其他客人尖叫起来。\
        你冲上去向甲摔了一把凳子，她徒劳地用手挡了挡。',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 76.0,
                label: '继续',
                text: '',
                to: 77
            }
        ]
    },
    {
        id: 77,
        text: '“一群贱货！”大哥边打边骂道，“就该把你按在路边肏！”\
        大哥抓住那个女人，拖着她的头发往店外走。那个女人的同伴乙跟着要走出去。\
        你：',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 77.0,
                label: '什么都不做',
                text: '你不想参与打女人，但是你也没有拦着大哥',
                to: 79,
                showConditions: [
                    {
                        operation: '<=',
                        attributeName: 'violence',
                        attributeValue: 5
                    }
                ]
            },
            { 
                id: 77.1,
                label: '拦住女人同伴',
                text: '',
                to: 78
            }
        ]
    },
    {
        id: 78,
        text: '不能让这个女人乙耽误大哥，你又操起一把椅子往她身上砸，她痛呼一声跪了下去，你冲上前对她拳打脚踢。',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 78.0,
                label: '继续',
                text: '',
                to: 79
            }
        ]
    },
    {
        id: 79,
        text: '大哥站在外面，好像已经完事儿了，女人蜷在地上，大哥用衣服擦了擦手上的血。\
        你看到甲站在外面台阶上似乎在打电话，你：',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 79.0,
                label: '什么都不做',
                text: '你不想参与打女人，但是你也没有拦着大哥',
                to: 80,
                showConditions: [
                    {
                        operation: '<=',
                        attributeName: 'violence',
                        attributeValue: 5
                    }
                ]
            },
            { 
                id: 79.1,
                label: '拦住女人同伴',
                text: '你冲过去把拽住乙的头发，把她向台阶上砸，她的脑袋和水泥地撞出砰的响声。',
                to: 80
            }
        ]
    },
    {
        id: 80,
        text: '你猜到肯定有人报警了，你：',
        time: '01:50',
        location: '烧烤店',
        options: [
            { 
                id: 80.0,
                label: '跑路',
                text: '',
                to: 103,
            },
            { 
                id: 80.1,
                label: '相信大哥的能力',
                text: '',
                to: 104
            }
        ]
    },
    {
        id: 100,
        ending: {
                id: 100.0,
                label: '游戏结束',
                text: '你给老婆递去热水漱口，跟大哥发去一条微信，说老婆身体不舒服，你今天在家照顾孕妇，不去了。\
                结局；成就：良心未泯；无辜的老鼠；'
            }
    },
    {
        id: 101,
        ending: {
                id: 101.0,
                label: '游戏结束',
                text: '结局：你未参与殴打，离开现场。'
            }
    },
    {
        id: 102,
        ending: {
                id: 102.0,
                label: '游戏结束',
                text: '结局3:成就：正确的选择；'
            }
    },
    {
        id: 103,
        ending: {
                id: 103.0,
                label: '游戏结束',
                text: '48\
                结局4(早上你被老婆喊醒，她说门口被人泼了油漆，你跟她说你会解决的，匆匆回了老家躲债。两天后烧烤店围殴女子事件舆论发酵，你被捉拿归案。)'
            }
    },
    {
        id: 104,
        ending: {
                id: 104.0,
                label: '游戏结束',
                text: '你继续对乙拳打脚踢。警笛的声音出现，你和大哥兄弟们匆匆离开，并跟着大哥火速出省，最终两天后被捉拿归案）'
            }
    },
    {
        id: 105,
        ending: {
                id: 105.0,
                label: '游戏结束',
                text: '发现快递里是死老鼠后, 你连夜回了老家躲债'
            }
    }
]