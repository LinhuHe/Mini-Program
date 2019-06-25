// pages/home/home.js
Page({
  data:{
    name : "123456",
    students : [
      {id:1,name: "a"},
      {id:2,name: "b"}
    ],
    counter: 0
  },
  counteradd()
  {
    this.setData({
      counter: this.data.counter+1

    })
  }


})