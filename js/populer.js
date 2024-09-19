let movies, series;
const moviesDiv = document.querySelector("#moviesContent");
const seriesDiv = document.querySelector("#seriesContent");
const backgroundImage = document.querySelector(".favourite__info");
const boxTitle = document.querySelector(".favorite__info__title");
const boxLogo = document.querySelector(".banner-logo");
const boxDic = document.querySelector(".favorite__info__dic");
const boxDec = document.querySelector(".favorite__info__dec");
const movieClickHandler = (index) => {
  const { background_img,title , logo, dic, about } = movies[index];
  backgroundImage.style.backgroundImage = `url(${background_img})`;
  boxTitle.textContent = title;
  boxLogo.src = logo;
  boxDic.textContent = `کارگردان : ${dic}`;
  boxDec.textContent = about;
};
const seriesClickHandler = (index) => {
  const { backgroundS, NameSe, logo, dic, about } = series[index];
  backgroundImage.style.backgroundImage = `url(${backgroundS})`;
  boxTitle.textContent = NameSe;
  boxLogo.src = logo;
  boxDic.textContent = `کارگردان : ${dic}`;
  boxDec.textContent = about;
};
const movie = async () => {
  await axios
    .get("https://omid13-85.github.io/db.-filimo.json/json/series.json")
    .then((res) => {
      series = res.data;
    });
  await axios
    .get("https://omid13-85.github.io/db.-filimo.json/json/movies.json")
    .then((res) => {
      movies = res.data;
    });
  series.forEach((item, index) => {
    seriesDiv.innerHTML += `<div tabindex="0" class="min-w-[130px] serDiv min-h-[170px] desktop:opacity-75 desktop:w-[165px] desktop:h-[220px] bg-no-repeat cursor-pointer bg-center bg-cover rounded-lg hover:opacity-100 transition-all" onclick="seriesClickHandler(${index})" style="background-image: url(${item.images});"></div>`;
  });
  movies.forEach((item, index) => {
    moviesDiv.innerHTML += `<div tabindex="0" class="min-w-[130px] serDiv transition-all desktop:w-[165px] desktop:opacity-75 desktop:h-[220px] cursor-pointer min-h-[170px] bg-no-repeat bg-center bg-cover hover:opacity-100 rounded-lg" onclick="movieClickHandler(${index})"  style="background-image: url(${item.image});"></div>`;
  });
};
movie();
