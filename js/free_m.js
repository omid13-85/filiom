let Slider = async () => {
  let slider = ""
  try {
    let data = await fetch("https://omid13-85.github.io/db.-filimo.json/json/free_m.json")
    let res = await data.json()
    slider = res.map((item) => {
      return `<div class="swiper-slide mt-5 rounded-xl relative ">
            <img
              class="w-[168px] h-[219px] opacity-60 rounded-xl desktop:w-[139px] desktop:h-[189px]" src="${item.image}"/>
            <div
              class="w-[70px] h-[24px] flex flex-row bg-[#1D2B1F] rounded-xl pr-3 pt-1 gap-x-1 absolute top-4 right-0 desktop:right-9 desktop:top-4"
            >
              
            </div>
          <p class="text-[13px] text-white bottom-0 text-end mr-2 mt-2">
              ${item.title}
            </p>
        </div>`
    })
    document.querySelector("#free_content").insertAdjacentHTML("afterbegin", slider.join(""))
  } catch (error) {
    console.log(error);
  }
}
Slider()

