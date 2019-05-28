const sendForm = (form, wrapper) => {

    let input = form.getElementsByTagName('input'),
        mail = form.querySelector('[type="email"]');

    mail.addEventListener('keyup', () => {
        mail.value = mail.value.replace(/[А-Яа-яЁё]/g, '');
    });

    let when = form.querySelector('[type="datetime"]');
    when.addEventListener('keyup', () => {
        when.value = when.value.replace(/[^0-9\/\.]/g, '');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let img = document.createElement('img');
        img.style.margin = "50px 100px";
        wrapper.appendChild(img);

        let formData = new FormData(form);

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        const postData = (data) => {                  

            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');     
                request.addEventListener('readystatechange', () => {
                    if (request.readyState < 4) {
                        resolve()                
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve()
                    } else {
                        reject()
                    }      
                });

                request.send(data);
            });
           
        };

        const clearInput = () => {
            for (let i=0; i<input.length; i++) {
                input[i].value = '';
            }
        };
            
            postData(json)
                .then(() => {
                    
                    form.style.display = 'none';
                    img.style.display = "block";
                    img.src = "./icons/ajax-loader.gif";
                })
                .then(() => {   
                    img.src = "./icons/herbal.png";
                    img.style.width = "150px";
                })
                .catch(() => {
                    form.style.display = 'none';
                    img.style.display = "block";
                    img.src = "./icons/fish.psd";
                })
                .then(clearInput)
    });              
};

module.exports = sendForm;