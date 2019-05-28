const download = () => {
    let block = document.querySelectorAll('.moduleapp .module__info-book');

    block.forEach(item => {
        let aTag = document.createElement('a');
        aTag.setAttribute('href', "./src/histfac.pdf");
        aTag.setAttribute('download', 'download');
        aTag.setAttribute('target', '_blank');
        item.appendChild(aTag);
        aTag.appendChild(item.querySelector('.download'));
    });
};

module.exports = download;