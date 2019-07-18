const baseUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&?order=market_cap_asc&&per_page=100&&page=`

export default function nextPage(
  page,
  setPage,
  setUrl,
  setStart,
  setLoaded,
  setEnd
) {
  if (page < 53) {
    let newPage = page + 1
    setPage(newPage)
    const newUrl = baseUrl + newPage
    setUrl(newUrl)
    setStart(false)
    setLoaded(false)
  } else {
    setEnd(true)
  }
}
