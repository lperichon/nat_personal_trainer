$(document).ready(function(){
    $(".tweet").tweet({
        username: "nataliaja",
        avatar_size: 32,
        count: 1,
        loading_text: "cargando tweets..."
    });
});

function publish() {
    var url = 'http://www.facebook.com/pages/Personal-Y%C3%B4ga-Trainer/157255344335372';
    var picture = 'http://nat-personal-trainer.heroku.com/images/logo-martinez.png';
    var name = "Natalia Sanmartín Gil";
    var caption = "SwáSthya Yôga Personal Trainer";
    var description = "Clases personalizadas, con las técnicas de SwáSthya aplicadas a tus objetivos. Prácticas a domicilio, individuales y para grupos reducidos. Horarios flexibles.";
    var message = "¡Visiten el sitio de SwáSthya Yôga Personal Trainer!";
    var actionLinks = [{ 'text': 'Publicar en mi perfil', 'href': url }];
    var properties = '';

    FB.ui({
        'method': 'feed',
        'name':name,
        'link' : url,
        'properties':  properties,
        'picture' : picture,
        'caption' : caption,
        'description' : description,
        'message' : message,
        'action_links': actionLinks }, function(response){
          if (response == null || response == undefined || response == false) {
          } else {
              // do something

          }
            invite();
        }
    );
}

function invite() {
    FB.ui({ method: 'apprequests',
            message: '¡Visitá el sitio de SwáSthya Yôga Personal Trainer!',
      title: '¡Invitá a tus amigos a practicar!'
      }, function(response){
        if (response != null && response != undefined && response != false) {
          // do something
        } else {
          // else
        }
    });
}
