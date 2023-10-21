const loadCardItems = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.data.tools);
  displayLoadItems(data.data.tools);
}

const displayLoadItems = (items) => {
  const cardContainer = document.getElementById('card-container');
  
  //display 6 cards only
  const seeMore = document.getElementById('see-more');
  if (items.length > 6) {
    items = items.slice(0, 6);
    
    seeMore.classList.remove('hidden');
  }
  else {
    
    seeMore.classList.add('hidden');

  }
  
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('col');
    itemDiv.innerHTML = `
  <div class="card w-120 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${item.image}" alt="" class="rounded-xl" />
  </figure>
  <div class="card-body text-left">
    <h2 class="card-title font-bold">Features</h2>
    <p class="mt-3 font-semibold">1 . ${item.features[0]} </p>
    <p class="font-semibold">2 . ${item.features[1]} </p>
    <p class="mb-3 font-semibold">3 . ${item.features[2]} </p>
    <hr class="py-1">
    <div class="flex flex-row justify-between">
      <div class="text-left">
        <h1 class="card-title font-bold py-1">${item.name}</h1>
        <div class=" flex flex-row gap-x-3">
          <div>
            <img class=" mt-3 w-5 h-5" src="./img/calender_1.png" alt="" srcset="">
          </div>
          <div>
            <p class="mt-2"> ${item.published_in}</p>
          </div>
        </div>
      </div>
      <div>
        <img onclick = "loadItemDetails('${item.id}')" data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="mt-8 h-5" src="./img/right-arrow.png" alt="" srcset="">
      </div>
    </div>
  </div>
</div> 
  `
    cardContainer.appendChild(itemDiv);
  });

}

  
  const loadItemDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)
    displayItemDetails(data.data)
  }


  const displayItemDetails = item => {
     
    const itemDetail = document.getElementById('item-detail');
    itemDetail.innerHTML = `
    <div>
    <p>'${item.description}'</p>
    </div>
       
       
    ` 

}






loadCardItems();