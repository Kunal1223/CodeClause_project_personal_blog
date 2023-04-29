function myFunction() {
    alert("Congratulation you subscribed my blog");
}


// var myButtons = document.getElementsByClassName("button1");
// Array.from(myButtons).forEach(function(button) {
//   button.addEventListener('click', function() {
//     alert("Hello World!");
//   });
// });
// let cbackdrop = document.querySelector('.contanier3');
//     cbackdrop.className = '.contanier3 active';

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', e => {
    let cbackdrop = document.querySelector('.contanier3');
    cbackdrop.classList.toggle("active");
});

const resumeBtn = document.getElementById('contain1');
resumeBtn.addEventListener('click', e => {
    let resum = document.querySelector('.contanier4');
    resum.classList.toggle("active1");
    // resum.classList.toggle("contanier4 a");

});

function Reading() {
    alert("Readirec to the new page");
}

function Learning() {
    alert("Happy to see you like this we redirect you to next page.")
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', e => {
    let suggest = document.querySelector('.thanks');
    suggest.classList.add("active3");

    const myTimeout = setTimeout(myGreeting, 3000);

    function myGreeting() {
        let suggest = document.querySelector('.thanks');
        suggest.classList.remove("active3");
    }

    // const msg = document.getElementById('msg')
    // setTimeout(function () {
    //      form.reset()
    // },6000)
    
});

function yFunction() {
    document.getElementById("myForm").reset();
  }
