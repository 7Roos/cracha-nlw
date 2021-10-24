const linksSocialMedia = {
  github: '7Roos',
  youtube: 'ocanaldoroos',
  facebook: 'matheus.roos33',
  instagram: 'matheus.roos',
  twitter: ''
}

function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    /*Social assumirá o valor da classe*/
    /*Essa const só existe dentro desse escopo, ao dar um novo laço esse const some, assim como o li controlador. É uma variável de escopo*/
    /*O controlador desse loop é o li e é referente a cada filho(children) que existe dentro desse elem. html identificado pelo ID socialLinks*/
    /*A primeira vez que o for rodar o li assumirá o valor do primeiro filho do ul, o primeiro li, o do youtube aqui.*/
  }
}

changeLinksSocialMedia()

/*Vamos criar uma função pra pegar as informações lá no GitHub*/

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  /**Vamos pegar o que vem do json e transdormá-lo em json, pq quando o fetch pega ele, o fetch não sabe que é um json. */

  /** o fetch é uma função */
}

getGitHubProfileInfos()
