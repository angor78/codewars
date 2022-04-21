function capitalizeWord(word) {

    word = word[0].toUpperCase()+word.slice(1)
    console.log(word);
    return word;
  }

  let w= 'werty'
  w=capitalizeWord(w)
  console.log(w);