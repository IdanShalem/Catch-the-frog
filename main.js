const frogs = Frog()
const render = Renderer()

let time
let interval
let colorerTimer
let constant = 0
let isPlaying = false

const intervalSet = function(seconds){
    render.renderHead(frogs.getLevel() + constant)
    interval =  setInterval(function(){
        seconds--
        colorerTimer = setTimeout(function(){
            render.renderHead(seconds, 'black')
        }, 500)
        render.renderHead(seconds, 'red')
        if(seconds <= 0){
            clearInterval(interval)
            clearTimeout(colorerTimer)
        }
    },1000)
    
}
const play = function(){
        isPlaying = true
        render.renderFooter(frogs.getFrogs().length, frogs.getLevel(), isPlaying)
        time = setTimeout(function() {
            if(frogs.getFrogs().length > 0){
                frogs.removeAllFrogs()
                render.renderLoose() 
                isPlaying = false
                render.renderFooter('-', '-', isPlaying)
            }
        }, ((frogs.getLevel() + 2) * 1000))
        render.renderFrogs(frogs.getFrogs())
        intervalSet(frogs.getLevel() + constant) 
}

const startToPlay = function(){
    if(!isPlaying){
        frogs.resetAll()
        play()
        let seconds = frogs.getLevel() + constant
        render.renderHead(seconds)
    } 
}

$('#frogs-container').on('click', '.fas', function(){
    frogs.removeFrog($(this).data().id)
    if(frogs.getFrogs().length === 0){
        frogs.addLevel()
        clearTimeout(time)
        clearInterval(interval)
        clearTimeout(colorerTimer)
        play()
    }
    render.renderFooter(frogs.getFrogs().length, frogs.getLevel(), isPlaying)
    render.renderFrogs(frogs.getFrogs())
})

