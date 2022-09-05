/* eslint-disable */
export function getFilteredItems(search, fetchData, isLoading) {
  if (!isLoading) {
    if (search) {
      return fetchData
        ?.map((item) => {
          if (
            item.name?.toLowerCase().includes(search.toLowerCase()) ||
            item.id?.toLowerCase().includes(search.toLowerCase()) ||
            item.customerName?.toLowerCase().includes(search.toLowerCase()) ||
            item.phone?.toLowerCase().includes(search.toLowerCase()) ||
            item.orderDate?.toLowerCase().includes(search.toLowerCase()) ||
            item.address?.address
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            item.address?.city?.toLowerCase().includes(search.toLowerCase()) ||
            item.address?.postalCode
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            item.address?.country?.toLowerCase().includes(search.toLowerCase())
          ) {
            return item
          }
        })
        .filter((item) => item)
    } else {
      return fetchData
    }
  } else {
    return
  }
}
