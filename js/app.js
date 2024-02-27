const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)

}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-white shadow-xl p-4 w-full`;
        phoneCard.innerHTML = `
                    <figure>
                        <img src="${phone.image}" alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>${phone.slug}</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary px-6 py-2 text-white text-[1.25rem] font-semibold bg-[#0D6EFD] border-0 hover:bg-[#0d6dfdf3]">Show Details</button>
                        </div>
                    </div>
        `

        phoneContainer.appendChild(phoneCard)

    })
}

loadPhone();