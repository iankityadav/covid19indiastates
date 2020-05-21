$.ajax({
    url: 'https://api.thevirustracker.com/free-api?countryTotal=IN',
    dataType: 'json',
    success: function(data) {
      $(document).ready(function(){
     $("#a").text(data.countrydata[0].total_cases)
     $("#b").text(data.countrydata[0].total_active_cases)
     $("#c").text(data.countrydata[0].total_deaths)
     $("#d").text(data.countrydata[0].total_recovered)
  });
    }
  });
  
  $.ajax({
    url: 'https://api.rootnet.in/covid19-in/stats/latest',
    dataType: 'json',
    success: function(res) {
      $(document).ready(function(){
          $("#s").text(res.data.regional[0].loc);
          $("#s1").text(res.data.regional[0].totalConfirmed);
          $("#s2").text(res.data.regional[0].deaths);
          $("#s3").text(res.data.regional[0].discharged);
          
          for(let i=0;i<res.data.regional.length;i++){
              $('#select').append($('<option>', {
              text: res.data.regional[i].loc
          }));
          }
          var selectElem = document.getElementById("select");
          selectElem.addEventListener('change', function() {
            var i = selectElem.selectedIndex;
            $("#s").text(res.data.regional[i].loc);
            $("#s1").text(res.data.regional[i].totalConfirmed);
            $("#s2").text(res.data.regional[i].deaths);
            $("#s3").text(res.data.regional[i].discharged);
    });
      });
  }
  });    
  
