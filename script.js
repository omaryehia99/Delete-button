document.addEventListener("DOMContentLoaded", function()
    {

        color_buttons();
        for(var i=0; i<cardarray.length; i++)
        {
          
            cards_create(cardarray[i].title,cardarray[i].text,cardarray[i].button);
        }

       
        button_events();
     
        theme_event();

       
        //1- call a fn that create the cards divs
        //2- append el data el fl array of objects inside the divs

    })


   function theme_event(){
   
    var circled_buttons = document.getElementsByClassName("circled-button")


        for(var i=0; i<circled_buttons.length;i++){
          
            var button = circled_buttons[i];
            
            button.addEventListener('click',switch_color);  
            
            
        }
        }


    function switch_color(e){
    

        if(e.target.id == 'blue_b')
        {
            
            var cards_all = document.querySelectorAll('.card.bg-warning');

            for(var i=0;i<cards_all.length;i++){
                var c = cards_all[i];
                c.classList.remove('bg-warning');
                c.classList.add('bg-primary');
               
            
            }
        
        }

    
        else if(e.target.id = 'yellow_b')
        {
        
            var cards_all = document.querySelectorAll('.card.bg-primary');

            for(var i=0;i<cards_all.length;i++){
                var c = cards_all[i];
                c.classList.remove('bg-primary');
                c.classList.add('bg-warning');
            
            }
        
        }

   

     
    }
    

    function color_buttons(){
     
        var cardrow = document.createElement('div');
        cardrow.className="row row1";

        var parent_div = document.createElement('div')
        parent_div.className="parent d-flex";

        var blue_button = document.createElement('button')
        blue_button.className = " circled-button blue-button bg-primary"
        blue_button.id='blue_b'

        
        var yellow_button = document.createElement('button')
        yellow_button.className = " circled-button yellow-button bg-warning"
        yellow_button.id='yellow_b'
        
        parent_div.appendChild(blue_button);
        parent_div.appendChild(yellow_button);

        cardrow.appendChild(parent_div);
     
        document.getElementsByClassName('container')[0].prepend(cardrow);//

    }

    function button_events(){
    
        var list_buttons = document.getElementsByClassName("btn");

        for(var i=0; i<list_buttons.length; i++){
            
            list_buttons[i].addEventListener('click',delete_function);

        }



    }

    function delete_function(e){


        var selected_button = e.target.parentNode.parentNode;
        selected_button.remove();

    }

    function cards_create(title,text,button){
       
    var cardColumn = document.createElement('div');
    cardColumn.className="col-md-4 gy-5";

    var Card = document.createElement('div');
    Card.className="card bg-primary text-white p-3";

    var cardTitle = document.createElement('h5');
    cardTitle.className="card-title";
    cardTitle.innerText = title;
    cardTitle.style.paddingLeft="12px";
    cardTitle.style.paddingRight="12px";

    var cardBody = document.createElement('div');
    cardBody.className="card-body d-flex justify-content-between align-items-start pb-3";
    var cardText = document.createElement('p');
    cardText.className="card-text text-wrap";
    cardText.innerText=text;
    var cardButton = document.createElement('a');
    cardButton.className="btn btn-danger align-self-center mb-4";
    cardButton.innerText= button;

    Card.append(cardTitle);


    cardBody.append(cardText);
    cardBody.append(cardButton);
    Card.append(cardBody);
    cardColumn.append(Card);
    document.getElementsByClassName('row row2')[0].appendChild(cardColumn);//
    

    }


    var cardarray = [
        {
            id:1,
            title: "card title",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ipsa!",
            button:"delete",
        },
        {
            id:2,
            title: "card title",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ipsa!",
            button:"delete",
        },
        {
            id:3,
            title: "card title",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ipsa!",
            button:"delete",
        },
        {
            id:4,
            title: "card title",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ipsa!",
            button:"delete",
        },
    ]

