fetch("https://api.github.com/users/ptkontek/repos?sort=created&direction=asc")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, html_url } = repo;
      const repoList = document.querySelector(".repoList--js");
      const myTemplate = `<li class="repoLink"s>
        ${name} <a href="${html_url}" title= "link do repozytorium ${name} na githubie"> link do githuba </a></li>`;
      repoList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("nie udało się pobrać danych");
  });
