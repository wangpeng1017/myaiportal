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
        name: '首届标准OCR',
        description: '对比人类型和计算机OCR识别的能力识别一张图片里面的多个标签',
        model: 'Gemini 2.5 pro、GLM-4V、百度OCR',
        link: 'https://democr.aify.me/'
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
        description: '外贸行业自动清写邮件，发送邮件',
        model: 'Gemini 2.5 pro',
        link: 'https://email.aify.me/'
      },
      {
        id: 'smart-contract',
        name: '智能合同管理',
        description: '对本地文档进行与云文档进行对比编辑，替换实现快速生成优质合同',
        model: 'Gemini 2.5 pro',
        link: 'https://contract.aify.me/'
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
        description: '对比人类型和计算机OCR识别的能力识别一张图片里面的多个标签',
        model: 'Gemini 2.5 pro、GLM-4V、百度OCR',
        link: 'https://factory.aify.me/'
      },
      {
        id: 'food-ai',
        name: '食品厂AI平台',
        description: '智能调味、食品分析、电商评论分析',
        model: 'Gemini 2.5 pro',
        link: 'https://boniya.aify.me/'
      },
      {
        id: 'marketing-ai',
        name: '营销厂AI平台',
        description: '智能调味、数字化设计',
        model: 'Gemini 2.5 pro',
        link: 'https://rd.aify.me/'
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
        description: '提出一个问题，生成故事的问题解答',
        model: 'Gemini 2.5 pro',
        link: 'https://why.aify.me/'
      },
      {
        id: 'photo-story',
        name: '拍照识别故事',
        description: '可以根据照片识别出故事内容，位置',
        model: 'GLM-4V',
        link: 'https://www.aify.me/'
      },
      {
        id: 'flower-recognition',
        name: '拍照识别花草',
        description: '上传一个照片识别花草名称',
        model: 'GLM-4V',
        link: 'https://flower.aify.me/'
      }
    ]
  }
];
