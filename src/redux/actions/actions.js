let fecha= new Date()

export function addCard(name) {
   let dia= fecha.getDate() - 2;
   let mes= fecha.getMonth() + 1;
   let año= fecha.getFullYear();
   name= name.replaceAll(" ","-");
    return function(dispatch){
        fetch(`https://api.covid19api.com/country/${name}?from=${año}-${mes}-${dia-1}T00:00:00Z&to=${año}-${mes}-${dia}T00:00:00Z`)
        .then((e)=> e.json())
        .then((data)=> { 
            dispatch({ type: 'ADD_CARD',
                       payload:data[1] })
        })
    }
}

export function getDetail(name){
    name= name.replaceAll("%20","-");
    return function(dispatch){
        fetch(`https://api.covid19api.com/total/country/${name}`)
        .then((e)=> e.json())
        .then((data)=> {
            dispatch({ type: 'GET_DETAIL',
                      payload: data
            })
        })
    }
}