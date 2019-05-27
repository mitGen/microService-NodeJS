function check(obj, objQuery, response, get){
  if(Object.keys(objQuery).length === 0 && get==true){
    response.send(obj)
  }else if(objQuery.active && objQuery.active == 'true' || objQuery.active == 'false'){
    obj.active = objQuery.active;
    get == true ? response.send(obj):response.status(200).send('Request send')

  }else{
    response.status(400).send('Отправленные данные не корретны')
  }
}

module.exports = check;
