// Theme Changing Functionality
const theme_btn = document.querySelector('.theme_btn');
const themeBtnToggle = document.querySelector('.themeBtnToggle');

theme_btn.onclick = () => {

    themeBtnToggle.classList.toggle('active'); 

    if(themeBtnToggle.classList.contains('active')) {

        document.body.classList.add('active');
    }else {

        document.body.classList.remove('active');
    }
}

// Responsive Menu Sliding Functionality
const toggleMenu = document.querySelector('.toggleMenu');
const all_line = document.querySelectorAll('.line');

const nav_right = document.querySelector('.nav_right');

toggleMenu.onclick = () => {

    all_line.forEach(ForALLLines => {

        ForALLLines.classList.toggle('active');

        if(ForALLLines.classList.contains('active')) {

            nav_right.classList.add('active');
        }else {

            nav_right.classList.remove('active');
        }

    })
}
