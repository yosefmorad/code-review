var items = [{id:1,name:"book",qty:"10"},{id:2,name:"Pen",qty:5}]; // global

function add(name , qty=1){
  const item = { id: items.length+1, name:name, qty:qty};
  items.push(item);
  return  items
 
}

function del(id){
  for (let i=0;i<=items.length;i++){ // off-by-one
    if (items[i] && items[i].id == id){ // ==
      items.splice(i,1);
      return;
    }
  }
}

