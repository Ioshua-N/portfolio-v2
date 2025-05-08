const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
const logo = document.querySelector('.logo');
const cv = document.querySelector('.cv');

function updateLogoColor()
{
    if (currentPage % 2 === 0 && currentPage !== 0)
    {
        logo.classList.add('color-white');
        logo.classList.remove('color-black');
        logo.classList.remove('color-green');
    }
    else if (currentPage == 0)
    {
        logo.classList.add('color-green');
        logo.classList.remove('color-white');
        logo.classList.remove('color-black');        
    }
    else
    {
        logo.classList.add('color-black');
        logo.classList.remove('color-white');
        logo.classList.remove('color-green');
    }
}

function updateCvColor()
{
    if (currentPage % 2 === 0 && currentPage !== 0)
    {
        cv.classList.add('cv-invert');
    }
    else
    {
        cv.classList.remove('cv-invert');        
    }
}

function scrollPage(delta)
{
    currentPage += delta;

    if (currentPage < 0)
    {
        currentPage = 0;
    }
    else if (currentPage >= totalPages)
    {
        currentPage = totalPages - 1;
    }

    pages[currentPage].scrollIntoView({behavior: 'smooth'});
}

function updateArrowVisibility() {
    const arrow = document.querySelector('.down-arrow');

    if (currentPage === totalPages - 1) {
        arrow.classList.add('hidden');
    } else {
        arrow.classList.remove('hidden');
    }
}

window.addEventListener('wheel', function(event) 
{
    if (event.deltaY > 0)
    {
        scrollPage(1);
        scrollSleep = this.setTimeout(function(){
            updateLogoColor();
            updateCvColor();
            updateArrowVisibility();
        }, 375);
    }
    else
    {
        scrollPage(-1);
        scrollSleep = this.setTimeout(function(){
            updateLogoColor();
            updateCvColor();
            updateArrowVisibility();
        }, 35);
    }

    scrollSleep = this.setTimeout(function(){}, 250);
}, {passive: false});

window.onload = function()
{
    var scrollPosition = 0;
    currentPage = 0;

    window.scrollTo({top: scrollPosition, behavior: 'smooth'});
    updateLogoColor();
    updateCvColor();
    updateArrowVisibility();
};