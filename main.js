$.ajax({
    url: 'https://api.rootnet.in/covid19-in/stats/latest',
    dataType: 'json',
    success: function(data) {
      $(document).ready(function(){
          var total = data.data.summary.total
          var deaths = data.data.summary.deaths
          var discharged = data.data.summary.discharged
          var active = total-(discharged+deaths)
          $("#a").text(total)
          $("#b").text(active)
          $("#c").text(deaths)
          $("#d").text(discharged)
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
  
