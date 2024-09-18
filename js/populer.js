let movies , series;
let dailyserial = document.querySelector('.main-daily')
let dailycinema = document.querySelector('.main-daily-cinematic');
let btn = document.querySelector('.btn-cinematic');
let coverCinema = document.querySelector('.cinematic-cover');
let coverSerial = document.querySelector(".serialic-cover");
let btnserial = document.querySelector(".btn-serial")
let seriesDiv = document.querySelector("#seriesContent");
let moviesDiv = document.querySelector("#movieContent");
let backgroundImage = document.querySelector(".daily-background");
let backgroundImagecinema = document.querySelector(".daily-background-cinema");
let boxName = document.querySelector(".daily-Name");
let boxNamecinema = document.querySelector(".daily-Name-cinema");
let boxLogo = document.querySelector(".daily-logo");
let boxLogocinema = document.querySelector(".daily-logo-cinema");
let boxDic = document.querySelector(".daily-director");
let boxDiccinema = document.querySelector(".daily-director-cinema");
let boxDec = document.querySelector(".daily-description");
let boxDeccinema = document.querySelector(".daily-description-cinema");
btn.addEventListener("click" , () =>{
      coverCinema.classList.remove("fadeOut")
      coverCinema.classList.add("fadeIn");
      btn.style.backgroundColor = "#F8A53E"
      btnserial.style.backgroundColor = "transparent"
      setTimeout(() =>{
        dailyserial.classList.add("hidden")
        coverCinema.classList.add("active");
        coverSerial.classList.remove("active");
        coverSerial.classList.remove("flex");
        coverCinema.classList.add("flex");
        dailycinema.classList.remove("hidden");
        dailycinema.classList.add("flex");
        
        
      }, 100)

      
});
btnserial.addEventListener("click" , () =>{
    coverCinema.classList.remove("fadeIn");
    coverCinema.classList.add("fadeOut");
    coverSerial.classList.add("fadeIn");
    btnserial.style.backgroundColor = "#F8A53E"
    btn.style.backgroundColor = "transparent"
    setTimeout(() =>{
        dailyserial.classList.remove("hidden")
        dailycinema.classList.add("hidden")
        coverCinema.classList.remove("active");
        coverCinema.classList.remove("flex");
        coverSerial.classList.add("active");
        coverSerial.classList.add("flex");
        
      }, 50)
})

let seriesClickHandler = (index) => {
  let {backgroundS ,NameSe , logo , dic , about} = series[index];
  backgroundImage.style.backgroundImage = `url(${backgroundS})`;
  boxName.textContent = NameSe;
  boxLogo.src = logo;
  boxDic.textContent =` کارگردان : ${dic}`;
  boxDec.textContent = about;
  
};
let moviesClickHandler = (index) => {
  let {background , MoviesName , logo , director , description} = movies[index];
  backgroundImagecinema.style.backgroundImage = `url(${background})`;
  boxNamecinema.textContent = MoviesName;
  boxLogocinema.src = logo;
  boxDiccinema.textContent =` کارگردان : ${director}`;
  boxDeccinema.textContent = description;
  
};



let Movie = async () => {
  await axios.get("https://omid13-85.github.io/db.-filimo.json/json/series.json").then((res)=>{
    series = res.data
  });
  await axios.get("https://omid13-85.github.io/db.-filimo.json/json/movies.json").then((res)=>{
    movies = res.data
  });
  series.forEach((item, index) => {
    seriesDiv.innerHTML += `<div class="min-w-[130px] min-h-[150px] desktop:min-w-[163px] desktop:min-h-[221px] hover:scale-110 transition-all duration-300 hover:border-2 hover:border-white   bg-no-repeat cursor-pointer   bg-center bg-cover rounded-lg" onclick=" seriesClickHandler(${index})" style="background-image: url(${item.image});">
    </div>`;
  });
  movies.forEach((item, index) => {
    moviesDiv.innerHTML += `<div class="min-w-[130px] min-h-[150px] desktop:min-w-[163px] desktop:min-h-[221px] hover:scale-110 transition-all duration-300 hover:border-2 hover:border-white   bg-no-repeat cursor-pointer   bg-center bg-cover rounded-lg" onclick=" moviesClickHandler(${index})" style="background-image: url(${item.imageurl});">
    </div>`;
  });
}
Movie();