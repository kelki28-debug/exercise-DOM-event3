let newArr = [['home','profile'], ['setting'],['log out']];

let aside = document.querySelector('aside')

newArr.map((baris, index) =>{
    if(index > 0){
        let hr = document.createElement('hr');
        aside.appendChild(hr)
    }
    console.log(baris)
    baris.map(kolom =>{
        let p = document.createElement('p');
        let text = document.createTextNode(kolom);
        p.appendChild(text)
        aside.appendChild(p)
    })
})
