


async function getdata(){
  const input= document.querySelector(".searchableContent .inputdata")
  const name= input.value
  const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${name}&region=US`;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd44bb8ee5amshefc75e5c6846b6cp1cbed8jsncde3b93dc68e',
		'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
	}
};
  try {
      const response = await axios.request(url,options);
      const uuid=response.data.news[0].uuid;
      const URL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details?uuid=${uuid}&region=US`;
        const options1 = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'd44bb8ee5amshefc75e5c6846b6cp1cbed8jsncde3b93dc68e',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
};

async function fetchData() {
    try {
      const response = await axios(URL, options1);
      console.log(response.data.data);
      const h1=document.querySelector(".content .news h1")
      const title=response.data.data.contents[0].content.title;
      h1.innerHTML = title;
  
      const p=document.querySelector(".content .news p")
      const description=response.data.data.contents[0].content.summary;
      p.innerHTML = description;
      
      const image = document.querySelector(".content .image img");
      if (response.data.data.contents[0]?.content?.body?.data?.partnerData?.cover?.image?.originalUrl) {
        const findimage = response.data.data.contents[0].content.body.data.partnerData.cover.image.originalUrl;
        image.src = findimage;
    } else {
        throw new Error("No cover image found");
    }



    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();

  } catch (error) {
      console.error(error);
  }
}




const btn=document.querySelector(".searchableContent button")
btn.addEventListener("click", (e) =>{
  const image = document.querySelector(".content .image img");
  image.src="";
  getdata()
})