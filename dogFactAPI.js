
const URL = "https://dogapi.dog/api/v2/facts?limit=2" ;

const factDiv = document.getElementById('fact-div-id')
const getFactBtn = document.getElementById('get-fact-btn-id')
const loadingGif = document.getElementById('loading-gif-id');


function showLoadingGif(){
    return new Promise((resolve)=>{
        loadingGif.style.display = "block" ;
        setTimeout(()=>{
            loadingGif.style.display = "none";
            resolve()
        }, 3000)
    })
}

const getFact = async()=>{
    factDiv.innerText = "" ;
    try {
        await showLoadingGif();
        let response = await fetch(URL);
        let factData = await response.json()
        // console.log(factData.data[0].attributes.body);
        factDiv.innerText = factData.data[0].attributes.body ;
    } catch (error) {
        console.error("Error fetching dog fact : ", error);
        factDiv.style.color = "red"
        factDiv.textContent = "There is an unexpected Error. Please try again."
    }

    
}

getFactBtn.addEventListener("click", getFact);


