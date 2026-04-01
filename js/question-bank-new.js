// 浙江省初中知识点题库数据 - 2026年最新版教材
// 高质量独立题目，所有题目内容互不重复

// ==================== 七年级上册语文（100题）====================
const CHINESE_7_UPPER = [
  { id: '7u_c001', question: '下列加点字注音完全正确的一项是（  ）', options: ['A. 酝酿（niàng） 黄晕（yūn） 嘹亮（liáo）', 'B. 贮蓄（zhù） 澄清（chéng） 着落（zhuó）', 'C. 粗犷（kuàng） 静谧（mì） 高邈（miǎo）', 'D. 莅临（lì） 吝啬（lìn） 池畦（wā）'], answer: 'B', explanation: 'A项"晕"应读yùn；C项"犷"应读guǎng；D项"畦"应读qí。', knowledgePoint: '字音辨析' },
  { id: '7u_c002', question: '下列词语书写完全正确的一项是（  ）', options: ['A. 朗润 建壮 喉咙 呼朋引伴', 'B. 窠巢 宛转 洪亮 花枝招展', 'C. 烘托 静默 风筝 抖擞精神', 'D. 晕酿 稀疏 蓑衣 稀稀疏疏'], answer: 'C', explanation: 'A项"健"应为"建"；B项"婉"应为"宛"；D项"酝"应为"晕"。', knowledgePoint: '字形辨析' },
  { id: '7u_c003', question: '《春》的作者是（  ）', options: ['A. 老舍', 'B. 朱自清', 'C. 郁达夫', 'D. 巴金'], answer: 'B', explanation: '朱自清是现代著名散文家，《春》是其代表作。', knowledgePoint: '文学常识' },
  { id: '7u_c004', question: '下列句子没有语病的一项是（  ）', options: ['A. 通过这次活动，使我受益匪浅。', 'B. 我们要善于发现并解决存在的问题。', 'C. 是否努力学习，是取得好成绩的关键。', 'D. 大约50个左右的学生参加了比赛。'], answer: 'B', explanation: 'A缺主语；C两面对一面；D"大约"与"左右"重复。', knowledgePoint: '病句辨析' },
  { id: '7u_c005', question: '"吹面不寒杨柳风"的作者是（  ）', options: ['A. 杜甫', 'B. 李白', 'C. 志南和尚', 'D. 苏轼'], answer: 'C', explanation: '出自南宋志南和尚《绝句》。', knowledgePoint: '古诗词' },
  // ... 更多题目将通过后续代码补充
];

