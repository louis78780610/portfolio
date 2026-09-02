import type { Project } from '../components/molecules/project/ProjectCard'

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'タスクマネージャー',
    description: 'これはサンプルの作品説明です。技術スタックやポイントを記載します。',
    image: '/images/task-manager.png',
    link: 'https://react-task-manager-one-silk.vercel.app/',
  },
  {
    id: 'project-2',
    title: 'コーポレートサイト（WED）',
    description:
      '架空のWeb制作会社「WED」のコーポレートサイト。MUIでレスポンシブに実装し、スムーズスクロールやお問い合わせフォームを備えています。',
    image: '/images/task10.png',
    link: 'https://task10-sage.vercel.app/',
  },
  {
    id: 'project-3',
    title: 'ブランドサイト（創作）',
    description:
      '架空のピスタチオブランド「創作」のブランドサイト。縦書きの和風デザインで、店舗情報やスクロール演出を実装しています。',
    image: '/images/task11.png',
    link: 'https://task11-beta.vercel.app/',
  },
]

export default projects
