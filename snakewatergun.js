//  Use javascript to crteate a game of snake water and gun.The game should ask you to enter S ,W , G.  The computer will randomly generates S,W,G and declare win or loose. Use confirm or prompmt where it is used


user = prompt("Enter S, W, or G")
user.toUpperCase()

let cpuI = Math.floor(Math.random()*3)
let cpu = ["S","W","G"][cpuI]

const match = (cpu,user)=>{
    if(cpu==user){
        return "Nobody beacuase match is tied"
    }
    else if(cpu=="S" && user=="W"){
        return "cpu"
    }
    else if(cpu=="S" && user=="G"){
        return "user"
    }
    else if(cpu=="W" && user=="G"){
        return "cpu"
    }
    else if(cpu=="W" && user=="S"){
        return "user"
    }
    else if(cpu=="G" && user=="S"){
        return "cpu"
    }
    else if(cpu=="G" && user=="W"){
        return "user"
    }
}

let result = match(cpu,user)
console.log(`CPU:${cpu},You:${user}\n The winner is ${result.toUpperCase()}`)