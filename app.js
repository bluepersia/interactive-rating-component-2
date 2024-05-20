document.querySelector ('.c__ratings').addEventListener ('click', handleRatingsClick);
let rating = 0;
let ratingCurrent = null;

function handleRatingsClick (e)
{
    const ratingContainer = e.target.closest ('.c__rating-container');

    const num = ratingContainer.dataset.num;

    rating = Number (num);

    if (ratingCurrent)
        ratingCurrent.classList.remove ('selected');

    ratingCurrent = ratingContainer;

    ratingCurrent.classList.add ('selected');
}


document.querySelector ('.c__btn').addEventListener ('click', handleSubmitClick);

function handleSubmitClick (e)
{
    if (rating === 0)
        return;

        const html = `
        <img src='./images/illustration-thank-you.svg' alt='Thank you illustration' class='c__thanks__img'/>
        <p class='c__thanks__selected'>You selected ${rating} out of 5</p>
        <h1 class='c__thanks__title'>Thank you!</h1>
        <p class='c__thanks__body'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        `
    
        const c = document.querySelector ('.c');
        c.classList.add ('thanks');
        c.innerHTML = html;
}