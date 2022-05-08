function filter_list(l) {
    let array=l.filter(i=>typeof i !== 'string')
    return array
  }