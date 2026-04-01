// 浙江省初中知识点题库数据 - 2026 年最新版教材（七年级上下册）
// 高质量独立题目，所有题目内容互不重复

// ==================== 七年级上册 ====================

const CHINESE_7U = [
  { id: '7u_c01', question: '下列加点字注音完全正确的一项是（  ）', options: ['A. 酝酿 (niàng) 黄晕 (yūn) 嘹亮 (liáo)', 'B. 贮蓄 (zhù) 澄清 (chéng) 着落 (zhuó)', 'C. 粗犷 (kuàng) 静谧 (mì) 高邈 (miǎo)', 'D. 莅临 (lì) 吝啬 (lìn) 池畦 (wā)'], answer: 'B', explanation: 'A 项"晕"应读 yùn；C 项"犷"应读 guǎng；D 项"畦"应读 qí。', knowledgePoint: '字音', subject: '语文' },
  { id: '7u_c02', question: '下列词语书写完全正确的一项是（  ）', options: ['A. 朗润 建壮 喉咙', 'B. 窠巢 宛转 洪亮', 'C. 烘托 静默 风筝', 'D. 晕酿 稀疏 蓑衣'], answer: 'C', explanation: 'A 项"健壮"；B 项"婉转"；D 项"酝酿"。', knowledgePoint: '字形', subject: '语文' },
  { id: '7u_c03', question: '《春》的作者是（  ）', options: ['A. 老舍', 'B. 朱自清', 'C. 郁达夫', 'D. 巴金'], answer: 'B', explanation: '朱自清是现代著名散文家，《春》是其代表作。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c04', question: '下列句子没有语病的一项是（  ）', options: ['A. 通过这次活动，使我受益匪浅。', 'B. 我们要善于发现并解决存在的问题。', 'C. 是否努力学习，是取得好成绩的关键。', 'D. 大约 50 个左右的学生参加了比赛。'], answer: 'B', explanation: 'A 缺主语；C 两面对一面；D 重复。', knowledgePoint: '病句', subject: '语文' },
  { id: '7u_c05', question: '"吹面不寒杨柳风"出自（  ）', options: ['A. 杜甫', 'B. 李白', 'C. 志南和尚', 'D. 苏轼'], answer: 'C', explanation: '南宋志南和尚《绝句》。', knowledgePoint: '古诗词', subject: '语文' },
  { id: '7u_c06', question: '老舍原名（  ）', options: ['A. 周树人', 'B. 舒庆春', 'C. 沈从文', 'D. 茅盾'], answer: 'B', explanation: '老舍原名舒庆春，字舍予。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c07', question: '《从百草园到三味书屋》选自（  ）', options: ['A. 《呐喊》', 'B. 《彷徨》', 'C. 《朝花夕拾》', 'D. 《野草》'], answer: 'C', explanation: '鲁迅散文集《朝花夕拾》。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c08', question: '"学而时习之，不亦说乎"中"说"的意思是（  ）', options: ['A. 说话', 'B. 开心、愉快', 'C. 解释', 'D. 谈论'], answer: 'B', explanation: '"说"通"悦"，愉快。', knowledgePoint: '文言词汇', subject: '语文' },
  { id: '7u_c09', question: '下列句子属于比喻句的是（  ）', options: ['A. 他长得像他爸爸。', 'B. 月亮就像银盘。', 'C. 小明和我一样高。', 'D. 这个苹果像那个一样红。'], answer: 'B', explanation: 'B 项有本体、喻体和相似点。', knowledgePoint: '修辞', subject: '语文' },
  { id: '7u_c10', question: '"一年之计在于春"的含义是（  ）', options: ['A. 春天最美', 'B. 春天是开始', 'C. 早晨重要', 'D. 要早做打算'], answer: 'D', explanation: '凡事要早做打算，开头抓紧。', knowledgePoint: '俗语', subject: '语文' },
  { id: '7u_c11', question: '元曲四大家不包括（  ）', options: ['A. 关汉卿', 'B. 马致远', 'C. 王实甫', 'D. 郑光祖'], answer: 'C', explanation: '王实甫不在四大家之列。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c12', question: '"不识庐山真面目"的作者是（  ）', options: ['A. 李白', 'B. 杜甫', 'C. 苏轼', 'D. 王安石'], answer: 'C', explanation: '苏轼《题西林壁》。', knowledgePoint: '古诗词', subject: '语文' },
  { id: '7u_c13', question: '下列成语使用正确的是（  ）', options: ['A. 小明处心积虑地帮助同学。', 'B. 他认真学习，终于取得了可喜的成绩。', 'C. 我们要一丝不苟地遵守纪律。', 'D. 这座城市美轮美奂。'], answer: 'B', explanation: 'A 贬义不当；C 搭配不当；D 对象不当。', knowledgePoint: '成语', subject: '语文' },
  { id: '7u_c14', question: '"但愿人长久，千里共婵娟"中"婵娟"指（  ）', options: ['A. 美人', 'B. 月光', 'C. 美女', 'D. 牡丹'], answer: 'B', explanation: '"婵娟"指美好的月光。', knowledgePoint: '诗词', subject: '语文' },
  { id: '7u_c15', question: '"敏而好学，不耻下问"出自（  ）', options: ['A. 《论语》', 'B. 《孟子》', 'C. 《大学》', 'D. 《中庸》'], answer: 'A', explanation: '《论语·公冶长》。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c16', question: '下列句子中标点使用正确的是（  ）', options: ['A. "你好，"他笑着说："请进。"', 'B. 我不知道他为什么没有来？', 'C. 桃树、杏树、梨树，你不让我，我不让你。', 'D. 这里的山啊、水啊，都让我亲切。'], answer: 'C', explanation: 'A 冒号改逗号；B 问号改句号；D 顿号改逗号。', knowledgePoint: '标点', subject: '语文' },
  { id: '7u_c17', question: '鲁迅的杂文集不包括（  ）', options: ['A. 《热风》', 'B. 《坟》', 'C. 《朝花夕拾》', 'D. 《且介亭杂文》'], answer: 'C', explanation: '《朝花夕拾》是散文集。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c18', question: '"海内存知己，天涯若比邻"的作者是（  ）', options: ['A. 王勃', 'B. 杨炯', 'C. 卢照邻', 'D. 骆宾王'], answer: 'A', explanation: '王勃《送杜少府之任蜀州》。', knowledgePoint: '古诗词', subject: '语文' },
  { id: '7u_c19', question: '"三人行，必有我师焉"中"焉"的意思是（  ）', options: ['A. 于此，在其中', 'B. 怎么', 'C. 哪里', 'D. 啊'], answer: 'A', explanation: '兼词，相当于"于之"。', knowledgePoint: '文言词汇', subject: '语文' },
  { id: '7u_c20', question: '"春风又绿江南岸"中"绿"的词性是（  ）', options: ['A. 名词', 'B. 形容词', 'C. 动词', 'D. 副词'], answer: 'C', explanation: '使动用法，吹绿。', knowledgePoint: '词类活用', subject: '语文' },
  { id: '7u_c21', question: '"遥知兄弟登高处，遍插茱萸少一人"写的是（  ）', options: ['A. 春节', 'B. 清明', 'C. 端午', 'D. 重阳'], answer: 'D', explanation: '王维《九月九日忆山东兄弟》，重阳节。', knowledgePoint: '诗词', subject: '语文' },
  { id: '7u_c22', question: '下列不属于四大名著的是（  ）', options: ['A. 《红楼梦》', 'B. 《三国演义》', 'C. 《聊斋志异》', 'D. 《西游记》'], answer: 'C', explanation: '四大名著不含《聊斋志异》。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c23', question: '"亡羊补牢"的"亡"意思是（  ）', options: ['A. 死亡', 'B. 丢失', 'C. 逃跑', 'D. 灭亡'], answer: 'B', explanation: '"亡"指丢失，羊丢失了才修补羊圈。', knowledgePoint: '成语', subject: '语文' },
  { id: '7u_c24', question: '下列句子朗读节奏正确的是（  ）', options: ['A. 学/而时习之', 'B. 学而/时习之', 'C. 学而时/习之', 'D. 学而时习/之'], answer: 'B', explanation: '按意义划分，"学而"与"时习之"。', knowledgePoint: '文言断句', subject: '语文' },
  { id: '7u_c25', question: '"江山代有才人出，各领风骚数百年"作者是（  ）', options: ['A. 李白', 'B. 杜甫', 'C. 赵翼', 'D. 龚自珍'], answer: 'C', explanation: '清代赵翼《论诗》。', knowledgePoint: '古诗词', subject: '语文' },
  { id: '7u_c26', question: '下列全是谦辞的一组是（  ）', options: ['A. 令尊、令堂、令郎', 'B. 家父、舍弟、拙见', 'C. 贵姓、贵校、贵地', 'D. 惠顾、惠存、惠赠'], answer: 'B', explanation: 'A、C、D 都是敬辞。', knowledgePoint: '敬谦辞', subject: '语文' },
  { id: '7u_c27', question: '"业精于勤，荒于嬉"的作者（  ）', options: ['A. 韩愈', 'B. 柳宗元', 'C. 欧阳修', 'D. 苏轼'], answer: 'A', explanation: '韩愈《进学解》。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c28', question: '下列复句是转折关系的是（  ）', options: ['A. 因为下雨，所以不去。', 'B. 虽然困难，但是坚持。', 'C. 如果下雨，就不去。', 'D. 既聪明又勤奋。'], answer: 'B', explanation: '"虽然...但是..."表转折。', knowledgePoint: '复句', subject: '语文' },
  { id: '7u_c29', question: '"少年强则国强"出自（  ）', options: ['A. 《少年中国说》', 'B. 《天演论》', 'C. 《变法通议》', 'D. 《仁学》'], answer: 'A', explanation: '梁启超《少年中国说》。', knowledgePoint: '文学常识', subject: '语文' },
  { id: '7u_c30', question: '下列主谓短语是（  ）', options: ['A. 认真学习', 'B. 老师讲课', 'C. 美丽的校园', 'D. 在课堂上'], answer: 'B', explanation: '"老师"主语，"讲课"谓语。', knowledgePoint: '短语', subject: '语文' }
];

