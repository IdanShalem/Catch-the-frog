const Renderer = function(){
    const renderHead = function(seconds, color='yellow'){
        $('#head').empty()
        if(seconds === 1){
            $('#head').append(`<h1 style="color:${color}">${seconds} second left</h1>`)
        } else{
            $('#head').append(`<h1 style="color:${color}">${seconds} seconds left</h1>`)
        } 
    }
    
    const renderLoose = function(){
        $('#frogs-container').empty()
        $('#head').empty()
        $('#frogs-container').append('<h1>No more frogs for you :(</h1>')
    }
    
    const renderFrogs = (frogs) => {
        $('#frogs-container').empty()
        for(let frog of frogs){
            let $newFrog = $(`<i class="fas fa-frog" data-id='${frog.id}'></i>`)
            $newFrog.css({
                'display': 'inline-block',
                'position': 'absolute',
                'left': frog.location.xpos,
                'top': frog.location.ypos,
                'font-size': `${frog.size()}em`,
                'color': frog.color
            })
            $('#frogs-container').append($newFrog)
        }
    }
    const renderFooter = function(frogs, level, play){
        $('#level').empty()
        $('#level').append(`<p>Level ${level}</p>`)
        $('#frogs-left').empty()
        $('#frogs-left').append(`<p>${frogs} Frogs left</p>`)
        if(play){
            $('#start').empty()
            $('#start').css('cursor', 'default')
            $('#start').append(`<p>Catch the frogs!</p>`)
        } else {
            $('#start').empty()
            $('#start').css('cursor', 'pointer')
            $('#start').append(`<p>Start!</p>`)
        }

    }
    return {
        renderHead, renderFrogs, renderLoose, renderFooter
    }
}