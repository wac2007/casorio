(function fbplugin(d, s, id) {
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  const js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.8&appId=562454163833681';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
