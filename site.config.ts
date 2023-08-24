import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 사이트의 루트 Notion 페이지(필수)
  rootNotionPageId: '4a210c8586944e1ab69e28a0f363af68',

  // 페이지를 단일 개념 작업 공간으로 제한하려는 경우(선택 사항)
  // (이것은 Notion ID여야 합니다. 이것을 추출하는 방법은 문서를 참조하십시오)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'sjdev',
  domain: 'https://judev.vercel.app/',
  author: 'Ju Seongjin',

  // open graph metadata (optional)
  description: 'Ju Seong Jin Tech Blog',

  // social usernames (optional)
  github: 'Seongjin-ju',
  // twitter: 'transitive_bs',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // 사이트 전체 일관성을 위한 기본 개념 아이콘 및 표지 이미지(선택 사항)
  // 페이지별 값은 이러한 사이트 전체 기본값을 재정의합니다.
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // LQIP 미리보기 이미지에 대한 지원 활성화 여부(선택 사항)
  isPreviewImageSupportEnabled: true,

  // 생성된 미리보기 이미지를 캐싱하기 위해 redis를 사용할지 여부(선택 사항)
  // 참고: redis를 활성화하는 경우 `REDIS_HOST` 및 `REDIS_PASSWORD`를 설정해야 합니다.
  // 환경 변수. 자세한 내용은 읽어보기를 참조하십시오.
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // 기본 개념 내비게이션 스타일을 사용할지 또는 링크가 있는 사용자 지정 스타일을 사용할지 여부
  // 중요한 페이지
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
