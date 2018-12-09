
var app = new Vue ({
    el: '#app',
    // el used to link id in html
    data: {
        mainmessage: "this is working "
    },

    
    methods : {
      fetchData(e) {
        let targetURL = `./includes/connect.php`;// this will be a number (id)
        
        
        fetch(targetURL) // pass in the one or many query
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.textData(data[0]);
        })
        .catch(function(error) {
          console.error(error);
          
        });
      },
      info() {
        //debugger;
        this.info=true;
      },
      textData(data) {
        this.mainmessage = data.content
      }
    }
  });
  
  function inputData(text) {
    const {content} = mainmessage;
    document.querySelector(".first").textContent = content;
    
    
  };
  


  