const MATH_7U = [
  { id: '7u_m01', question: '-3 的相反数是（  ）', options: ['A. 3', 'B. -3', 'C. 1/3', 'D. -1/3'], answer: 'A', explanation: '相反数定义：符号不同的两数。', knowledgePoint: '相反数', subject: '数学' },
  { id: '7u_m02', question: '绝对值等于 5 的数是（  ）', options: ['A. 5', 'B. -5', 'C. ±5', 'D. 25'], answer: 'C', explanation: '|x|=5，x=5 或 -5。', knowledgePoint: '绝对值', subject: '数学' },
  { id: '7u_m03', question: '下列计算正确的是（  ）', options: ['A. -2+3=-5', 'B. -5-2=-3', 'C. -3×(-2)=6', 'D. -8÷2=4'], answer: 'C', explanation: '负负得正。', knowledgePoint: '有理数运算', subject: '数学' },
  { id: '7u_m04', question: '科学记数法表示 308000 正确的是（  ）', options: ['A. 308×10³', 'B. 30.8×10⁴', 'C. 3.08×10⁵', 'D. 0.308×10⁶'], answer: 'C', explanation: '1≤|a|<10。', knowledgePoint: '科学记数法', subject: '数学' },
  { id: '7u_m05', question: '一元一次方程的是（  ）', options: ['A. x+y=5', 'B. x²-3x=2', 'C. 2x-3=5', 'D. 1/x=2'], answer: 'C', explanation: '一元一次：一个未知数，次数为 1。', knowledgePoint: '一元一次方程', subject: '数学' },
  { id: '7u_m06', question: '2x-1=3 的解是（  ）', options: ['A. x=1', 'B. x=2', 'C. x=-1', 'D. x=-2'], answer: 'B', explanation: '移项得 2x=4，x=2。', knowledgePoint: '解方程', subject: '数学' },
  { id: '7u_m07', question: '若 a<b，则成立的是（  ）', options: ['A. a+2>b+2', 'B. a-3>b-3', 'C. -2a>-2b', 'D. a/2>b/2'], answer: 'C', explanation: '乘负数不等号方向改变。', knowledgePoint: '不等式', subject: '数学' },
  { id: '7u_m08', question: '数轴上与原点距离为 4 的点表示（  ）', options: ['A. 4', 'B. -4', 'C. ±4', 'D. 8'], answer: 'C', explanation: '原点距离为 4 的点有 4 和 -4。', knowledgePoint: '数轴', subject: '数学' },
  { id: '7u_m09', question: '多项式 3x²-2x+5 的次数是（  ）', options: ['A. 1', 'B. 2', 'C. 3', 'D. 5'], answer: 'B', explanation: '最高次项 x²的次数为 2。', knowledgePoint: '多项式', subject: '数学' },
  { id: '7u_m10', question: '3a+2a=（  ）', options: ['A. 5a', 'B. 5a²', 'C. 6a', 'D. 6a²'], answer: 'A', explanation: '同类项系数相加。', knowledgePoint: '合并同类项', subject: '数学' },
  { id: '7u_m11', question: '计算 (-2)³=（  ）', options: ['A. -6', 'B. -8', 'C. 6', 'D. 8'], answer: 'B', explanation: '(-2)³=-8。', knowledgePoint: '乘方', subject: '数学' },
  { id: '7u_m12', question: '最大数的是（  ）', options: ['A. -2', 'B. 0', 'C. -5', 'D. 1'], answer: 'D', explanation: '正数>0>负数。', knowledgePoint: '有理数比较', subject: '数学' },
  { id: '7u_m13', question: '单项式 -3x²y 的系数是（  ）', options: ['A. 3', 'B. -3', 'C. 2', 'D. 1'], answer: 'B', explanation: '系数包括符号。', knowledgePoint: '单项式', subject: '数学' },
  { id: '7u_m14', question: '同类项的是（  ）', options: ['A. 3x 与 3y', 'B. 2a²b 与 2ab²', 'C. -5xy 与 3yx', 'D. x²与 x³'], answer: 'C', explanation: '字母相同，指数相同，顺序无关。', knowledgePoint: '同类项', subject: '数学' },
  { id: '7u_m15', question: '去括号：3x-(2y-x)=（  ）', options: ['A. 3x-2y-x', 'B. 3x-2y+x', 'C. 3x-2y', 'D. 2x-2y'], answer: 'B', explanation: '括号前负号，去括号变号。', knowledgePoint: '去括号', subject: '数学' },
  { id: '7u_m16', question: '倒数是它本身的数是（  ）', options: ['A. 1', 'B. -1', 'C. 1 或 -1', 'D. 0'], answer: 'C', explanation: '1 和 -1 的倒数是本身，0 无倒数。', knowledgePoint: '倒数', subject: '数学' },
  { id: '7u_m17', question: '3x+2=8 的解是（  ）', options: ['A. x=1', 'B. x=2', 'C. x=3', 'D. x=4'], answer: 'B', explanation: '3x=6，x=2。', knowledgePoint: '解方程', subject: '数学' },
  { id: '7u_m18', question: '近似数 3.20 精确到（  ）', options: ['A. 个位', 'B. 十分位', 'C. 百分位', 'D. 千分位'], answer: 'C', explanation: '最后一位 0 在百分位。', knowledgePoint: '近似数', subject: '数学' },
  { id: '7u_m19', question: '若|a|=3，则 a=（  ）', options: ['A. 3', 'B. -3', 'C. 0', 'D. 3 或 -3'], answer: 'D', explanation: '绝对值为 3 的数有 3 和 -3。', knowledgePoint: '绝对值', subject: '数学' },
  { id: '7u_m20', question: '-7+4=（  ）', options: ['A. -11', 'B. -3', 'C. 3', 'D. 11'], answer: 'B', explanation: '异号相加，取绝对值大的符号。', knowledgePoint: '有理数加法', subject: '数学' },
  { id: '7u_m21', question: '5 的相反数与 -3 的和是（  ）', options: ['A. 8', 'B. -8', 'C. 2', 'D. -2'], answer: 'B', explanation: '-5+(-3)=-8。', knowledgePoint: '有理数运算', subject: '数学' },
  { id: '7u_m22', question: '数轴上 -2 右边的数是（  ）', options: ['A. -3', 'B. 0', 'C. -1', 'D. 都可以'], answer: 'C', explanation: '右边数大于左边，-1>-2。', knowledgePoint: '数轴', subject: '数学' },
  { id: '7u_m23', question: '0.25 的倒数是（  ）', options: ['A. 0.25', 'B. 2.5', 'C. 4', 'D. 1/4'], answer: 'C', explanation: '0.25=1/4，倒数是 4。', knowledgePoint: '倒数', subject: '数学' },
  { id: '7u_m24', question: '下列是正数的是（  ）', options: ['A. -5', 'B. 0', 'C. -3.2', 'D. 2.1'], answer: 'D', explanation: '大于 0 的数是正数。', knowledgePoint: '有理数分类', subject: '数学' },
  { id: '7u_m25', question: '-2 与 2 之间的整数有（  ）个', options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], answer: 'C', explanation: '-1, 0, 1 共 3 个。', knowledgePoint: '整数', subject: '数学' },
  { id: '7u_m26', question: '3a-2a=（  ）', options: ['A. 1', 'B. a', 'C. 5a', 'D. 6a²'], answer: 'B', explanation: '系数相减：3-2=1。', knowledgePoint: '合并同类项', subject: '数学' },
  { id: '7u_m27', question: 'x=2 时，3x+1=（  ）', options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], answer: 'C', explanation: '3×2+1=7。', knowledgePoint: '代数式求值', subject: '数学' },
  { id: '7u_m28', question: '方程 x+3=0 的解是（  ）', options: ['A. x=3', 'B. x=-3', 'C. x=0', 'D. x=1/3'], answer: 'B', explanation: 'x=-3。', knowledgePoint: '解方程', subject: '数学' },
  { id: '7u_m29', question: '-5 的绝对值是（  ）', options: ['A. -5', 'B. 5', 'C. ±5', 'D. 1/5'], answer: 'B', explanation: '|-5|=5。', knowledgePoint: '绝对值', subject: '数学' },
  { id: '7u_m30', question: '(-1)²⁰²⁴=（  ）', options: ['A. -1', 'B. 1', 'C. 2024', 'D. -2024'], answer: 'B', explanation: '-1 的偶数次方为 1。', knowledgePoint: '乘方', subject: '数学' }
];

