const baseUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&?order=market_cap_asc&&per_page=100&&page=`

export default function prevPage(page, setPage, setUrl, setLoaded, setStart) {
  if (page > 2) {
    let newPage = page - 1
    setPage(newPage)

    let newUrl = baseUrl + newPage
    setUrl(newUrl)
    setLoaded(false)
    setStart(false)
  } else {
    let newPage = page - 1
    setPage(newPage)

    let newUrl = baseUrl + newPage
    setUrl(newUrl)
    setLoaded(false)
    setStart(true)
  }
}
