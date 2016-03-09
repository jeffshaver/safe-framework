export const pascalToSnakeCase = (string) => {
  const regex = /[A-Z0-9]/g

  string = string[0].toLowerCase() + string.slice(1)
  string = string.replace(regex, (match) => `-${match.toLowerCase()}`)
  return string
}