function t(N,arr,M){
    let newArr = arr.slice(0,N)
    let maxN = -Infinity
    for(let i=0;i<newArr.length;i++){
        let tmpArr = newArr.slice(i,i+M)
        let  newMaxN = tmpArr.reduce((pre,cur)=> pre+cur)
        if(newMaxN > maxN){
            maxN = newMaxN
        }
    }
    return maxN;
}

console.log(t(6,[10,20,30,15,23,12],3))