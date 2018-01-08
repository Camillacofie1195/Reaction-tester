            
            var start = new Date().getTime();

            function getRandomColour() {
                
                var letters = "0123456789ABCDEF".split('');
                
                var colour = "#";
                
                for (var i=0; i < 6; i ++) {
                    
                    colour += letters[Math.floor(Math.random() * 16)];
                }
                
                return colour;
            }
            
            function makeShapeAppear() {
                
                var top = Math.random() * 400;
                
                var left = Math.random() * 400;
                
                var width = (Math.random() * 300) + 100;
                
                if (Math.random() > 0.5) {
                     document.getElementById("shape").style.borderRadius = "50%";
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0";
                }
                
            document.getElementById("shape").style.backgroundColor = getRandomColour();
                
                document.getElementById("shape").style.width = width + "px";
                
                document.getElementById("shape").style.height = width + "px";
                document.getElementById("shape").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
                
            }
            
            function appearAfterDelay() {
             
                  setTimeout(makeShapeAppear, Math.random()*2000);
                
            }
            
            appearAfterDelay();
          
            
            document.getElementById("shape").onclick = function() {
                
            document.getElementById("shape").style.display= "none";
                
            var end = new Date().getTime();
                
            var timeTaken = (end - start) /1000;
                
            document.getElementById("timeTaken").innerHTML = timeTaken + "s."; 
                
                
            appearAfterDelay();
                
            }
            
            
    
    
