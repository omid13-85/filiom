let Messege = async () => {
    let messege = ""
    try {
        let data = await fetch("https://omid13-85.github.io/db.-filimo.json/json/message.json")
        let res = await data.json()
        messege = res.map((messege) => {
            return `<div class="swiper-slide desktop:movement">
            <div class="w-[200px] h-[190px] bg-[#1a1a1a] pt-3 border-[#25262a] border-1 rounded-lg">
              <div class="w-full h-[35px] flex flex-row justify-between">
                <div class="flex flex-row items-center gap-2 pr-2">
                  <img class="bg-cover" src="https://www.filimo.com/assets/web/ui/img-EO6bydFk6Yq4pMaEiCWiw/campaigns/big-screen_v2/1.png" alt="">
                  <h5 class="text-[13px] text-white">${messege.name}</h5>
                </div>
                <div class="w-fit pl-2">
                  <img class="w-[10px] h-[10px]" src="https://www.filimo.com/assets/web/ui/img-EO6bydFk6Yq4pMaEiCWiw/campaigns/big-screen_v2/virgol.png" alt="">
                </div>
              </div>
              <div class="bottom w-fit">
                <p class="text-[12px] p-3 text-justify pr-4 pt-5 text-white">${messege.comment}</p>
              </div>
            </div>
          </div>`
        })
        document.querySelector("#messeage-wrapper").insertAdjacentHTML("afterbegin", messege.join(""))
    } catch (error) {
        console.log(error);
    }
}
Messege();