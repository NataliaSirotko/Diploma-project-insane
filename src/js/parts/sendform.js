const sendForm = (form, wrapper) => {

    let input = form.getElementsByTagName('input');

    if (form.querySelector('[name="phone"]')) {
        let phone = form.querySelector('[name="phone"]');
        phone.addEventListener('keyup', () => {
            let re = /(\+{0,1}\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/,
            elem = phone.value.replace(/[^0-9\+]/g, '').match(re);

            phone.value = !elem[2] ? elem[1] : elem[1] + ' (' + elem[2] + (elem[3] ? ') ' + elem[3] : '') + (elem[4] ? '-' + elem[4] : '');
        });
    }

    let mail = form.querySelector('[type="email"]');
    mail.addEventListener('keyup', () => {
        mail.value = mail.value.replace(/[А-Яа-яЁё]/g, '');
    });

    if (form.querySelector('[type="datetime"]')) {
        let when = form.querySelector('[type="datetime"]');
        when.addEventListener('keyup', () => {
            when.value = when.value.replace(/[^0-9\/\.]/g, '');
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();      
        let img = document.createElement('img');
        img.style.width = "260px";
        img.style.borderRadius = '10px';
        img.style.marginTop = "100px";
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
                    //img.src = "./icons/thanks.jpeg";
                })
                .catch(() => {
                    form.style.display = 'none';
                    img.style.display = "block";
                    img.src = "./icons/fish.psd";
                    //img.src = "./icons/error.jpg";
                })
                .then(clearInput)

        document.querySelectorAll('.sidecontrol a').forEach(item => {
            item.addEventListener('click', () => {          
                form.style.display = 'block';
                img.style.display = "none";
            }); 
        });
    });              
};

module.exports = sendForm;