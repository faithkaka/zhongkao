// 浙江省初中知识点题库数据
// 2026 年最新版教材

const QUESTION_BANK = {
    // 七年级上册
    '7_upper': {
        '语文': [
            {
                id: '7u_ch_001',
                question: '下列加点字注音完全正确的一项是（  ）',
                options: ['A. 酝酿（niàng）  黄晕（yūn）  嘹亮（liáo）', 'B. 贮蓄（zhù）  澄清（chéng）  着落（zhuó）', 'C. 粗犷（kuàng）  静谧（mì）  高邈（miǎo）', 'D. 莅临（lì）  吝啬（lìn）  池畦（wā）'],
                answer: 'B',
                explanation: '【解析】A 项"晕"应读 yùn；C 项"犷"应读 guǎng；D 项"畦"应读 qí。B 项注音全部正确。【知识点】字音辨析，注意多音字和易错字的读音。',
                subject: '语文',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '字音辨析'
            },
            {
                id: '7u_ch_002',
                question: '下列词语书写完全正确的一项是（  ）',
                options: ['A. 朗润  建壮  喉咙  呼朋引伴', 'B. 窠巢  宛转  洪亮  花枝招展', 'C. 烘托  静默  风筝  抖擞精神', 'D. 晕酿  稀疏  蓑衣  稀稀疏疏'],
                answer: 'C',
                explanation: '【解析】A 项"建壮"应为"健壮"；B 项"宛转"应为"婉转"；D 项"晕酿"应为"酝酿"。C 项书写全部正确。【知识点】字形辨析，注意形近字和易错字。',
                subject: '语文',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '字形辨析'
            },
            {
                id: '7u_ch_003',
                question: '《春》的作者是（  ）',
                options: ['A. 老舍', 'B. 朱自清', 'C. 郁达夫', 'D. 巴金'],
                answer: 'B',
                explanation: '【解析】《春》是朱自清的散文名篇，描绘了春天万物复苏的景象。朱自清（1898-1948），字佩弦，现代著名散文家、诗人。【知识点】文学常识，重要作家作品。',
                subject: '语文',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '文学常识'
            },
            {
                id: '7u_ch_004',
                question: '下列句子没有语病的一项是（  ）',
                options: ['A. 通过这次活动，使我受益匪浅。', 'B. 我们要善于发现并解决存在的问题。', 'C. 是否努力学习，是取得好成绩的关键。', 'D. 大约 50 个左右的学生参加了比赛。'],
                answer: 'B',
                explanation: '【解析】A 项缺少主语，删去"通过"或"使"；C 项两面对一面，删去"是否"；D 项"大约"和"左右"重复。B 项没有语病。【知识点】病句辨析，常见语病类型。',
                subject: '语文',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '病句辨析'
            },
            {
                id: '7u_ch_005',
                question: '下列句子中标点符号使用正确的一项是（  ）',
                options: ['A. "你好，"他笑着说："请进。"', 'B. 我不知道他今天为什么没有来？', 'C. 桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。', 'D. 这里的山啊、水啊、树啊，都让我感到亲切。'],
                answer: 'C',
                explanation: '【解析】A 项"说"在中间，后面用逗号；B 项不是疑问句，用句号；D 项句中停顿用逗号。C 项标点使用正确。【知识点】标点符号的正确使用。',
                subject: '语文',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '标点符号'
            }
        ].concat(Array(95).fill(null).map((_, i) => ({
            id: `7u_ch_${String(i+6).padStart(3, '0')}`,
            question: `【语文题库扩展题${i+6}】下列文学常识表述正确的是（  ）`,
            options: ['A. 鲁迅原名周树人，浙江绍兴人', 'B. 《论语》是孔子所著', 'C. 李白被称为"诗圣"', 'D. 《红楼梦》作者是曹雪芹和高鹗'],
            answer: 'A',
            explanation: '【解析】鲁迅原名周樟寿，后改名周树人，字豫才，浙江绍兴人。B 项《论语》是孔子弟子及再传弟子记录孔子及其弟子言行的书；C 项李白被称为"诗仙"，"诗圣"是杜甫；D 项《红楼梦》前 80 回作者是曹雪芹，后 40 回一般认为是高鹗所续。【知识点】文学常识。',
            subject: '语文',
            grade: 7,
            semester: 'upper',
            knowledgePoint: '文学常识'
        }))),
        
        '数学': [
            {
                id: '7u_m_001',
                question: '-3 的相反数是（  ）',
                options: ['A. 3', 'B. -3', 'C. 1/3', 'D. -1/3'],
                answer: 'A',
                explanation: '【解析】相反数的定义：只有符号不同的两个数互为相反数。-3 的相反数是 3。【知识点】有理数的相反数。',
                subject: '数学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '相反数'
            },
            {
                id: '7u_m_002',
                question: '下列计算正确的是（  ）',
                options: ['A. -2 + 3 = -5', 'B. -5 - 2 = -3', 'C. -3 × (-2) = 6', 'D. -8 ÷ 2 = 4'],
                answer: 'C',
                explanation: '【解析】A 项-a+b 当 b>a 时结果为正，-2+3=1；B 项-5-2=-7；C 项负负得正，-3×(-2)=6，正确；D 项-8÷2=-4。【知识点】有理数的四则运算。',
                subject: '数学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '有理数运算'
            },
            {
                id: '7u_m_003',
                question: '若|x| = 5，则 x 的值为（  ）',
                options: ['A. 5', 'B. -5', 'C. 5 或 -5', 'D. 0'],
                answer: 'C',
                explanation: '【解析】绝对值的几何意义：数轴上表示数 a的点与原点的距离。|x|=5表示 x 到原点的距离是 5，所以 x=5 或 x=-5。【知识点】绝对值的概念。',
                subject: '数学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '绝对值'
            },
            {
                id: '7u_m_004',
                question: '用科学记数法表示 308000，正确的是（  ）',
                options: ['A. 308×10³', 'B. 30.8×10⁴', 'C. 3.08×10⁵', 'D. 0.308×10⁶'],
                answer: 'C',
                explanation: '【解析】科学记数法的形式是 a×10ⁿ，其中 1≤|a|＜10。308000 = 3.08×100000 = 3.08×10⁵。【知识点】科学记数法。',
                subject: '数学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '科学记数法'
            },
            {
                id: '7u_m_005',
                question: '下列式子中，是一元一次方程的是（  ）',
                options: ['A. x + y = 5', 'B. x² - 3x = 2', 'C. 2x - 3 = 5', 'D. 1/x = 2'],
                answer: 'C',
                explanation: '【解析】一元一次方程的定义：只含有一个未知数，且未知数的次数是 1 的整式方程。A 有两个未知数；B 次数是 2；D 不是整式方程。C 符合定义。【知识点】一元一次方程的概念。',
                subject: '数学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '一元一次方程'
            }
        ].concat(Array(95).fill(null).map((_, i) => ({
            id: `7u_m_${String(i+6).padStart(3, '0')}`,
            question: `【数学题库扩展题${i+6}】若 2x - 3 = 7，则 x 的值为（  ）`,
            options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
            answer: 'C',
            explanation: '【解析】解方程：2x - 3 = 7，移项得 2x = 10，解得 x = 5。【知识点】一元一次方程的解法。',
            subject: '数学',
            grade: 7,
            semester: 'upper',
            knowledgePoint: '解方程'
        }))),
        
        '英语': [
            {
                id: '7u_e_001',
                question: '— ______ is your name?\n— My name is Tom.',
                options: ['A. What', 'B. Who', 'C. How', 'D. Where'],
                answer: 'A',
                explanation: '【解析】询问名字的句型：What\'s your name? What 用来询问事物或内容。Who 询问人（身份），How 询问方式，Where 询问地点。【知识点】特殊疑问词的用法。',
                subject: '英语',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '特殊疑问词'
            },
            {
                id: '7u_e_002',
                question: 'This is ______ English book.',
                options: ['A. a', 'B. an', 'C. the', 'D. /'],
                answer: 'B',
                explanation: '【解析】English 以元音音素开头，前面用不定冠词 an。a 用于辅音音素开头的词前；the 是定冠词表示特指。【知识点】冠词的用法。',
                subject: '英语',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '冠词'
            },
            {
                id: '7u_e_003',
                question: '— Is this your pen?\n— Yes, ______.',
                options: ['A. this is', 'B. it\'s', 'C. it is', 'D. that is'],
                answer: 'C',
                explanation: '【解析】一般疑问句的肯定回答：Yes, it is. 注意不能缩写为 it\'s。this/that 在回答时用 it 代替。【知识点】一般疑问句的回答。',
                subject: '英语',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '一般疑问句'
            },
            {
                id: '7u_e_004',
                question: 'My parents ______ teachers.',
                options: ['A. am', 'B. is', 'C. are', 'D. be'],
                answer: 'C',
                explanation: '【解析】parents 是复数，be 动词用 are。am 只与 I 连用；is 与单数主语连用；are 与复数主语连用。【知识点】be 动词的用法。',
                subject: '英语',
                grade: 7,
                semester: 'upper',
                knowledgePoint: 'be 动词'
            },
            {
                id: '7u_e_005',
                question: '— ______ do you go to school?\n— I go to school by bike.',
                options: ['A. What', 'B. When', 'C. How', 'D. Where'],
                answer: 'C',
                explanation: '【解析】根据答语"骑自行车"可知是询问交通方式，用 How。What 问事物，When 问时间，Where 问地点。【知识点】特殊疑问词辨析。',
                subject: '英语',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '特殊疑问句'
            }
        ].concat(Array(95).fill(null).map((_, i) => ({
            id: `7u_e_${String(i+6).padStart(3, '0')}`,
            question: `【英语题库扩展题${i+6}】— What color ______ your shoes?\n— They ______ black.`,
            options: ['A. is; are', 'B. are; are', 'C. are; is', 'D. is; is'],
            answer: 'B',
            explanation: '【解析】shoes 是复数，用 are；They 也是复数，用 are。【知识点】主谓一致。',
            subject: '英语',
            grade: 7,
            semester: 'upper',
            knowledgePoint: '主谓一致'
        }))),
        
        '科学': [
            {
                id: '7u_s_001',
                question: '下列物体中，属于生物的是（  ）',
                options: ['A. 机器人', 'B. 钟乳石', 'C. 珊瑚', 'D. 蘑菇'],
                answer: 'D',
                explanation: '【解析】生物的特征：需要营养、能呼吸、能排出废物、能对外界刺激作出反应、能生长和繁殖、有遗传和变异的特性。蘑菇是真菌，属于生物。机器人、钟乳石、珊瑚（珊瑚虫分泌的石灰质骨骼）都不是生物。【知识点】生物的基本特征。',
                subject: '科学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '生物的特征'
            },
            {
                id: '7u_s_002',
                question: '用显微镜观察时，如果光线过暗，应该调节（  ）',
                options: ['A. 粗准焦螺旋', 'B. 细准焦螺旋', 'C. 反光镜和遮光器', 'D. 转换器'],
                answer: 'C',
                explanation: '【解析】显微镜视野亮度的调节：光线强时用小光圈、平面镜；光线弱时用大光圈、凹面镜。反光镜和遮光器用于调节光线强弱。【知识点】显微镜的使用。',
                subject: '科学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '显微镜使用'
            },
            {
                id: '7u_s_003',
                question: '植物细胞与动物细胞共有的结构是（  ）',
                options: ['A. 细胞壁', 'B. 叶绿体', 'C. 液泡', 'D. 细胞膜'],
                answer: 'D',
                explanation: '【解析】动植物细胞共有的结构：细胞膜、细胞质、细胞核、线粒体。植物细胞特有的结构：细胞壁、叶绿体、液泡。【知识点】细胞结构。',
                subject: '科学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '细胞结构'
            },
            {
                id: '7u_s_004',
                question: '下列变化中，属于化学变化的是（  ）',
                options: ['A. 冰雪融化', 'B. 纸张燃烧', 'C. 酒精挥发', 'D. 矿石粉碎'],
                answer: 'B',
                explanation: '【解析】化学变化的本质特征是有新物质生成。纸张燃烧生成二氧化碳和水等新物质，属于化学变化。其他三项只是状态或形状改变，没有新物质生成，属于物理变化。【知识点】物理变化与化学变化。',
                subject: '科学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '物质的变化'
            },
            {
                id: '7u_s_005',
                question: '空气的成分中，体积分数最大的是（  ）',
                options: ['A. 氧气', 'B. 氮气', 'C. 二氧化碳', 'D. 稀有气体'],
                answer: 'B',
                explanation: '【解析】空气的成分按体积分数计算：氮气约占 78%，氧气约占 21%，稀有气体约占 0.94%，二氧化碳约占 0.03%，其他气体和杂质约占 0.03%。【知识点】空气的组成。',
                subject: '科学',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '空气组成'
            }
        ].concat(Array(95).fill(null).map((_, i) => ({
            id: `7u_s_${String(i+6).padStart(3, '0')}`,
            question: `【科学题库扩展题${i+6}】下列说法正确的是（  ）`,
            options: ['A. 分子是保持物质性质的最小粒子', 'B. 原子是化学变化中的最小粒子', 'C. 质子数相同的粒子一定属于同种元素', 'D. 最外层电子数相同的原子化学性质一定相似'],
            answer: 'B',
            explanation: '【解析】A 应为"保持物质化学性质"；B 正确；C 如 H₂O 和 Ne 质子数都是 10，但不是同种元素；D 如 He 和 Mg 最外层都是 2 个电子但性质不同。【知识点】分子、原子、元素。',
            subject: '科学',
            grade: 7,
            semester: 'upper',
            knowledgePoint: '物质结构'
        }))),
        
        '社会': [
            {
                id: '7u_so_001',
                question: '地球仪上，划分南北半球的纬线是（  ）',
                options: ['A. 赤道', 'B. 北回归线', 'C. 南回归线', 'D. 本初子午线'],
                answer: 'A',
                explanation: '【解析】赤道（0°纬线）是南北半球的分界线。北回归线是 23.5°N，南回归线是 23.5°S，本初子午线是 0°经线。【知识点】地球仪与经纬网。',
                subject: '社会',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '地球与地图'
            },
            {
                id: '7u_so_002',
                question: '世界上面积最大的大洲是（  ）',
                options: ['A. 非洲', 'B. 北美洲', 'C. 亚洲', 'D. 南极洲'],
                answer: 'C',
                explanation: '【解析】七大洲面积从大到小依次是：亚洲、非洲、北美洲、南美洲、南极洲、欧洲、大洋洲。亚洲面积约 4400 万平方千米。【知识点】大洲的分布。',
                subject: '社会',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '世界地理'
            },
            {
                id: '7u_so_003',
                question: '我国最早的人类是（  ）',
                options: ['A. 北京人', 'B. 元谋人', 'C. 山顶洞人', 'D. 蓝田人'],
                answer: 'B',
                explanation: '【解析】元谋人发现于云南元谋县，距今约 170 万年，是我国境内目前已确认的最早的古人类。北京人距今约 70-20 万年。【知识点】中国境内早期人类。',
                subject: '社会',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '中国历史'
            },
            {
                id: '7u_so_004',
                question: '公元前 221 年，统一六国建立秦朝的是（  ）',
                options: ['A. 禹', 'B. 周武王', 'C. 秦始皇', 'D. 刘邦'],
                answer: 'C',
                explanation: '【解析】公元前 221 年，秦王嬴政（秦始皇）灭掉东方六国，统一全国，建立秦朝，定都咸阳。这是我国历史上第一个统一的多民族的封建国家。【知识点】秦朝的建立。',
                subject: '社会',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '秦汉历史'
            },
            {
                id: '7u_so_005',
                question: '地图的基本要素不包括（  ）',
                options: ['A. 方向', 'B. 比例尺', 'C. 图例', 'D. 颜色'],
                answer: 'D',
                explanation: '【解析】地图的三要素是：方向、比例尺、图例和注记。颜色不是地图的基本要素，虽然在某些地图中会用到颜色来表示不同的含义。【知识点】地图基础知识。',
                subject: '社会',
                grade: 7,
                semester: 'upper',
                knowledgePoint: '地图知识'
            }
        ].concat(Array(95).fill(null).map((_, i) => ({
            id: `7u_so_${String(i+6).padStart(3, '0')}`,
            question: `【社会题库扩展题${i+6}】下列关于地球自转的说法正确的是（  ）`,
            options: ['A. 自转方向是自东向西', 'B. 自转周期是一年', 'C. 自转产生昼夜更替现象', 'D. 自转产生四季变化'],
            answer: 'C',
            explanation: '【解析】地球自转方向是自西向东；周期是一天（约 24 小时）；产生的地理现象有昼夜更替、时间差异等。四季变化是地球公转产生的。【知识点】地球运动。',
            subject: '社会',
            grade: 7,
            semester: 'upper',
            knowledgePoint: '地球运动'
        })))
    },
    
    // 七年级下册
    '7_lower': {
        '语文': Array(100).fill(null).map((_, i) => ({
            id: `7l_ch_${String(i+1).padStart(3, '0')}`,
            question: `【七年级下语文${i+1}】下列句子中，没有使用修辞手法的一项是（  ）`,
            options: ['A. 盼望着，盼望着，东风来了，春天的脚步近了。', 'B. 天空飘着朵朵白云，像一群群绵羊。', 'C. 今天天气很好。', 'D. 鸟儿在枝头欢快地歌唱。'],
            answer: 'C',
            explanation: '【解析】A 项用了反复和拟人；B 项用了比喻；D 项用了拟人。C 项是陈述句，没有使用修辞手法。【知识点】修辞手法辨析。',
            subject: '语文',
            grade: 7,
            semester: 'lower',
            knowledgePoint: '修辞手法'
        })),
        '数学': Array(100).fill(null).map((_, i) => ({
            id: `7l_m_${String(i+1).padStart(3, '0')}`,
            question: `【七年级下数学${i+1}】在平面直角坐标系中，点 P(3, -2) 位于（  ）`,
            options: ['A. 第一象限', 'B. 第二象限', 'C. 第三象限', 'D. 第四象限'],
            answer: 'D',
            explanation: '【解析】平面直角坐标系中，第四象限的点横坐标为正，纵坐标为负。P(3, -2) 中 x=3>0，y=-2<0，所以在第四象限。【知识点】平面直角坐标系。',
            subject: '数学',
            grade: 7,
            semester: 'lower',
            knowledgePoint: '平面直角坐标系'
        })),
        '英语': Array(100).fill(null).map((_, i) => ({
            id: `7l_e_${String(i+1).padStart(3, '0')}`,
            question: `【七年级下英语${i+1}】— ______ does your father go to work?\n— He drives to work.`,
            options: ['A. What', 'B. How', 'C. When', 'D. Where'],
            answer: 'B',
            explanation: '【解析】根据答语"他开车去上班"可知是询问交通方式，用 How。【知识点】特殊疑问句。',
            subject: '英语',
            grade: 7,
            semester: 'lower',
            knowledgePoint: '特殊疑问句'
        })),
        '科学': Array(100).fill(null).map((_, i) => ({
            id: `7l_s_${String(i+1).padStart(3, '0')}`,
            question: `【七年级下科学${i+1}】下列关于力的说法正确的是（  ）`,
            options: ['A. 力可以离开物体而存在', 'B. 只有一个物体也能产生力', 'C. 力的作用是相互的', 'D. 不接触的物体之间不会有力的作用'],
            answer: 'C',
            explanation: '【解析】力是物体对物体的作用，不能离开物体而存在；力的作用是相互的；不接触的物体之间也可能有力的作用，如磁力、重力。【知识点】力的基本概念。',
            subject: '科学',
            grade: 7,
            semester: 'lower',
            knowledgePoint: '力的概念'
        })),
        '社会': Array(100).fill(null).map((_, i) => ({
            id: `7l_so_${String(i+1).padStart(3, '0')}`,
            question: `【七年级下社会${i+1}】隋朝大运河的中心是（  ）`,
            options: ['A. 长安', 'B. 洛阳', 'C. 开封', 'D. 北京'],
            answer: 'B',
            explanation: '【解析】隋朝大运河以洛阳为中心，北达涿郡（今北京），南至余杭（今杭州）。【知识点】隋朝历史。',
            subject: '社会',
            grade: 7,
            semester: 'lower',
            knowledgePoint: '隋唐历史'
        }))
    },
    
    // 八年级上册
    '8_upper': {
        '语文': Array(100).fill(null).map((_, i) => ({
            id: `8u_ch_${String(i+1).padStart(3, '0')}`,
            question: `【八年级上语文${i+1}】下列词语中加点字注音完全正确的一项是（  ）`,
            options: ['A. 溃退（kuì）  仲裁（zhòng）  翘首（qiáo）', 'B. 颁发（bān）  遗嘱（zhǔ）  履行（lǚ）', 'C. 轻盈（yíng）  悄然（qiāo）  屏息（bǐng）', 'D. 由衷（zhōng）  娴熟（xián）  惊心动魄（pò）'],
            answer: 'D',
            explanation: '【解析】A 项"仲"应读 zhòng；B 项"履"应读 lǚ；C 项"悄"在"悄然"中应读 qiǎo。D 项全部正确。【知识点】字音辨析。',
            subject: '语文',
            grade: 8,
            semester: 'upper',
            knowledgePoint: '字音辨析'
        })),
        '数学': Array(100).fill(null).map((_, i) => ({
            id: `8u_m_${String(i+1).padStart(3, '0')}`,
            question: `【八年级上数学${i+1}】下列长度不能组成三角形的是（  ）`,
            options: ['A. 3cm, 4cm, 5cm', 'B. 5cm, 6cm, 7cm', 'C. 2cm, 3cm, 6cm', 'D. 4cm, 5cm, 6cm'],
            answer: 'C',
            explanation: '【解析】三角形三边关系：任意两边之和大于第三边。C 项 2+3=5<6，不能组成三角形。【知识点】三角形三边关系。',
            subject: '数学',
            grade: 8,
            semester: 'upper',
            knowledgePoint: '三角形'
        })),
        '英语': Array(100).fill(null).map((_, i) => ({
            id: `8u_e_${String(i+1).padStart(3, '0')}`,
            question: `【八年级上英语${i+1}】— Have you ever been to Beijing?\n— Yes, I ______ there last year.`,
            options: ['A. go', 'B. went', 'C. have gone', 'D. have been'],
            answer: 'B',
            explanation: '【解析】last year 是明确的过去时间，用一般过去时。【知识点】时态辨析。',
            subject: '英语',
            grade: 8,
            semester: 'upper',
            knowledgePoint: '过去时'
        })),
        '科学': Array(100).fill(null).map((_, i) => ({
            id: `8u_s_${String(i+1).padStart(3, '0')}`,
            question: `【八年级上科学${i+1}】关于电流的说法正确的是（  ）`,
            options: ['A. 电流的方向就是电子定向移动的方向', 'B. 只有正电荷定向移动才能形成电流', 'C. 金属导体中电流方向与自由电子定向移动方向相反', 'D. 电路中只要有电源就有电流'],
            answer: 'C',
            explanation: '【解析】物理学规定正电荷定向移动的方向为电流方向，金属导体中是自由电子（负电荷）定向移动，所以电流方向与电子移动方向相反。【知识点】电流的概念。',
            subject: '科学',
            grade: 8,
            semester: 'upper',
            knowledgePoint: '电路与电流'
        })),
        '社会': Array(100).fill(null).map((_, i) => ({
            id: `8u_so_${String(i+1).padStart(3, '0')}`,
            question: `【八年级上社会${i+1}】中国近代史的开端是（  ）`,
            options: ['A. 1840 年鸦片战争', 'B. 1856 年第二次鸦片战争', 'C. 1894 年甲午中日战争', 'D. 1900 年八国联军侵华'],
            answer: 'A',
            explanation: '【解析】1840 年鸦片战争是中国近代史的开端，中国开始沦为半殖民地半封建社会。【知识点】中国近代史。',
            subject: '社会',
            grade: 8,
            semester: 'upper',
            knowledgePoint: '近代史'
        }))
    },
    
    // 八年级下册
    '8_lower': {
        '语文': Array(100).fill(null).map((_, i) => ({
            id: `8l_ch_${String(i+1).padStart(3, '0')}`,
            question: `【八年级下语文${i+1}】下列句子没有语病的一项是（  ）`,
            options: ['A. 能否用好网络平台，是提高教学质量的关键。', 'B. 随着智能手机的普及，使人们的生活发生了很大变化。', 'C. 我们要养成爱读书、读好书的良好习惯。', 'D. 通过这次学习，让我明白了很多道理。'],
            answer: 'C',
            explanation: '【解析】A 项两面对一面；B 项缺少主语；D 项缺少主语。C 项正确。【知识点】病句辨析。',
            subject: '语文',
            grade: 8,
            semester: 'lower',
            knowledgePoint: '病句辨析'
        })),
        '数学': Array(100).fill(null).map((_, i) => ({
            id: `8l_m_${String(i+1).padStart(3, '0')}`,
            question: `【八年级下数学${i+1}】下列函数中，是一次函数的是（  ）`,
            options: ['A. y = 2x + 1', 'B. y = x²', 'C. y = 1/x', 'D. y = √x'],
            answer: 'A',
            explanation: '【解析】一次函数的形式是 y = kx + b（k≠0）。A 符合；B 是二次函数；C 是反比例函数；D 不是整式函数。【知识点】一次函数。',
            subject: '数学',
            grade: 8,
            semester: 'lower',
            knowledgePoint: '一次函数'
        })),
        '英语': Array(100).fill(null).map((_, i) => ({
            id: `8l_e_${String(i+1).padStart(3, '0')}`,
            question: `【八年级下英语${i+1}】The book ______ I bought yesterday is interesting.`,
            options: ['A. who', 'B. which', 'C. whom', 'D. whose'],
            answer: 'B',
            explanation: '【解析】定语从句中，先行词是物（book）用 which 或 that 引导。who/whom用于人，whose 表示所属关系。【知识点】定语从句。',
            subject: '英语',
            grade: 8,
            semester: 'lower',
            knowledgePoint: '定语从句'
        })),
        '科学': Array(100).fill(null).map((_, i) => ({
            id: `8l_s_${String(i+1).padStart(3, '0')}`,
            question: `【八年级下科学${i+1}】下列属于氧化反应但不属于化合反应的是（  ）`,
            options: ['A. 碳 + 氧气→二氧化碳', 'B. 蜡烛 + 氧气→二氧化碳 + 水', 'C. 镁 + 氧气→氧化镁', 'D. 磷 + 氧气→五氧化二磷'],
            answer: 'B',
            explanation: '【解析】化合反应是"多变一"。B 项是氧化反应但生成物有两种，不是化合反应。其他三项既是氧化反应也是化合反应。【知识点】化学反应类型。',
            subject: '科学',
            grade: 8,
            semester: 'lower',
            knowledgePoint: '化学反应'
        })),
        '社会': Array(100).fill(null).map((_, i) => ({
            id: `8l_so_${String(i+1).padStart(3, '0')}`,
            question: `【八年级下社会${i+1}】新文化运动的主要阵地是（  ）`,
            options: ['A. 《时务报》', 'B. 《国闻报》', 'C. 《新青年》', 'D. 《民报》'],
            answer: 'C',
            explanation: '【解析】1915 年陈独秀在上海创办《青年杂志》（后改名《新青年》），标志着新文化运动的开始。【知识点】新文化运动。',
            subject: '社会',
            grade: 8,
            semester: 'lower',
            knowledgePoint: '近代思想文化'
        }))
    },
    
    // 九年级上册
    '9_upper': {
        '语文': Array(100).fill(null).map((_, i) => ({
            id: `9u_ch_${String(i+1).padStart(3, '0')}`,
            question: `【九年级上语文${i+1}】下列文学常识表述不正确的一项是（  ）`,
            options: ['A. 《沁园春·雪》的作者是毛泽东', 'B. 《我爱这土地》的作者是艾青', 'C. 《乡愁》的作者是余光中', 'D. 《你是人间的四月天》的作者是冰心'],
            answer: 'D',
            explanation: '【解析】《你是人间的四月天》的作者是林徽因，不是冰心。【知识点】文学常识。',
            subject: '语文',
            grade: 9,
            semester: 'upper',
            knowledgePoint: '文学常识'
        })),
        '数学': Array(100).fill(null).map((_, i) => ({
            id: `9u_m_${String(i+1).padStart(3, '0')}`,
            question: `【九年级上数学${i+1}】一元二次方程 x² - 4x + 3 = 0 的根是（  ）`,
            options: ['A. x₁=1, x₂=3', 'B. x₁=-1, x₂=-3', 'C. x₁=1, x₂=-3', 'D. x₁=-1, x₂=3'],
            answer: 'A',
            explanation: '【解析】因式分解：(x-1)(x-3)=0，解得 x₁=1, x₂=3。也可用求根公式验证。【知识点】一元二次方程的解法。',
            subject: '数学',
            grade: 9,
            semester: 'upper',
            knowledgePoint: '一元二次方程'
        })),
        '英语': Array(100).fill(null).map((_, i) => ({
            id: `9u_e_${String(i+1).padStart(3, '0')}`,
            question: `【九年级上英语${i+1}】— Must I finish the work today?\n— No, you ______.`,
            options: ['A. mustn\'t', 'B. needn\'t', 'C. can\'t', 'D. shouldn\'t'],
            answer: 'B',
            explanation: '【解析】以 Must 开头的一般疑问句，否定回答用 needn\'t，表示"不必"。mustn\'t表示"禁止"。【知识点】情态动词。',
            subject: '英语',
            grade: 9,
            semester: 'upper',
            knowledgePoint: '情态动词'
        })),
        '科学': Array(100).fill(null).map((_, i) => ({
            id: `9u_s_${String(i+1).padStart(3, '0')}`,
            question: `【九年级上科学${i+1}】下列物质属于有机物的是（  ）`,
            options: ['A. 二氧化碳', 'B. 碳酸钙', 'C. 甲烷', 'D. 一氧化碳'],
            answer: 'C',
            explanation: '【解析】有机物是含碳的化合物，但 CO、CO₂、碳酸盐等除外。甲烷（CH₄）是最简单的有机物。【知识点】有机物概念。',
            subject: '科学',
            grade: 9,
            semester: 'upper',
            knowledgePoint: '有机化学'
        })),
        '社会': Array(100).fill(null).map((_, i) => ({
            id: `9u_so_${String(i+1).padStart(3, '0')}`,
            question: `【九年级上社会${i+1}】第一次世界大战的导火线是（  ）`,
            options: ['A. 三国同盟形成', 'B. 三国协约形成', 'C. 萨拉热窝事件', 'D. 德国闪击波兰'],
            answer: 'C',
            explanation: '【解析】1914 年 6 月的萨拉热窝事件是一战的导火线。A、B 是一战前的两大军事集团；D 是二战的开始。【知识点】第一次世界大战。',
            subject: '社会',
            grade: 9,
            semester: 'upper',
            knowledgePoint: '世界大战'
        }))
    },
    
    // 九年级下册
    '9_lower': {
        '语文': Array(100).fill(null).map((_, i) => ({
            id: `9l_ch_${String(i+1).padStart(3, '0')}`,
            question: `【九年级下语文${i+1}】下列句子中加点成语使用正确的一项是（  ）`,
            options: ['A. 他做事总是那么认真，真是处心积虑。', 'B. 这部小说情节曲折，引人入胜。', 'C. 同学们都在考前复习，他也随波逐流。', 'D. 这个问题很简单，他不求甚解就回答了。'],
            answer: 'B',
            explanation: '【解析】A 项"处心积虑"是贬义词；C 项"随波逐流"指没有主见，用词不当；D 项"不求甚解"指学习态度不认真，用词不当。B 项"引人入胜"形容情节吸引人，使用正确。【知识点】成语运用。',
            subject: '语文',
            grade: 9,
            semester: 'lower',
            knowledgePoint: '成语运用'
        })),
        '数学': Array(100).fill(null).map((_, i) => ({
            id: `9l_m_${String(i+1).padStart(3, '0')}`,
            question: `【九年级下数学${i+1}】已知二次函数 y = ax² + bx + c 的图象开口向下，则（  ）`,
            options: ['A. a > 0', 'B. a < 0', 'C. b > 0', 'D. c > 0'],
            answer: 'B',
            explanation: '【解析】二次函数 y = ax² + bx + c 中，a 决定开口方向：a>0 开口向上，a<0 开口向下。【知识点】二次函数图像性质。',
            subject: '数学',
            grade: 9,
            semester: 'lower',
            knowledgePoint: '二次函数'
        })),
        '英语': Array(100).fill(null).map((_, i) => ({
            id: `9l_e_${String(i+1).padStart(3, '0')}`,
            question: `【九年级下英语${i+1}】I will call you as soon as I ______ home.`,
            options: ['A. get', 'B. will get', 'C. got', 'D. have got'],
            answer: 'A',
            explanation: '【解析】as soon as 引导的时间状语从句中，主句用一般将来时，从句用一般现在时表示将来。【知识点】时态一致。',
            subject: '英语',
            grade: 9,
            semester: 'lower',
            knowledgePoint: '时态'
        })),
        '科学': Array(100).fill(null).map((_, i) => ({
            id: `9l_s_${String(i+1).padStart(3, '0')}`,
            question: `【九年级下科学${i+1}】下列关于生态系统能量流动的说法正确的是（  ）`,
            options: ['A. 能量可以循环利用', 'B. 能量流动是单向的、逐级递减的', 'C. 食物链中营养级越高，获得能量越多', 'D. 生产者固定的能量全部流向消费者'],
            answer: 'B',
            explanation: '【解析】生态系统能量流动特点：单向流动、逐级递减，传递效率约 10%-20%。能量不能循环，物质可以循环。【知识点】生态系统。',
            subject: '科学',
            grade: 9,
            semester: 'lower',
            knowledgePoint: '生态系统'
        })),
        '社会': Array(100).fill(null).map((_, i) => ({
            id: `9l_so_${String(i+1).padStart(3, '0')}`,
            question: `【九年级下社会${i+1}】世界两极格局结束的标志是（  ）`,
            options: ['A. 东欧剧变', 'B. 苏联解体', 'C. 华约解散', 'D. 德国统一'],
            answer: 'B',
            explanation: '【解析】1991 年苏联解体标志着两极格局的结束，冷战结束。【知识点】冷战格局。',
            subject: '社会',
            grade: 9,
            semester: 'lower',
            knowledgePoint: '世界格局'
        }))
    }
};

// 科目配置
const SUBJECTS = ['语文', '数学', '英语', '科学', '社会'];
const GRADES = [
    { grade: 7, name: '七年级', semesters: ['upper', 'lower'] },
    { grade: 8, name: '八年级', semesters: ['upper', 'lower'] },
    { grade: 9, name: '九年级', semesters: ['upper', 'lower'] }
];

// 生成完整题库（实际使用时应该填充真实题目）
function initializeQuestionBank() {
    // 题库已在上面定义
    return QUESTION_BANK;
}

// 按年级和学期获取某科目的随机题目
function getRandomQuestions(grade, semester, subject, count) {
    const key = `${grade}_${semester}`;
    const subjectQuestions = QUESTION_BANK[key]?.[subject] || [];
    
    // 洗牌算法
    const shuffled = [...subjectQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// 生成每日练习题目（5 科各 10 题，混合）
function generateDailyQuestions(grade, semester) {
    const dailyQuestions = [];
    
    SUBJECTS.forEach(subject => {
        const subjectQuestions = getRandomQuestions(grade, semester, subject, 10);
        dailyQuestions.push(...subjectQuestions);
    });
    
    // 混合打乱
    return dailyQuestions.sort(() => Math.random() - 0.5);
}