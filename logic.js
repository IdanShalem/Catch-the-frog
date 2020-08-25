const Frog = function(){

    const getRandomNumber = (topNum) => Math.random() * topNum

    const getRandomColor = () => {
        return `rgb(${Math.floor(getRandomNumber(255))},${Math.floor(getRandomNumber(255))},${Math.floor(getRandomNumber(255))})`
    }

    const _frogs = []
    let frogsId   
    let level 
    
    
    const getFrogs = () => _frogs
    
    const addFrog = () => {
        const xpos = getRandomNumber(820) + 10
        const ypos = getRandomNumber(400) + 70
        const color = getRandomColor()
        _frogs.push({
            id: `f${frogsId}`,
            location: {xpos, ypos},
            color,
            size: function(){return ((550 - (550 - this.location.ypos)) / 60 + 1)}  
        })
        frogsId++
    }

    const removeFrog = (id) => {
        const index = _frogs.findIndex(f => f.id === id)
        if(index >= 0){
            _frogs.splice(index, 1)
        }
    }

    const addLevel = () => {
        level++
        for(let i = 0; i < level+2; i++){
            addFrog()
        }
    }

    const getLevel = () => level

    const removeAllFrogs = () => _frogs.splice(0, _frogs.length)

    const resetAll = function(){
        removeAllFrogs()
        frogsId =1   
        level = 0
        addLevel()
    }

    return {getFrogs, addFrog, removeFrog, addLevel, getLevel, removeAllFrogs, resetAll} 
}