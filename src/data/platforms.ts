export interface Platform {
  id: string;
  name: string;
  description: string;
  model: string;
  link: string;
}

export interface Section {
  id: string;
  title: string;
  platforms: Platform[];
}

export const platformData: Section[] = [
  {
    id: 'latest-models',
    title: '最新模型体验',
    platforms: [
      {
        id: 'ocr-standard',
        name: '商品标签OCR',
        description: '对比大模型和普通OCR识别的能力识别一张图里面的多个标签',
        model: 'Gemini 2.5 pro、GLM-4V、百度OCR',
        link: 'https://demoocr.aifly.me/'
      }
    ]
  },
  {
    id: 'efficiency',
    title: '极致提效',
    platforms: [
      {
        id: 'smart-email',
        name: '智能邮件',
        description: '外贸行业自动撰写邮件、发送邮件',
        model: 'Gemini 2.5 pro',
        link: 'https://email.aifly.me/'
      },
      {
        id: 'smart-contract',
        name: '智能合同管理',
        description: '对本地文档和飞书云文档进行编辑、替换变量，根据模版快速生成合同',
        model: 'Gemini 2.5 pro',
        link: 'https://fcontract.aifly.me/'
      }
    ]
  },
  {
    id: 'industry-solutions',
    title: '行业方案',
    platforms: [
      {
        id: 'digital-factory',
        name: '数字工厂一体化平台',
        description: '制造业数字化转型解决方案，包含生产管理、质量控制、设备监控等功能',
        model: 'Gemini 2.5 pro、GLM-4V、百度OCR',
        link: 'https://mom.aifly.me/login.html'
      },
      {
        id: 'food-ai',
        name: '食品厂AI平台',
        description: '销售预测、竞品分析、电商评论分析',
        model: 'Gemini 2.5 pro',
        link: 'https://boniya.aifly.me/'
      },
      {
        id: 'spice-ai',
        name: '香料厂AI平台',
        description: '智能调香、数字化设计',
        model: 'Gemini 2.5 pro',
        link: 'https://rd.aifly.me/'
      }
    ]
  },
  {
    id: 'kids-toys',
    title: '给娃的小玩具',
    platforms: [
      {
        id: 'why-questions',
        name: '十万个为什么',
        description: '提出一个问题，生成精美的问题解答',
        model: 'Gemini 2.5 pro',
        link: 'https://why.aifly.me/'
      },
      {
        id: 'photo-location',
        name: '拍照识别位置',
        description: '可以根据照片识别出经纬度、位置信息',
        model: 'GLM-4V',
        link: 'https://www.aifly.me/'
      },
      {
        id: 'flower-recognition',
        name: '拍照识别花草',
        description: '通过照片识别花草名称和相关信息',
        model: 'GLM-4V',
        link: 'https://flower.aifly.me/'
      }
    ]
  }
];
