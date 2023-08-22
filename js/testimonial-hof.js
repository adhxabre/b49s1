const testimonialData = [
    {
        name: "Nico Ari",
        comment: "Saya sangat bersemangat ketika ngoding sambil minum kopi siang hari di bulan puasa",
        rating: 1,
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Riska Agung",
        comment: "Saya jarang sahur",
        rating: 1,
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Jaya Saleh",
        comment: "Saya sangat bersemangat ketika buka puasa",
        rating: 5,
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Kevin",
        comment: "Saya suka ikut cari takjil di bulan puasa",
        rating: 4,
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
]

function showTestimonial() {
    let testimonialForHtml = ''

    testimonialData.forEach((item) => {
        testimonialForHtml += `<div class="testimonial">
        <img src=${item.image} class="profile-testimonial" />
        <p class="quote">${item.comment}</p>
        <p class="author">- ${item.name}</p>
        <p class="author">${item.rating}</p>
    </div>`
    })

    document.getElementById("testimonials").innerHTML = testimonialForHtml
}
showTestimonial()


// function for filtering testimonials
function filterTestimonials(rating) {
    let testimonialForHtml = ''

    const dataFiltered = testimonialData.filter(function (data) {
        return data.rating === rating
    })
    console.log(dataFiltered)

    if(dataFiltered.length === 0) {
        testimonialForHtml = `<h3>Data not found ! </h3>`
    } else {
        dataFiltered.forEach((data) => {
            testimonialForHtml += `<div class="testimonial">
                <img src=${data.image} class="profile-testimonial" />
                <p class="quote">${data.comment}</p>
                <p class="author">- ${data.name}</p>
                <p class="author">${data.rating}</p>
            </div>`
        })
    }

    document.getElementById("testimonials").innerHTML = testimonialForHtml
}
