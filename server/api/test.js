export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  console.log('query', query)

  const body = await readBody(event);
  console.log('body', body)

  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_XCT4sdDrcx2YGcrVTCg9YAo76up2J3Y7hhA9E9sz&currencies=EUR%2CUSD%2CCAD')

  return data
})