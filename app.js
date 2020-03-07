const step1Dom = document.querySelector(".step-1");
const step2Dom= document.querySelector(".step-2");
const step3Dom = document.querySelector(".step-3");
const group1Dom = document.querySelector(".group-1");
const group2Dom = document.querySelector(".group-2");
const group3Dom = document.querySelector(".group-3");
const line1Dom = document.querySelector("#line1-2");
const line2Dom = document.querySelector("#line2-3");
let btns = document.querySelectorAll(".btn");
let username;
let email;

window.onload = function () {
    step1Dom.classList.add("step-on");
    step2Dom.classList.add("step-off");
    step3Dom.classList.add("step-off");

    group2Dom.style.display = "none";
    group3Dom.style.display = "none";

    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            if(this.dataset.back === "page1") {
                step1Dom.classList.remove("step-off");
                step1Dom.classList.add("step-on");
                step2Dom.classList.add("step-off");
                step2Dom.classList.remove("step-on");
                step3Dom.classList.add("step-off");
                step3Dom.classList.remove("step-on");
                group1Dom.style.display = "block";
                group2Dom.style.display = "none";
                group3Dom.style.display = "none";
                line1Dom.classList.remove("hr-pull");
                line2Dom.classList.remove("hr-pull");
                email = document.querySelector("#email").value;
            }else if(this.dataset.next === "page2" ) {
                step2Dom.classList.add("step-on");
                step2Dom.classList.remove("step-off");
                step3Dom.classList.add("step-off");
                step3Dom.classList.remove("step-on");
                group2Dom.style.display = "block";
                group1Dom.style.display = "none";
                group3Dom.style.display = "none";
                line1Dom.classList.add("hr-pull");
                line2Dom.classList.remove("hr-pull");
                username = document.querySelector("#username").value;
            }else if(this.dataset.back === "page2") {
                step2Dom.classList.add("step-on");
                step2Dom.classList.remove("step-off");
                step3Dom.classList.add("step-off");
                step3Dom.classList.remove("step-on");
                group2Dom.style.display = "block";
                group1Dom.style.display = "none";
                group3Dom.style.display = "none";
                line1Dom.classList.add("hr-pull");
                line2Dom.classList.remove("hr-pull");
            }           
            else if(this.dataset.next === "page3") {
                step3Dom.classList.add("step-on");
                step3Dom.classList.remove("step-off");
                group3Dom.style.display = "block";
                group1Dom.style.display = "none";
                group2Dom.style.display = "none";
                line1Dom.classList.add("hr-pull");
                line2Dom.classList.add("hr-pull");
            }else if(this.dataset.submit === "submit") {
                if(username || email) {
                    alert("submit");
                }
            }
        });
    }    
}