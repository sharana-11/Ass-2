const names=["kiran","aishwarya","radhika","ravi","ajay"]
const resultEl = document.querySelector(".search");
const searchbar=document.getElementsByName('search-bar')
function onresult(){
    console.log(searchbar)
    const name = names.filter((M)=>{
        if(M.includes(searchbar[0].value))
        {
            return true
        }


    })
    displayResults(name)
    console.log(name)
}
const ulEl = document.createElement("ul");
const displayResults = (data) => {
    if (data.length > 0) {
     
      const resultDom = data
        .map((item) => {
          return `  
          <li>${item}</li>
        `;
        })
      ulEl.innerHTML = resultDom;
      resultEl.insertAdjacentElement('beforeend',ulEl);
    } else {
      resultEl.innerHTML = "No results found";
    }
  };