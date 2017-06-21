$(document).ready(function(){

    var db = 'test-graphql';
    var collection = 'bikes';
    var apiKey = 'uqqEctpkJziPyUmQJ_McM7Bers0p3rlH';
    var url = `https://api.mlab.com/api/1/databases/${db}/collections/${collection}?apiKey=${apiKey}`;

    function fetchData(){

        $.ajax({
            url: url
        }).done(appendData);

    }

    function appendData(data){
        for(datum in data){
               console.log(datum);
        }
     
        var add = `<div class="col-md-12 datum">`;
    }

    fetchData();
});