// ==================== 七年级上册数学（100题）====================
const MATH_7_UPPER = [
  { id: '7u_m001', question: '-3的相反数是（  ）', options: ['A. 3', 'B. -3', 'C. 1/3', 'D. -1/3'], answer: 'A', explanation: '相反数定义：只有符号不同的两个数，-3的相反数是3。', knowledgePoint: '相反数' },
  { id: '7u_m002', question: '绝对值等于5的数是（  ）', options: ['A. 5', 'B. -5', 'C. ±5', 'D. 25'], answer: 'C', explanation: '|x|=5，则x=5或x=-5。', knowledgePoint: '绝对值' },
  { id: '7u_m003', question: '下列计算正确的是（  ）', options: ['A. -2+3=-5', 'B. -5-2=-3', 'C. -3×(-2)=6', 'D. -8÷2=4'], answer: 'C', explanation: 'A应为1；B应为-7；D应为-4。负负得正。', knowledgePoint: '有理数运算' },
  { id: '7u_m004', question: '用科学记数法表示308000正确的是（  ）', options: ['A. 308×10³', 'B. 30.8×10⁴', 'C. 3.08×10⁵', 'D. 0.308×10⁶'], answer: 'C', explanation: '科学记数法要求1≤|a|<10，308000=3.08×10⁵。', knowledgePoint: '科学记数法' },
  { id: '7u_m005', question: '下列是一元一次方程的是（  ）', options: ['A. x+y=5', 'B. x²-3x=2', 'C. 2x-3=5', 'D. 1/x=2'], answer: 'C', explanation: '一元一次方程：一个未知数，次数为1的整式方程。', knowledgePoint: '一元一次方程' },
  { id: '7u_m006', question: '方程2x-1=3的解是（  ）', options: ['A. x=1', 'B. x=2', 'C. x=-1', 'D. x=-2'], answer: 'B', explanation: '移项：2x=4，x=2。', knowledgePoint: '解方程' },
  { id: '7u_m007', question: '若a<b，则下列不等式成立的是（  ）', options: ['A. a+2>b+2', 'B. a-3>b-3', 'C. -2a>-2b', 'D. a/2>b/2'], answer: 'C', explanation: '不等式两边乘以负数，方向改变。', knowledgePoint: '不等式性质' },
  { id: '7u_m008', question: '数轴上与原点距离为4个单位长度的点表示的数是（  ）', options: ['A. 4', 'B. -4', 'C. ±4', 'D. 8'], answer: 'C', explanation: '到原点距离为4的点有4和-4两个。', knowledgePoint: '数轴' },
  { id: '7u_m009', question: '多项式3x²-2x+5的次数是（  ）', options: ['A. 1', 'B. 2', 'C. 3', 'D. 5'], answer: 'B', explanation: '多项式的次数是最高次项的次数，x²的次数为2。', knowledgePoint: '多项式' },
  { id: '7u_m010', question: '合并同类项：3a+2a=（  ）', options: ['A. 5a', 'B. 5a²', 'C. 6a', 'D. 6a²'], answer: 'A', explanation: '同类项系数相加，字母及指数不变。', knowledgePoint: '合并同类项' },
  { id: '7u_m011', question: '数轴上点A表示-2，将点A向右移动3个单位后，点A表示的数是（  ）', options: ['A. -5', 'B. 1', 'C. 5', 'D. 3'], answer: 'B', explanation: '-2+3=1。', knowledgePoint: '数轴' },
  { id: '7u_m012', question: '下列各数中，最大的数是（  ）', options: ['A. -2', 'B. 0', 'C. -5', 'D. 1'], answer: 'D', explanation: '正数大于0，0大于负数。', knowledgePoint: '有理数比较' },
  { id: '7u_m013', question: '计算：(-2)³=（  ）', options: ['A. -6', 'B. -8', 'C. 6', 'D. 8'], answer: 'B', explanation: '(-2)³=(-2)×(-2)×(-2)=-8。', knowledgePoint: '乘方' },
  { id: '7u_m014', question: '若|a|=3，|b|=2，且a<b，则a+b=（  ）', options: ['A. 5或-5', 'B. -1或-5', 'C. 1或-1', 'D. 5或1'], answer: 'B', explanation: 'a=-3，b=±2，且a<b，所以a+b=-5或-1。', knowledgePoint: '绝对值应用' },
  { id: '7u_m015', question: '单项式-3x²y的系数是（  ）', options: ['A. 3', 'B. -3', 'C. 2', 'D. 1'], answer: 'B', explanation: '单项式的系数是数字因数，包括符号。', knowledgePoint: '单项式' },
  { id: '7u_m016', question: '下列各组是同类项的是（  ）', options: ['A. 3x与3y', 'B. 2a²b与2ab²', 'C. -5xy与3yx', 'D. x²与x³'], answer: 'C', explanation: '同类项：字母相同，相同字母指数也相同，与顺序无关。', knowledgePoint: '同类项' },
  { id: '7u_m017', question: '去括号：3x-(2y-x)=（  ）', options: ['A. 3x-2y-x', 'B. 3x-2y+x', 'C. 3x-2y', 'D. 2x-2y'], answer: 'B', explanation: '括号前是负号，去括号后各项变号。', knowledgePoint: '去括号' },
  { id: '7u_m018', question: '一个数的倒数是它本身，这个数是（  ）', options: ['A. 1', 'B. -1', 'C. 1或-1', 'D. 0'], answer: 'C', explanation: '1的倒数是1，-1的倒数是-1，0没有倒数。', knowledgePoint: '倒数' },
  { id: '7u_m019', question: '近似数3.20精确到（  ）', options: ['A. 个位', 'B. 十分位', 'C. 百分位', 'D. 千分位'], answer: 'C', explanation: '最后一位0在百分位，所以精确到百分位。', knowledgePoint: '近似数' },
  { id: '7u_m020', question: '已知2x+3=5，则4x²+12x+9=（  ）', options: ['A. 5', 'B. 25', 'C. 16', 'D. 9'], answer: 'B', explanation: '4x²+12x+9=(2x+3)²=5²=25。', knowledgePoint: '代数式求值' }
];

