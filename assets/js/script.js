class List{
    constructor(){
        for (const item of arguments) {
            return item;
        }
        let index =0;
        index++;
    }
    Get(object,callback){
        if (callback(object)) {
            return object;
        }

    }

    Add(object){
       object=arguments
    }
}

function getItem(object) {
    m=>m.object=object
}


 let list = new List();
 list.Add(1);
 console.log(list);
 



