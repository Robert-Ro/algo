import { RouterItem } from './types'
import { render as RoutingRender } from '../routing/index'
// simple router
export class Router {
  name: string
  routes: RouterItem[]
  constructor(name: string, routes: RouterItem[]) {
    this.name = name
    this.routes = routes
  }
}

window.addEventListener('load', () => {
  const app: HTMLDivElement | null = document.getElementById('app') as HTMLDivElement
  const sider: HTMLDivElement | null = document.getElementById('aside') as HTMLDivElement
  const main: HTMLDivElement | null = document.getElementById('main') as HTMLDivElement

  if (!app || !sider || !main) {
    throw ReferenceError('element is null')
  }

  const routes: RouterItem[] = [
    {
      path: '/',
      name: 'Home Page',
      component: () => `Your are on the Home Page`,
    },
    {
      path: '/routing',
      name: 'Routing',
      component: () => RoutingRender([]),
    },
  ]
  const sideWrapper = document.createDocumentFragment()
  routes.forEach(({ path, name }) => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.textContent = name
    btn.setAttribute('data-link', path)
    li.appendChild(btn)
    sideWrapper.append(li)
  })
  const ul = document.createElement('ul')
  ul.appendChild(sideWrapper)
  ul.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement
      if (target.tagName.toLowerCase() === 'ul') {
        return
      }
      let href: string | null
      if (target.tagName.toLowerCase() === 'li') {
        const btn = target.querySelector('button')
        if (btn) {
          href = btn.getAttribute('data-link')
        }
      }
      if (target.tagName.toLowerCase() === 'button') {
        href = target.getAttribute('data-link')
      }
      const route = routerInstance.routes.find(({ path }) => path === href)
      if (route) {
        window.history.pushState({}, route.name, route.path)
        main.innerHTML = typeof route.component === 'function' ? route.component() : route.component
      } else {
        window.history.pushState({}, '', 'error')
        main.innerHTML = '404 Not Found'
      }
    },
    false
  )
  sider.appendChild(ul)
  const routerInstance = new Router('mapleRouteInstance', routes)
  const currentPath = window.location.pathname
  const route = routerInstance.routes.find((r) => r.path === currentPath)
  if (route) {
    if (typeof route.component === 'function') {
      const result = route.component()
      if (result instanceof DocumentFragment) {
        main.appendChild(result)
      }
    } else {
      main.innerHTML = route.component
    }
  } else {
    main.innerHTML = '404 Not Found'
  }
})
