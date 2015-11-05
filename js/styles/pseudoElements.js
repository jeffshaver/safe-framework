export default {
  firstChild (index) {
    return index === 0
  },
  lastChild (index, length) {
    return index === length - 1
  },
  onlyChild (index, length) {
    return index === length
  },
  evenChildren (index) {
    return index % 2 === 0
  },
  oddChildren (index) {
    return index % 2 !== 0
  },
  nthChild (index, n) {
    return index === n - 1
  }
}