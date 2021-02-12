const body = document.body;
const content = document.querySelector('.content');
const wrapper = document.querySelector('.wrapper');

// footer list points
const ul = document.createElement("ul");

const messages = [
    `Footer`, 
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
    corporis quaerat doloribus, reiciendis sunt id modi`, 
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
    corporis quaerat doloribus, reiciendis sunt id modi, commodi
    laudantium`, 
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
    corporis quaerat doloribus, reiciendis sunt id modi, commodi
    laudantium ad voluptas iusto ex recusandae.`, 
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
    corporis quaerat doloribus, reiciendis sunt id modi, commodi
    laudantium ad voluptas iusto ex recusandae.`
];

messages.forEach(message => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    ul.appendChild(li);
    console.log(ul);
});


function printFunc() {
    const contentHeight = content.offsetHeight;
    console.log('contentheight', contentHeight);

    // create a4 size paper temporary Div
    const paperNode = document.createElement("div");
    paperNode.style.width = "21cm";
    paperNode.style.height =  "29.7cm";
    
    // content inside the paper
    const paperContent = document.createElement("div");
    paperContent.innerHTML = content.innerHTML;
    paperContent.style.padding = "48px"; // additional padding to calculate the default print margin

    paperNode.appendChild(paperContent);
    content.appendChild(paperNode);

    // create footer parent div
    const footerWrapper = document.createElement("div");
    // create footer child div
    const footerContent = document.createElement("div");

    footerContent.appendChild(ul);
    footerWrapper.appendChild(footerContent);

    const multipleHeights = [1927, 2954, 3981, 5008, 6035];

    if (paperContent.offsetHeight > 900) {
        multipleHeights.forEach(mh => {
            if (paperContent.offsetHeight > mh) {
                const blankDiv = document.createElement("div");
                blankDiv.classList.add("blank_div");
                body.appendChild(blankDiv);
            }
        })
        body.appendChild(footerWrapper);

    } else {
        wrapper.appendChild(footerContent);
    }

    paperNode.remove();
    
    window.print();

    footerWrapper.remove();
    footerContent.remove();

    const blankDivs = document.querySelectorAll(".blank_div");
    blankDivs.forEach(item => {
        item.remove();
    })
}

