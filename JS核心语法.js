var x = 5;
// 变量

// 数据类型
var num=10
var str='文本'
var name="李四"
var bool=true
var myNull=null
// 用于清空变量内容，表示空
var myun=undefined
// undefined容器的默认值

// 输出
console.log(num)
console.log(str)

// 运算符
var result = "你好"+"世界"
console.log(result)


console.log(2===2)//比较两个值是否相等

function getsum(start,end){
    console.log("开始")
    var sum=0
    for(var i=start;i<=end;i++){
        sum+=i
    }
    return sum
    console.log("结束")
}

var total=getsum(1,100)
console.log(total)

//数组
var arr=[1,2,3,4,5]
console.log(arr[0])
console.log(arr.length)

//遍历
arr.forEach(function(item,index){console.log(item,index)
})


var obj={
    name:"张三",
    age:18,
}

for(var k in obj){
    console.log(k,obj[k])
}