$(function() {

    var data = [{
        "contact": "CVS Caremark",
        "number": "866-241-7414", 
        "use": "Opt. 1 for transferring scripts from Caremark Mail Order"
        },{
        "contact": "Express Scripts",
        "number": "844-581-4857",
        "use": "When transferring scripts from Express Scripts Mail Order"
        },{
        "contact": "USPS Customer Service",
        "number": "800-275-8777",
        "use": "For patients to call for missing delivery"
        },{
        "contact": "CVS Help Desk",
        "number": "866-528-7272",
        "use": "Tech issues, RxConnect issues, password reset, etc"
        },{
        "contact": "Cardinal No Sub Line",
        "number": "877-265-2704",
        "use": "When specific NDC is needed for patient"
        },{
        "contact": "CVS Translation Line",
        "number": "888-898-1407",
        "use": "To communicate with patients who need translator"
        },{
        "contact": "CVS Specialty Pharmacy",
        "number": "800-308-1977",
        "use": "Opt. 5 will connect to pharmacy"
        }]

    function compare( a, b ) {
        if ( a.contact < b.contact){
            return -1;
        }
        if ( a.contact > b.contact){
            return 1;
        }
            return 0;
        }
        
    data.sort( compare );
    
    for (i=0;i<data.length;i++){
        var msg = "";
        msg += "<div class='accordian-title'><i class='fa fa-angle-right show'></i>" + data[i].contact + "</div>";
        msg += "<div class='accordian-info expanded'><div class='phone'>" + data[i].number + "</div>";
        msg += "<div class='when-to-use'>" + data[i].use + "</div></div>";

        $(".accordian").append(msg);
    }

    $('.accordian-title').on('click', function (){           
        $(this).next().toggle();
        $(this).find('.fa-angle-right').toggleClass('fa-rotate-90');
        $(this).toggleClass('expanded');
    })
                 
})