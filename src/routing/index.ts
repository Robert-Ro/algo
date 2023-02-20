export enum Status {
  NONE,
  VISITED,
  SELECTED,
}
export const render = (data: Status[]) => {
  if (data.length === 0) {
    data = Array(100 * 100)
      .fill(0)
      .map(() => Status.NONE)
  }

  const collections = document.createDocumentFragment()
  const p = document.createElement('p')
  const btn1 = document.createElement('button')
  btn1.textContent = '开始'
  const btn2 = document.createElement('button')
  btn2.textContent = '重置'
  p.appendChild(btn1)
  p.appendChild(btn2)
  collections.appendChild(p)

  data.forEach((datum) => {
    const i = document.createElement('i')
    i.style.display = 'inline-block'
    i.style.width = '10px'
    i.style.height = '10px'
    i.style.border = '1px solid #eee'
    i.style.background = datum === Status.VISITED ? 'green' : datum === Status.SELECTED ? 'red' : 'white'
    collections.appendChild(i)
  })

  return collections
}
