import fetch from '../common/fetch'

export const getCookBookList = () => {
  return fetch('/recommendRecipe/get', {'_csrf': 'aaaa'}, 'POST', 'ss')
}