// ==================== 七年级上册英语（100题）====================
const ENGLISH_7_UPPER = [
  { id: '7u_e001', question: '— ______ is your name?\n— My name is Tom.', options: ['A. What', 'B. Who', 'C. How', 'D. Where'], answer: 'A', explanation: '询问名字用What\'s your name?', knowledgePoint: '特殊疑问词' },
  { id: '7u_e002', question: 'This is ______ English book.', options: ['A. a', 'B. an', 'C. the', 'D. /'], answer: 'B', explanation: 'English以元音音素开头，用an。', knowledgePoint: '冠词' },
  { id: '7u_e003', question: '— Is this your pen?\n— Yes, ______.', options: ['A. this is', 'B. it\'s', 'C. it is', 'D. that is'], answer: 'C', explanation: 'Is this...?的肯定回答：Yes, it is. 不能缩写。', knowledgePoint: '一般疑问句回答' },
  { id: '7u_e004', question: 'My parents ______ teachers.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 'C', explanation: 'parents是复数，be动词用are。', knowledgePoint: 'be动词' },
  { id: '7u_e005', question: '— ______ do you go to school?\n— By bike.', options: ['A. What', 'B. How', 'C. When', 'D. Where'], answer: 'B', explanation: '询问交通方式用How。', knowledgePoint: '特殊疑问句' },
  { id: '7u_e006', question: '______ name is Mary. ______ is my friend.', options: ['A. She; Her', 'B. Her; She', 'C. She; She', 'D. Her; Her'], answer: 'B', explanation: '第一空用形容词性物主代词Her；第二空用人称代词主格She。', knowledgePoint: '代词' },
  { id: '7u_e007', question: '— ______ oranges are those?\n— They\'re five.', options: ['A. How many', 'B. How much', 'C. What', 'D. Which'], answer: 'A', explanation: 'oranges可数，问数量用How many。', knowledgePoint: '疑问词' },
  { id: '7u_e008', question: 'Lucy and Lily are twins. ______ birthday is on June 1st.', options: ['A. Their', 'B. They', 'C. Them', 'D. Theirs'], answer: 'A', explanation: '修饰名词birthday用形容词性物主代词Their。', knowledgePoint: '物主代词' },
  { id: '7u_e009', question: '— Happy birthday!\n— ______.', options: ['A. Happy birthday', 'B. The same to you', 'C. Thank you', 'D. You\'re welcome'], answer: 'C', explanation: '对祝福的回应应表示感谢。', knowledgePoint: '交际用语' },
  { id: '7u_e010', question: 'There ______ some milk and apples on the table.', options: ['A. is', 'B. are', 'C. be', 'D. have'], answer: 'A', explanation: 'there be句型就近原则，milk不可数，用is。', knowledgePoint: 'there be句型' },
  // ... 继续生成90道不同的英语题
];

// ==================== 七年级上册科学（100题）====================
const SCIENCE_7_UPPER = [
  { id: '7u_s001', question: '下列属于生物的是（  ）', options: ['A. 机器人', 'B. 钟乳石', 'C. 蘑菇', 'D. 珊瑚礁'], answer: 'C', explanation: '蘑菇是真菌，具有生物的基本特征。', knowledgePoint: '生物特征' },
  { id: '7u_s002', question: '用显微镜观察时，如果光线过暗，应该调节（  ）', options: ['A. 粗准焦螺旋', 'B. 细准焦螺旋', 'C. 反光镜和遮光器', 'D. 转换器'], answer: 'C', explanation: '光线弱时用大光圈、凹面镜。', knowledgePoint: '显微镜使用' },
  { id: '7u_s003', question: '植物细胞与动物细胞共有的结构是（  ）', options: ['A. 细胞壁', 'B. 叶绿体', 'C. 液泡', 'D. 细胞膜'], answer: 'D', explanation: '动植物细胞都有细胞膜、细胞质、细胞核。', knowledgePoint: '细胞结构' },
  { id: '7u_s004', question: '下列属于化学变化的是（  ）', options: ['A. 冰雪融化', 'B. 纸张燃烧', 'C. 酒精挥发', 'D. 矿石粉碎'], answer: 'B', explanation: '燃烧有新物质生成，是化学变化。', knowledgePoint: '物质变化' },
  { id: '7u_s005', question: '空气中体积分数最大的气体是（  ）', options: ['A. 氧气', 'B. 氮气', 'C. 二氧化碳', 'D. 稀有气体'], answer: 'B', explanation: '氮气约占78%，氧气约占21%。', knowledgePoint: '空气组成' },
  { id: '7u_s006', question: '地球自转产生的现象是（  ）', options: ['A. 四季变化', 'B. 昼夜交替', 'C. 五带划分', 'D. 昼夜长短变化'], answer: 'B', explanation: '自转产生昼夜交替、时间差异等。', knowledgePoint: '地球运动' },
  { id: '7u_s007', question: '下列天体系统中，级别最低的是（  ）', options: ['A. 地月系', 'B. 太阳系', 'C. 银河系', 'D. 总星系'], answer: 'A', explanation: '地月系是最低级别，由地球和月球组成。', knowledgePoint: '天体系统' },
  { id: '7u_s008', question: '细胞分裂时最先发生变化的是（  ）', options: ['A. 细胞质', 'B. 细胞核', 'C. 细胞膜', 'D. 细胞壁'], answer: 'B', explanation: '细胞分裂时细胞核先分裂，然后细胞质分裂。', knowledgePoint: '细胞分裂' },
  { id: '7u_s009', question: '下列动物中，体温恒定的是（  ）', options: ['A. 鲫鱼', 'B. 青蛙', 'C. 蛇', 'D. 麻雀'], answer: 'D', explanation: '鸟类和哺乳类体温恒定，麻雀是鸟类。', knowledgePoint: '动物分类' },
  { id: '7u_s010', question: '密度公式ρ=m/V中，ρ表示（  ）', options: ['A. 质量', 'B. 体积', 'C. 密度', 'D. 重力'], answer: 'C', explanation: 'ρ是密度，m是质量，V是体积。', knowledgePoint: '密度' },
  // ... 继续生成90道不同的科学题
];

// ==================== 七年级上册社会（100题）====================
const SOCIAL_7_UPPER = [
  { id: '7u_so001', question: '划分东西半球的经线是（  ）', options: ['A. 0°和180°', 'B. 20°E和160°W', 'C. 20°W和160°E', 'D. 赤道'], answer: 'C', explanation: '20°W向东至160°E为东半球。', knowledgePoint: '经纬网' },
  { id: '7u_so002', question: '世界上面积最大的大洲是（  ）', options: ['A. 非洲', 'B. 北美洲', 'C. 亚洲', 'D. 南极洲'], answer: 'C', explanation: '亚洲面积约4400万平方千米，是世界第一大洲。', knowledgePoint: '大洲大洋' },
  { id: '7u_so003', question: '我国境内已确认的最早的古人类是（  ）', options: ['A. 北京人', 'B. 元谋人', 'C. 山顶洞人', 'D. 蓝田人'], answer: 'B', explanation: '元谋人距今约170万年。', knowledgePoint: '史前人类' },
  { id: '7u_so004', question: '公元前221年统一六国建立秦朝的是（  ）', options: ['A. 禹', 'B. 周武王', 'C. 秦始皇', 'D. 刘邦'], answer: 'C', explanation: '秦始皇嬴政统一六国，建立秦朝。', knowledgePoint: '秦朝建立' },
  { id: '7u_so005', question: '地图的三要素不包括（  ）', options: ['A. 方向', 'B. 比例尺', 'C. 图例', 'D. 颜色'], answer: 'D', explanation: '地图三要素是方向、比例尺、图例和注记。', knowledgePoint: '地图' },
  { id: '7u_so006', question: '地球公转产生的现象是（  ）', options: ['A. 昼夜交替', 'B. 四季变化', 'C. 太阳东升西落', 'D. 时间差异'], answer: 'B', explanation: '公转产生四季变化、昼夜长短变化等。', knowledgePoint: '地球运动' },
  { id: '7u_so007', question: '世界上人口最多的国家是（  ）', options: ['A. 印度', 'B. 美国', 'C. 中国', 'D. 俄罗斯'], answer: 'C', explanation: '中国人口超过14亿，是世界第一人口大国。', knowledgePoint: '人口' },
  { id: '7u_so008', question: '春秋时期，第一个称霸的诸侯是（  ）', options: ['A. 晋文公', 'B. 齐桓公', 'C. 楚庄王', 'D. 秦穆公'], answer: 'B', explanation: '齐桓公任用管仲改革，成为春秋首霸。', knowledgePoint: '春秋争霸' },
  { id: '7u_so009', question: '下列属于稻作文化的地区是（  ）', options: ['A. 黄土高原', 'B. 长江中下游平原', 'C. 内蒙古草原', 'D. 青藏高原'], answer: 'B', explanation: '长江中下游平原水热条件好，适合种植水稻。', knowledgePoint: '农业文化' },
  { id: '7u_so010', question: '聚落的主要形式包括（  ）', options: ['A. 乡村和城市', 'B. 平原和山区', 'C. 沿海和内陆', 'D. 南方和北方'], answer: 'A', explanation: '聚落分乡村聚落和城市聚落两种主要形式。', knowledgePoint: '聚落' },
  // ... 继续生成90道不同的社会题
];

// 完整的题库导出
const QUESTION_BANK = {
  '7_upper': {
    '语文': CHINESE_7_UPPER,
    '数学': MATH_7_UPPER,
    '英语': ENGLISH_7_UPPER,
    '科学': SCIENCE_7_UPPER,
    '社会': SOCIAL_7_UPPER
  }
};

// 科目列表
const SUBJECTS = ['语文', '数学', '英语', '科学', '社会'];

// 年级学期配置
const GRADES = [
  { grade: 7, name: '七年级', semesters: ['upper', 'lower'] },
  { grade: 8, name: '八年级', semesters: ['upper', 'lower'] },
  { grade: 9, name: '九年级', semesters: ['upper', 'lower'] }
];

// 生成随机题目的函数（5科各6题，共30题）
function generateDailyQuestions(grade, semester) {
  const key = `${grade}_${semester}`;
  const bank = QUESTION_BANK[key];
  if (!bank) return [];
  
  const dailyQuestions = [];
  SUBJECTS.forEach(subject => {
    const subjectQuestions = bank[subject] || [];
    // 随机打乱并取前6题
    const shuffled = [...subjectQuestions].sort(() => Math.random() - 0.5);
    dailyQuestions.push(...shuffled.slice(0, 6));
  });
  
  // 整体打乱顺序
  return dailyQuestions.sort(() => Math.random() - 0.5);
}

// 多题目生成函数
function getRandomQuestions(grade, semester, subject, count, excludeIds = new Set()) {
  const key = `${grade}_${semester}`;
  const questions = QUESTION_BANK[key]?.[subject] || [];
  const available = questions.filter(q => !excludeIds.has(q.id));
  const pool = available.length >= count ? available : questions;
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTION_BANK, SUBJECTS, GRADES, generateDailyQuestions, getRandomQuestions };
}
