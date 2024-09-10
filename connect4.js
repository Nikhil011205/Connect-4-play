val_c1 = 1
val_c2 = 1
val_c3 = 1
val_c4 = 1
val_c5 = 1
val_c6 = 1
val_c7 = 1
turn = 1
function check(player) {
    setTimeout(() => {

        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} WINS!!!`)
                    location.reload()
                }

            }
        }

        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    alert(`${player} WINS!!!`)
                    location.reload()
                }

            }

        }

        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} WINS!!!`)
                    location.reload()
                }

            }
        }

        for (i = 1; i <= 4; i++) {
            for (j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} WINS!!!`)
                    location.reload()
                }

            }
        }
        console.log(val_c1,val_c2,val_c3,val_c4,val_c5,val_c6,val_c7)
        if(val_c1 >= 7 && val_c2 >= 7 && val_c3 >= 7 && val_c4 >= 7 && val_c5 >= 7 && val_c6 >= 7 && val_c7 >= 7){
            alert(`DRAW!!!`)
            location.reload()
        }

    }, 10)

}
document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {
        sum = eval(`val_${e.id}`)
        eval(`val_${e.id}++`)


        if (sum <= 6 && turn % 2 != 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "navy"
            turn++
            check('navy')
            document.getElementById("whosturn").innerText = "Violet's Turn"
            document.getElementById("whosturn").style.color =  "rgba(255,105,180)"
        }
        
        else if (sum <= 6 && turn % 2 == 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "violet"
            turn++
            check('violet')
            document.getElementById("whosturn").innerText = "Blue's turn"
            document.getElementById("whosturn").style.color =  "#1F75FE"
        }
    })
})

