// for smaller screen width, n nav items should be displayed

export const displayControl = (items, n) => {

  const _items = items.map((elem, i) => {
    if (i < n) {
      if (elem.subCat) return { ...elem, hidden: false, dropdown: true }
      return { ...elem, hidden: false, dropdown: false }
    } else {
      if (elem.subCat) return { ...elem, hidden: true, dropdown: true }
      return { ...elem, hidden: true, dropdown: false }
    }
  })
  return _items
}