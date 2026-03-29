import type { Project } from '../components/molecules/ProjectCard'

const projects: Project[] = [
  {
    id: 'project-1',
    title: '作品 1',
    description: 'これはサンプルの作品説明です。技術スタックやポイントを記載します。',
    image: '/images/sample1.svg',
  },
  {
    id: 'project-2',
    title: '作品 2',
    description: '別のサンプル作品。動作デモやリンクを追加してください。',
    image: '/images/sample2.svg',
  },
  {
    id: 'project-3',
    title: '作品 3',
    description: '3つ目の作品サンプル。',
    image: '/images/sample3.svg',
  },
]

export default projects
