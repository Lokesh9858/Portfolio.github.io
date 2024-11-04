document.addEventListener('DOMContentLoaded',()=>{
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll =() => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
const typed = new Typed('.multiple-text', {
    strings: ['frontend developer', 'backend developer','web developer','application developer'],
    typeSpeed: 50,
    backSpeed:80,
    backDelay:1200,
    loop:true,
  });
});

/* <section class="services" id="services">
        <h2 class="heading">Skills &<span>Abilities</span></h2>

        <div class="services-container">
            <div class="services-box">
                <i class="bx bx-code"></i>
                <h3>web development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio delectus temporibus officia,
                    obcaecati deserunt cumque molestias perferendis, dignissimos eveniet mollitia quo maiores accusamus
                    doloremque.</p>
                <a href="#" class="btn">Read More</a>
            </div>
            <div class="services-box">
                <i class="bx bx-palette"></i>
                <h3>UI/UX Designer</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio delectus temporibus officia,
                    obcaecati deserunt cumque molestias perferendis, dignissimos eveniet mollitia quo maiores accusamus
                    doloremque.</p>
                <a href="#" class="btn">Read More</a>
            </div>
            <div class="services-box">
                <i class="bx bxl-android"></i>
                <h3>App development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio delectus temporibus officia,
                    obcaecati deserunt cumque molestias perferendis, dignissimos eveniet mollitia quo maiores accusamus
                    doloremque.</p>
                <a href="#" class="btn">Read More</a>
            </div>
        </div>
    </section>*/
    /*.services h2{
    text-align: center;
    margin-bottom: 5rem;
}
.services-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}
.services-container .services-box{
    flex: 1 1 30rem;
    background: var(---snd-bg-color);
    padding: 6rem 2rem 6rem;
    border-radius: 2rem;
    text-align: center;
    border: 0.3rem solid var(--bg-color);
    transition: 0.3s ease;
}
.services-container .services-box:hover{
    border-color: var(--main-color);
    transform: scale(1.02);
}
.services-box i{
    font-size: 7rem;
    color: var(--main-color);
}
.services-box h3{
    font-size: 2.6rem;
}
.services-box p{
    font-size: 1.6rem;
    margin: 1rem 0 3rem;
}
<section class="education" id="education">
        <div class="education-box">
            <h2 class="heading">My Education</h2>

            <div class="wrapper">
                <div class="education-item">
                    <img src="c:\Users\lokes\OneDrive\Pictures\myphoto.jpg" alt="">
                    <h2>Marilyn</h2>
                    <div class="rating">
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur repudiandae
                        distinctio dolores labore dignissimos?</p>
                </div>
                <div class="education-item">
                    <img src="c:\Users\lokes\OneDrive\Pictures\myphoto.jpg" alt="">
                    <h2>Julia</h2>
                    <div class="rating">
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur repudiandae
                        distinctio dolores labore dignissimos?</p>
                </div>
                <div class="education-item">
                    <img src="c:\Users\lokes\OneDrive\Pictures\myphoto.jpg" alt="">
                    <h2>Aleksa</h2>
                    <div class="rating">
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                        <i class="bx bxs-star" id="star"></i>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur repudiandae
                        distinctio dolores labore dignissimos?</p>
                </div>
            </div>
        </div>
    </section>
    .education{
        background: var(---snd-bg-color);
    }
    .education-box{
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .education .heading{
        margin-bottom: 5rem;
    }
    .education-box img{
        width: 15rem;
        border-radius: 50%;
        border: 3px solid var(--main-color);
        box-shadow: 0 0 25px var(--main-color);
    }
    .wrapper{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 3rem;
    }
    .education-item{
        min-height: 450px;
        max-width: 450px;
        background: var(--bg-color);
        border: 0.3rem solid var(--bg-color);
        border-radius: 2rem;
        margin: 0 2rem;
        padding: 20px 20px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        color: var(--text-color);
        transition: 0.3s ease;
    }
    .education-item:hover{
        border-color: var(--main-color);
        transform: scale(1.02);
    }
    .education-item h2{
        font-size: 3rem;
    }
    .education-item p{
        font-size: 1.5rem;
        text-align: center;
    }
    #star{
        color: gold;
        font-size: 2rem;
    }
        
    */
   /*.projects {
    padding: 4rem 2rem;
    background-color: #f9f9f9; /* Light background color */

/*
.projects h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: #333; /* Dark color for text */
//}*/

/*.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center items */
   // gap: 2rem; /* Space between items */
//}

// .project-item {
//     background: white; /* White background for each item */
//     border-radius: 10px; /* Rounded corners */
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//     padding: 2rem;
//     text-align: center;
//     max-width: 300px; /* Max width for each project item */
//     width: 100%; /* Full width up to max */
//     transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition for hover effects */
// }

// .project-item:hover {
//     transform: scale(1.02); /* Scale up on hover */
//     box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
// }

// .project-image {
//     width: 100%; /* Responsive image */
//     border-radius: 10px; /* Rounded corners */
//     margin-bottom: 1rem; /* Space below the image */
// }

// .project-item h3 {
//     font-size: 1.8rem;
//     color: #2c3e50; /* Darker shade for headings */
//     margin-bottom: 1rem;
// }

// .project-item p {
//     font-size: 1.2rem;
//     color: #555; /* Slightly lighter color for text */
//     margin: 0.5rem 0; /* Margin for spacing */
// }

// .project-button {
//     display: inline-block;
//     padding: 0.5rem 1rem;
//     background-color: #3498db; /* Button color */
//     color: white; /* Button text color */
//     border: none;
//     border-radius: 5px; /* Rounded corners for button */
//     text-decoration: none; /* No underline */
//     transition: background-color 0.3s ease; /* Transition effect */
// }

// .project-button:hover {
//     background-color: #2980b9; /* Darker shade on hover */
// }
