import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI平台 - 探索最新的AI技术和解决方案',
  description: '一个集成了最新AI模型体验、极致提效工具、行业解决方案和趣味应用的综合平台',
  keywords: 'AI, 人工智能, 机器学习, OCR, 智能邮件, 合同管理, 数字工厂',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
