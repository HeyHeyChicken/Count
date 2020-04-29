const LIBRARIES = {
  Skill: require("../../Libraries/Skill")
};

class Count extends LIBRARIES.Skill{
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    this.Main.Manager.addAction("count.up", function(_intent, _socket){
      if(_intent.Variables.number !== undefined){
        if(!isNaN(parseFloat(_intent.Variables.number))){
          let string = "";
          for(let index = 1; index <= _intent.Variables.number; index++){
            string += index;
            if(index < _intent.Variables.number){
              string += ", ";
            }
            else{
              string += ".";
            }
          }
          _intent.answer(_socket, string);
        }
      }
    });

    this.Main.Manager.addAction("count.down", function(_intent, _socket){
      if(_intent.Variables.number !== undefined){
        if(!isNaN(parseFloat(_intent.Variables.number))){
          let string = "";
          for(let index = _intent.Variables.number; index >= 0; index--){
            string += index;
            if(index > 0){
              string += ", ";
            }
            else{
              string += ".";
            }
          }
          _intent.answer(_socket, string);
        }
      }
    });

    this.Main.Manager.addAction("count.from.to", function(_intent, _socket){
      if(_intent.Variables.from !== undefined && _intent.Variables.to !== undefined){
        if(!isNaN(parseFloat(_intent.Variables.from)) && !isNaN(parseFloat(_intent.Variables.to))){
          let string = "";
          if(_intent.Variables.to < _intent.Variables.from){
            for(let index = _intent.Variables.from; index >= _intent.Variables.to; index--){
              string += index;
              if(index > _intent.Variables.to){
                string += ", ";
              }
              else{
                string += ".";
              }
            }
          }
          else{
            for(let index = _intent.Variables.from; index <= _intent.Variables.to; index++){
              string += index;
              if(index < _intent.Variables.to){
                string += ", ";
              }
              else{
                string += ".";
              }
            }
          }
          _intent.answer(_socket, string);
        }
      }
    });
  }
}

module.exports = Count;
