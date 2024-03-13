const links = [
  { text: 'Instagram', url: 'https://www.instagram.com/seuinstagram' },
  { text: 'Facebook', url: 'https://www.facebook.com/seufacebook' },
  { text: 'Website', url: 'https://www.seusite.com' }
  // Adicione mais links conforme necessário
];

const linkList = document.getElementById('link-list');

links.forEach(link => {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.textContent = link.text;
  anchor.href = link.url;
  listItem.appendChild(anchor);
  linkList.appendChild(listItem);
});
