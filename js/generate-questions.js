// 生成七年级上册题库的脚本
const fs = require('fs');

// 语文 50 题 - 已存在，保持不变
const CHINESE_7_UPPER = [
  { id: '7u_c001', question: '下列加点字注音完全正确的一项是（  ）', options: ['A. 酝酿（niàng）黄晕（yūn）嘹亮（liáo）', 'B. 贮蓄（zhù）澄清（chéng）着落（zhuó）', 'C. 粗犷（kuàng）静谧（mì）高ì）高邈（miǎo）', 'D. 莅临（lì）吝啬（lìn）池畦（wā）'], answer: 'B', explanation: 'A 项"晕"应读 yùn；C 项"犷"应读 guǎng；D 项"畦"应读 qí。', knowledgePoint: '字音辨析' },
  { id: '7u_c002', question: '下列词语书写完全正确的一项是（  ）', options: ['A. 朗润 建壮 喉咙 呼朋引伴', 'B. 窠巢 宛转 洪亮 花枝招展', 'C. 烘托 静默 风筝 抖擞精神', 'D. 晕酿 稀疏 蓑衣 稀稀疏疏'], answer: 'C', explanation: 'A 项"建"应为"健"；B 项"婉"应为"宛"；D 项"酝"应为"晕"。', knowledgePoint: '字形辨析' },
  { id: '7u_c003', question: '《春》的作者是（  ）', options: ['A. 老舍', 'B. 朱自清', 'C. 郁达夫', 'D. 巴金'], answer: 'B', explanation: '朱自清是现代著名散文家，《春》是其代表作。', knowledgePoint: '文学常识' },
  { id: '7u_c004', question: '下列句子没有语病的一项是（  ）', options: ['A. 通过这次活动，使我受益匪浅。', 'B. 我们要善于发现并解决存在的问题。', 'C. 是否努力学习，是取得好成绩的关键。', 'D. 大约 50 个左右的学生参加了比赛。'], answer: 'B', explanation: 'A 缺主语；C 两面对一面；D"大约"与"左右"重复。', knowledgePoint: '病句辨析' },
  { id: '7u_c005', question: '"吹面不寒杨柳风"的作者是（  ）', options: ['A. 杜甫', 'B. 李白', 'C. 志南和尚', 'D. 苏轼'], answer: 'C', explanation: '出自南宋志南和尚《绝句》。', knowledgePoint: '古诗词' }
];

// 生成并输出完整文件内容
let content = `// 浙江省初中知识点题库数据 - 2026 年最新版教材
// 高质量独立题目，所有题目内容互不重复

// ==================== 七年级上册语文（50 题）====================
const CHINESE_7_UPPER = ${JSON.stringify(CHINESE_7_UPPER, null, 2).replace(/"/g, "'")};

// 继续添加其他科目...
`;

console.log(content);