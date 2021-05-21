//디바이스 미디어쿼리 (아이폰5부터 아이패드 Pro 해상도)
import facepaint from 'facepaint'

export const mq = facepaint([
  '@media(min-width: 320px)',
  '@media(min-width: 375px)',
  '@media(min-width: 414px)',
  '@media(min-width: 768px)',
  '@media(min-width: 1024px)',
])
