/**
 * 1.寫一個 waitAndDouble 函數，傳入 i，會等待 i 秒後回傳 2*i。
具體來說，waitAndDouble 會 return 一個 Promise，
這個 Promise 會等待 i 秒後印出 "X seconds passed"，最後 Promise 會 resolve 為 2*i 。

2. const arr = [1,3,1,2];
請依序將對應的元素 i，丟進去 waitAndDouble 函數，過 1 秒後印出回傳的 2，然後再過 3 秒後印出回傳的 6... 直到全部結束後，印出 done ，全部印完時長約為 7 秒。
Output:
1 seconds passed.
1 doubled -> 2
3 seconds passed.
3 doubled -> 6
1 seconds passed.
1 doubled -> 2
2 seconds passed.
2 doubled -> 4
done

3.改用平行運算 waitAndDouble，總共約 3 秒後印出 [2,6,2,4] done。
Output:
1 seconds passed.
1 seconds passed.
2 seconds passed.
3 seconds passed.
[ 2, 6, 2, 4 ] done

*/


function waitAndDouble (i){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${i} seconds passed`)
            resolve(2*i) 
        },i*1000)
    })
}

// waitAndDouble(1)
const arr = [1,3,1,2];
async function test(){
    // for(let i =0;i<arr.length;i++){
    //     let doubleN = await waitAndDouble(arr[i]);
    //     console.log(doubleN)
    // }
    arr.forEach(async (e)=>{
        // await waitAndDouble(arr[i]); 
        let doubleN = await waitAndDouble(e);
        console.log(doubleN)
        
    })
    console.log('done');

}

// console.log(test())


// ```
// 3.改用平行運算 waitAndDouble，總共約 3 秒後印出 [2,6,2,4] done。
// Output:
// 1 seconds passed.
// 1 seconds passed.
// 2 seconds passed.
// 3 seconds passed.
// [ 2, 6, 2, 4 ] done
// ```

async function test3(){
    await Promise.all(arr.map(waitAndDouble))
    console.log('done')
}

test3()


setTimeout
setInterval

// sql 语句

/ orm 

// cosnt postArr = Post.findAll()
//  leftjoin 
// explain