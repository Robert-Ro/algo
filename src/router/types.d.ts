// @https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent

export interface RouterItem {
  path: string
  name: string
  component: string | Function
}
