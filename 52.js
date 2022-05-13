function DNAStrand(dna) {
    let dnaArr = dna.split("");
    dna = ((dnaArr.map(ch=>ch==='A'?ch='T':
                         ch==='T'?ch='A':
                         ch==='G'?ch='C':
                         ch==='C'?ch='G':
                         undefined))).join('')
    
  
    return dna;
  }