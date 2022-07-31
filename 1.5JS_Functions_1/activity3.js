(function(){
    function iWithdraw(ammountRequired){
      let availableNotes = [20, 10, 5],
          result = [];
  
      if(ammountRequired && ammountRequired > 0) {
        while(ammountRequired > 0) {
          for (let i = 0; i < availableNotes.length; i++) {
            let note = availableNotes[i];
            if(ammountRequired - note >= 0) {
              ammountRequired -= note;
              result.push(note);
              break;
            } else if(i === availableNotes.length - 1 && ammountRequired > 0) {
            }
          }
        }
      } else if(ammountRequired <= 0) {
      }
        return result;
    }
    console.log(iWithdraw(35));
  })();