const ENGLISH_7U = [
  { id: '7u_e01', question: '— ____ is your name?\n— My name is Tom.', options: ['A. What', 'B. Who', 'C. How', 'D. Where'], answer: 'A', explanation: '询问名字用 What。', knowledgePoint: '疑问词', subject: '英语' },
  { id: '7u_e02', question: 'This is ____ English book.', options: ['A. a', 'B. an', 'C. the', 'D. /'], answer: 'B', explanation: 'English 元音开头用 an。', knowledgePoint: '冠词', subject: '英语' },
  { id: '7u_e03', question: '— Is this your pen?\n— Yes, ____.', options: ['A. this is', 'B. it\'s', 'C. it is', 'D. that is'], answer: 'C', explanation: 'Is this...?回答用 it is，不缩写。', knowledgePoint: '一般疑问句', subject: '英语' },
  { id: '7u_e04', question: 'My parents ____ teachers.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 'C', explanation: 'parents 复数用 are。', knowledgePoint: 'be 动词', subject: '英语' },
  { id: '7u_e05', question: '— ____ do you go to school?\n— By bike.', options: ['A. What', 'B. How', 'C. When', 'D. Where'], answer: 'B', explanation: '问交通方式用 How。', knowledgePoint: '特殊疑问句', subject: '英语' },
  { id: '7u_e06', question: '____ name is Mary. ____ is my friend.', options: ['A. She; Her', 'B. Her; She', 'C. She; She', 'D. Her; Her'], answer: 'B', explanation: '第一空用 Her 修饰 name，第二空用 She 作主语。', knowledgePoint: '代词', subject: '英语' },
  { id: '7u_e07', question: '— ____ oranges are those?\n— They\'re five.', options: ['A. How many', 'B. How much', 'C. What', 'D. Which'], answer: 'A', explanation: 'oranges 可数，问数量用 How many。', knowledgePoint: '疑问词', subject: '英语' },
  { id: '7u_e08', question: 'Lucy and Lily are twins. ____ birthday is on June 1st.', options: ['A. Their', 'B. They', 'C. Them', 'D. Theirs'], answer: 'A', explanation: '修饰 birthday 用 Their。', knowledgePoint: '物主代词', subject: '英语' },
  { id: '7u_e09', question: '— Happy birthday!\n— ____.', options: ['A. Happy birthday', 'B. The same to you', 'C. Thank you', 'D. You\'re welcome'], answer: 'C', explanation: '对祝福表示感谢。', knowledgePoint: '交际用语', subject: '英语' },
  { id: '7u_e10', question: 'There ____ some milk on the table.', options: ['A. is', 'B. are', 'C. be', 'D. have'], answer: 'A', explanation: 'milk 不可数，用 is。', knowledgePoint: 'there be', subject: '英语' },
  { id: '7u_e11', question: 'I ____ a student. My name ____ John.', options: ['A. am; is', 'B. is; am', 'C. are; is', 'D. am; am'], answer: 'A', explanation: 'I 用 am，name 用 is。', knowledgePoint: 'be 动词', subject: '英语' },
  { id: '7u_e12', question: '— ____ is that girl?\n— She is my sister.', options: ['A. What', 'B. Who', 'C. How', 'D. Where'], answer: 'B', explanation: '问人用 Who。', knowledgePoint: '疑问词', subject: '英语' },
  { id: '7u_e13', question: 'These are my ____. They are doctors.', options: ['A. parent', 'B. parents', 'C. sister', 'D. brother'], answer: 'B', explanation: 'these are 后接复数。', knowledgePoint: '名词复数', subject: '英语' },
  { id: '7u_e14', question: 'The book is ____. I like it very much.', options: ['A. interesting', 'B. interested', 'C. interest', 'D. interests'], answer: 'A', explanation: '修饰物用 interesting。', knowledgePoint: '形容词', subject: '英语' },
  { id: '7u_e15', question: '— ____ you like apples?\n— Yes, I do.', options: ['A. Are', 'B. Do', 'C. Is', 'D. Does'], answer: 'B', explanation: '实义动词 like 的一般疑问句用 Do。', knowledgePoint: '一般疑问句', subject: '英语' },
  { id: '7u_e16', question: 'He ____ like bananas. He likes apples.', options: ['A. don\'t', 'B. doesn\'t', 'C. isn\'t', 'D. aren\'t'], answer: 'B', explanation: 'He 是第三人称单数，否定用 doesn\'t。', knowledgePoint: '否定句', subject: '英语' },
  { id: '7u_e17', question: '— What color is it?\n— It\'s ____.', options: ['A. an orange', 'B. orange', 'C. a orange', 'D. the orange'], answer: 'B', explanation: 'orange 作颜色时不可数。', knowledgePoint: '名词', subject: '英语' },
  { id: '7u_e18', question: 'Please call me ____ 123-4567.', options: ['A. in', 'B. on', 'C. at', 'D. for'], answer: 'C', explanation: 'call sb at+ 电话号码。', knowledgePoint: '介词', subject: '英语' },
  { id: '7u_e19', question: '— Where are my keys?\n— ____ are on the table.', options: ['A. It', 'B. They', 'C. This', 'D. That'], answer: 'B', explanation: 'keys 复数用 they 代替。', knowledgePoint: '代词', subject: '英语' },
  { id: '7u_e20', question: 'I have two ____.', options: ['A. sister', 'B. sisters', 'C. a sister', 'D. the sister'], answer: 'B', explanation: 'two 后接复数。', knowledgePoint: '名词复数', subject: '英语' },
  { id: '7u_e21', question: '____ you Jim?\n— Yes, I am.', options: ['A. Is', 'B. Are', 'C. Am', 'D. Be'], answer: 'B', explanation: 'you 用 Are。', knowledgePoint: 'be 动词', subject: '英语' },
  { id: '7u_e22', question: '— ____ is the pen?\n— It\'s black.', options: ['A. What', 'B. What color', 'C. How', 'D. Where'], answer: 'B', explanation: '问颜色用 What color。', knowledgePoint: '疑问词', subject: '英语' },
  { id: '7u_e23', question: 'That is ____ eraser.', options: ['A. a', 'B. an', 'C. the', 'D. /'], answer: 'B', explanation: 'eraser 元音开头用 an。', knowledgePoint: '冠词', subject: '英语' },
  { id: '7u_e24', question: '— How are you?\n— ____', options: ['A. I\'m fine, thanks.', 'B. I\'m 12.', 'C. I\'m a student.', 'D. I\'m from China.'], answer: 'A', explanation: 'How are you?回答 I\'m fine。', knowledgePoint: '交际用语', subject: '英语' },
  { id: '7u_e25', question: 'The girl ____ a red jacket is my sister.', options: ['A. in', 'B. on', 'C. at', 'D. with'], answer: 'A', explanation: 'in+ 颜色/服装表示穿着。', knowledgePoint: '介词', subject: '英语' },
  { id: '7u_e26', question: '— ____ spell it?\n— P-E-N.', options: ['A. What', 'B. How', 'C. Can you', 'D. How do you'], answer: 'D', explanation: '问如何拼写用 How do you spell...?', knowledgePoint: '疑问句', subject: '英语' },
  { id: '7u_e27', question: 'Those are my ____.', options: ['A. friend', 'B. friends', 'C. the friend', 'D. a friend'], answer: 'B', explanation: 'those are 后接复数。', knowledgePoint: '名词复数', subject: '英语' },
  { id: '7u_e28', question: '— Is she your mother?\n— ____. She is my aunt.', options: ['A. Yes, she is', 'B. No, she isn\'t', 'C. Yes, she does', 'D. No, she doesn\'t'], answer: 'B', explanation: '根据后句是 aunt，所以否定回答。', knowledgePoint: '一般疑问句回答', subject: '英语' },
  { id: '7u_e29', question: 'I like apples, ____ I don\'t like bananas.', options: ['A. and', 'B. but', 'C. or', 'D. so'], answer: 'B', explanation: '转折关系用 but。', knowledgePoint: '连词', subject: '英语' },
  { id: '7u_e30', question: 'The photo ____ my family is nice.', options: ['A. in', 'B. on', 'C. of', 'D. at'], answer: 'C', explanation: 'the photo of...的照片。', knowledgePoint: '介词', subject: '英语' }
];

const SCIENCE_7U = [
  { id: '7u_s01', question: '下列属于生物的是（  ）', options: ['A. 机器人', 'B. 钟乳石', 'C. 蘑菇', 'D. 珊瑚礁'], answer: 'C', explanation: '蘑菇是真菌，有生物特征。', knowledgePoint: '生物特征', subject: '科学' },
  { id: '7u_s02', question: '显微镜光线过暗时应调节（  ）', options: ['A. 粗准焦螺旋', 'B. 细准焦螺旋', 'C. 反光镜和遮光器', 'D. 转换器'], answer: 'C', explanation: '用大光圈、凹面镜增加亮度。', knowledgePoint: '显微镜', subject: '科学' },
  { id: '7u_s03', question: '动植物细胞共有的结构是（  ）', options: ['A. 细胞壁', 'B. 叶绿体', 'C. 液泡', 'D. 细胞膜'], answer: 'D', explanation: '都有细胞膜、细胞质、细胞核。', knowledgePoint: '细胞结构', subject: '科学' },
  { id: '7u_s04', question: '属于化学变化的是（  ）', options: ['A. 冰雪融化', 'B. 纸张燃烧', 'C. 酒精挥发', 'D. 矿石粉碎'], answer: 'B', explanation: '燃烧有新物质生成。', knowledgePoint: '物质变化', subject: '科学' },
  { id: '7u_s05', question: '空气中体积分数最大的是（  ）', options: ['A. 氧气', 'B. 氮气', 'C. 二氧化碳', 'D. 稀有气体'], answer: 'B', explanation: '氮气约占 78%。', knowledgePoint: '空气', subject: '科学' },
  { id: '7u_s06', question: '地球自转产生的现象是（  ）', options: ['A. 四季变化', 'B. 昼夜交替', 'C. 五带划分', 'D. 昼夜长短变化'], answer: 'B', explanation: '自转产生昼夜交替。', knowledgePoint: '地球运动', subject: '科学' },
  { id: '7u_s07', question: '级别最低的天体系统是（  ）', options: ['A. 地月系', 'B. 太阳系', 'C. 银河系', 'D. 总星系'], answer: 'A', explanation: '地月系是最低级别。', knowledgePoint: '天体系统', subject: '科学' },
  { id: '7u_s08', question: '细胞分裂时最先变化的是（  ）', options: ['A. 细胞质', 'B. 细胞核', 'C. 细胞膜', 'D. 细胞壁'], answer: 'B', explanation: '细胞核先分裂。', knowledgePoint: '细胞分裂', subject: '科学' },
  { id: '7u_s09', question: '体温恒定的动物是（  ）', options: ['A. 鲫鱼', 'B. 青蛙', 'C. 蛇', 'D. 麻雀'], answer: 'D', explanation: '鸟类和哺乳类体温恒定。', knowledgePoint: '动物分类', subject: '科学' },
  { id: '7u_s10', question: '密度公式ρ=m/V 中ρ表示（  ）', options: ['A. 质量', 'B. 体积', 'C. 密度', 'D. 重力'], answer: 'C', explanation: 'ρ是密度。', knowledgePoint: '密度', subject: '科学' },
  { id: '7u_s11', question: '植物细胞特有的结构是（  ）', options: ['A. 细胞膜', 'B. 细胞核', 'C. 细胞壁', 'D. 线粒体'], answer: 'C', explanation: '植物细胞有细胞壁、叶绿体、液泡。', knowledgePoint: '细胞结构', subject: '科学' },
  { id: '7u_s12', question: '地球公转产生的现象是（  ）', options: ['A. 昼夜交替', 'B. 四季变化', 'C. 太阳东升西落', 'D. 时间差异'], answer: 'B', explanation: '公转产生四季变化。', knowledgePoint: '地球运动', subject: '科学' },
  { id: '7u_s13', question: '熔化的条件是（  ）', options: ['A. 达到熔点', 'B. 继续吸热', 'C. 达到熔点并继续吸热', 'D. 温度升高'], answer: 'C', explanation: '晶体熔化需要两个条件。', knowledgePoint: '物态变化', subject: '科学' },
  { id: '7u_s14', question: '光的反射定律中，反射角（  ）入射角', options: ['A. 大于', 'B. 小于', 'C. 等于', 'D. 无关'], answer: 'C', explanation: '反射角等于入射角。', knowledgePoint: '光的反射', subject: '科学' },
  { id: '7u_s15', question: '声音在下列介质中传播最快的是（  ）', options: ['A. 空气', 'B. 水', 'C. 钢铁', 'D. 真空'], answer: 'C', explanation: '固体传播声音最快。', knowledgePoint: '声音传播', subject: '科学' },
  { id: '7u_s16', question: '细胞的基本单位是（  ）', options: ['A. 细胞壁', 'B. 细胞膜', 'C. 细胞', 'D. 细胞核'], answer: 'C', explanation: '细胞是生命活动的基本单位。', knowledgePoint: '细胞', subject: '科学' },
  { id: '7u_s17', question: '岩石按照成因可分为（  ）类', options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'], answer: 'B', explanation: '岩浆岩、沉积岩、变质岩三类。', knowledgePoint: '岩石', subject: '科学' },
  { id: '7u_s18', question: '月相变化的一个周期约（  ）天', options: ['A. 7', 'B. 15', 'C. 29.5', 'D. 365'], answer: 'C', explanation: '朔望月约 29.5 天。', knowledgePoint: '月相', subject: '科学' },
  { id: '7u_s19', question: '下列是光源的是（  ）', options: ['A. 月亮', 'B. 太阳', 'C. 镜子', 'D. 钻石'], answer: 'B', explanation: '自己能发光的物体是光源。', knowledgePoint: '光源', subject: '科学' },
  { id: '7u_s20', question: '人体最大的器官是（  ）', options: ['A. 肝脏', 'B. 皮肤', 'C. 心脏', 'D. 肺'], answer: 'B', explanation: '皮肤是人体最大的器官。', knowledgePoint: '人体结构', subject: '科学' },
  { id: '7u_s21', question: '地球的内部结构不包括（  ）', options: ['A. 地壳', 'B. 地幔', 'C. 地核', 'D. 地心'], answer: 'D', explanation: '地球内部三层：地壳、地幔、地核。', knowledgePoint: '地球结构', subject: '科学' },
  { id: '7u_s22', question: '物质从固态直接变成气态叫（  ）', options: ['A. 熔化', 'B. 汽化', 'C. 升华', 'D. 凝华'], answer: 'C', explanation: '升华是固态直接变气态。', knowledgePoint: '物态变化', subject: '科学' },
  { id: '7u_s23', question: '向日葵向光生长是（  ）', options: ['A. 向光性', 'B. 向地性', 'C. 向水性', 'D. 向触性'], answer: 'A', explanation: '植物向光源生长的特性。', knowledgePoint: '植物感应性', subject: '科学' },
  { id: '7u_s24', question: '北斗七星属于（  ）', options: ['A. 太阳系', 'B. 大熊星座', 'C. 小熊星座', 'D. 仙女星座'], answer: 'B', explanation: '北斗七星是大熊星座的一部分。', knowledgePoint: '星座', subject: '科学' },
  { id: '7u_s25', question: '显微镜看到的像是（  ）', options: ['A. 正立放大', 'B. 倒立放大', 'C. 正立缩小', 'D. 倒立缩小'], answer: 'B', explanation: '显微镜成倒立放大的像。', knowledgePoint: '显微镜', subject: '科学' },
  { id: '7u_s26', question: '植物光合作用的产物是（  ）', options: ['A. 二氧化碳和水', 'B. 有机物和氧气', 'C. 无机盐和水', 'D. 有机物和二氧化碳'], answer: 'B', explanation: '光合作用产生有机物和氧气。', knowledgePoint: '光合作用', subject: '科学' },
  { id: '7u_s27', question: '一天中气温最高通常在（  ）', options: ['A. 12 点', 'B. 14 点', 'C. 16 点', 'D. 18 点'], answer: 'B', explanation: '陆地气温最高在 14 时左右。', knowledgePoint: '气温', subject: '科学' },
  { id: '7u_s28', question: '人体内含量最多的物质是（  ）', options: ['A. 蛋白质', 'B. 脂肪', 'C. 水', 'D. 糖类'], answer: 'C', explanation: '水约占人体重的 60%-70%。', knowledgePoint: '人体组成', subject: '科学' },
  { id: '7u_s29', question: '食物消化和吸收的主要场所是（  ）', options: ['A. 胃', 'B. 小肠', 'C. 大肠', 'D. 口腔'], answer: 'B', explanation: '小肠是消化和吸收的主要场所。', knowledgePoint: '消化系统', subject: '科学' },
  { id: '7u_s30', question: '每年的 6 月 5 日是（  ）', options: ['A. 地球日', 'B. 环境日', 'C. 地球一小时', 'D. 植树节'], answer: 'B', explanation: '6 月 5 日是世界环境日。', knowledgePoint: '环保', subject: '科学' }
];

const SOCIAL_7U = [
  { id: '7u_so01', question: '东西半球的分界线是（  ）', options: ['A. 0°和 180°', 'B. 20°E 和 160°W', 'C. 20°W 和 160°E', 'D. 赤道'], answer: 'C', explanation: '20°W 以东至 160°E 为东半球。', knowledgePoint: '经纬网', subject: '社会' },
  { id: '7u_so02', question: '世界面积最大的大洲是（  ）', options: ['A. 非洲', 'B. 北美洲', 'C. 亚洲', 'D. 南极洲'], answer: 'C', explanation: '亚洲约 4400 万平方千米。', knowledgePoint: '大洲', subject: '社会' },
  { id: '7u_so03', question: '我国最早的古人类是（  ）', options: ['A. 北京人', 'B. 元谋人', 'C. 山顶洞人', 'D. 蓝田人'], answer: 'B', explanation: '元谋人距今约 170 万年。', knowledgePoint: '史前人类', subject: '社会' },
  { id: '7u_so04', question: '公元前 221 年统一六国的是（  ）', options: ['A. 禹', 'B. 周武王', 'C. 秦始皇', 'D. 刘邦'], answer: 'C', explanation: '秦始皇嬴政统一六国。', knowledgePoint: '秦朝', subject: '社会' },
  { id: '7u_so05', question: '地图三要素不包括（  ）', options: ['A. 方向', 'B. 比例尺', 'C. 图例', 'D. 颜色'], answer: 'D', explanation: '方向、比例尺、图例是地图三要素。', knowledgePoint: '地图', subject: '社会' },
  { id: '7u_so06', question: '地球公转产生的现象是（  ）', options: ['A. 昼夜交替', 'B. 四季变化', 'C. 太阳东升西落', 'D. 时间差异'], answer: 'B', explanation: '公转产生四季变化。', knowledgePoint: '地球运动', subject: '社会' },
  { id: '7u_so07', question: '世界上人口最多的国家是（  ）', options: ['A. 印度', 'B. 美国', 'C. 中国', 'D. 俄罗斯'], answer: 'C', explanation: '中国人口超 14 亿。', knowledgePoint: '人口', subject: '社会' },
  { id: '7u_so08', question: '春秋首霸是（  ）', options: ['A. 晋文公', 'B. 齐桓公', 'C. 楚庄王', 'D. 秦穆公'], answer: 'B', explanation: '齐桓公任用管仲改革，成为首霸。', knowledgePoint: '春秋争霸', subject: '社会' },
  { id: '7u_so09', question: '属于稻作文化的地区是（  ）', options: ['A. 黄土高原', 'B. 长江中下游', 'C. 内蒙古', 'D. 青藏高原'], answer: 'B', explanation: '长江中下游适合种植水稻。', knowledgePoint: '农业文化', subject: '社会' },
  { id: '7u_so10', question: '聚落的主要形式是（  ）', options: ['A. 乡村和城市', 'B. 平原和山区', 'C. 沿海和内陆', 'D. 南方和北方'], answer: 'A', explanation: '聚落分乡村和城市。', knowledgePoint: '聚落', subject: '社会' },
  { id: '7u_so11', question: '世界上面积最大的国家是（  ）', options: ['A. 中国', 'B. 美国', 'C. 俄罗斯', 'D. 加拿大'], answer: 'C', explanation: '俄罗斯面积约 1700 万平方千米。', knowledgePoint: '国家面积', subject: '社会' },
  { id: '7u_so12', question: '世界上最高的高原是（  ）', options: ['A. 内蒙古高原', 'B. 黄土高原', 'C. 青藏高原', 'D. 云贵高原'], answer: 'C', explanation: '青藏高原平均海拔 4000 米以上。', knowledgePoint: '地形', subject: '社会' },
  { id: '7u_so13', question: '世界上面积最大的大洋是（  ）', options: ['A. 大西洋', 'B. 印度洋', 'C. 太平洋', 'D. 北冰洋'], answer: 'C', explanation: '太平洋面积约 1.8 亿平方千米。', knowledgePoint: '大洋', subject: '社会' },
  { id: '7u_so14', question: '我国最南端的领土是（  ）', options: ['A. 海南岛', 'B. 台湾岛', 'C. 曾母暗沙', 'D. 钓鱼岛'], answer: 'C', explanation: '曾母暗沙在南沙群岛。', knowledgePoint: '中国疆域', subject: '社会' },
  { id: '7u_so15', question: '夏朝的建立者是（  ）', options: ['A. 黄帝', 'B. 尧', 'C. 舜', 'D. 禹'], answer: 'D', explanation: '禹建立夏朝，约公元前 2070 年。', knowledgePoint: '夏朝', subject: '社会' },
  { id: '7u_so16', question: '商朝把都城迁到殷的国王是（  ）', options: ['A. 汤', 'B. 盘庚', 'C. 纣', 'D. 武丁'], answer: 'B', explanation: '盘庚迁都于殷（今安阳）。', knowledgePoint: '商朝', subject: '社会' },
  { id: '7u_so17', question: '西周实行（  ）巩固统治', options: ['A. 郡县制', 'B. 分封制', 'C. 行省制', 'D. 科举制'], answer: 'B', explanation: '西周实行分封制。', knowledgePoint: '西周', subject: '社会' },
  { id: '7u_so18', question: '我国有文字可考的历史始于（  ）', options: ['A. 夏朝', 'B. 商朝', 'C. 西周', 'D. 秦朝'], answer: 'B', explanation: '商朝的甲骨文是我国最早的文字。', knowledgePoint: '甲骨文', subject: '社会' },
  { id: '7u_so19', question: '世界上最大的半岛是（  ）', options: ['A. 印度半岛', 'B. 阿拉伯半岛', 'C. 中南半岛', 'D. 朝鲜半岛'], answer: 'B', explanation: '阿拉伯半岛面积约 300 万平方千米。', knowledgePoint: '半岛', subject: '社会' },
  { id: '7u_so20', question: '世界上最长的河流是（  ）', options: ['A. 长江', 'B. 密西西比河', 'C. 亚马逊河', 'D. 尼罗河'], answer: 'D', explanation: '尼罗河长约 6670 千米。', knowledgePoint: '河流', subject: '社会' },
  { id: '7u_so21', question: '黄土高原形成的主要原因是（  ）', options: ['A. 流水侵蚀', 'B. 风力沉积', 'C. 冰川作用', 'D. 地壳运动'], answer: 'B', explanation: '主要是风力沉积作用形成。', knowledgePoint: '地形成因', subject: '社会' },
  { id: '7u_so22', question: '新疆气候干旱的主要原因是（  ）', options: ['A. 海拔高', 'B. 深居内陆距海远', 'C. 纬度高', 'D. 人口少'], answer: 'B', explanation: '深居内陆，距海远，水汽难到达。', knowledgePoint: '气候', subject: '社会' },
  { id: '7u_so23', question: '世界上使用人数最多的语言是（  ）', options: ['A. 英语', 'B. 汉语', 'C. 西班牙语', 'D. 阿拉伯语'], answer: 'B', explanation: '汉语使用人数超过 14 亿。', knowledgePoint: '语言', subject: '社会' },
  { id: '7u_so24', question: '世界上使用范围最广的语言是（  ）', options: ['A. 汉语', 'B. 英语', 'C. 法语', 'D. 俄语'], answer: 'B', explanation: '英语是国际通用语言。', knowledgePoint: '语言', subject: '社会' },
  { id: '7u_so25', question: '世界上信徒最多的宗教是（  ）', options: ['A. 伊斯兰教', 'B. 佛教', 'C. 基督教', 'D. 道教'], answer: 'C', explanation: '基督教信徒超过 20 亿。', knowledgePoint: '宗教', subject: '社会' },
  { id: '7u_so26', question: '伊斯兰教的发源地是（  ）', options: ['A. 印度', 'B. 中国', 'C. 阿拉伯半岛', 'D. 欧洲'], answer: 'C', explanation: '伊斯兰教发源于阿拉伯半岛。', knowledgePoint: '宗教', subject: '社会' },
  { id: '7u_so27', question: '世界上面积最大的沙漠是（  ）', options: ['A. 塔克拉玛干', 'B. 戈壁', 'C. 撒哈拉', 'D. 阿拉伯'], answer: 'C', explanation: '撒哈拉沙漠约 906 万平方千米。', knowledgePoint: '沙漠', subject: '社会' },
  { id: '7u_so28', question: '世界上面积最大的平原是（  ）', options: ['A. 东北平原', 'B. 华北平原', 'C. 亚马孙平原', 'D. 西西伯利亚平原'], answer: 'C', explanation: '亚马孙平原约 560 万平方千米。', knowledgePoint: '平原', subject: '社会' },
  { id: '7u_so29', question: '世界上人口最多的大洲是（  ）', options: ['A. 非洲', 'B. 欧洲', 'C. 亚洲', 'D. 北美洲'], answer: 'C', explanation: '亚洲人口超过 46 亿。', knowledgePoint: '人口分布', subject: '社会' },
  { id: '7u_so30', question: '世界上人口自然增长率最高的大洲是（  ）', options: ['A. 亚洲', 'B. 欧洲', 'C. 非洲', 'D. 北美洲'], answer: 'C', explanation: '非洲人口自然增长率最高。', knowledgePoint: '人口增长', subject: '社会' }
];

// ==================== 七年级下册（引用 grade7-lower.js）====================
// CHINESE_7L, MATH_7L, ENGLISH_7L, SCIENCE_7L, SOCIAL_7L 在 grade7-lower.js 中定义

// 合并题库
const QUESTION_BANK = {
  '7_upper': {
    '语文': CHINESE_7U,
    '数学': MATH_7U,
    '英语': ENGLISH_7U,
    '科学': SCIENCE_7U,
    '社会': SOCIAL_7U
  }
};

// 科目列表
const SUBJECTS = ['语文', '数学', '英语', '科学', '社会'];

// 年级列表（仅 7 年级）
const GRADES = [{ grade: 7, name: '七年级', semesters: ['upper', 'lower'] }];

// 生成每日题目（5 科各 6 题，共 30 题）
function generateDailyQuestions(grade, semester) {
  const key = `${grade}_${semester}`;
  const bank = QUESTION_BANK[key];
  if (!bank) return [];
  
  const dailyQuestions = [];
  SUBJECTS.forEach(subject => {
    const subjectQuestions = bank[subject] || [];
    const shuffled = [...subjectQuestions].sort(() => Math.random() - 0.5);
    dailyQuestions.push(...shuffled.slice(0, 6));
  });
  
  return dailyQuestions.sort(() => Math.random() - 0.5);
}

// 获取最近 n 天的题目 ID 集合
function getRecentQuestionIds(days = 5) {
  if (typeof Storage === 'undefined') return new Set();
  const history = JSON.parse(localStorage.getItem('zhongkao_history') || '[]');
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  cutoff.setHours(0, 0, 0, 0);
  
  const ids = new Set();
  history.forEach(record => {
    const date = new Date(record.date);
    if (date >= cutoff && record.questionIds) {
      record.questionIds.forEach(id => ids.add(id));
    }
  });
  return ids;
}

// 生成多日题目预览
function generateMultiDayQuestions(grade, semester, days = 7) {
  const results = [];
  const allUsedIds = new Set();
  
  for (let i = 0; i < days; i++) {
    const dailyQuestions = [];
    const dayExcludeIds = new Set(allUsedIds);
    
    SUBJECTS.forEach(subject => {
      const bank = QUESTION_BANK[`${grade}_${semester}`]?.[subject] || [];
      const available = bank.filter(q => !dayExcludeIds.has(q.id));
      const pool = available.length >= 6 ? available : bank.filter(q => !allUsedIds.has(q.id));
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 6);
      dailyQuestions.push(...selected);
      selected.forEach(q => allUsedIds.add(q.id));
    });
    
    results.push({ day: i + 1, questions: dailyQuestions.sort(() => Math.random() - 0.5) });
  }
  return results;
}

// 获取今日题目（缓存当天题目）
function getTodayQuestions(grade, semester) {
  const today = new Date().toDateString();
  const cacheKey = `daily_questions_${grade}_${semester}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    const { date, questions } = JSON.parse(cached);
    if (date === today) return questions;
  }

  const questions = generateDailyQuestions(grade, semester);
  localStorage.setItem(cacheKey, JSON.stringify({ date: today, questions }));
  return questions;
}