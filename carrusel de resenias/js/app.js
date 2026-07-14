const testimonials = [
    {
        name: "Dylan D",
        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "In my journey as a professional, I have relied heavily on Apple products to drive my success. The intuitive design and reliability of devices like the MacBook and iPhone have transformed the way I work, making tasks easier and more efficient.",
    },
    {
        name: "Joaquin P",
        photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I love Apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
    },
    {
        name: "Esteban M",
        photoUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!",
    },
    {
        name: "Piero R",
        photoUrl: "https://images.unsplash.com/photo-1726722886957-2ed42b15aaa3?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "If you are a business owner, and you don't have Apple in your toolkit just yet, I highly recommend that you check it out.",
    }
]

let idx = 0;

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx]
    imgEl.src = photoUrl;
    textEl.textContent = text;
    usernameEl.textContent = name;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}